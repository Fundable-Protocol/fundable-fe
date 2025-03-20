interface GraphIconProps {
  size?: number;
  className?: string;
}

const GraphIcon: React.FC<GraphIconProps> = ({ size = 32, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M6 15l4-4 3 3 5-5" />
  </svg>
);

export default GraphIcon;
