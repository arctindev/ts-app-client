import React from 'react';

export interface SvgFilterProps {
  darkMode: boolean;
}

const LogoSvgFilter = ({ darkMode }: SvgFilterProps) => {
  return (
    <defs>
      <filter
        id="filter0_i"
        x="0.634766"
        y="0.23999"
        width="213.965"
        height="35.384"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        {darkMode ? (
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.229167 0 0 0 0 0.229167 0 0 0 0 0.229167 0 0 0 0.7 0"
          />
        ) : (
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.980392 0 0 0 0 0.980392 0 0 0 0 0.980392 0 0 0 0.7 0"
          />
        )}
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
    </defs>
  );
};

export default LogoSvgFilter;
