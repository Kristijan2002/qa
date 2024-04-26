const DuiIcon = () => {
    const svgIcon = `
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="33" height="33" fill="url(#pattern0_54_14052)"/>
    <defs>
    <pattern id="pattern0_54_14052" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_54_14052" transform="translate(-0.00153218) scale(0.000510725)"/>
    </pattern>
    </defs>
    </svg>
     
      `;
  
    return <div dangerouslySetInnerHTML={{ __html: svgIcon }} />;
  };
  
  export default DuiIcon;
  