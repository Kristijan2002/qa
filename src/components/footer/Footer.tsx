import React from 'react';
import Partners from '../partners/Partners';
import FooterCard from '../footerCard/FooterCard';
import SmileIcon from '../icons/SmileIcon';
import MessageFooterIcon from '../icons/MessageFooterIcon';
import LocationIcon from '../icons/LocationIcon';
import PhoneIcon from '../icons/PhoneIcon';

interface FooterProps {
    contactUs: string;
    title: string;
    subTitle: string;
    chatToPress: string;
    chatToPressSubTitle: string;
    chatToSupport: string;
    chatToSupportSubTitle: string;
    visitUs: string;
    visitUsSubTitle: string;
    otherQuestions: string;
    otherQuestionsSubTitle: string;
    together: string;
    whoAsks: string;
    weAre: string;
}

const Footer: React.FC<FooterProps> = ({chatToPress, chatToPressSubTitle, chatToSupport, chatToSupportSubTitle, visitUs, visitUsSubTitle,otherQuestions, otherQuestionsSubTitle, contactUs, title, subTitle, together, whoAsks, weAre}) => {
    
    return (
        <footer className="pt-6 pb-6 w-11/12 mx-auto">
                <p className='uppercase'>{together}</p>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>{whoAsks}</h1>
                <p className='w-11/12 md:w-1/2 mx-auto pt-4'>{weAre}</p>
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
                    <p className='text-custom-green mb-4'>{contactUs}</p>
                    <h1 className='text-2xl sm:text-3xl md:text-5xl lg:6xl mb-4'>{title}</h1>
                    <p className='text-slate-500'>{subTitle}</p>
                    <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
                        <FooterCard icon={<SmileIcon />} title={chatToPress} subTitle={chatToPressSubTitle} contact='press@sakamdaprasam.mk'/>
                        <FooterCard icon={<MessageFooterIcon />} title={chatToSupport} subTitle={chatToSupportSubTitle} contact='support@sakamdaprasam.mk'/>
                        <FooterCard icon={<LocationIcon />} title={visitUs} subTitle={visitUsSubTitle} contact='100 Smith Street Collingwood VIC 3066 AU'/>
                        <FooterCard icon={<PhoneIcon />} title={otherQuestions} subTitle={otherQuestionsSubTitle} contact='zdravo@sakamdaprasam.mk'/>
                     
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
