export function Arrow({
  direction = "diagonal",
  className = "",
}: {
  direction?: "diagonal" | "down" | "up";
  className?: string;
}) {
  return (
    <svg
      className={`arrow ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{
        transform:
          direction === "down"
            ? "rotate(135deg)"
            : direction === "up"
              ? "rotate(-45deg)"
              : undefined,
      }}
    >
      <path
        d="M5 19 19 5M5 5h14v14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
