import React from 'react';
import './ProfileUserPage.scss'
import ButtonEdit from '../components/button/ButtonEdit';

const ProfileUser = () => {
    return (
        <main className='main-profile-user'>
            <section className='profile-user__wrapper_title'>
                <span className='main-profile-user__title'>
                    Профиль пользователя
                </span>
                <span className='button-edit__wrapper'>
                    <ButtonEdit
                        text='Редактировать'
                    />
                </span>
            </section>
            <section className='profile-user__form__wrapper'>
                <form className='profile-user__form'>
                    <article className='profile-user-form__main'>
                        
                    </article>
                </form>
            </section>
        </main>
    );
};

export default ProfileUser;