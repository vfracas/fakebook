import React, {useState, useEffect} from 'react';
import app from './base';
import ArticleList from './ArticleList';
import ArticleForm from './ArticleForm';
import ArticleListContextProvider from './context/ArticleListContext';

const Home = () => {
    const [darkTheme, setDarkTheme] = useState();
    useEffect(() =>{
        localStorage.setItem("dark", JSON.stringify(darkTheme));
    }, [darkTheme])

    return(
        <div className={darkTheme ? "dark-theme" : "light-theme"}>
            <div className="homepage">
                <nav className="d-flex flex-row justify-content-between align-items-center">

                    {/* Fakebook logo */}

                    <div className="col-3 d-flex flex-row align-items-center">
                        <h1 className="hometitle navicons backtheme d-flex flex-row justify-content-center align-items-center"><b className="homelogo">f</b></h1>
                        <input className="nostyle searchbar backtheme" type="text" placeholder="Rechercher sur Fakebook"/>
                    </div>

                    {/* Pages menu */}

                    <div className="col-6 d-flex flex-row justify-content-around align-items-center">
                        <ul className="nav" id="myTab" role="tablist">
                            <li className="nav-item page_el" role="presentation">
                                <a className="nav-link active d-flex flex-row justify-content-center align-items-center" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="nav-item page_el" role="presentation">
                                <a className="nav-link d-flex flex-row justify-content-center align-items-center" id="friends-tab" data-toggle="tab" href="#friends" role="tab" aria-controls="friends" aria-selected="false">
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-people-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="nav-item page_el" role="presentation">
                                <a className="nav-link d-flex flex-row justify-content-center align-items-center" id="watch-tab" data-toggle="tab" href="#watch" role="tab" aria-controls="watch" aria-selected="false">
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-collection-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm5.265-7.924A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="nav-item page_el" role="presentation">
                                <a className="nav-link d-flex flex-row justify-content-center align-items-center" id="marketplace-tab" data-toggle="tab" href="#marketplace" role="tab" aria-controls="marketplace" aria-selected="false">
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-shop" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="nav-item page_el" role="presentation">
                                <a className="nav-link d-flex flex-row justify-content-center align-items-center" id="group-tab" data-toggle="tab" href="#group" role="tab" aria-controls="group" aria-selected="false">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                    <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* User menu */}

                    <div className="col-3 d-flex flex-row justify-content-end align-items-center">
                        <a className="user highlight d-flex flex-row justify-content-center align-items-center" href="/#">
                            <div className="navicons_sl d-flex flex-row justify-content-center align-items-center">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-flower1" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 1 1 1l-.002.03a4.997 4.997 0 0 1-.064.387c-.049.241-.122.542-.213.887a60.59 60.59 0 0 1-.676 2.314L8 5.762l-.045-.144a60.59 60.59 0 0 1-.676-2.314 16.705 16.705 0 0 1-.213-.887 4.99 4.99 0 0 1-.064-.386A1 1 0 0 1 8 1zM2 9a1 1 0 1 1 .03-1.998l.091.01c.077.012.176.029.296.054.241.049.542.122.887.213a60.59 60.59 0 0 1 2.314.676L5.762 8l-.144.045c-.8.248-1.626.494-2.314.676-.345.091-.646.164-.887.213a4.99 4.99 0 0 1-.386.064L2 9zm7 5a1 1 0 0 1-2 0l.002-.03a4.996 4.996 0 0 1 .064-.386c.049-.242.122-.543.213-.888.182-.688.428-1.513.676-2.314L8 10.238l.045.144c.248.8.494 1.626.676 2.314.091.345.164.646.213.887a5.005 5.005 0 0 1 .064.386L9 14zm-5.696-2.134a1 1 0 0 1-1-1.732l.027-.014c.02-.01.048-.021.084-.036a5.09 5.09 0 0 1 .283-.102c.233-.078.53-.165.874-.258a60.598 60.598 0 0 1 2.343-.572l.147-.033-.103.11a58.239 58.239 0 0 1-1.666 1.743c-.253.252-.477.465-.66.629a5.001 5.001 0 0 1-.304.248l-.025.017zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 1 .366 1.366l-.017.025a5.001 5.001 0 0 1-.248.303 17.01 17.01 0 0 1-.629.661A60.614 60.614 0 0 1 9.23 5.96l-.111.102.033-.147a60.62 60.62 0 0 1 .572-2.342c.093-.345.18-.642.258-.875a5.066 5.066 0 0 1 .138-.367l.014-.027a1 1 0 0 1 1.366-.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196A1 1 0 1 1 5.88 2.33c.01.02.021.048.036.084.029.072.063.166.102.283.078.233.165.53.258.875.186.687.387 1.524.572 2.342l.033.147-.11-.102a60.597 60.597 0 0 1-1.743-1.667 16.713 16.713 0 0 1-.629-.66 4.996 4.996 0 0 1-.248-.304l-.017-.025zm9.928 8.196a1 1 0 0 1-1.366.366l-.025-.017a4.946 4.946 0 0 1-.303-.248 16.71 16.71 0 0 1-.661-.629A60.73 60.73 0 0 1 10.04 9.23l-.102-.111.147.033c.818.185 1.655.386 2.342.572.345.093.642.18.875.258a5 5 0 0 1 .367.138 1 1 0 0 1 .394 1.38zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                </svg>
                            </div>
                            <label className="username">Subject N°1984</label>
                        </a>
                        <div className="upnav navicons backtheme d-flex flex-row justify-content-center align-items-center">
                            <button className="upnav navicons backtheme navbtn nostyle">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="upnav navicons backtheme d-flex flex-row justify-content-center align-items-center">
                            <button className="upnav navicons backtheme navbtn nostyle">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="upnav navicons backtheme d-flex flex-row justify-content-center align-items-center">
                            <button className="upnav navicons backtheme navbtn nostyle">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bell-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                </svg>
                            </button>
                        </div>

                        {/* Settings menu */}

                        <div className="dropdown">
                            <button className="upnav navicons backtheme navbtn nostyle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                            </button>
                            <div className="dropdown-menu navmenu navcolor" aria-labelledby="dropdownMenuButton">
                                <div className="d-flex flex-row justify-content-around align-items-center nav_el">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="navicons backtheme d-flex flex-column justify-content-around align-items-center">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-moon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
                                            </svg>
                                        </div>
                                        <label>Mode sombre</label>
                                    </div>
                                    <label className="switch">
                                        <input checked={darkTheme} onChange={() => setDarkTheme(prevMode => !prevMode)} type="checkbox" className="default"/>
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="d-flex flex-row justify-content-around align-items-center nav_el">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="navicons backtheme d-flex flex-column justify-content-around align-items-center">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
                                            </svg>
                                        </div>
                                        <button className="nostyle" onClick={() => app.auth().signOut()}>Se déconnecter</button>
                                    </div>
                                    <div className="navicons"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Core */}

                <main className="d-flex flex-row">

                    {/* Leftnav */}

                    <div className="leftcol col-3 d-flex flex-column">
                        <ul className="nav leftnav" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <div className="leftnav_item highlight d-flex flex-row align-items-center">
                                    <div className="navicons leftnav_avatar leftnav_icons d-flex flex-row justify-content-center align-items-center">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-flower1" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 1 1 1l-.002.03a4.997 4.997 0 0 1-.064.387c-.049.241-.122.542-.213.887a60.59 60.59 0 0 1-.676 2.314L8 5.762l-.045-.144a60.59 60.59 0 0 1-.676-2.314 16.705 16.705 0 0 1-.213-.887 4.99 4.99 0 0 1-.064-.386A1 1 0 0 1 8 1zM2 9a1 1 0 1 1 .03-1.998l.091.01c.077.012.176.029.296.054.241.049.542.122.887.213a60.59 60.59 0 0 1 2.314.676L5.762 8l-.144.045c-.8.248-1.626.494-2.314.676-.345.091-.646.164-.887.213a4.99 4.99 0 0 1-.386.064L2 9zm7 5a1 1 0 0 1-2 0l.002-.03a4.996 4.996 0 0 1 .064-.386c.049-.242.122-.543.213-.888.182-.688.428-1.513.676-2.314L8 10.238l.045.144c.248.8.494 1.626.676 2.314.091.345.164.646.213.887a5.005 5.005 0 0 1 .064.386L9 14zm-5.696-2.134a1 1 0 0 1-1-1.732l.027-.014c.02-.01.048-.021.084-.036a5.09 5.09 0 0 1 .283-.102c.233-.078.53-.165.874-.258a60.598 60.598 0 0 1 2.343-.572l.147-.033-.103.11a58.239 58.239 0 0 1-1.666 1.743c-.253.252-.477.465-.66.629a5.001 5.001 0 0 1-.304.248l-.025.017zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 1 .366 1.366l-.017.025a5.001 5.001 0 0 1-.248.303 17.01 17.01 0 0 1-.629.661A60.614 60.614 0 0 1 9.23 5.96l-.111.102.033-.147a60.62 60.62 0 0 1 .572-2.342c.093-.345.18-.642.258-.875a5.066 5.066 0 0 1 .138-.367l.014-.027a1 1 0 0 1 1.366-.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196A1 1 0 1 1 5.88 2.33c.01.02.021.048.036.084.029.072.063.166.102.283.078.233.165.53.258.875.186.687.387 1.524.572 2.342l.033.147-.11-.102a60.597 60.597 0 0 1-1.743-1.667 16.713 16.713 0 0 1-.629-.66 4.996 4.996 0 0 1-.248-.304l-.017-.025zm9.928 8.196a1 1 0 0 1-1.366.366l-.025-.017a4.946 4.946 0 0 1-.303-.248 16.71 16.71 0 0 1-.661-.629A60.73 60.73 0 0 1 10.04 9.23l-.102-.111.147.033c.818.185 1.655.386 2.342.572.345.093.642.18.875.258a5 5 0 0 1 .367.138 1 1 0 0 1 .394 1.38zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                        </svg>
                                    </div>
                                    <a href="/#">Subject N°1984</a>
                                </div>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="leftnav_item highlight d-flex flex-row align-items-center" id="friends-tab" data-toggle="tab" href="#friends" role="tab" aria-controls="friends" aria-selected="false">
                                    <div className="i_font navicons leftnav_icons d-flex flex-row justify-content-center align-items-center">
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-people-fill" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                        </svg>
                                    </div>
                                    <label className="leftcategory">Amis</label>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className=" leftnav_item highlight d-flex flex-row align-items-center" id="group-tab" data-toggle="tab" href="#group" role="tab" aria-controls="group" aria-selected="false">
                                    <div className="i_font2 navicons leftnav_icons d-flex flex-row justify-content-center align-items-center">
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                            <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                        </svg>
                                    </div>
                                    <label className="leftcategory">Groupes</label>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="leftnav_item highlight d-flex flex-row align-items-center" id="marketplace-tab" data-toggle="tab" href="#marketplace" role="tab" aria-controls="marketplace" aria-selected="false">
                                    <div className="i_font navicons leftnav_icons d-flex flex-row justify-content-center align-items-center">
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-shop" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                                        </svg>
                                    </div>
                                    <label className="leftcategory">Marketplace</label>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="leftnav_item highlight d-flex flex-row align-items-center" id="watch-tab" data-toggle="tab" href="#watch" role="tab" aria-controls="watch" aria-selected="false">
                                    <div className="i_font2 navicons leftnav_icons d-flex flex-row justify-content-center align-items-center">
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-collection-play-fill" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm5.265-7.924A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
                                        </svg>
                                    </div>
                                    <label className="leftcategory">Vidéos</label>
                                </a>
                            </li>
                        </ul>
                        <div className="left_footer d-flex flex-column justify-content-end">
                            <p className="left_copyright">Fakebook © 2020</p>
                        </div>
                    </div>

                    {/* Home tabs */}

                    <div className="col-6 d-flex flex-row align-items-top justify-content-around">
                        <div className="tab-content d-flex flex-column justify-content-top align-items-center" id="myTabContent">
                            <div className="tab-pane d-flex flex-column align-items-between fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <ArticleListContextProvider>
                                    <div className="main_el article_form d-flex flex-column justify-content-center align-items-center">
                                        <ArticleForm/>
                                    </div>
                                    <ArticleList/>
                                </ArticleListContextProvider>
                            </div>
                            <div className="tab-pane fade" id="friends" role="tabpanel" aria-labelledby="profile-tab">Amis</div>
                            <div className="tab-pane fade" id="watch" role="tabpanel" aria-labelledby="contact-tab">Watch</div>
                            <div className="tab-pane fade" id="marketplace" role="tabpanel" aria-labelledby="contact-tab">Marketplace</div>
                            <div className="tab-pane fade" id="group" role="tabpanel" aria-labelledby="contact-tab">Groupes</div>
                        </div>
                    </div>

                    <div className="col-3">
                        
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;