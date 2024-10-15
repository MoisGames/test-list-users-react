import React from 'react';
import './BriefInfo.scss'

const BriefInfo = (props) => {
    return (
        <article 
            className='brief-info__wrapper'
            >
            <section className='brief-info__content'>
                <section className='brief-info__string'>
                    <span className='brief-info__span_title'>ФИО:</span>
                    <span className='brief-info__span_text'>Иванов Иван</span>
                </section>
                <section className='brief-info__string'>
                    <span className='brief-info__span_title'>город:</span>
                    <span className='brief-info__span_text'>Москва</span>
                </section>
                <section 
                    className='brief-info__string'
                    id='more-details' 
                    >
                    <div className='brief-info__string-wrapper'>
                        <span className='brief-info__span_title'>компания:</span>
                        <span className='brief-info__span_text'>Пример</span>
                    </div>
                    <button className='brief-info__button'>Подробнее</button>
                </section>
            </section>
        </article>
    );
};

export default BriefInfo;