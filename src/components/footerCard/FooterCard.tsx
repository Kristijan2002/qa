import React from 'react';


interface Props{
    icon: any;
    title: string;
    subTitle: string;
    contact: string;
  
}

const FooterCard: React.FC<Props> = ({icon, title, subTitle, contact}) => {
    const copyContactToClipboard = () => {
        const tempInput = document.createElement('input');
        tempInput.value = contact;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Contact copied to clipboard!');
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
