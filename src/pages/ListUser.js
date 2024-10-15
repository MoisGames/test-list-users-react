import React, { useEffect,useContext, useCallback } from 'react';
import './ListUser.scss'
import BriefInfo from '../components/BriefInfo';
import { observer } from 'mobx-react-lite';
import { fetchUsers } from '../http/usersAPI';
import { Context } from '..';

const ListUser = observer(() => {
    const {user} = useContext(Context);

    const listEntryUser = useCallback(() => {
        fetchUsers().then(data => user.setUsers(data))
    },[user])

    useEffect(() => {
        listEntryUser()
    }, [listEntryUser])
    
    return (
        <main className='main-list-user'>
            <span className='main-list-user__title'>
                Список пользователей
            </span>
            <BriefInfo />
        </main>
    );
});

export default ListUser;