import React from 'react';


interface Props{
    icon: any;
    title: string;
    subTitle: string;
    contact: string;
  
}

const FooterCard: React.FC<Props> = ({icon, title, subTitle, contact}) => {
    // const copyContactToClipboard = () => {
    //     const tempInput = document.createElement('input');
    //     tempInput.value = contact;
    //     document.body.appendChild(tempInput);
    //     tempInput.select();
    //     document.execCommand('copy');
    //     document.body.removeChild(tempInput);
    //     alert('Contact copied to clipboard!');
    //   };
      
    const copyContactToClipboard = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contact)) {
          alert('Invalid email address!');
          return;
        }
      
        // Attempt to copy contact to clipboard
        const tempInput = document.createElement('input');
        tempInput.value = contact;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        // Open email window
        const emailSubject = encodeURIComponent("Regarding Your Contact Information");
        const emailBody = encodeURIComponent(`Hello,\n\nI am interested in the following contact information: ${contact}`);
        const mailtoUrl = `mailto:${contact}?subject=${emailSubject}&body=${emailBody}`;
        window.open(mailtoUrl, '_blank');
      };
      
      

    return (
     <div className='w-full bg-custom-bgGray rounded-xl p-4'>
      <span className='mb-8'>{icon}</span>
      <h1 className='text-2xl'>{title}</h1>
      <p className='text-slate-500 mb-4'>{subTitle}</p>
      <p className='text-custom-green' onClick={copyContactToClipboard}>{contact}</p>
     </div>
    );
};

export default FooterCard;
