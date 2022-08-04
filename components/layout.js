import { useContext, useEffect } from 'react';
import style from '../styles/layout.module.css';
import { LoginInfoContext } from './loginInfoContext';

export default function Layout({ children }) {
    return (
        <div className={style.layout}>
            <div className={style.sideWrapper}>
                <Side></Side>
            </div>

            <main className={style.mainWrapper}>
                <NavBar></NavBar>
                <div>{children}</div>
            </main>
        </div>
    );
}

function Side() {
    return <div>SideBar</div>;
}

function NavBar() {
    const loginInfo = useContext(LoginInfoContext);

    return <nav>NavBar {loginInfo?.userName}</nav>;
}
