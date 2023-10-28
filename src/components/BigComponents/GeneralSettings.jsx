import React from "react";
import { useState, useEffect } from 'react';

const GeneralSettings = ({ components, setCurrentComponent }) => {

    const [colorActive, setColorActive] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]);
    const handleColorClick = (index) => {
        const newActiveItems = colorActive.map((item, i) => i === index);
        setColorActive(newActiveItems);
    };

    const [segments, setSegments] = useState({
        active: [false, false, false],
    });

    const handleSegmentsClick = (index) => {
        const newActiveItems = segments.active.map((item, i) =>
            i === index ? !item : item
        );
        setSegments({ ...segments, active: newActiveItems });
    };

    const [radioActive, setRadioActive] = useState(true);

    return (
        <>
            <div className="page-content">
                <div className="history-path"  >
                    <button className="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    <button className="history-path__button" onClick={() => { setCurrentComponent(31) }}>
                        Settings  /
                    </button>
                    General
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        General settings
                    </div>

                </div>

                <div className="edit-tags statuses">
                    <div className="edit-tags__box">
                        <div className="edit-tags__heading">Name</div>
                        <input type="text" className="edit-tags__input status" placeholder="Enter status name" />
                    </div>

                    <div className="edit-tags__box language">
                        <div className="edit-tags__heading">Language</div>

                        <div className="settings-language">
                            <div className="settings-language__column">
                                <div className="settings-language__box" onClick={() => { handleColorClick(0) }}>
                                    <div className={colorActive[0] === true ? "settings-language__radio active" : "settings-language__radio"}>
                                        <div className="settings-language__circle"></div>
                                    </div>

                                    <div className="settings-language__text-container">
                                        <div className="settings-language__box-name">English</div>
                                        <div className="settings-language__box-undertext">English, US</div>
                                    </div>

                                    <img src="./img/language-flag-american.svg" alt="" className="settings-language__flag" />
                                </div>
                                <div className="settings-language__box" onClick={() => { handleColorClick(1) }}>
                                    <div className={colorActive[1] === true ? "settings-language__radio active" : "settings-language__radio"}>
                                        <div className="settings-language__circle"></div>
                                    </div>

                                    <div className="settings-language__text-container">
                                        <div className="settings-language__box-name">English</div>
                                        <div className="settings-language__box-undertext">English, US</div>
                                    </div>

                                    <img src="./img/language-flag-american.svg" alt="" className="settings-language__flag" />
                                </div>
                                <div className="settings-language__box" onClick={() => { handleColorClick(2) }}>
                                    <div className={colorActive[2] === true ? "settings-language__radio active" : "settings-language__radio"}>
                                        <div className="settings-language__circle"></div>
                                    </div>

                                    <div className="settings-language__text-container">
                                        <div className="settings-language__box-name">English</div>
                                        <div className="settings-language__box-undertext">English, US</div>
                                    </div>

                                    <img src="./img/language-flag-american.svg" alt="" className="settings-language__flag" />
                                </div>
                            </div>
                            <div className="settings-language__column">
                                <div className="settings-language__box" onClick={() => { handleColorClick(3) }}>
                                    <div className={colorActive[3] === true ? "settings-language__radio active" : "settings-language__radio"}>
                                        <div className="settings-language__circle"></div>
                                    </div>

                                    <div className="settings-language__text-container">
                                        <div className="settings-language__box-name">German</div>
                                        <div className="settings-language__box-undertext">Deutsch</div>
                                    </div>

                                    <img src="./img/language-flag-german.svg" alt="" className="settings-language__flag" />
                                </div>
                                <div className="settings-language__box" onClick={() => { handleColorClick(4) }}>
                                    <div className={colorActive[4] === true ? "settings-language__radio active" : "settings-language__radio"}>
                                        <div className="settings-language__circle"></div>
                                    </div>

                                    <div className="settings-language__text-container">
                                        <div className="settings-language__box-name">German</div>
                                        <div className="settings-language__box-undertext">Deutsch</div>
                                    </div>

                                    <img src="./img/language-flag-german.svg" alt="" className="settings-language__flag" />
                                </div>
                                <div className="settings-language__box" onClick={() => { handleColorClick(5) }}>
                                    <div className={colorActive[5] === true ? "settings-language__radio active" : "settings-language__radio"}>
                                        <div className="settings-language__circle"></div>
                                    </div>

                                    <div className="settings-language__text-container">
                                        <div className="settings-language__box-name">German</div>
                                        <div className="settings-language__box-undertext">Deutsch</div>
                                    </div>

                                    <img src="./img/language-flag-german.svg" alt="" className="settings-language__flag" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="edit-tags__box settings-checkboxes">
                        <div className="post-head__row" onClick={() => { handleSegmentsClick(0) }}>

                            <div className={segments.active[0] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                            </div>

                            <div className="post-head__text-container">
                                <div className="post-head__check-box-text-1">Show on roadmap</div>

                            </div>
                        </div>
                        <div className="post-head__row" onClick={() => { handleSegmentsClick(1) }}>

                            <div className={segments.active[1] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                            </div>

                            <div className="post-head__text-container">
                                <div className="post-head__check-box-text-1">Indexed</div>
                                <div className="post-head__check-box-text-2">Changelog will be indexed by search engines like Google. Turn it off if you <br />don’t want that.</div>
                            </div>
                        </div>
                    </div>




                    <div className="edit-tags__buttons settings">
                        <button className="edit-tags__button" onClick={() => { setCurrentComponent(32) }}>Submit</button>
                    </div>
                </div>


            </div>
        </>
    );
}
export default GeneralSettings;