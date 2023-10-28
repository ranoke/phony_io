import React from "react";
import { useState, useEffect } from 'react';

const Activities = ({ components, setCurrentComponent }) => {
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


    const [pagination, setPagination] = useState(1);
    const handlePagination = (type) => {
        if (type === '-') {
            if (pagination > 1) {
                let pagIndex = pagination - 1;
                setPagination(pagIndex)
            }
        } else if (type === '+') {
            if (pagination < 5) {
                let pagIndex = pagination + 1;
                setPagination(pagIndex)
            }
        }
    }

    return (
        <>
            <div className="page-content">
                <div className="history-path"  >
                    <button className="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    Activities
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Activities
                    </div>

                </div>

                <div className="activities">
                    <div className={pagination === 1 ? "activities__rows active" : "activities__rows"}>
                        <div className="activities__row">
                            <img src="./img/activities-avatar-1.svg" alt="" className="activities__avatar" />
                            <div className="activities__calling-container">
                                <div className="activities__name">Sophia-Rose Nava</div>
                                <div className="activities__voted">upvoted</div>
                            </div>
                            <div className="activities__time">6 min ago</div>
                            <div className="activities__text-container one">
                                <div className="activities__text-h">Welcome to Nolt #1</div>
                            </div>
                        </div>
                        <div className="activities__row even">
                            <img src="./img/activities-avatar-2.svg" alt="" className="activities__avatar" />
                            <div className="activities__calling-container">
                                <div className="activities__name">Yuvaan Whittington</div>
                                <div className="activities__voted">commented</div>
                            </div>
                            <div className="activities__time">38 min ago</div>
                            <div className="activities__text-container two">
                                <div className="activities__text-h">Tips and Tricks #2</div>
                                <div className="activities__text-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            </div>
                        </div>
                        <div className="activities__row">
                            <img src="./img/activities-avatar-1.svg" alt="" className="activities__avatar" />
                            <div className="activities__calling-container">
                                <div className="activities__name">Sophia-Rose Nava</div>
                                <div className="activities__voted">upvoted</div>
                            </div>
                            <div className="activities__time">6 min ago</div>
                            <div className="activities__text-container one">
                                <div className="activities__text-h">Welcome to Nolt #1</div>
                            </div>
                        </div>
                        <div className="activities__row even">
                            <img src="./img/activities-avatar-2.svg" alt="" className="activities__avatar" />
                            <div className="activities__calling-container">
                                <div className="activities__name">Yuvaan Whittington</div>
                                <div className="activities__voted">commented</div>
                            </div>
                            <div className="activities__time">38 min ago</div>
                            <div className="activities__text-container two">
                                <div className="activities__text-h">Tips and Tricks #2</div>
                                <div className="activities__text-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            </div>
                        </div>
                        <div className="activities__row">
                            <img src="./img/activities-avatar-1.svg" alt="" className="activities__avatar" />
                            <div className="activities__calling-container">
                                <div className="activities__name">Sophia-Rose Nava</div>
                                <div className="activities__voted">upvoted</div>
                            </div>
                            <div className="activities__time">6 min ago</div>
                            <div className="activities__text-container one">
                                <div className="activities__text-h">Welcome to Nolt #1</div>
                            </div>
                        </div>
                        <div className="activities__row even">
                            <img src="./img/activities-avatar-2.svg" alt="" className="activities__avatar" />
                            <div className="activities__calling-container">
                                <div className="activities__name">Yuvaan Whittington</div>
                                <div className="activities__voted">commented</div>
                            </div>
                            <div className="activities__time">38 min ago</div>
                            <div className="activities__text-container two">
                                <div className="activities__text-h">Tips and Tricks #2</div>
                                <div className="activities__text-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            </div>
                        </div>
                        <div className="activities__row">
                            <img src="./img/activities-avatar-1.svg" alt="" className="activities__avatar" />
                            <div className="activities__calling-container">
                                <div className="activities__name">Sophia-Rose Nava</div>
                                <div className="activities__voted">upvoted</div>
                            </div>
                            <div className="activities__time">6 min ago</div>
                            <div className="activities__text-container one">
                                <div className="activities__text-h">Welcome to Nolt #1</div>
                            </div>
                        </div>
                        <div className="activities__row even">
                            <img src="./img/activities-avatar-2.svg" alt="" className="activities__avatar" />
                            <div className="activities__calling-container">
                                <div className="activities__name">Yuvaan Whittington</div>
                                <div className="activities__voted">commented</div>
                            </div>
                            <div className="activities__time">38 min ago</div>
                            <div className="activities__text-container two">
                                <div className="activities__text-h">Tips and Tricks #2</div>
                                <div className="activities__text-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            </div>
                        </div>
                    </div>

                    <div className={pagination === 2 ? "activities__rows active" : "activities__rows"}>
                        <div className="activities__row">
                            <img src="./img/activities-avatar-1.svg" alt="" className="activities__avatar" />
                            <div className="activities__calling-container">
                                <div className="activities__name">Sophia-Rose Nava</div>
                                <div className="activities__voted">upvoted</div>
                            </div>
                            <div className="activities__time">6 min ago</div>
                            <div className="activities__text-container one">
                                <div className="activities__text-h">Welcome to Nolt #1</div>
                            </div>
                        </div>
                        <div className="activities__row even">
                            <img src="./img/activities-avatar-2.svg" alt="" className="activities__avatar" />
                            <div className="activities__calling-container">
                                <div className="activities__name">Yuvaan Whittington</div>
                                <div className="activities__voted">commented</div>
                            </div>
                            <div className="activities__time">38 min ago</div>
                            <div className="activities__text-container two">
                                <div className="activities__text-h">Tips and Tricks #2</div>
                                <div className="activities__text-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            </div>
                        </div>
                        <div className="activities__row">
                            <img src="./img/activities-avatar-1.svg" alt="" className="activities__avatar" />
                            <div className="activities__calling-container">
                                <div className="activities__name">Sophia-Rose Nava</div>
                                <div className="activities__voted">upvoted</div>
                            </div>
                            <div className="activities__time">6 min ago</div>
                            <div className="activities__text-container one">
                                <div className="activities__text-h">Welcome to Nolt #1</div>
                            </div>
                        </div>
                        <div className="activities__row even">
                            <img src="./img/activities-avatar-2.svg" alt="" className="activities__avatar" />
                            <div className="activities__calling-container">
                                <div className="activities__name">Yuvaan Whittington</div>
                                <div className="activities__voted">commented</div>
                            </div>
                            <div className="activities__time">38 min ago</div>
                            <div className="activities__text-container two">
                                <div className="activities__text-h">Tips and Tricks #2</div>
                                <div className="activities__text-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            </div>
                        </div>
                        <div className="activities__row">
                            <img src="./img/activities-avatar-1.svg" alt="" className="activities__avatar" />
                            <div className="activities__calling-container">
                                <div className="activities__name">Sophia-Rose Nava</div>
                                <div className="activities__voted">upvoted</div>
                            </div>
                            <div className="activities__time">6 min ago</div>
                            <div className="activities__text-container one">
                                <div className="activities__text-h">Welcome to Nolt #1</div>
                            </div>
                        </div>
                    </div>


                    <div className="post-line"></div>

                    <div className="post-foot">
                        <div className="post-foot__pagination">
                            <div className="post-foot__pag-box" onClick={() => { setPagination(1) }}>
                                <img src="./img/double-arrow-pag.svg" alt="" className="post-foot__double-arrow" />
                            </div>
                            <div className="post-foot__pag-box" onClick={() => { handlePagination('-') }}>
                                <img src="./img/arrow-pag.svg" alt="" className="post-foot__arrow" />
                            </div>

                            <div className={pagination === 1 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(1) }}>
                                1
                            </div>
                            <div className={pagination === 2 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(2) }}>
                                2
                            </div>
                            <div className={pagination === 3 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(3) }}>
                                3
                            </div>
                            <div className={pagination === 4 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(4) }}>
                                4
                            </div>
                            <div className={pagination === 5 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(5) }}>
                                5
                            </div>

                            <div className="post-foot__pag-box" onClick={() => { handlePagination('+') }}>
                                <img src="./img/arrow-pag.svg" alt="" className="post-foot__arrow right" />
                            </div>
                            <div className="post-foot__pag-box" onClick={() => { setPagination(5) }}>
                                <img src="./img/double-arrow-pag.svg" alt="" className="post-foot__double-arrow right" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Activities;