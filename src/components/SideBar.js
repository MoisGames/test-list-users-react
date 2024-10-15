import './SideBar.scss'
import ButtonSideBar from './button/ButtonSideBar';

const SideBar = () => {
    return (
        <div>
            <main className='sidebar-main'>
                <span className='sidebar-span'>
                    Сортировка
                </span>
                <ButtonSideBar text='по городу' />
                <ButtonSideBar text='по компании' />
            </main>
        </div>
    );
};

export default SideBar;