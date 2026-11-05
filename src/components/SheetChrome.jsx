const LETTERS = ["A", "B", "C", "D", "E", "F"];
const NUMBERS = ["1", "2", "3", "4", "5", "6"];

function Crops() {
  return (
    <>
      <div className="crop crop-tl" />
      <div className="crop crop-tr" />
      <div className="crop crop-bl" />
      <div className="crop crop-br" />
    </>
  );
}

export default function SheetChrome() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      {/* Column letters along the top and bottom edges */}
      <div className="hidden md:block" aria-hidden="true">
        {LETTERS.map((l, i) => (
          <span
            key={`t-${l}`}
            className="coord"
            style={{ top: "1.5px", left: `${(i / 6) * 100 + 100 / 12}%`, transform: "translateX(-50%)" }}
          >
            {l}
          </span>
        ))}
        {LETTERS.map((l, i) => (
          <span
            key={`b-${l}`}
            className="coord"
            style={{ bottom: "1.5px", left: `${(i / 6) * 100 + 100 / 12}%`, transform: "translateX(-50%)" }}
          >
            {l}
          </span>
        ))}
        {NUMBERS.map((n, i) => (
          <span
            key={`l-${n}`}
            className="coord"
            style={{ left: "1.5px", top: `${(i / 6) * 100 + 100 / 12}%`, transform: "translateY(-50%)" }}
          >
            {n}
          </span>
        ))}
        {NUMBERS.map((n, i) => (
          <span
            key={`r-${n}`}
            className="coord"
            style={{ right: "1.5px", top: `${(i / 6) * 100 + 100 / 12}%`, transform: "translateY(-50%)" }}
          >
            {n}
          </span>
        ))}
      </div>
      <div className="chrome" aria-hidden="true">
        <div className="chrome-border" />
        <Crops />
      </div>
    </>
  );
}
