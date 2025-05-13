const MovieBanner = ({ className = "" }: { className?: string }) => (
  <svg
    className={`w-16 h-16 text-indigo-600 ${className}`}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Film strip base */}
    <rect
      x="4"
      y="4"
      width="56"
      height="56"
      rx="4"
      className="fill-current opacity-10"
    />

    {/* Film strip perforations */}
    <rect x="8" y="12" width="4" height="4" rx="1" className="fill-current" />
    <rect x="8" y="24" width="4" height="4" rx="1" className="fill-current" />
    <rect x="8" y="36" width="4" height="4" rx="1" className="fill-current" />
    <rect x="8" y="48" width="4" height="4" rx="1" className="fill-current" />

    <rect x="52" y="12" width="4" height="4" rx="1" className="fill-current" />
    <rect x="52" y="24" width="4" height="4" rx="1" className="fill-current" />
    <rect x="52" y="36" width="4" height="4" rx="1" className="fill-current" />
    <rect x="52" y="48" width="4" height="4" rx="1" className="fill-current" />

    {/* Play button triangle */}
    <path d="M26 22L42 32L26 42V22Z" className="fill-current" />

    {/* Optional subtle shine effect */}
    <path d="M26 22L34 26L26 30V22Z" className="fill-white opacity-30" />
  </svg>
);

export default MovieBanner;
