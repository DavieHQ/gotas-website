import { photoURL } from "@/lib/estates";
const widths: Record<string,number> = {
  "terrace":3840, "detached-front":960, "detached-angle":960, "penthouse-angle":960, "penthouse-front":960,
  "semi-detached":1280,"building-exterior":2000,"peter-ibeneme":750,
  "ecocity":1170,"ecocity-interior":1170,"kingsland":1170,"kingsland-other":1000,"kings-garden":1153,"aurora":1170,"peter":731
};
export function Photo({image,alt,priority=false,sizes="100vw",className=""}: {
  image:string; alt:string; priority?:boolean; sizes?:string; className?:string;
}) {
  const source=photoURL(image), width=widths[image];
  const medium=image==="terrace" ? "/media/terrace-medium.webp 1440w, " : "";
  return <img className={"photo "+className} src={source} alt={alt}
    srcSet={width ? "/media/"+image+"-small.webp 720w, "+medium+source+" "+width+"w" : undefined}
    sizes={width ? sizes : undefined} loading={priority?"eager":"lazy"} fetchPriority={priority?"high":undefined} decoding="async"/>;
}
