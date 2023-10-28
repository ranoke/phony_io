import React from "react";
import { useState, useEffect } from 'react';

const ChangeLogSettings = ({ components, setCurrentComponent }) => {

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
            <div class="page-content">
                <div class="history-path"  >
                    <button class="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    <button class="history-path__button" onClick={() => { setCurrentComponent(24) }}>
                        Changelog  /
                    </button>
                    Changelog settings
                </div>

                <div class="boards__head">

                    <div class="component-title">
                        Changelog settings
                    </div>

                </div>

                <div class="edit-tags changelog-settings">

                    <div class="edit-tags__box">
                        <div class="edit-tags__heading">Privacy</div>
                        <div class="edit-tags__radios change-log-settings">

                            <div class="edit-tags__row" onClick={() => { setRadioActive(true) }}>

                                <div class={radioActive === true ? " edit-tags__check-box radio changelog active" : "edit-tags__check-box changelog radio"}>
                                    <div class={radioActive === true ? " edit-tags__circle active" : "edit-tags__circle"}></div>
                                </div>

                                <div className="post-head__text-container">
                                    <div className="post-head__check-box-text-1">Public</div>
                                    <div className="post-head__check-box-text-2">Show this changelog on the public view so all users can find and access it.</div>
                                </div>
                            </div>
                            <div class="edit-tags__row" onClick={() => { setRadioActive(false) }}>

                                <div class={radioActive === false ? " edit-tags__check-box radio active" : "edit-tags__check-box radio"}>
                                    <div class={radioActive === false ? " edit-tags__circle active" : "edit-tags__circle"}></div>
                                </div>


                                <div className="post-head__text-container">
                                    <div className="post-head__check-box-text-1">Private</div>
                                    <div className="post-head__check-box-text-2">The changelog will not be shown to your users anymore.</div>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="edit-tags__box checkboxes">
                        <div className="post-head__row" onClick={() => { handleSegmentsClick(1) }}>

                            <div className={segments.active[1] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                            </div>

                            <div className="post-head__text-container">
                                <div className="post-head__check-box-text-1">Indexed</div>
                                <div className="post-head__check-box-text-2">Changelog will be indexed by search engines like Google. Turn it off if you <br /> don’t want that.</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}
export default ChangeLogSettings;