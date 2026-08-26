/**
 * Conjunto de ícones do Lúmen (sprite SVG entregue pelo Claude Design).
 * <IconSprite/> é montado uma vez em <App/>; <Icon name="i-flame"/> referencia.
 */
export type IconName =
  | "i-flame" | "i-gem" | "i-heart" | "i-xp" | "i-home" | "i-medal" | "i-shop"
  | "i-lamp" | "i-check" | "i-arrow" | "i-lock" | "i-star" | "i-book" | "i-trophy"
  | "i-lamplight" | "i-word" | "i-breath" | "i-feather" | "i-pray" | "i-candle"
  | "i-hourglass" | "i-sparkle" | "i-infinity" | "i-journal" | "i-clock" | "i-bell"
  | "i-target" | "i-cross" | "i-sunrise" | "i-temple" | "i-anchor" | "i-dove"
  | "i-audio" | "i-moon" | "i-reset" | "i-x";

export function Icon({ name, style }: { name: IconName; style?: React.CSSProperties }) {
  return (
    <svg className="ic" viewBox="0 0 24 24" style={style} aria-hidden="true">
      <use href={"#" + name} />
    </svg>
  );
}

export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute", overflow: "hidden" }} aria-hidden="true">
      <symbol id="i-flame" viewBox="0 0 24 24"><path d="M12 3.2c.6 3.1 3.6 4.6 3.6 8.1a4.6 4.6 0 0 1-9.2 0c0-2.3 1.3-3.5 2.5-4.9.5.9 1.1 1.4 1.9 1.6.4-2 .2-3.4 1.2-4.8z"/><path d="M12 19.4a2.5 2.5 0 0 1-1.6-2.4c0-1.4 1.6-2 1.6-3.4 0 1.4 1.6 2 1.6 3.4a2.5 2.5 0 0 1-1.6 2.4z"/></symbol>
      <symbol id="i-gem" viewBox="0 0 24 24"><path d="M8 4h8l4 5.2-8 10.6L4 9.2z"/><path d="M4 9.2h16"/><path d="M8 4l1.6 5.2L12 19.8l2.4-10.6L16 4"/></symbol>
      <symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 19.6C8.4 17.2 4.6 14.3 4.6 10.8A3.9 3.9 0 0 1 12 8.6a3.9 3.9 0 0 1 7.4 2.2c0 3.5-3.8 6.4-7.4 8.8z"/></symbol>
      <symbol id="i-xp" viewBox="0 0 24 24"><path d="M13.4 3L6.6 12.6h4.2L10 21l7.2-9.9h-4.4z"/></symbol>
      <symbol id="i-home" viewBox="0 0 24 24"><path d="M4 10.8L12 4l8 6.8"/><path d="M6 10.6V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8.4"/><path d="M9.8 20v-5.2h4.4V20"/></symbol>
      <symbol id="i-medal" viewBox="0 0 24 24"><path d="M8.6 3h6.8l-1.4 5.4h-4z"/><circle cx="12" cy="14.4" r="5.2"/><path d="M12 11.6l1 2.1 2.3.3-1.7 1.6.5 2.3-2.1-1.2-2.1 1.2.5-2.3-1.7-1.6 2.3-.3z"/></symbol>
      <symbol id="i-shop" viewBox="0 0 24 24"><path d="M4.4 9.4L6.4 4.6h11.2l2 4.8z"/><path d="M5.6 9.6V19a.8.8 0 0 0 .8.8h11.2a.8.8 0 0 0 .8-.8V9.6"/><path d="M9.6 19.8v-5.4h4.8v5.4"/></symbol>
      <symbol id="i-lamp" viewBox="0 0 24 24"><path d="M12 3.6c1.2 1.6 2.2 2.3 2.2 3.8A2.2 2.2 0 0 1 12 9.6a2.2 2.2 0 0 1-2.2-2.2c0-1.5 1-2.2 2.2-3.8z"/><path d="M8.4 12.6h7.2l1.2 7.4H7.2z"/><path d="M9.6 12.6l.6-2.2h3.6l.6 2.2"/></symbol>
      <symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.6l4.6 4.6L19 6.6"/></symbol>
      <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h13"/><path d="M13 7l5 5-5 5"/></symbol>
      <symbol id="i-lock" viewBox="0 0 24 24"><rect x="5.2" y="10.6" width="13.6" height="9.2" rx="2.2"/><path d="M8.6 10.6V8.2a3.4 3.4 0 0 1 6.8 0v2.4"/><path d="M12 14.2v2.4"/></symbol>
      <symbol id="i-star" viewBox="0 0 24 24"><path d="M12 3.6l2.4 5.2 5.6.7-4.1 3.9 1.1 5.6-5-2.8-5 2.8 1.1-5.6L4 9.5l5.6-.7z"/></symbol>
      <symbol id="i-book" viewBox="0 0 24 24"><path d="M4 5.6c2.8-1.4 5.2-1.2 8 .8 2.8-2 5.2-2.2 8-.8v12.2c-2.8-1.4-5.2-1.2-8 .8-2.8-2-5.2-2.2-8-.8z"/><path d="M12 6.4v12.2"/></symbol>
      <symbol id="i-trophy" viewBox="0 0 24 24"><path d="M8 4h8v4.2a4 4 0 0 1-8 0z"/><path d="M8 5.6H5.4a3 3 0 0 0 3 3.4M16 5.6h2.6a3 3 0 0 1-3 3.4"/><path d="M12 12.2v3.6M8.6 20h6.8"/></symbol>
      <symbol id="i-lamplight" viewBox="0 0 24 24"><path d="M12 6.4c1 1.3 1.8 1.9 1.8 3.1A1.8 1.8 0 0 1 12 11.3a1.8 1.8 0 0 1-1.8-1.8c0-1.2.8-1.8 1.8-3.1z"/><path d="M8.8 13.4h6.4l1 6.4H7.8z"/><path d="M4.6 8.6l1.6.8M19.4 8.6l-1.6.8M12 2.6v1.8M6.4 4.4l1.2 1.4M17.6 4.4l-1.2 1.4"/></symbol>
      <symbol id="i-word" viewBox="0 0 24 24"><path d="M4.4 6c2.4-1.2 5-1 7.6.8 2.6-1.8 5.2-2 7.6-.8v11.4c-2.4-1.2-5-1-7.6.8-2.6-1.8-5.2-2-7.6-.8z"/><path d="M7.6 9.4h2.8M13.6 9.4h2.8M7.6 12.6h2.4M14 12.6h2.4"/></symbol>
      <symbol id="i-breath" viewBox="0 0 24 24"><path d="M12 8c.4 1.9 2.2 2.8 2.2 4.9a2.9 2.9 0 0 1-5.8 0c0-1.4.8-2.1 1.5-3 .3.6.7.9 1.2 1 .2-1.2.1-2.1.9-2.9z"/><path d="M5 9.4c-.9-1.8-.9-3.8 0-5.6M19 9.4c.9-1.8.9-3.8 0-5.6M7.9 8.2c-.5-1-.5-2.2 0-3.2M16.1 8.2c.5-1 .5-2.2 0-3.2"/><path d="M6.6 19.6h10.8"/></symbol>
      <symbol id="i-feather" viewBox="0 0 24 24"><path d="M19.2 4.2C10.6 5 6.6 10.2 5.8 18.6"/><path d="M19.2 4.2c1 6.8-3 12.2-10.4 13.2l-3 .6"/><path d="M11.8 11.6h4.4M9.2 15h4"/></symbol>
      <symbol id="i-pray" viewBox="0 0 24 24"><path d="M12 3.6c-2.2 2.4-4 5.4-4 8.6v4.4c0 1.4 1 2.4 2.4 2.4H12"/><path d="M12 3.6c2.2 2.4 4 5.4 4 8.6v4.4c0 1.4-1 2.4-2.4 2.4H12"/><path d="M12 3.6V19"/></symbol>
      <symbol id="i-candle" viewBox="0 0 24 24"><path d="M12 4.6c.6 1.2 1.6 1.7 1.6 3a1.6 1.6 0 0 1-3.2 0c0-1.3 1-1.8 1.6-3z"/><path d="M12 9.6v1.6"/><rect x="8.6" y="11.2" width="6.8" height="8.6" rx="1.4"/></symbol>
      <symbol id="i-hourglass" viewBox="0 0 24 24"><path d="M6.6 4h10.8M6.6 20h10.8"/><path d="M8 4c0 4 4 4.4 4 8 0-3.6 4-4 4-8"/><path d="M8 20c0-4 4-4.4 4-8 0 3.6 4 4 4 8"/></symbol>
      <symbol id="i-sparkle" viewBox="0 0 24 24"><path d="M10 3.6l1.8 4.6 4.6 1.8-4.6 1.8L10 16.4l-1.8-4.6L3.6 10l4.6-1.8z"/><path d="M17.4 14.4l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z"/></symbol>
      <symbol id="i-infinity" viewBox="0 0 24 24"><path d="M3.6 12c0-1.9 1.3-3.2 3-3.2 2.5 0 3.7 6.4 6.2 6.4 1.7 0 3-1.3 3-3.2s-1.3-3.2-3-3.2c-2.5 0-3.7 6.4-6.2 6.4-1.7 0-3-1.3-3-3.2z"/></symbol>
      <symbol id="i-journal" viewBox="0 0 24 24"><path d="M6.4 3.6h11a1 1 0 0 1 1 1v15.8H6.4z"/><path d="M6.4 6.6H4.6M6.4 10.4H4.6M6.4 14.2H4.6"/><path d="M9.6 8h5.6M9.6 11.4h5.6M9.6 14.8h3.4"/></symbol>
      <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.2"/><path d="M12 7.4V12l3.2 2"/></symbol>
      <symbol id="i-bell" viewBox="0 0 24 24"><path d="M6.6 17h10.8a5.4 5.4 0 0 1-1.8-3.9v-2.5a3.6 3.6 0 0 0-7.2 0v2.5A5.4 5.4 0 0 1 6.6 17z"/><path d="M10.2 19.4a2.2 2.2 0 0 0 3.6 0M12 5.6V4"/></symbol>
      <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="4.6"/><circle cx="12" cy="12" r="1.1"/></symbol>
      <symbol id="i-cross" viewBox="0 0 24 24"><path d="M12 3.4v17.2M6.4 8.6h11.2"/></symbol>
      <symbol id="i-sunrise" viewBox="0 0 24 24"><path d="M7 15.4a5 5 0 0 1 10 0"/><path d="M3.4 15.4h2.2M18.4 15.4h2.2M12 5.6v2M6.2 8l1.5 1.5M17.8 8l-1.5 1.5"/><path d="M4.6 19.4h14.8"/></symbol>
      <symbol id="i-temple" viewBox="0 0 24 24"><path d="M4 8.6L12 4l8 4.6"/><path d="M6.6 9.4v6.6M12 9.4v6.6M17.4 9.4v6.6"/><path d="M4.6 16.4h14.8M4 19.6h16"/></symbol>
      <symbol id="i-anchor" viewBox="0 0 24 24"><circle cx="12" cy="5.6" r="2"/><path d="M12 7.6v12M8.4 10.4h7.2"/><path d="M4.6 13.4c0 4 3.3 6.4 7.4 6.4s7.4-2.4 7.4-6.4"/></symbol>
      <symbol id="i-dove" viewBox="0 0 24 24"><path d="M4.4 12.6c4.2 1.2 7.4-.8 9.4-5.2 1 2.8 3 4 6 3.8-.8 4.4-4 7-8.2 7-3.2 0-5.6-2-7.2-5.6z"/><path d="M13.8 7.4l3-2.4M16.6 11.2c1.6 1 2.4 2.4 2.6 4.2"/></symbol>
      <symbol id="i-audio" viewBox="0 0 24 24"><path d="M4.6 9.6h3.2L12 6.4v11.2l-4.2-3.2H4.6z"/><path d="M15.4 9c1.4 1.8 1.4 4.2 0 6M18 6.8c2.2 3 2.2 7.4 0 10.4"/></symbol>
      <symbol id="i-moon" viewBox="0 0 24 24"><path d="M20 14.4A8 8 0 0 1 9.6 4 8 8 0 1 0 20 14.4z"/></symbol>
      <symbol id="i-reset" viewBox="0 0 24 24"><path d="M4.5 12a7.5 7.5 0 1 1 2.2 5.3"/><path d="M4.5 8v4h4"/></symbol>
      <symbol id="i-x" viewBox="0 0 24 24"><path d="M7 7l10 10M17 7L7 17"/></symbol>
    </svg>
  );
}
