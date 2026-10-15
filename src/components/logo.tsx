// The Vexel wordmark: "ve", the x drawn as two strokes (one in the brand
// gradient) and "el". Sized in em, so it follows the parent's font size.
export default function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const ink = tone === "dark" ? "#0b1020" : "#f4f6ff";
  const id = `vexel-x-${tone}`;
  return (
    <span
      className={`inline-flex items-center font-extrabold leading-none ${className}`}
      style={{ color: ink, letterSpacing: "-0.045em" }}
      aria-label="Vexel"
      role="img"
    >
      <span aria-hidden="true">ve</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 56 52"
        style={{ width: "0.72em", height: "0.67em", margin: "0.15em 0.065em 0" }}
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3b5bff" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <path d="M6 6 L50 46" stroke={ink} strokeWidth="11" strokeLinecap="round" />
        <path d="M50 6 L6 46" stroke={`url(#${id})`} strokeWidth="11" strokeLinecap="round" />
      </svg>
      <span aria-hidden="true">el</span>
    </span>
  );
}
