const NextIcon = () => {
    const svgIcon = `
    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.4998 35.3334L35.3332 26.5001M35.3332 26.5001L26.4998 17.6667M35.3332 26.5001H17.6665M48.5832 26.5001C48.5832 38.6964 38.6961 48.5834 26.4998 48.5834C14.3035 48.5834 4.4165 38.6964 4.4165 26.5001C4.4165 14.3038 14.3035 4.41675 26.4998 4.41675C38.6961 4.41675 48.5832 14.3038 48.5832 26.5001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    
      `;
  
    return <div dangerouslySetInnerHTML={{ __html: svgIcon }} />;
  };
  
  export default NextIcon;
  