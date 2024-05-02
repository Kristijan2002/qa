const LocationIcon = () => {
    const svgIcon = `
    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10.3999C0 4.87705 4.47715 0.399902 10 0.399902H38C43.5229 0.399902 48 4.87705 48 10.3999V38.3999C48 43.9228 43.5228 48.3999 38 48.3999H10C4.47715 48.3999 0 43.9227 0 38.3999V10.3999Z" fill="#0b9444"/>
<path d="M24 24.8999C25.6569 24.8999 27 23.5568 27 21.8999C27 20.243 25.6569 18.8999 24 18.8999C22.3431 18.8999 21 20.243 21 21.8999C21 23.5568 22.3431 24.8999 24 24.8999Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 34.3999C26 30.3999 32 27.8182 32 22.3999C32 17.9816 28.4183 14.3999 24 14.3999C19.5817 14.3999 16 17.9816 16 22.3999C16 27.8182 22 30.3999 24 34.3999Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `;
  
    return <div dangerouslySetInnerHTML={{ __html: svgIcon }} className="mb-8"/>;
  };
  
  export default LocationIcon;
  




