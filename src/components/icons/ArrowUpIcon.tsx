const ArrowUpIcon = () => {
    const svgIcon = `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
      `;
  
    return <div dangerouslySetInnerHTML={{ __html: svgIcon }} className="w-6"/>;
  };
  
  export default ArrowUpIcon;
  




