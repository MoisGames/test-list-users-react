import React, { useCallback, useEffect, useState } from 'react';
import './ProfileUserPage.scss'
import ButtonEdit from '../components/button/ButtonEdit';
import InputStandart from '../components/input/InputStandart';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { fetchOneUser } from '../http/usersAPI';
import InputComment from '../components/input/InputComment';

const ProfileUserPage = observer (() => {
    const [user, setUser] = useState({})
    const [show, setShow] = useState(true)

    const {id} = useParams()

    const getOneUser = useCallback(() => {
        fetchOneUser(id).then(data => {
            if (data !== undefined) {
                setUser(data)
            } else {
                setUser('')
            }
        })
    },[id,])

    useEffect(() => {
        getOneUser()
    }, [getOneUser])
    
    return (
        <main className='main-profile-user'>
            <section className='profile-user__wrapper_title'>
                <span className='main-profile-user__title'>
                    Профиль пользователя
                </span>
                <span>
                </span>
                <span className='button-edit__wrapper'>
                    <ButtonEdit
                        text='Редактировать'
                        onClick={() => setShow(false)}
                    />
                </span>
            </section>
            <section className='profile-user__form__wrapper'>
                <form className='profile-user__form'>
                    <article className='profile-user-form__main' key={user.id}>
                        <InputStandart 
                        type='text'
                        textTitle='Name'
                        placeholder={user?.name}
                        disabled={show}
                        />
                        <InputStandart 
                        type='text'
                        textTitle='UserName'
                        placeholder={user?.username}
                        disabled={show}
                        />
                        <InputStandart 
                        type='text'
                        textTitle='E-mail'
                        placeholder={user?.email}
                        disabled={show}
                        />
                        <InputStandart 
                        type='text'
                        textTitle='Street'
                        placeholder={user.address?.street}
                        disabled={show}
                        />
                        <InputStandart 
                        type='text'
                        textTitle='City'
                        placeholder={user.address?.street}
                        disabled={show}
                        />
                        <InputStandart 
                        type='text'
                        textTitle='Zip code'
                        placeholder={user.address?.zipcode}
                        disabled={show}
                        />
                        <InputStandart 
                        type='number'
                        textTitle='Phone'
                        placeholder={user?.phone}
                        disabled={show}
                        />
                        <InputStandart 
                        type='text'
                        textTitle='Website'
                        placeholder={user?.website}
                        disabled={show}
                        />
                        <InputComment
                        type='text'
                        textTitle='Comment' 
                        disabled={true}
                        />
                    </article>
                </form>
            </section>
        </main>
    );
});

export default ProfileUserPage;