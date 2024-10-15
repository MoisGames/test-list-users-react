import React, { useEffect, useState } from 'react';
import './ProfileUserPage.scss'
import ButtonEdit from '../components/button/ButtonEdit';
import InputStandart from '../components/input/InputStandart';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { fetchOneUser } from '../http/usersAPI';

const ProfileUser = observer (() => {
    const [user, setUser] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetchOneUser(id).then(data => setUser(data))
    }, [])

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
                        <InputStandart 
                        type='text'
                        textTitle='Name'
                        value={user.name}
                        disabled='true'
                        />
                        <InputStandart 
                        type='text'
                        textTitle='UserName'
                        value={user.username}
                        disabled='true'
                        />
                        <InputStandart 
                        type='text'
                        textTitle='E-mail'
                        value={user.email}
                        disabled='true'
                        />
                        <InputStandart 
                        type='text'
                        textTitle='Street'
                        value={user.address.street}
                        disabled='true'
                        />
                        <InputStandart 
                        type='text'
                        textTitle='City'
                        value={user.address.city}
                        disabled='true'
                        />
                        <InputStandart 
                        type='text'
                        textTitle='Zip code'
                        value={user.address.zipcode}
                        disabled='true'
                        />
                        <InputStandart 
                        type='text'
                        textTitle='Phone'
                        value={user.phone}
                        disabled='true'
                        />
                        <InputStandart 
                        type='Website'
                        textTitle='Name'
                        value={user.website}
                        disabled='true'
                        />
                    </article>
                </form>
            </section>
        </main>
    );
});

export default ProfileUser;