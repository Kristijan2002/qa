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
     <div className='flex flex-col items-center w-full md:w-1/2 lg:w-1/4 my-4 h-42'>
        <img src={img} alt="" className='max-w-28 mb-8'/>
        <div>

        <h1 className='text-md md:text-md lg:text-md xl:text-xl 2xl:text-2xl uppercase'>{title}</h1>
        <span className='uppercase text-custom-purple'>{city}</span>
        </div>
     </div>
    );
};

export default Partners;
