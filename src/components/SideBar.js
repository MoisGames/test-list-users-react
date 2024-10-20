import { useContext } from 'react';
import './SideBar.scss'
import ButtonSideBar from './button/ButtonSideBar';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const SideBar = observer (() => {
    const {user} = useContext(Context)
    return (
        <div>
            <main className='sidebar-main'>
                <span className='sidebar-span'>
                    Сортировка
                </span>
                <ButtonSideBar text='по городу' onClick={() => user.sortCityUsers()}/>
                <ButtonSideBar text='по компании' onClick={() => user.sortCompanyUsers()}/>
            </main>
        </div>
    );
});

export default SideBar;