import React, { useState } from 'react';
import VmroIcon from '../icons/VmroIcon';
import SdsmIcon from '../icons/SdsmIcon';
import ZnamIcon from '../icons/ZnamIcon';
import LevicaIcon from '../icons/LevicaIcon';
import AlijansaIcon from '../icons/AlijansaIcon';
import GromIcon from '../icons/GromIcon';
import DuiIcon from '../icons/DuiIcon';
import NoAnswerIcon from '../icons/NoAnswerIcon';
import TvojaIcon from '../icons/TvojaIcon';
import ArrowUpIcon from '../icons/ArrowUpIcon';
import ArrowDownIcon from '../icons/ArrowDownIcon';

interface AccordionProps {
  vmro: string;
  sdsm: string;
  dui: string;
  znam: string;
  levica: string;
  alijansa: string;
  grom: string;
  tvoja: string;
  evropskiFront: string;
  vlen: string;
  edinstvenaMakedonija: string;
  novaAlternativa: string;
  avaja: string;
  evropsko: string;
  makedonskaEra: string;
  rodinaMakedonija: string;
  desna: string;
  demokrati: string;
  noAnswer: string;
  vmroName: string;
  sdsmName: string;
  duiName: string;
  znamName: string;
  levicaName: string;
  alijansaName: string;
  gromName: string;
  tvojaName: string;
  evropskiFrontName: string;
  vlenName: string;
  edinstvenaMakedonijaName: string;
  novaAlternativaName: string;
  avajaName: string;
  evropskoName: string;
  makedonskaEraName: string;
  rodinaMakedonijaName: string;
  desnaName: string;
  demokratiName: string;
}

const iconMapping: Record<string, React.ReactNode> = {
  'SDSM': <SdsmIcon />,
  'СДСМ': <SdsmIcon />,
  'VMRO-DPMNE': <VmroIcon />,
  'ВМРО-ДПМНЕ': <VmroIcon />,
  'DUI': <DuiIcon />,
  'ДУИ': <DuiIcon />,
  'ZNAM': <ZnamIcon />,
  'ЗНАМ': <ZnamIcon />,
  'LEVICA': <LevicaIcon />,
  'ЛЕВИЦА': <LevicaIcon />,
  'АЛИЈАНСА НА АЛБАНЦИТЕ': <AlijansaIcon />,
  'ALIJANSA NA ALBANCITE': <AlijansaIcon />,
  'GROM': <GromIcon />,
  'ГРОМ': <GromIcon />,
  "TVOJA PARTIJA": <TvojaIcon />,
  "ТВОЈА ПАРТИЈА": <TvojaIcon />
};

<div className='w-full flex flex-col jutify-center items-center' >
<img src="/Group.png" alt="" className='w-1/2 mb-8'/>
  <h1 className='uppercase'>Nema odgovor</h1>
  </div>

const Accordion: React.FC<AccordionProps> = ({ vmro, sdsm, dui, znam, levica, alijansa, grom, tvoja, noAnswer, vmroName, sdsmName, duiName, znamName, levicaName, alijansaName, gromName, tvojaName, evropskiFront,
  vlen,
  edinstvenaMakedonija,
  novaAlternativa,
  avaja,
  evropsko,
  makedonskaEra,
  rodinaMakedonija,
  desna,
  demokrati,
  evropskiFrontName,
  vlenName,
  edinstvenaMakedonijaName,
  novaAlternativaName,
  avajaName,
  evropskoName,
  makedonskaEraName,
  rodinaMakedonijaName,
  desnaName,
  demokratiName, }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(prevActiveAccordion =>
      prevActiveAccordion === id ? null : id
    );
  };

  const accordionItems = [
    { title: sdsmName, content: sdsm },
    { title: vmroName, content: vmro },
    { title: gromName, content: grom },
    { title: evropskiFrontName, content: evropskiFront},
    { title: levicaName, content: levica },
    { title: vlenName, content: vlen},
    { title: znamName, content: znam },
    { title: edinstvenaMakedonijaName, content: edinstvenaMakedonija},
    { title: novaAlternativaName, content: novaAlternativa},
    { title: avajaName, content: avaja},
    { title: evropskoName, content: evropsko},
    { title: makedonskaEraName, content: makedonskaEra},
    { title: tvojaName, content: tvoja},
    { title: rodinaMakedonijaName, content: rodinaMakedonija},
    { title: desnaName, content: desna},
    { title: demokratiName, content: demokrati},
  ];

  
  return (
    <div className='bg-white sm:bg-custom-gray w-full sm:w-4/5 mx-auto p-4 pb-36 rounded-b-3xl'>
      <div id="accordion-collapse" data-accordion="collapse" className='mt-4 w-11/12 mx-auto md:w-5/6'>
        {accordionItems.map((item, index) => (
          <div key={index} className='w-full mb-4 test'>
            <h2 id={`accordion-collapse-heading-${index}`}>
            <button
  type="button"
  className={`bg-white flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3 ${
    activeAccordion === `accordion-collapse-body-${index}` && 'active'
  }`}
  onClick={() => toggleAccordion(`accordion-collapse-body-${index}`)}
  aria-expanded={activeAccordion === `accordion-collapse-body-${index}`}
  aria-controls={`accordion-collapse-body-${index}`}
>
<span className='flex items-center text-xs sm:text-sm md:text-lg'>
  {iconMapping[item.title?.toUpperCase()]} 
  <p className='ml-4'>{item.title}</p>
</span>

  {activeAccordion === `accordion-collapse-body-${index}` ? (<ArrowUpIcon />) : (<ArrowDownIcon />)}
</button>
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={`${
                activeAccordion === `accordion-collapse-body-${index}` ? 'block' : 'hidden'
              }`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
                 {item.content ? (
      <>
        <h2 id={`accordion-collapse-heading-${index}`}>
          {/* Button code here */}
        </h2>
        <div
          id={`accordion-collapse-body-${index}`}
          className={`${
            activeAccordion === `accordion-collapse-body-${index}` ? 'block' : 'hidden'
          }`}
          aria-labelledby={`accordion-collapse-heading-${index}`}
        >
          <div className="text-left p-5 border border-1 border-gray-200 bg-white">
            {item.content}
          </div>
        </div>
      </>
    ) : (
      <div className='w-full flex flex-col justify-center items-center py-4 border border-1'>
        <img src="/Group.png" alt="" className='mb-4'/>
        <h1 className='uppercase'>{noAnswer}</h1>
      </div>
    )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
