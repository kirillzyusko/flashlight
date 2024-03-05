import React from "react";

export const FlutterLogo = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    id="logo_vector"
    data-name="logo vector"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 371.43"
  >
    <defs>
      <style>{`.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{isolation:isolate;opacity:0.2;}.cls-4{fill:#54c5f8;}.cls-5{fill:#01579b;}.cls-6{fill:url(#linear-gradient);}.cls-7{fill:#29b6f6;}.cls-8{fill:url(#radial-gradient);}`}</style>
      <clipPath id="clip-path">
        <path
          className="cls-1"
          d="M300,171.43l-100,100,100,100H185.72l-42.86-42.86h0L85.71,271.42l100-100ZM185.72,0,0,185.72l57.15,57.15L300,0Z"
        />
      </clipPath>
      <linearGradient
        id="linear-gradient"
        x1="6254.1"
        y1="5576.56"
        x2="6424.34"
        y2="5406.31"
        gradientTransform="translate(-1404 -1054.53) scale(0.25)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#1a237e" stop-opacity="0.4" />
        <stop offset="1" stop-color="#1a237e" stop-opacity="0" />
      </linearGradient>
      <radialGradient
        id="radial-gradient"
        cx="5649.77"
        cy="4319.41"
        r="1817.72"
        gradientTransform="translate(-1404 -1054.53) scale(0.25)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fff" stop-opacity="0.1" />
        <stop offset="1" stop-color="#fff" stop-opacity="0" />
      </radialGradient>
    </defs>
    <g className="cls-2">
      <image
        className="cls-3"
        width="125"
        height="97"
        transform="translate(67.54 154.53) scale(2.14)"
        xlinkHref="data:image/png;base64,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"
      />
      <polygon
        className="cls-4"
        points="300 171.43 300 171.43 300 171.43 185.72 171.43 85.73 271.44 142.85 328.57 300 171.43"
      />
    </g>
    <g className="cls-2">
      <polygon className="cls-4" points="57.15 242.87 0 185.72 185.72 0 300 0 57.15 242.87" />
    </g>
    <g className="cls-2">
      <polygon
        className="cls-5"
        points="142.85 328.57 185.72 371.44 300 371.44 300 371.44 200.01 271.44 142.85 328.57"
      />
    </g>
    <g className="cls-2">
      <polygon className="cls-6" points="142.85 328.57 227.61 299.24 200.01 271.44 142.85 328.57" />
    </g>
    <g className="cls-2">
      <rect
        className="cls-7"
        x="102.45"
        y="231.03"
        width="80.81"
        height="80.81"
        transform="translate(-150.09 180.52) rotate(-45)"
      />
    </g>
    <path
      className="cls-8"
      d="M300,171.43l-100,100,100,100H185.72l-42.86-42.86h0L85.71,271.42l100-100ZM185.72,0,0,185.72l57.15,57.15L300,0Z"
    />
  </svg>
);
