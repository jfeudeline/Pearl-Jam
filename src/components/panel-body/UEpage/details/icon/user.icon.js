import React from 'react';

const Icon = ({ width = 125, height = 145, color = '#000000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={width} viewBox="-0.5 -0.5 125 145">
    <defs />
    <g>
      <path
        d="M 61.86 66.84 C 43.68 66.84 26.69 55.12 26.69 36.92 L 26.73 30.48 C 26.73 15.79 42.13 2 61.98 2 C 81.23 2 96.95 14.99 96.95 31.18 L 96.95 37.56 C 96.95 53.02 82.34 66.84 61.86 66.84 Z M 122 142 L 99.06 142 L 99.06 115.92 L 95.21 115.92 L 95.21 142 L 29.71 142 L 29.71 115.92 L 25.82 115.92 L 25.82 142 L 2 142 L 2 98.06 C 2 80.5 19.9 68.84 41.66 68.84 L 82.74 68.84 C 103.03 68.84 122 79.93 122 98.33 Z"
        fill={color}
        stroke="none"
        pointerEvents="all"
      />
      <path
        d="M 25.82 142 L 2 142 L 2 135.72 L 25.82 135.72 Z M 29.71 115.92 L 25.82 115.92 L 25.82 109.68 L 29.71 109.68 Z M 95.21 142 L 29.71 142 L 29.71 135.72 L 95.21 135.72 Z M 99.06 115.92 L 95.21 115.92 L 95.21 109.68 L 99.06 109.68 Z M 122 142 L 99.06 142 L 99.06 135.72 L 122 135.72 Z M 61.86 66.84 C 43.72 66.84 26.69 55.09 26.69 36.92 L 26.73 31.05 C 26.73 49.91 45.39 60.6 61.9 60.6 C 81.43 60.6 96.95 47.38 96.95 31.18 L 96.95 37.56 C 96.95 52.92 82.42 66.84 61.86 66.84 Z"
        fill={color}
        stroke="none"
        pointerEvents="all"
      />
    </g>
  </svg>
);
export default Icon;