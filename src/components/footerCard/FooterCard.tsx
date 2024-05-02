import React from 'react';


interface Props{
    icon: any;
    title: string;
    subTitle: string;
    contact: string;
  
}

const FooterCard: React.FC<Props> = ({icon, title, subTitle, contact}) => {

    return (
     <div className='w-full bg-custom-bgGray rounded-xl p-4'>
      <span className='mb-8'>{icon}</span>
      <h1 className='text-2xl'>{title}</h1>
      <p className='text-slate-500 mb-4'>{subTitle}</p>
      <p className='text-custom-green'>{contact}</p>
     </div>
    );
};

export default FooterCard;
