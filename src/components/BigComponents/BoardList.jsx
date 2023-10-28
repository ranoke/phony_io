import React from "react";
import { useState, useEffect } from 'react';

const BoardList = ({ components, setCurrentComponent }) => {
    const [menuActive, setMenuActive] = useState(false);
    const [menuRowActive, setMenuRowActive] = useState(false);

    const [eyeActive, setEyeActive] = useState([false, false, false, false, false, false, false, false, false, false,]);
    const handleEyeClick = (index) => {
        const newActiveItems = eyeActive.map((item, i) =>
            i === index ? !item : item // Змінюємо значення на протилежне для вибраного індексу
        );
        setEyeActive(newActiveItems);
    };

    const [lockActive, setLockActive] = useState([false, false, false, false, false, false, false, false, false, false,]);
    const handleLockClick = (index) => {
        const newActiveItems = lockActive.map((item, i) =>
            i === index ? !item : item // Змінюємо значення на протилежне для вибраного індексу
        );
        setLockActive(newActiveItems);
    };

    const [notifyActive, setNotifyActive] = useState(0);

    return (
        <>
            <div className="page-content">
                <div className="history-path"  >
                    <button className="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    Boards
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Boards
                    </div>

                    <button className="boards__create-button" onClick={() => { setCurrentComponent(2) }}>Create Board</button>

                </div>

                <div className={notifyActive === 1 ? "board-notify fail active" : "board-notify"}>
                    <div className="board-notify__info-box">
                        <img src="./img/board-fail-icon.svg" alt="LOL" className="board-notify__icon" />
                        You can’t do that mate.
                    </div>
                    <img src="./img/board-fail-success-cross.svg" alt="" className="board-notify__cross" onClick={() => { setNotifyActive(0) }} />
                </div>

                <div className={notifyActive === 2 ? "board-notify success active" : "board-notify"}>
                    <div className="board-notify__info-box">
                        <img src="./img/board-success-icon.svg" alt="" className="board-notify__icon" />
                        This is a success message!
                    </div>
                    <img src="./img/board-fail-success-cross.svg" alt="" className="board-notify__cross" onClick={() => { setNotifyActive(0) }} />
                </div>

                <div className="board-list">
                    <div className="board-list__head">
                        <div className="board-list__heading first">Name</div>
                        <div className="board-list__heading">Posts</div>
                    </div>
                    <div className="board-list__line"></div>
                    <div className="board-list__rows">
                        <div className="board-list__row">
                            <div className="board-list__name-box">
                                <img src="./img/board-list-drag-icon.svg" alt="" className="board-list__drag-icon" />
                                <div className="board-list__name">Send status updates back through Intercom</div>
                            </div>
                            <div className="board-list__number">12</div>
                            <div className="board-list__buttons">
                                <img src="./img/board-list-eye-icon.svg" alt=""
                                    className={eyeActive[0] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleEyeClick(0); if (menuRowActive === true) { setMenuRowActive(false) } else { setMenuRowActive(true) } }} />
                                <img src="./img/board-list-lock-icon.svg" alt=""
                                    className={lockActive[0] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleLockClick(0) }} />
                                <img src="./img/board-list-menu-icon.svg" alt="" className="board-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="board-list__row even">
                            <div className="board-list__name-box">
                                <img src="./img/board-list-drag-icon.svg" alt="" className="board-list__drag-icon" />
                                <div className="board-list__name">Send status updates back through Intercom</div>
                            </div>
                            <div className="board-list__number">12</div>
                            <div className="board-list__buttons">
                                <img src="./img/board-list-eye-icon.svg" alt=""
                                    className={eyeActive[1] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleEyeClick(1); if (menuRowActive === true) { setMenuRowActive(false) } else { setMenuRowActive(true) } }} />
                                <img src="./img/board-list-lock-icon.svg" alt=""
                                    className={lockActive[1] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleLockClick(1) }} />
                                <img src="./img/board-list-menu-icon.svg" alt="" className="board-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="board-list__row ">
                            <div className="board-list__name-box">
                                <img src="./img/board-list-drag-icon.svg" alt="" className="board-list__drag-icon" />
                                <div className="board-list__name">Send status updates back through Intercom</div>
                            </div>
                            <div className="board-list__number">12</div>
                            <div className="board-list__buttons">
                                <img src="./img/board-list-eye-icon.svg" alt=""
                                    className={eyeActive[2] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleEyeClick(2); if (menuRowActive === true) { setMenuRowActive(false) } else { setMenuRowActive(true) } }} />
                                <img src="./img/board-list-lock-icon.svg" alt=""
                                    className={lockActive[2] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleLockClick(2) }} />
                                <img src="./img/board-list-menu-icon.svg" alt="" className="board-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="board-list__row even">
                            <div className="board-list__name-box">
                                <img src="./img/board-list-drag-icon.svg" alt="" className="board-list__drag-icon" />
                                <div className="board-list__name">Send status updates back through Intercom</div>
                            </div>
                            <div className="board-list__number">12</div>
                            <div className="board-list__buttons">
                                <img src="./img/board-list-eye-icon.svg" alt=""
                                    className={eyeActive[3] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleEyeClick(3); if (menuRowActive === true) { setMenuRowActive(false) } else { setMenuRowActive(true) } }} />
                                <img src="./img/board-list-lock-icon.svg" alt=""
                                    className={lockActive[3] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleLockClick(3) }} />
                                <img src="./img/board-list-menu-icon.svg" alt="" className="board-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="board-list__row">
                            <div className="board-list__name-box">
                                <img src="./img/board-list-drag-icon.svg" alt="" className="board-list__drag-icon" />
                                <div className="board-list__name">Send status updates back through Intercom</div>
                            </div>
                            <div className="board-list__number">12</div>
                            <div className="board-list__buttons">
                                <img src="./img/board-list-eye-icon.svg" alt=""
                                    className={eyeActive[4] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleEyeClick(4); if (menuRowActive === true) { setMenuRowActive(false) } else { setMenuRowActive(true) } }} />
                                <img src="./img/board-list-lock-icon.svg" alt=""
                                    className={lockActive[4] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleLockClick(4) }} />
                                <img src="./img/board-list-menu-icon.svg" alt="" className="board-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="board-list__row even">
                            <div className="board-list__name-box">
                                <img src="./img/board-list-drag-icon.svg" alt="" className="board-list__drag-icon" />
                                <div className="board-list__name">Send status updates back through Intercom</div>
                            </div>
                            <div className="board-list__number">12</div>
                            <div className="board-list__buttons">
                                <img src="./img/board-list-eye-icon.svg" alt=""
                                    className={eyeActive[5] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleEyeClick(5); if (menuRowActive === true) { setMenuRowActive(false) } else { setMenuRowActive(true) } }} />
                                <img src="./img/board-list-lock-icon.svg" alt=""
                                    className={lockActive[5] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleLockClick(5) }} />
                                <img src="./img/board-list-menu-icon.svg" alt="" className="board-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="board-list__row">
                            <div className="board-list__name-box">
                                <img src="./img/board-list-drag-icon.svg" alt="" className="board-list__drag-icon" />
                                <div className="board-list__name">Send status updates back through Intercom</div>
                            </div>
                            <div className="board-list__number">12</div>
                            <div className="board-list__buttons">
                                <img src="./img/board-list-eye-icon.svg" alt=""
                                    className={eyeActive[6] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleEyeClick(6); if (menuRowActive === true) { setMenuRowActive(false) } else { setMenuRowActive(true) } }} />
                                <img src="./img/board-list-lock-icon.svg" alt=""
                                    className={lockActive[6] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleLockClick(6) }} />
                                <img src="./img/board-list-menu-icon.svg" alt="" className="board-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="board-list__row even">
                            <div className="board-list__name-box">
                                <img src="./img/board-list-drag-icon.svg" alt="" className="board-list__drag-icon" />
                                <div className="board-list__name">Send status updates back through Intercom</div>
                            </div>
                            <div className="board-list__number">12</div>
                            <div className="board-list__buttons">
                                <img src="./img/board-list-eye-icon.svg" alt=""
                                    className={eyeActive[7] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleEyeClick(7); if (menuRowActive === true) { setMenuRowActive(false) } else { setMenuRowActive(true) } }} />
                                <img src="./img/board-list-lock-icon.svg" alt=""
                                    className={lockActive[7] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleLockClick(7) }} />
                                <img src="./img/board-list-menu-icon.svg" alt="" className="board-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="board-list__row">
                            <div className="board-list__name-box">
                                <img src="./img/board-list-drag-icon.svg" alt="" className="board-list__drag-icon" />
                                <div className="board-list__name">Send status updates back through Intercom</div>
                            </div>
                            <div className="board-list__number">12</div>
                            <div className="board-list__buttons">
                                <img src="./img/board-list-eye-icon.svg" alt=""
                                    className={eyeActive[8] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleEyeClick(8); if (menuRowActive === true) { setMenuRowActive(false) } else { setMenuRowActive(true) } }} />
                                <img src="./img/board-list-lock-icon.svg" alt=""
                                    className={lockActive[8] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleLockClick(8) }} />
                                <img src="./img/board-list-menu-icon.svg" alt="" className="board-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="board-list__row even">
                            <div className="board-list__name-box">
                                <img src="./img/board-list-drag-icon.svg" alt="" className="board-list__drag-icon" />
                                <div className="board-list__name">Send status updates back through Intercom</div>
                            </div>
                            <div className="board-list__number">12</div>
                            <div className="board-list__buttons">
                                <img src="./img/board-list-eye-icon.svg" alt=""
                                    className={eyeActive[9] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleEyeClick(9); if (menuRowActive === true) { setMenuRowActive(false) } else { setMenuRowActive(true) } }} />
                                <img src="./img/board-list-lock-icon.svg" alt=""
                                    className={lockActive[9] === true ? "board-list__lock-button active" : "board-list__lock-button"}
                                    onClick={() => { handleLockClick(9) }} />
                                <img src="./img/board-list-menu-icon.svg" alt="" className="board-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={menuActive === true ? "boards-menu active" : "boards-menu"}>
                    <div className="boards-menu__box">
                        <img src="./img/boards-menu-cross.svg" onClick={() => { setMenuActive(false) }} alt="" className="boards-menu__cross" />
                        <div className="boards-menu__rows">
                            <div className={menuRowActive === true ? "boards-menu__row active" : "boards-menu__row"} onClick={() => {
                                setNotifyActive(2);
                                setMenuActive(false);
                            }
                            }>
                                <img src="./img/boards-menu-icon-1.svg" alt="" className={menuRowActive === true ? "boards-menu__icon active" : "boards-menu__icon"} />
                                <div className="boards-menu__row-text">Public view</div>
                            </div>
                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(3) }}>
                                <img src="./img/boards-menu-icon-2.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">Edit board settings</div>
                            </div>


                            
                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(11) }}>
                                <img src="./img/boards-menu-icon-3.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">List board tags</div>
                            </div>

                            
                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(3) }}>
                                <img src="./img/boards-menu-icon-4.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">Edit board post</div>
                            </div>
                            <div className="boards-menu__row" onClick={() => {
                                if (lockActive[0] === true) {
                                    setNotifyActive(1);
                                    setMenuActive(false);
                                } else {
                                    setCurrentComponent(4)
                                }
                            }}>
                                <img src="./img/boards-menu-icon-5.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">Delete board</div>
                            </div>

                            {/* ВЕСТИМЕ В СТОРІНКИ ПОСТІВ */}
                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(5) }}>
                                <img src="./img/boards-menu-icon-6.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">View posts</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}
export default BoardList;