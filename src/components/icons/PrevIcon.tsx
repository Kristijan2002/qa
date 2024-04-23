const PrevIcon = () => {
    const svgIcon = `
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6896 17.9518L17.9521 26.88M17.9521 26.88L26.8803 35.6174M17.9521 26.88L35.6178 26.6892M4.70291 27.0231C4.5712 14.8275 14.3509 4.83426 26.5465 4.70255C38.7421 4.57085 48.7353 14.3506 48.867 26.5461C48.9987 38.7417 39.219 48.7349 27.0234 48.8666C14.8278 48.9983 4.83461 39.2186 4.70291 27.0231Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>          
      `;
  
    return <div dangerouslySetInnerHTML={{ __html: svgIcon }} />;
  };
  
  export default PrevIcon;
  