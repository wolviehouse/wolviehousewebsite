export function WolvieMark({ light = false }: { light?: boolean }) {
  const main = light ? "#E6E0D5" : "#111111";
  return (
    <svg
      className="wolvieMark"
      viewBox="0 0 180 150"
      role="img"
      aria-label="Wolvie monogram"
    >
      {/* Two identical geometric strokes forming an abstract W */}
      <polygon points="49,20 89,20 65,134 25,134" fill={main} />
      <polygon points="115,20 155,20 131,134 91,134" fill={main} />
      {/* Small inverted orange wedge, above and right of the second stroke */}
      <polygon points="138,3 158,3 148,17" fill="#FF5A2F" />
    </svg>
  );
}
