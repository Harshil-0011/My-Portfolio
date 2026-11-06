import { useEffect, useId, useRef } from "react";

const FOCUSABLE = "a[href], button:not([disabled]), input, select, textarea, [tabindex]";
const OVERLAY_PAD = "grid min-h-full w-full place-items-center px-4 py-6 pb-[4.25rem] md:px-10 md:pt-9 md:pb-[5.5rem]";

/**
 * A smaller sheet lifted above the drawing: backdrop shows the main sheet,
 * the popout's bottom edge sits above the frame's bottom line (larger
 * bottom padding in OVERLAY_PAD), so the record reads as content changing
 * inside the drawing frame.
 */
export default function RecordSheet({ tag, title, children, closeLabel, onClose }) {
  const headingId = useId();
  const panelRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const panel = panelRef.current;
    const previous = document.activeElement;
    const focusables = panel.querySelectorAll(FOCUSABLE);
    (focusables[0] || panel).focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab") return;
      const items = [...panel.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
      if (previous && typeof previous.focus === "function") previous.focus();
    };
  }, []);

  const backdropDown = (e) => {
    if (!panelRef.current || !panelRef.current.contains(e.target)) onCloseRef.current();
  };

  return (
    <div className="sheet-fade fixed inset-0 z-50 overflow-y-auto bg-paper/70 backdrop-blur-[1.5px]" onMouseDown={backdropDown}>
      <div className={OVERLAY_PAD}>
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={headingId}
          tabIndex={-1}
          className="sheet-frame flex max-h-[calc(100dvh-7rem)] w-full max-w-3xl flex-col outline-none md:max-h-[calc(100dvh-10rem)]"
        >
          <div className="flex items-center justify-between gap-4 bg-ink px-4 py-2.5 md:px-5">
            <p className="min-w-0 truncate font-mono text-[10px] uppercase tracking-[0.28em] text-paper/80">
              {tag}
            </p>
            <button
              type="button"
              onClick={() => onCloseRef.current()}
              aria-label={closeLabel}
              className="close-kick inline-flex h-7 w-7 flex-none items-center justify-center border border-paper/60 font-mono text-[0.95rem] leading-none text-paper"
            >
              ×
            </button>
          </div>
          <h3 className="px-4 pt-4 font-cond text-[1.45rem] md:px-6 md:text-[1.75rem] font-bold uppercase leading-tight text-ink">
            {title}
          </h3>
          <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-6 pt-3.5 md:px-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
