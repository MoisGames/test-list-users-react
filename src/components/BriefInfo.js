import React, { useContext  } from 'react';
import './BriefInfo.scss'
import { Context } from '..';

const BriefInfo = () => {
    const {user} = useContext(Context);
    
    return (
        <div key={user.users.id}>
            {user.users.map(users => 
                    <article 
                        className='brief-info__wrapper'
                    >
                        <section 
                            className='brief-info__content'>
                        <section 
                            className='brief-info__string'>
                            <span 
                                className='brief-info__span_title'>ФИО:</span>
                            <span 
                                className='brief-info__span_text'
                                >
                                    {users.name}
                            </span>
                        </section>
                        <section 
                            className='brief-info__string'>
                            <span 
                                className='brief-info__span_title'>город:</span>
                            <span 
                                className='brief-info__span_text'
                                >
                                    {users.address.city}
                            </span>
                        </section>
                        <section 
                            className='brief-info__string'
                            id='more-details' 
                            >
                            <div className='brief-info__string-wrapper'>
                                <span className='brief-info__span_title'
                                >
                                    компания:
                                </span>
                                <span className='brief-info__span_text'
                                >
                                    {users.company.name}
                                </span>
                            </div>
                            <button className='brief-info__button'>Подробнее</button>
                        </section>
                    </section>
                </article>
            )}
        </div>
    );
};

export default BriefInfo;