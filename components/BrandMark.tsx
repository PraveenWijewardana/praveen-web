export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="14" fill="#0a0a0a" />
      <path
        d="M26 14c-5.5 0-9 3.2-9 8.2v5.1c0 2.4-1.2 3.9-3.4 4.7 2.2.8 3.4 2.3 3.4 4.7v5.1c0 5 3.5 8.2 9 8.2"
        stroke="#ffffff"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 14c5.5 0 9 3.2 9 8.2v5.1c0 2.4 1.2 3.9 3.4 4.7-2.2.8-3.4 2.3-3.4 4.7v5.1c0 5-3.5 8.2-9 8.2"
        stroke="#ffffff"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="3.5" fill="#ff2a2a" />
    </svg>
  );
}
