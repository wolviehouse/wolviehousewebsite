
export default function Monogram({ light = false, className = "" }) {
  const fill = light ? "#D9D2C5" : "#111111";
  return (
    <svg
      className={`monogram ${className}`}
      viewBox="0 0 300 200"
      role="img"
      aria-label="Wolvie monogram"
    >
      <polygon points="28,38 82,38 142,150 111,183" fill={fill} />
      <polygon points="105,38 159,38 219,150 188,183" fill={fill} />
      <polygon points="218,38 264,38 238,90" fill="#FF5A2F" />
    </svg>
  );
}
