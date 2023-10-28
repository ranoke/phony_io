import React from "react";
import { useState, useEffect } from 'react';

const UserDetails = ({ components, setCurrentComponent }) => {
    const [menuActive, setMenuActive] = useState(false);
    const [menuRowActive, setMenuRowActive] = useState(false);

    const [likeActive, setLikeActive] = useState([false, false, false, false, false, false, false, false, false, false,]);
    const handleLikeClick = (index) => {
        const newActiveItems = likeActive.map((item, i) =>
            i === index ? !item : item // Змінюємо значення на протилежне для вибраного індексу
        );
        setLikeActive(newActiveItems);
    };


    const [navActive, setNavActive] = useState(true);

    return (
        <>
            <div className="page-content">
                <div className="history-path"  >
                    <button className="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    <button className="history-path__button" onClick={() => { setCurrentComponent(15) }}>
                        Users  /
                    </button>
                    User Details
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        User Details
                    </div>


                </div>

                <div className="user-details">
                    <div className="user-details__head">
                        <div className="user-details__avatar-container">
                            <img src="./img/user-avatar.png" alt="" className="user-details__avatar" />
                            <div className="user-details__partnership">Admin</div>
                        </div>
                        <div className="user-details__tex-container">
                            <div className="user-details__name">Kairo Bruce</div>
                            <div className="user-details__email">anna_w@gmail.com</div>
                            <div className="user-details__date">21-01-2019</div>
                        </div>
                        <div className="user-details__info">
                            <div className="user-details__box">
                                <img src="./img/user-details-edit-icon.svg" alt="" className="user-details__icon" />
                                <div className="user-details__word">Posts</div>
                                <div className="user-details__number">123</div>
                            </div>
                            <div className="user-details__box">
                                <img src="./img/user-details-like-icon.svg" alt="" className="user-details__icon" />
                                <div className="user-details__word">Votes</div>
                                <div className="user-details__number">1 023</div>
                            </div>
                            <div className="user-details__box">
                                <img src="./img/user-details-comments-icon.svg" alt="" className="user-details__icon" />
                                <div className="user-details__word">Comments</div>
                                <div className="user-details__number">1 023</div>
                            </div>
                        </div>
                    </div>
                    <div className="user-details__lists">
                        <div className="user-details__nav">
                            <div className={navActive === true ? "user-details__nav-button active" : "user-details__nav-button"} onClick={() => { setNavActive(true) }}>10 last posts</div>
                            <div className={navActive === false ? "user-details__nav-button active" : "user-details__nav-button"} onClick={() => { setNavActive(false) }}>10 last Votes</div>
                        </div>
                        <div className="user-details__line"></div>
                        <div className={navActive === true ? "user-details__list active" : "user-details__list"}>
                            <div className="user-details__row">
                                <div className="user-details__row-number">123</div>
                                <div className="user-details__row-name">How do I put an 'if clause' in an SQL string?</div>
                                <div className="user-details__row-date">21-01-2019</div>
                            </div>
                            <div className="user-details__row even">
                                <div className="user-details__row-number">423</div>
                                <div className="user-details__row-name">SQL “between” not inclusive</div>
                                <div className="user-details__row-date">21-01-2019</div>
                            </div>
                            <div className="user-details__row">
                                <div className="user-details__row-number">123</div>
                                <div className="user-details__row-name">Is there a performance difference between CTE , Sub-Query, Temporary Table or Table Variable?
                                </div>
                                <div className="user-details__row-date">21-01-2019</div>
                            </div>
                            <div className="user-details__row even">
                                <div className="user-details__row-number">123</div>
                                <div className="user-details__row-name">Is there a LastIndexOf in SQL Server?</div>
                                <div className="user-details__row-date">21-01-2019</div>
                            </div>
                            <div className="user-details__row">
                                <div className="user-details__row-number">123</div>
                                <div className="user-details__row-name">How do I put an 'if clause' in an SQL string?</div>
                                <div className="user-details__row-date">21-01-2019</div>
                            </div>
                            <div className="user-details__row even">
                                <div className="user-details__row-number">423</div>
                                <div className="user-details__row-name">SQL “between” not inclusive
                                </div>
                                <div className="user-details__row-date">21-01-2019</div>
                            </div>
                            <div className="user-details__row">
                                <div className="user-details__row-number">123</div>
                                <div className="user-details__row-name">Is there a performance difference between CTE , Sub-Query, Temporary Table or Table Variable?
                                </div>
                                <div className="user-details__row-date">21-01-2019</div>
                            </div>
                            <div className="user-details__row even">
                                <div className="user-details__row-number">123</div>
                                <div className="user-details__row-name">Is there a LastIndexOf in SQL Server?</div>
                                <div className="user-details__row-date">21-01-2019</div>
                            </div>
                            <div className="user-details__row">
                                <div className="user-details__row-number">123</div>
                                <div className="user-details__row-name">Is there a performance difference between CTE , Sub-Query, Temporary Table or Table Variable?</div>
                                <div className="user-details__row-date">21-01-2019</div>
                            </div>
                            <div className="user-details__row even">
                                <div className="user-details__row-number">123</div>
                                <div className="user-details__row-name">Is there a LastIndexOf in SQL Server?
                                </div>
                                <div className="user-details__row-date">21-01-2019</div>
                            </div>
                        </div>
                        <div className={navActive === false ? "user-details__list active" : "user-details__list"}>
                            {/* <div className="user-details__row">
                                <div className="user-details__row-number">123</div>
                                <div className="user-details__row-name">How do I put an 'if clause' in an SQL string?</div>
                                <div className="user-details__row-date">21-01-2019</div>
                            </div> */}
                            <div className="user-details__row even">
                                <div className="user-details__row-number">123</div>
                                <div className="user-details__row-name">How do I put an 'if clause' in an SQL string?</div>
                                <div className="user-details__row-date">21-01-2019</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default UserDetails;