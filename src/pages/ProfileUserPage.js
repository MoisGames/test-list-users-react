import React, { useCallback, useContext, useEffect, useState } from 'react';
import './ProfileUserPage.scss'
import ButtonEdit from '../components/button/ButtonEdit';
import InputStandart from '../components/input/InputStandart';
import { observer, } from 'mobx-react-lite';
import { useParams, } from 'react-router-dom';
import { fetchOneUser, } from '../http/usersAPI';
import InputComment from '../components/input/InputComment';
import ButtonSend from '../components/button/ButtonSend';
import { Context, } from '..';


const ProfileUserPage = observer (() => {
    const {context} = useContext(Context)

    const standartClass = 'input-standart__input'
    const redClass = 'input-red'
    
    const [user, setUser] = useState({})
    const [show, setShow] = useState(true)
    const [name, setName] = useState('')
    const [username,setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [phone, setPhone] = useState('')
    const [website, setWebsite] = useState('')
    const [comment, setComment] = useState('')

    const [nameErr,setNameErr] = useState(standartClass)
    const [usernameErr,setUsernameErr] = useState(standartClass)
    const [emailErr,setEmailErr] = useState(standartClass)
    const [streetErr,setStreetErr] = useState(standartClass)
    const [cityErr,setCityErr] = useState(standartClass)
    const [zipcodeErr,setZipcodeErr] = useState(standartClass)
    const [phoneErr,setPhoneErr] = useState(standartClass)
    const [websiteErr,setWebsiteErr] = useState(standartClass)

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

    function addUser(e) {
        e.preventDefault()

        let resultProfile = {
            id: id | null,
            name: name,
            username: username,
            email: email,
            street: street,
            city: city,
            zipcode: zipcode,
            phone: phone,
            website: website,
            comment: comment,
        }
            
        let checkForm = true // Если есть пустое значение форму не отправляем

            for (let value in resultProfile) {
                if (resultProfile[value] === '') {
                    checkForm = false
                }
                switch (value) {
                    case 'name': 
                        if (resultProfile[value] === '') {
                            setNameErr(redClass)
                            setTimeout(setNameErr,3000,standartClass)
                        }
                    break
                    case 'username': 
                        if (resultProfile[value] === '') {
                            setUsernameErr(redClass)
                            setTimeout(setUsernameErr,3000,standartClass)
                        }
                    break
                    case 'email': 
                        if (resultProfile[value] === '') {
                            setEmailErr(redClass)
                            setTimeout(setEmailErr,3000,standartClass)
                        }
                    break
                    case 'street': 
                        if (resultProfile[value] === '') {
                            setStreetErr(redClass)
                            setTimeout(setStreetErr,3000,standartClass)
                        }
                    break
                    case 'city': 
                        if (resultProfile[value] === '') {
                            setCityErr(redClass)
                            setTimeout(setCityErr,3000,standartClass)
                        }
                    break
                    case 'zipcode': 
                        if (resultProfile[value] === '') {
                            setZipcodeErr(redClass)
                            setTimeout(setZipcodeErr,3000,standartClass)
                        }
                    break
                    case 'phone': 
                        if (resultProfile[value] === '') {
                            setPhoneErr(redClass)
                            setTimeout(setPhoneErr,3000,standartClass)
                        }
                    break
                    case 'website': 
                        if (resultProfile[value] === '') {
                            setWebsiteErr(redClass)
                            setTimeout(setWebsiteErr,3000,standartClass)
                        }
                    break
                    default: {
                    }
                }
            }
        
        if (checkForm) { //Если все значения не пусты кроме comment
            context?.setProfiles(resultProfile) // отправляем в store
            const resultStore = {...context?.profiles} //Получаем из стора и копируем его
            console.log(resultStore); // Вывод в консоль
        } else {
            return null
        }
    }

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
                    <article 
                        key={user.id}
                        >
                        <InputStandart 
                        classValidate={nameErr}
                        type='text'
                        textTitle='Name'
                        placeholder={user?.name}
                        disabled={show}
                        value={name}
                        onChange={e =>
                            setName(e.target.value)}
                        />
                        <InputStandart
                        classValidate={usernameErr} 
                        type='text'
                        textTitle='UserName'
                        placeholder={user?.username}
                        disabled={show}
                        value={username}
                        onChange={e =>
                            setUsername(e.target.value)}
                        />
                        <InputStandart
                        classValidate={emailErr} 
                        type='email'
                        textTitle='E-mail'
                        placeholder={user?.email}
                        disabled={show}
                        value={email}
                        onChange={e =>
                            setEmail(e.target.value)}
                        />
                        <InputStandart
                        classValidate={streetErr} 
                        type='text'
                        textTitle='Street'
                        placeholder={user.address?.street}
                        disabled={show}
                        value={street}
                        onChange={e =>
                            setStreet(e.target.value)}
                        />
                        <InputStandart
                        classValidate={cityErr} 
                        type='text'
                        textTitle='City'
                        placeholder={user.address?.city}
                        disabled={show}
                        value={city}
                        onChange={e =>
                            setCity(e.target.value)}
                        />
                        <InputStandart
                        classValidate={zipcodeErr} 
                        type='text'
                        textTitle='Zip code'
                        placeholder={user.address?.zipcode}
                        disabled={show}
                        value={zipcode}
                        onChange={e =>
                            setZipcode(e.target.value)}
                        />
                        <InputStandart
                        classValidate={phoneErr} 
                        type='number'
                        textTitle='Phone'
                        placeholder={user?.phone}
                        disabled={show}
                        value={phone}
                        onChange={e => {
                            
                            setPhone(e.target.value)}}
                        
                        />
                        <InputStandart
                        classValidate={websiteErr} 
                        type='text'
                        textTitle='Website'
                        placeholder={user?.website}
                        disabled={show}
                        value={website}
                        onChange={e =>
                            setWebsite(e.target.value)}
                        />
                        <InputComment
                        type='text'
                        textTitle='Comment' 
                        disabled={show}
                        value={comment}
                        onChange={e =>
                            setComment(e.target.value)}
                        />
                    </article>
                    <div className='profile-user__button_send_wrapper'>
                        <ButtonSend 
                        text='Отправить'
                        onClick={(e) => addUser(e)}
                        />
                    </div>
                </form>
            </section>
        </main>
    );
});

export default ProfileUserPage;