export default function SvgCircle() {
  return (
    <svg className="absolute animate-pulse" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800" opacity="1"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feGaussianBlur stdDeviation="28" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="78.5" ry="81" cx="399.89749664116744" cy="406.3210923928499" fill="#735084ff"></ellipse></g></svg>
  );
}