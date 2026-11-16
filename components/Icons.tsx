export type IconName = "arrow" | "up-right" | "left" | "right" | "down" | "save" | "pin" | "expand" | "close" | "menu" | "check" | "plus" | "phone" | "mail" | "grid" | "bed" | "bath" | "play" | "download";
const paths: Record<IconName, React.ReactNode> = {
  play: <path d="m8 4 12 8-12 8z"/>,
  download: <><path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/></>,
  arrow: <path d="M3.5 12h16M13 5.5l6.5 6.5-6.5 6.5"/>,
  "up-right": <path d="m5 19 14-14M6 5h13v13"/>,
  left: <path d="m14.5 5-7 7 7 7"/>,
  right: <path d="m9.5 5 7 7-7 7"/>,
  down: <path d="M12 3v17m-7-7 7 7 7-7"/>,
  save: <path d="M6 3.5h12v17l-6-4-6 4z"/>,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.3"/></>,
  expand: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5"/>,
  close: <path d="m5 5 14 14M19 5 5 19"/>,
  menu: <path d="M2 8h20M2 16h20"/>,
  check: <path d="m3 12 6 6L21 5"/>,
  plus: <path d="M12 4v16M4 12h16"/>,
  phone: <path d="m5 3 3-1 3 6-2.5 2a15 15 0 0 0 5.5 5.5l2-2.5 6 3-1 3c-.6 2-3 2.2-4.5 1.8-7-2-12-7-14-14C2 5.3 3 3.6 5 3z"/>,
  mail: <><rect x="2.5" y="4.5" width="19" height="15" rx="1"/><path d="m3 6 9 7 9-7"/></>,
  grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
  bed: <><path d="M2 17V7m20 10V9M2 14h20M3 10h7m2-2h7l3 2"/><circle cx="6.5" cy="8.5" r="1.5"/></>,
  bath: <><path d="M2 12h20l-2 6H5l-3-6ZM4 12V6a3 3 0 0 1 6 0M6 19l-1 2m13-2 1 2"/></>,
};
export function Icon({ name, size = 18, className = "" }: { name: IconName; size?: number; className?: string }) {
  return <svg className={"icon " + className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
