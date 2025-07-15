export const RepliLogo = ({ size = 40, strokeWidth = 1 }) => {
  return (
    <svg
      viewBox="0 0 50 60"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <g transform="translate(25, 35)">
        <path
          d="M0,-35 L-25,25 L-8,25 L-5,15 L5,15 L8,25 L25,25 Z"
          fill="black"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <rect x="-12" y="5" width="24" height="8" fill="white" />
      </g>
    </svg>
  );
};

export const RepliDarkLogo = ({ size = 40, strokeWidth = 1 }) => {
  return (
    <svg
      viewBox="0 0 100 110"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <rect x="0" y="0" width="100" height="110" rx="20" ry="20" fill="black" />
      <g transform="translate(50, 55)">
        <path
          d="M0,-35 L-25,25 L-8,25 L-5,15 L5,15 L8,25 L25,25 Z"
          fill="white"
          stroke="white"
          strokeWidth={strokeWidth}
        />
        <rect x="-12" y="5" width="24" height="9" fill="black" />
      </g>
    </svg>
  );
};

export const XLogo = () => {
  return (
    <svg
      className="w-5 h-5 inline-block text-black hover:text-gray-700 transition-colors duration-200 ease-in-out"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
};
