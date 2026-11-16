"use client";
import { useId, useRef, useState, type FormEvent } from "react";
import { lagosDate, topicTitles, type Topic } from "@/lib/enquiry";
import { siteEmail, sitePhone } from "@/lib/estates";
import { Icon } from "./Icons";

export function EnquiryForm({ initialEstate, initialTopic, initialMessage = "", options }: { initialEstate: string; initialTopic: Topic; initialMessage?: string; options: {slug: string; name: string}[] }) {
  const [topic, setTopic] = useState(initialTopic);
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [reference, setReference] = useState("");
  const key = useRef("");
  const formId = useId();
  const response = useRef<HTMLDivElement>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    if (!key.current) key.current = crypto.randomUUID();
    setBusy(true); setFeedback("");
    try {
      const result = await fetch("/api/inspections", { method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, topic, preferredDate: values.preferredDate || "", preferredTime: values.preferredTime || "", submissionKey: key.current }) });
      const reply = await result.json() as { error?: string; reference?: string; fields?: Record<string,string[]> };
      if (!result.ok || !reply.reference) {
        const dateError = reply.fields?.preferredDate?.[0] || reply.fields?.preferredTime?.[0];
        setFeedback(dateError || reply.error || "We could not record your enquiry. Please try again.");
        return;
      }
      setReference(reply.reference);
      requestAnimationFrame(() => response.current?.focus());
    } catch { setFeedback("We could not reach the booking service. Please try again or contact Gotas directly."); }
    finally { setBusy(false); }
  }
  if (reference) return <div className="form-card form-receipt" tabIndex={-1} ref={response} role="status">
    <span className="receipt-check"><Icon name="check" size={27}/></span>
    <h2>Request <em>received.</em></h2>
    <p>{topic === "inspection" ? "Your preferred visit has been recorded. The team will need to confirm the appointment with you." : "Your enquiry has been recorded for the Gotas team."}</p>
    <div className="reference-box"><span>Your reference</span><strong>{reference}</strong></div>
    <div className="receipt-links"><a href={"tel:" + sitePhone} className="inline-link">Call Gotas <Icon name="phone" size={14}/></a><a className="inline-link" href={"/properties"}>Back to properties <Icon name="arrow" size={14}/></a></div>
  </div>;
  return <div className="form-card" id="inspection">
    <div className="form-card-top"><span className="kicker">Contact the team</span><Icon name="up-right" size={21}/></div>
    <h2>{topic === "inspection" ? <>Arrange an <em>inspection.</em></> : topic === "application" ? <>Application <em>enquiry.</em></> : <>Property <em>enquiry.</em></>}</h2>
    <form onSubmit={submit}>
      <label htmlFor={formId + "-topic"}>How can we help?</label>
      <select id={formId + "-topic"} value={topic} onChange={e => { setTopic(e.target.value as Topic); setFeedback(""); }}>{Object.entries(topicTitles).map(([v,l]) => <option value={v} key={v}>{l}</option>)}</select>
      <div className="form-row">
        <label>Full name<input name="name" required autoComplete="name" minLength={2} maxLength={100} placeholder="Your full name"/></label>
        <label>Email address<input name="email" type="email" required maxLength={200} autoComplete="email" placeholder="you@example.com"/></label>
      </div>
      <div className="form-row">
        <label>Phone number<input name="phone" type="tel" required autoComplete="tel" minLength={7} maxLength={30} placeholder="+234"/></label>
        <label>Estate<select name="estateSlug" defaultValue={initialEstate}><option value="general">Help me choose</option>{options.map(e => <option key={e.slug} value={e.slug}>{e.name}</option>)}</select></label>
      </div>
      {topic === "inspection" && <><div className="form-row">
        <label>Preferred date<input type="date" name="preferredDate" min={lagosDate()} required/></label>
        <label>Preferred time<input type="time" name="preferredTime" required/></label>
      </div><p className="form-hint">Visit times are in Abuja local time (WAT).</p></>}
      <label>Message <span className="optional">(optional)</span><textarea defaultValue={initialMessage} name="message" maxLength={1800} rows={3} placeholder="What would you like to know?"/></label>
      {feedback && <p role="alert" className="form-error">{feedback} <a href={"mailto:" + siteEmail}>Email Gotas</a></p>}
      <button type="submit" disabled={busy} className="btn btn-ink send-button">{busy ? "Submitting…" : topic === "inspection" ? "Request inspection" : "Send request"}<Icon name="arrow" size={17}/></button>
    </form>
  </div>;
}
