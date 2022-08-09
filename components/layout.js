import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
    AiFillDashboard,
    AiFillFolder,
    AiOutlineAccountBook,
    AiOutlineTable,
    AiFillCaretRight,
    AiFillCaretLeft,
} from 'react-icons/ai';
import { MdEditNote } from 'react-icons/md';
import style from '../styles/layout.module.css';
import { useLoginInfo } from './loginInfoContext';
import { removeToken, removeUserName } from '../client/localStorage';
import Router from 'next/router';

export default function Layout({ children }) {
    const [sideOpen, setSideOpen] = useState(false);

    return (
        <div className={style.layout}>
            <div
                className={`${style.sideWrapper} ${
                    sideOpen ? style.sideWrapperMobileOpen : ''
                }`}
            >
                <Side />

                <div
                    className={style.sideToggler}
                    onClick={() => setSideOpen((o) => !o)}
                >
                    {sideOpen ? <AiFillCaretLeft /> : <AiFillCaretRight />}
                </div>
            </div>

            <main className={style.mainWrapper}>
                <TopBar />
                <div style={{ padding: '15px', overflowX: 'scroll' }}>
                    {children}
                </div>
            </main>

            {sideOpen ? (
                <div
                    className={style.sideOpenBg}
                    onClick={() => setSideOpen(false)}
                ></div>
            ) : (
                ''
            )}
        </div>
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
                        href="/form"
                        linkName="Form"
                        inMiddle={true}
                        icon={<MdEditNote />}
                    />
                    <SideLink
                        href="/table"
                        linkName="Table"
                        inMiddle={true}
                        icon={<AiOutlineTable />}
                    />
                </SideMiddleButton>
                <SideLink
                    href="/charts"
                    linkName="Charts"
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

function TopBar() {
    const loginInfo = useLoginInfo();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropDown = () => {
        setDropdownOpen((b) => !b);
    };

    const logout = () => {
        removeToken();
        removeUserName();
        Router.push('/login');
    };

    return (
        <>
            <nav>
                <div></div>
                <div className="avatar">
                    <Image
                        src="/avatar.jpg"
                        alt="avatar"
                        width="48px"
                        height="48px"
                        style={{
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                        onClick={toggleDropDown}
                    ></Image>

                    {dropdownOpen ? (
                        <ul>
                            <li>{loginInfo?.userName}</li>
                            <li onClick={logout}>Log Out</li>
                        </ul>
                    ) : (
                        ''
                    )}
                </div>
            </nav>

            <style jsx>{`
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
                }

                .avatar {
                    padding: 5px 15px;
                    position: relative;
                }

                ul {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    position: absolute;
                    transform: translateX(-90px) translateY(20px);
                    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
                    background-color: white;
                }
                li {
                    font-size: 0.9rem;
                    width: 140px;
                    box-sizing: border-box;
                    padding: 5px 20px;
                    cursor: pointer;
                }
                li:hover {
                    background-color: #ecf5ff;
                    color: #66b1ff;
                }
            `}</style>
        </>
    );
}
