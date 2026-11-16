"use client";
import { useState } from "react";
import type { Estate } from "@/lib/estates";
import { LandPriceManager } from "./LandPriceManager";
import type { LandListing } from "@/lib/land-prices";
import { ListingManager } from "./ListingManager";
import { followupStates, topicTitles, type Topic } from "@/lib/enquiry";

type Enquiry = {
  id: string; reference: string; name: string; email: string; phone: string;
  estateSlug: string; topic: string; preferredDate: string; preferredTime: string;
  message: string; status: string; createdAt: number;
};

function SignOutButton() {
  const [busy, setBusy] = useState(false);
  async function handleLogout() {
    setBusy(true);
    try {
      await fetch("/api/studio/auth/logout", { method: "POST" });
      window.location.href = "/";
    } finally {
      setBusy(false);
    }
  }
  return (
    <button type="button" className="inline-action" onClick={handleLogout} disabled={busy}>
      {busy ? "Signing out…" : "Sign out"}
    </button>
  );
}

function EnquiryRow({ record, estateName }: { record: Enquiry; estateName: string }) {
  const [state, setState] = useState(record.status);
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState("");
  async function change(value: string) {
    setPending(true); setFeedback("");
    try {
      const res = await fetch("/api/studio/requests/" + record.id, {method: "PATCH", headers: {"content-type":"application/json"}, body: JSON.stringify({status:value})});
      if (res.ok) { setState(value); setFeedback("Status saved."); } else setFeedback("Status could not be saved.");
    } catch { setFeedback("The service could not be reached."); } finally { setPending(false); }
  }
  return <article className="studio-card"><div className="inbox-head"><span className="micro">{record.reference}</span><time>{new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeZone: "Africa/Lagos" }).format(record.createdAt)}</time></div>
    <h3>{record.name}</h3><p>{topicTitles[record.topic as Topic]} · {estateName}</p>
    {record.preferredDate && <p>Preferred visit · {record.preferredDate} at {record.preferredTime} WAT</p>}
    <p><a href={"mailto:" + record.email}>{record.email}</a> · <a href={"tel:" + record.phone}>{record.phone}</a></p>
    {record.message && <p className="request-message">{record.message}</p>}
    <label>Follow-up status<select value={state} disabled={pending} onChange={e => change(e.target.value)}>{followupStates.map(s => <option key={s}>{s}</option>)}</select></label><span role="status">{feedback}</span>
  </article>;
}

export function Studio({ estates, prices, records, section, hasMore, page }: { estates: Estate[]; prices: Pick<LandListing,"slug"|"name"|"price">[]; records: Enquiry[]; section: string; hasMore: boolean; page: number }) {
  return <main id="main-content" className="studio shell">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span className="kicker">Owner workspace</span>
      <SignOutButton />
    </div>
    <h1>Site <em>management.</em></h1>
    <nav className="studio-tabs" aria-label="Management sections">
      <a href="/studio" aria-current={section === "inbox" ? "page" : undefined}>Enquiry inbox</a>
      <a href="/studio?view=listings" aria-current={section === "listings" ? "page" : undefined}>Estates</a>
      <a href="/studio?view=prices" aria-current={section === "prices" ? "page" : undefined}>Land prices</a>
    </nav>
    {section === "prices" ? <LandPriceManager items={prices}/> : section === "listings" ? <ListingManager initialEstates={estates}/> :
      <>{records.length ? <div className="editor-grid">{records.map(record => <EnquiryRow key={record.id} record={record} estateName={estates.find(e => e.slug === record.estateSlug)?.name || "General enquiry"}/>)}</div> :
        <p className="studio-empty">No enquiries on this page.</p>}
      <div className="pager">{page > 1 && <a className="inline-link" href={"/studio?page=" + (page-1)}>Newer enquiries</a>}{hasMore && <a className="inline-link" href={"/studio?page=" + (page+1)}>Older enquiries</a>}</div></>}
  </main>;
}
