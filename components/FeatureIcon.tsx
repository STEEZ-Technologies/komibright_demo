// The five feature-block icons used across home / about / OEM pages.
export type IconName = "bolt" | "battery" | "wrench" | "shield" | "globe";

const paths: Record<IconName, JSX.Element> = {
  bolt: (
    <>
      <path d="M13 2 4.5 13.5H11L9.5 22 18 10.5h-6.5L13 2z" />
      <line x1="3" y1="3" x2="21" y2="21" />
    </>
  ),
  battery: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="3" />
      <line x1="7" y1="8" x2="17" y2="8" />
      <line x1="7" y1="16" x2="17" y2="16" />
    </>
  ),
  wrench: <path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3 3.7-3.7z" />,
  shield: (
    <>
      <path d="M12 2.5 4.5 5.6v6.1c0 4.6 3.2 8 7.5 9.8 4.3-1.8 7.5-5.2 7.5-9.8V5.6L12 2.5z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9.3" />
      <path d="M2.7 12h18.6M12 2.7c2.6 2.6 3.9 5.8 3.9 9.3s-1.3 6.7-3.9 9.3c-2.6-2.6-3.9-5.8-3.9-9.3S9.4 5.3 12 2.7z" />
    </>
  ),
};

export default function FeatureIcon({ name }: { name: IconName }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
