import Link from 'next/link';
import { useState } from 'react';
import {
    AiFillDashboard,
    AiFillFolder,
    AiFillShop,
    AiOutlineIssuesClose,
    AiOutlineAccountBook,
} from 'react-icons/ai';
import style from '../styles/layout.module.css';
import { useLoginInfo, LoginInfoProvider } from './loginInfoContext';

export default function Layout({ children, title }) {
    return (
        <LoginInfoProvider>
            <div className={style.layout}>
                <div className={style.sideWrapper}>
                    <Side></Side>
                </div>

                <main className={style.mainWrapper}>
                    <NavBar></NavBar>
                    <div>{children}</div>
                </main>
            </div>
        </LoginInfoProvider>
    );
}

function Side() {
    return (
        <>
            <ul>
                <SideLink
                    href="/"
                    linkName="Dashboard"
                    icon={<AiFillDashboard />}
                />
                <SideMiddleButton displayText="Pages" icon={<AiFillFolder />}>
                    <SideLink
                        href="/page1"
                        linkName="Page1"
                        inMiddle={true}
                        icon={<AiFillShop />}
                    />
                    <SideLink
                        href="/page2"
                        linkName="Page2"
                        inMiddle={true}
                        icon={<AiOutlineIssuesClose />}
                    />
                </SideMiddleButton>
                <SideLink
                    href="/page3"
                    linkName="Page3"
                    icon={<AiOutlineAccountBook />}
                />
            </ul>

            <style jsx>{`
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
            `}</style>
        </>
    );
}

function SideLink({ href = '/', linkName = 'link', icon, inMiddle = false }) {
    return (
        <>
            <Link href={href}>
                <a>
                    <li className={inMiddle ? 'inMiddle' : ''}>
                        {icon ? <span>{icon}</span> : ''}
                        {linkName}
                    </li>
                </a>
            </Link>

            <style jsx>{`
                li {
                    color: rgb(191, 203, 217);
                    padding: 15px 20px;
                    transition: 0.3s;
                }
                li.inMiddle {
                    padding-left: 30px;
                }
                li:hover {
                    background-color: #263445;
                }
                li.inMiddle:hover {
                    background-color: #001528;
                }

                span {
                    display: inline-block;
                    transform: translateY(3px);
                    margin-right: 10px;
                }
                a {
                    color: rgb(191, 203, 217);
                    text-decoration: none;
                    font-size: 0.9rem;
                }
            `}</style>
        </>
    );
}

function SideMiddleButton({ children, displayText, icon }) {
    const [expand, setExpand] = useState(false);

    return (
        <>
            <li
                onClick={() => {
                    setExpand((b) => !b);
                }}
            >
                <div>
                    {icon ? <span>{icon}</span> : ''}
                    {displayText}
                </div>
            </li>
            <ul className={expand ? 'expand' : ''}>{children}</ul>

            <style jsx>{`
                li {
                    padding: 15px 0px 15px 20px;
                    transition: 0.3s;
                    cursor: pointer;
                }
                li:hover {
                    background-color: #263445;
                }

                div {
                    color: rgb(191, 203, 217);
                    font-size: 0.9rem;
                }

                ul {
                    box-sizing: border-box;
                    list-style: none;
                    background-color: #1f2d3d;
                    margin: 0;
                    padding: 0;
                    overflow-y: hidden;
                    transition: max-height 0.8s cubic-bezier(0, 1, 0, 1) -0.1s;
                    max-height: 0px;
                }
                ul.expand {
                    transform: scaleY(1);
                    max-height: 9999px;
                    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
                }
                span {
                    display: inline-block;
                    transform: translateY(3px);
                    margin-right: 10px;
                }
            `}</style>
        </>
    );
}

function NavBar() {
    const loginInfo = useLoginInfo();

    return (
        <>
            <nav>NavBar hi,{loginInfo?.userName}</nav>

            <style jsx>{`
                nav {
                    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
                }
            `}</style>
        </>
    );
}
