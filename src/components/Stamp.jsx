export default function Stamp({ lines, armed }) {
  return (
    <div
      className={armed ? "stamp stamp-seen" : "stamp"}
      style={{ transform: "rotate(-11deg)" }}
      aria-hidden="true"
    >
      {lines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
}
