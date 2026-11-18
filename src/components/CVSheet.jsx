/**
 * One A4 sheet of the CV Datenblatt. Each sheet is exactly 210×297 mm so it
 * prints as a single A4 page; the drawing frame, crop ticks and edge
 * coordinates sit on every sheet. `break-after: page` in print CSS.
 */
export default function CVSheet({ pageNo, totalPages, footerLabel, children }) {
  return (
    <div className="cv-sheet">
      <div className="cv-frame" aria-hidden="true">
        <div className="cv-border" />
        <div className="cv-border-inner" />
        <span className="cv-crop cv-crop-tl" />
        <span className="cv-crop cv-crop-tr" />
        <span className="cv-crop cv-crop-bl" />
        <span className="cv-crop cv-crop-br" />
        <span className="cv-coord cv-coord-tl">A</span>
        <span className="cv-coord cv-coord-tr">F</span>
        <span className="cv-coord cv-coord-bl">1</span>
        <span className="cv-coord cv-coord-br">6</span>
      </div>
      <div className="cv-content">{children}</div>
      <div className="cv-footer">
        <span>Heilbronn, 05.11.2026</span>
        <span>
          {footerLabel} {pageNo}/{totalPages}
        </span>
      </div>
    </div>
  );
}
