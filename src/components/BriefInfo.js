import React, { useContext  } from 'react';
import './BriefInfo.scss'
import { Context } from '..';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const BriefInfo = observer (() => {
    const {user} = useContext(Context);

    return (
        <div
        >
            {user?.users?.map((users,index) => 
                    <article 
                        className='brief-info__wrapper'
                        key={index}
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
                                    {users?.name}
                            </span>
                        </section>
                        <section 
                            className='brief-info__string'>
                            <span 
                                className='brief-info__span_title'>город:</span>
                            <span 
                                className='brief-info__span_text'
                                >
                                    {users.address?.city}
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
                                    {users.company?.name}
                                </span>
                            </div>
                            <NavLink 
                                className='brief-info__button'
                                to={'users/' + users?.id}
                                >
                                Подробнее
                            </NavLink>
                        </section>
                    </section>
                </article>
            )}
        </div>
    );
});

export default BriefInfo;