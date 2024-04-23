import React from 'react';
import Partners from '../partners/Partners';

const Footer: React.FC = () => {


    
    return (
        <footer className="pt-6 pb-6 w-11/12 mx-auto">
                <p className='uppercase'>united</p>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Meet the groups behind SDP</h1>
                <p className='w-11/12 md:w-1/2 mx-auto pt-4'>We’re a dedicated group of independent citizen movements who believe that integrity, honesty and honour are the basics for every society. </p>
                <div className='w-11/12 mx-auto flex justify-between flex-wrap'>
                    <Partners img='/zelenGrad.png' title='Zelen human grad' city="Skopje"/>
                    <Partners img='/o2.png' title='O2' city="Skopje"/>
                    <Partners img='/sansaZaCentar.png' title='Shansa za centar' city="Skopje"/>
                    <Partners img='/gaziBaba.png' title='Zelenite od gazi baba' city="Skopje"/>
                    <Partners img='/karpos.png' title='Zelenite od karposh' city="Skopje"/>
                    <Partners img='/karpos.png' title='Zelenite od tetovo' city="Tetovo"/>
                    <Partners img='/karpos.png' title='Zelenite od ohrid' city="Ohrid"/>
                    <Partners img='/karpos.png' title='Zelenite od strumica' city="Strumica"/>
                </div>
        </footer>
    );
};

export default Footer;
