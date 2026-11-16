"use client";
import { useState, type FormEvent } from "react";
import { landPath, type LandListing } from "@/lib/land-prices";
type Item=Pick<LandListing,"slug"|"name"|"price">;
function PriceEditor({item}:{item:Item}){
  const [pending,setPending]=useState(false), [info,setInfo]=useState("");
  async function save(event:FormEvent<HTMLFormElement>){
    event.preventDefault();if(pending)return;
    const price=Number(new FormData(event.currentTarget).get("price"));
    setPending(true);setInfo("");
    try{const res=await fetch("/api/studio/land-prices/"+item.slug,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({price})});
      const data=await res.json() as { error?: string };setInfo(res.ok?"Land price saved.":data.error||"Price could not be saved.");}
    catch{setInfo("Unable to reach the price service.");}finally{setPending(false);}
  }
  return <form onSubmit={save} className="manage-rate"><div><h3>{item.name}</h3><a className="inline-action" href={landPath(item.slug)}>View price page</a></div>
    <label>Published land price (₦)<input name="price" type="number" defaultValue={item.price} min={1} max={1000000000000} step={1} required/></label>
    <button className="btn btn-ink" disabled={pending}>{pending?"Saving…":"Save price"}</button><small role="status">{info}</small></form>;
}
export function LandPriceManager({items}:{items:Item[]}){
  return <section className="listing-editor"><h2>Published land prices</h2><p className="section-copy">Changes appear on the homepage, in the guide and on each home-type page.</p>{items.map(item=><PriceEditor key={item.slug} item={item}/>)}</section>;
}
