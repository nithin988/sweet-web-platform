type IconProps = { className?: string };

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3.5l2.47 5.24 5.78.66-4.3 4.02 1.15 5.72L12 16.9l-5.1 2.24 1.15-5.72-4.3-4.02 5.78-.66L12 3.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MilkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 2h6v3.2l2.2 3.6c.3.5.5 1.1.5 1.7V20a2 2 0 0 1-2 2H8.3a2 2 0 0 1-2-2V10.5c0-.6.2-1.2.5-1.7L9 5.2V2z" />
      <path d="M6.6 13.5h10.8" />
    </svg>
  );
}

export function JaggeryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="8" width="7" height="7" rx="1.2" />
      <rect x="13" y="9" width="7" height="7" rx="1.2" />
      <path d="M6.5 8V6a1.5 1.5 0 0 1 3 0v2M16 9V7a1.5 1.5 0 0 1 3 0v2" />
    </svg>
  );
}

export function HandsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 11V6a1.5 1.5 0 0 1 3 0v4" />
      <path d="M10 10V4.5a1.5 1.5 0 0 1 3 0V10" />
      <path d="M13 10V5.5a1.5 1.5 0 0 1 3 0V12" />
      <path d="M16 8.5A1.5 1.5 0 0 1 19 9v5c0 3.6-2.7 6.5-6.5 6.5S6 17.6 6 14v-2.3c0-.6.4-1.1.9-1.3.7-.3 1.5.1 1.7.8" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 4c-8 0-14 5-14 13 0 .3 0 .7.1 1C14 18 20 12 20 4z" />
      <path d="M6 18c3-3 7-7 12-12" />
    </svg>
  );
}

export function ScrollIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 4h11a2 2 0 0 1 2 2v13a1.5 1.5 0 0 1-2.6 1L15 19" />
      <path d="M6 4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9" />
      <path d="M8 8h7M8 11.5h7" />
    </svg>
  );
}
