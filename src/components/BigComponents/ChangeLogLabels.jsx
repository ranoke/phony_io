import React from "react";
import { useState, useEffect } from 'react';

const ChangeLogLabels = ({ components, setCurrentComponent }) => {
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
                    <button className="history-path__button" onClick={() => { setCurrentComponent(24) }}>
                        Changelog  /
                    </button>
                    Changelog labels
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Changelog labels
                    </div>

                    <button className="boards__create-button add-label" onClick={() => { setCurrentComponent(28) }}>Add label</button>

                </div>

                <div className="changelog-labels">
                    <div className="changelog-labels__head">
                        <div className="changelog-labels__heading name">Name</div>
                        <div className="changelog-labels__heading color">Color</div>
                    </div>
                    <div className="changelog-labels__line"></div>
                    <div className="changelog-labels__rows">
                        <div className="changelog-labels__row">
                            <img src="./img/board-list-drag-icon.svg" alt="" className="changelog-labels__drag-icon" />
                            <div className="changelog-labels__tag-box">
                                <div className="changelog-labels__tag dark-green">
                                    Changelog
                                </div>
                            </div>
                            <div className="changelog-labels__color">
                                <div className="changelog-labels__circle dark-green"></div>
                            </div>
                            <div className="changelog-labels__buttons">
                                <img src="./img/tags-edit-icon.svg" alt="" className="changelog-labels__button" onClick={() => { setCurrentComponent(29) }} />
                                <img src="./img/tags-delete-icon.svg" alt="" className="changelog-labels__button" onClick={() => { setCurrentComponent(30) }} />
                            </div>
                        </div>
                        <div className="changelog-labels__row even">
                            <img src="./img/board-list-drag-icon.svg" alt="" className="changelog-labels__drag-icon" />
                            <div className="changelog-labels__tag-box">
                                <div className="changelog-labels__tag blue">
                                    Feedback
                                </div>
                            </div>
                            <div className="changelog-labels__color">
                                <div className="changelog-labels__circle blue"></div>
                            </div>
                            <div className="changelog-labels__buttons">
                                <img src="./img/tags-edit-icon.svg" alt="" className="changelog-labels__button" onClick={() => { setCurrentComponent(29) }} />
                                <img src="./img/tags-delete-icon.svg" alt="" className="changelog-labels__button" onClick={() => { setCurrentComponent(30) }} />
                            </div>
                        </div>
                        <div className="changelog-labels__row">
                            <img src="./img/board-list-drag-icon.svg" alt="" className="changelog-labels__drag-icon" />
                            <div className="changelog-labels__tag-box">
                                <div className="changelog-labels__tag grey">
                                    Admin
                                </div>
                            </div>
                            <div className="changelog-labels__color">
                                <div className="changelog-labels__circle grey"></div>
                            </div>
                            <div className="changelog-labels__buttons">
                                <img src="./img/tags-edit-icon.svg" alt="" className="changelog-labels__button" onClick={() => { setCurrentComponent(29) }} />
                                <img src="./img/tags-delete-icon.svg" alt="" className="changelog-labels__button" onClick={() => { setCurrentComponent(30) }} />
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </>
    );
}
export default ChangeLogLabels;