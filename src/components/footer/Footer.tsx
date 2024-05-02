import React from 'react';
import Partners from '../partners/Partners';

const Footer: React.FC = () => {


    
    return (
        <footer className="pt-6 pb-6 w-11/12 mx-auto">
                <p className='uppercase'>заедно</p>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Кој прашува?</h1>
                <p className='w-11/12 md:w-1/2 mx-auto pt-4'>Ние сме група од независни зелени советници и активисти ширум Македонија, кои се залагаат за зелено, хумано и фер општество за сите.</p>
                <div className='w-11/12 mx-auto flex justify-between flex-wrap items-center'>
                    <Partners img='/zelenGrad.png' title='Зелен хуман град' city="Скопје"/>
                    <Partners img='/o2.png' title='O2' city="Скопје"/>
                    <Partners img='/sansaZaCentar.png' title='Шанса за центар' city="Центар - Скопје"/>
                    <Partners img='/gaziBaba.png' title='Зелените од гази баба' city="Скопје"/>
                    <Partners img='/karpos.png' title='Зелените од Карпош' city="Карпош - Скопје"/>
                    <Partners img='/zaedno.png' title='Заедно за промена' city="Скопје"/>
                    <Partners img='/sos 1.png' title='Охрис сос' city="Охрис"/>
                    <Partners img='/stigae.png' title='Стига е!' city="Струмица"/>
                </div>
        </footer>
    );
};

export default Footer;
