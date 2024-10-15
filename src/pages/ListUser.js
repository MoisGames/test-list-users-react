import React from 'react';
import './ListUser.scss'
import BriefInfo from '../components/BriefInfo';

const ListUser = () => {
    return (
        <main className='main-list-user'>
            <span className='main-list-user__title'>
                Список пользователей
            </span>
            <BriefInfo />
        </main>
    );
};

export default ListUser;