import React from "react";
import { useState, useEffect } from 'react';

const Tags = ({ components, setCurrentComponent }) => {
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
                    Tags
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Tags
                    </div>

                    <button className="boards__create-button add" onClick={() => { setCurrentComponent(13) }}>Add tag</button>

                </div>

                <div className="tags">
                    <div className="tags__head">
                        <div className="tags__heading name">Name</div>
                        <div className="tags__heading color">Color</div>
                        <div className="tags__heading privacy">Privacy</div>
                    </div>
                    <div className="tags__line"></div>
                    <div className="tags__rows">
                        <div className="tags__row">
                            <img src="./img/board-list-drag-icon.svg" alt="" className="tags__drag-icon" />
                            <div className="tags__tag red">
                                Tagname1
                            </div>
                            <div className="tags__circle red"></div>
                            <div className="tags__space-between"></div>
                            <div className="tags__privacy">
                                public
                            </div>
                            <div className="tags__buttons">
                                <img src="./img/tags-refresh-icon.svg" alt="" className="tags__button" />
                                <img src="./img/tags-edit-icon.svg" alt="" className="tags__button" onClick={() => { setCurrentComponent(12) }} />
                                <img src="./img/tags-delete-icon.svg" alt="" className="tags__button" onClick={() => { setCurrentComponent(14) }} />
                            </div>
                        </div>
                        <div className="tags__row even">
                            <img src="./img/board-list-drag-icon.svg" alt="" className="tags__drag-icon" />
                            <div className="tags__tag blue">
                                Tagname1
                            </div>
                            <div className="tags__circle blue"></div>
                            <div className="tags__space-between"></div>
                            <div className="tags__privacy">
                                <span>private</span>
                            </div>
                            <div className="tags__buttons">
                                <img src="./img/tags-refresh-icon.svg" alt="" className="tags__button" />
                                <img src="./img/tags-edit-icon.svg" alt="" className="tags__button" onClick={() => { setCurrentComponent(12) }} />
                                <img src="./img/tags-delete-icon.svg" alt="" className="tags__button" onClick={() => { setCurrentComponent(14) }} />
                            </div>
                        </div>
                        <div className="tags__row">
                            <img src="./img/board-list-drag-icon.svg" alt="" className="tags__drag-icon" />
                            <div className="tags__tag green">
                                Tagname1
                            </div>
                            <div className="tags__circle green"></div>
                            <div className="tags__space-between"></div>
                            <div className="tags__privacy">
                                public
                            </div>
                            <div className="tags__buttons">
                                <img src="./img/tags-refresh-icon.svg" alt="" className="tags__button" />
                                <img src="./img/tags-edit-icon.svg" alt="" className="tags__button" onClick={() => { setCurrentComponent(12) }} />
                                <img src="./img/tags-delete-icon.svg" alt="" className="tags__button" onClick={() => { setCurrentComponent(14) }} />
                            </div>
                        </div>
                        <div className="tags__row even">
                            <img src="./img/board-list-drag-icon.svg" alt="" className="tags__drag-icon" />
                            <div className="tags__tag pink">
                                Tagname1
                            </div>
                            <div className="tags__circle pink"></div>
                            <div className="tags__space-between"></div>
                            <div className="tags__privacy">
                                <span>private</span>
                            </div>
                            <div className="tags__buttons">
                                <img src="./img/tags-refresh-icon.svg" alt="" className="tags__button" />
                                <img src="./img/tags-edit-icon.svg" alt="" className="tags__button" onClick={() => { setCurrentComponent(12) }} />
                                <img src="./img/tags-delete-icon.svg" alt="" className="tags__button" onClick={() => { setCurrentComponent(14) }} />
                            </div>
                        </div>
                        <div className="tags__row">
                            <img src="./img/board-list-drag-icon.svg" alt="" className="tags__drag-icon" />
                            <div className="tags__tag grey">
                                Tagname1
                            </div>
                            <div className="tags__circle grey"></div>
                            <div className="tags__space-between"></div>
                            <div className="tags__privacy">
                                public
                            </div>
                            <div className="tags__buttons">
                                <img src="./img/tags-refresh-icon.svg" alt="" className="tags__button" />
                                <img src="./img/tags-edit-icon.svg" alt="" className="tags__button" onClick={() => { setCurrentComponent(12) }} />
                                <img src="./img/tags-delete-icon.svg" alt="" className="tags__button" onClick={() => { setCurrentComponent(14) }} />
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </>
    );
}
export default Tags;