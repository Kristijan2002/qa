import React from 'react';
import XIcon from '../icons/XIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import BehanceIcon from '../icons/BehanceIcon';

interface Props{
    img: string;
    title: string;
    city: string;
}

const Partners: React.FC<Props> = ({img, title, city}) => {

    return (
     <div className='flex flex-col justify-center items-center w-1/2 md:w-1/4 my-4'>
        <img src={img} alt="" className='max-w-28'/>
        <h1 className='text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl uppercase'>{title}</h1>
        <span className='uppercase text-gray'>{city}</span>
        <div className='flex w-1/2 mx-auto justify-between'>
        <XIcon />
        <LinkedinIcon />
        <BehanceIcon />
        </div>
     </div>
    );
};

export default Partners;
