import React from 'react';
import CommonSection from './CommonSection';
import { FaQuestion } from 'react-icons/fa';
import { faqs } from '../data';
import FAQ from './FAQ';

const FAQs = () => {
    return (
        <>
          <section className="faqs">
            <div className="container faqs__container">
                <CommonSection icon={<FaQuestion/>} title='FAQs' />
                <div className="faqs__wrapper">
                    {
                    faqs.map(({id,answer,question}) => {
                            return <FAQ key={id} question={question} answer={answer}/>
                    })
                    }
                </div>

            </div>
            </section>  
        </>
    );
};

export default FAQs;