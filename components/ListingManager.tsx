"use client";

import { useState, type FormEvent } from "react";
import { photoURL, propertyPath, statuses, type Estate } from "@/lib/estates";
import { availableMedia } from "@/lib/estate-input";
import { Icon } from "./Icons";

type EditorProps = { initial: Estate | null; onSave: (estate: Estate) => void; onCancel: () => void };

function Editor({ initial, onSave, onCancel }: EditorProps) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [galleryCount,setGalleryCount] = useState(initial?.gallery.length || 2);
  const [mirroredSlug, setMirroredSlug] = useState(initial?.slug || "");
  function toSlug(text: string) {
    return text.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0,95);
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const fields = new FormData(event.currentTarget);
    const value = (key: string) => String(fields.get(key) || "").trim();
    const estate: Estate = {
      slug: initial?.slug || mirroredSlug, name: value("name"), shortName: value("shortName") || value("name"),
      district: value("district"), area: value("area"), subtitle: value("subtitle"), overview: value("overview"), status: value("status"),
      features: value("features").split("\n").map(line => line.trim()).filter(Boolean),
      gallery: Array.from({length:galleryCount}, (_,i) => ({image:value("image"+i),alt:value("alt"+i),caption:value("caption"+i)})),
      homeTypes: value("homeTypes").split("\n").map(line=>line.trim()).filter(Boolean),
      offer: value("price") ? {label:value("priceLabel") || "Confirmed land price",price:Number(value("price"))} : undefined
    };
    setPending(true); setError("");
    try {
      const url = initial ? "/api/studio/estates/" + initial.slug : "/api/studio/estates";
      const result = await fetch(url, { method: initial ? "PUT" : "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(estate) });
      const reply = await result.json() as { estate?: Estate; error?: string };
      if (!result.ok || !reply.estate) { setError(reply.error || "The estate could not be saved."); return; }
      onSave(reply.estate);
    } catch { setError("The listing service could not be reached. Your changes are still in this form."); }
    finally { setPending(false); }
  }

  return <section className="listing-editor"><div className="manager-heading"><h2>{initial ? "Edit estate" : "Add an estate"}</h2><button type="button" className="inline-action" onClick={onCancel}>Cancel</button></div>
    <form onSubmit={submit}>
      <fieldset><legend>Estate details</legend>
        <div className="studio-fields"><label>Name<input name="name" required maxLength={90} defaultValue={initial?.name} onChange={event => { if (!initial) setMirroredSlug(toSlug(event.target.value)); }}/></label>
          <label>Short display name<input name="shortName" maxLength={75} defaultValue={initial?.shortName}/></label>
          <label>Page address<input aria-label="Page address" required readOnly={Boolean(initial)} value={mirroredSlug} pattern="[a-z0-9]+(-[a-z0-9]+)*" maxLength={95} onChange={e => setMirroredSlug(e.target.value)}/></label>
          <label>Availability<select name="status" defaultValue={initial?.status || "Availability on request"}>{statuses.map(s => <option key={s}>{s}</option>)}</select></label>
          <label>District<input name="district" required maxLength={60} defaultValue={initial?.district}/></label>
          <label>Location on page<input name="area" required maxLength={100} defaultValue={initial?.area} placeholder="District, Abuja"/></label>
        </div>
        <label>Short description<input name="subtitle" required maxLength={180} defaultValue={initial?.subtitle}/></label>
        <label>Overview<textarea name="overview" rows={4} required maxLength={2600} defaultValue={initial?.overview}/></label>
        <label>Amenities, one per line<textarea name="features" rows={4} required defaultValue={initial?.features.join("\n")}/></label>
      </fieldset>
      <fieldset><legend>Home options</legend>
        <label>Home types, one per line<textarea name="homeTypes" rows={4} required defaultValue={initial?.homeTypes.join("\n")}/></label>
        <p>An estate-specific quote is optional. Use the Land prices tab for portfolio-wide home-type prices.</p>
        <div className="studio-fields"><label>Confirmed estate price in naira<input name="price" type="number" min={1} step={1} max={1000000000000} defaultValue={initial?.offer?.price}/></label>
        <label>Quote description<input name="priceLabel" maxLength={80} defaultValue={initial?.offer?.label || "Confirmed land price"}/></label></div>
      </fieldset>
      <fieldset><legend>Gallery</legend><p>Choose a supplied image or paste a hosted HTTPS image URL. The first image opens the estate page.</p>
        <datalist id="estate-media">{availableMedia.map(name => <option key={name} value={name}/>)}</datalist>
        {Array.from({length:galleryCount},(_,i) => <div className="gallery-editor" key={i}>
          <label>{i === 0 ? "Main image" : "Image " + (i+1)}<input name={"image" + i} list="estate-media" required defaultValue={initial?.gallery[i]?.image} placeholder="Image name or HTTPS URL"/></label>
          <div className="studio-fields"><label>Caption<input required name={"caption" + i} maxLength={100} defaultValue={initial?.gallery[i]?.caption}/></label>
            <label>Image description<input required name={"alt" + i} maxLength={220} defaultValue={initial?.gallery[i]?.alt}/></label></div>
        </div>)}
        <div className="manage-actions">{galleryCount<8&&<button type="button" className="inline-action" onClick={()=>setGalleryCount(n=>n+1)}>Add gallery image</button>}
        {galleryCount>1&&<button type="button" className="inline-action" onClick={()=>setGalleryCount(n=>n-1)}>Remove last image</button>}</div>
      </fieldset>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="btn btn-ink" type="submit" disabled={pending}>{pending ? "Saving…" : initial ? "Save changes" : "Add estate to collection"}<Icon name="check" size={16}/></button>
    </form>
  </section>;
}
export function ListingManager({ initialEstates }: { initialEstates: Estate[] }) {
  const [estates, setEstates] = useState(initialEstates);
  const [editor, setEditor] = useState<Estate | null | undefined>(undefined);
  const [feedback, setFeedback] = useState("");
  if (editor !== undefined) return <Editor initial={editor} onCancel={() => setEditor(undefined)} onSave={estate => {
    setEstates(items => items.some(item => item.slug === estate.slug) ? items.map(item => item.slug === estate.slug ? estate : item) : [...items, estate]);
    setEditor(undefined);
    setFeedback(estate.name + " is now updated in the property collection.");
  }}/>;
  return <><div className="manager-heading"><h2>Property listings</h2><button type="button" className="btn btn-ink" onClick={() => { setFeedback(""); setEditor(null); }}>Add an estate <Icon name="plus" size={16}/></button></div>
    <p role="status" className="manager-feedback">{feedback}</p>
    <div className="manage-list">{estates.map(estate => <article key={estate.slug}>
      <img alt="" src={photoURL(estate.gallery[0].image)} width="88" height="66" loading="lazy"/>
      <div><h3>{estate.name}</h3><p>{estate.district} · {estate.status}</p></div>
      <div className="manage-actions"><a className="inline-action" href={propertyPath(estate.slug)}>View page</a><button type="button" className="inline-action" onClick={() => { setFeedback(""); setEditor(estate); }}>Edit estate</button></div>
    </article>)}</div></>;
}
