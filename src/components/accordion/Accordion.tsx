import React, { useState } from 'react';
import VmroIcon from '../icons/VmroIcon';
import SdsmIcon from '../icons/SdsmIcon';
import ZnamIcon from '../icons/ZnamIcon';
import LevicaIcon from '../icons/LevicaIcon';
import AlijansaIcon from '../icons/AlijansaIcon';
import GromIcon from '../icons/GromIcon';
import DuiIcon from '../icons/DuiIcon';
import { title } from 'process';

interface AccordionProps {
  vmro: string;
  sdsm: string;
  dui: string;
  znam: string;
  levica: string;
  alijansa: string;
  grom: string;
  tvoja: string;
}

const iconMapping: Record<string, React.ReactNode> = {
  'VMRO-DPMNE': <VmroIcon />,
  SDSM: <SdsmIcon />,
  DUI: <DuiIcon />,
  ZNAM: <ZnamIcon />,
  LEVICA: <LevicaIcon />,
  "ALIJANSA ZA ALBANCITE": <AlijansaIcon />,
  GROM: <GromIcon />,
};

const Accordion: React.FC<AccordionProps> = ({ vmro, sdsm, dui, znam, levica, alijansa, grom, tvoja }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(prevActiveAccordion =>
      prevActiveAccordion === id ? null : id
    );
  };

  const accordionItems = [
    { title: 'VMRO-DPMNE', content: vmro },
    { title: 'SDSM', content: sdsm },
    { title: 'DUI', content: dui },
    { title: 'ZNAM', content: znam },
    { title: 'LEVICA', content: levica },
    { title: 'ALIJANSA ZA ALBANCITE', content: alijansa },
    { title: 'GROM', content: grom },
    { title: 'TVOJA PARTIJA', content: tvoja}
  ];

  accordionItems.sort((a, b) => a.title.localeCompare(b.title));
  
  return (
    <div className='bg-white sm:bg-custom-gray w-full sm:w-4/5 mx-auto p-4 pb-36 rounded-b-3xl'>
      <div id="accordion-collapse" data-accordion="collapse" className='mt-4 w-11/12 mx-auto md:w-5/6'>
        {accordionItems.map((item, index) => (
          <div key={index} className='w-full mb-4'>
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
                <span className='flex items-center'>{iconMapping[item.title.toUpperCase()]} <p className='ml-4'>{item.title}</p></span> {/* Use item.title instead of <item.title /> */}
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={`${
                activeAccordion === `accordion-collapse-body-${index}` ? 'block' : 'hidden'
              }`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              <div className="text-left p-5 border border-b-0 border-gray-200 bg-white">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
