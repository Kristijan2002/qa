const NoAnswerIcon = () => {
    const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 14 14" fill="none">
    <g clip-path="url(#clip0_1222_34366)">
      <path d="M7.57812 9.75098C9.37305 9.75098 10.8281 8.2959 10.8281 6.50098C10.8281 4.70605 9.37305 3.25098 7.57812 3.25098C5.78321 3.25098 4.32812 4.70605 4.32812 6.50098C4.32812 8.2959 5.78321 9.75098 7.57812 9.75098Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.8782 8.80093L5.2782 4.20093" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.5 12.5L0.5 13.5L1.5 10.5V1.5C1.5 1.23478 1.60536 0.98043 1.79289 0.792893C1.98043 0.605357 2.23478 0.5 2.5 0.5H12.5C12.7652 0.5 13.0196 0.605357 13.2071 0.792893C13.3946 0.98043 13.5 1.23478 13.5 1.5V11.5C13.5 11.7652 13.3946 12.0196 13.2071 12.2071C13.0196 12.3946 12.7652 12.5 12.5 12.5H4.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_1222_34366">
        <rect width="14" height="14" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  
      `;
  
    return <div dangerouslySetInnerHTML={{ __html: svgIcon }} />;
  };
  
  export default NoAnswerIcon;
  








