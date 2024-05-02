import React from 'react';
import Partners from '../partners/Partners';
import FooterCard from '../footerCard/FooterCard';
import SmileIcon from '../icons/SmileIcon';
import MessageFooterIcon from '../icons/MessageFooterIcon';
import LocationIcon from '../icons/LocationIcon';
import PhoneIcon from '../icons/PhoneIcon';

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
                    <Partners img='/sos 1.png' title='Охрид сос' city="Охрид"/>
                    <Partners img='/stigae.png' title='Стига е!' city="Струмица"/>
                </div>

                <div className='mt-36 text-left'>
                    <p className='text-custom-green mb-4'>Contact us</p>
                    <h1 className='text-2xl sm:text-3xl md:text-5xl lg:6xl mb-4'>We’d love to hear from you</h1>
                    <p className='text-slate-500'>Our friendly team is always here to chat.</p>
                    <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
                        <FooterCard icon={<SmileIcon />} title='Chat to press contact' subTitle='Speak to our frendly team.' contact='press@sakamdaprasam.mk'/>
                        <FooterCard icon={<MessageFooterIcon />} title='Chat to support' subTitle='We’re here to help.' contact='support@sakamdaprasam.mk'/>
                        <FooterCard icon={<LocationIcon />} title='Visit us' subTitle='Visit our office HQ.' contact='100 Smith Street Collingwood VIC 3066 AU'/>
                        <FooterCard icon={<PhoneIcon />} title='Any other question' subTitle='Mon' contact='zdravo@sakamdaprasam.mk'/>
                     
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
