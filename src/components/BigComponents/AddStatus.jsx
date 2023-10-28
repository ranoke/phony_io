import React from "react";
import { useState, useEffect } from 'react';

const AddStatus = ({ components, setCurrentComponent }) => {

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
                    <button class="history-path__button" onClick={() => { setCurrentComponent(21) }}>
                        Statuses  /
                    </button>
                    Add status
                </div>

                <div class="boards__head">

                    <div class="component-title">
                        Add status
                    </div>

                </div>

                <div class="edit-tags statuses">
                    <div class="edit-tags__box">
                        <div class="edit-tags__heading">Name</div>
                        <input type="text" class="edit-tags__input status" placeholder="Enter status name" />
                    </div>

                    <div className="edit-tags__box checkboxes">
                        <div className="post-head__row" onClick={() => { handleSegmentsClick(0) }}>

                            <div className={segments.active[0] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                            </div>

                            <div className="post-head__text-container">
                                <div className="post-head__check-box-text-1">Votable</div>
                                <div className="post-head__check-box-text-2">Defines if posts in this status can get votes</div>
                            </div>
                        </div>
                        <div className="post-head__row" onClick={() => { handleSegmentsClick(1) }}>

                            <div className={segments.active[1] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                            </div>

                            <div className="post-head__text-container">
                                <div className="post-head__check-box-text-1">Show on roadmap</div>
                                <div className="post-head__check-box-text-2">Defines if posts in this status should be added to the roadmap</div>
                            </div>
                        </div>
                    </div>


                    <div class="edit-tags__box">
                        <div class="edit-tags__heading">Privacy</div>
                        <div class="edit-tags__radios">
                            <div class="edit-tags__radios">
                                <div class="edit-tags__row" onClick={() => { setRadioActive(true) }}>

                                    <div class={radioActive === true ? " edit-tags__check-box radio active" : "edit-tags__check-box radio"}>
                                        <div class={radioActive === true ? " edit-tags__circle active" : "edit-tags__circle"}></div>
                                    </div>

                                    Public
                                </div>
                                <div class="edit-tags__row" onClick={() => { setRadioActive(false) }}>

                                    <div class={radioActive === false ? " edit-tags__check-box radio active" : "edit-tags__check-box radio"}>
                                        <div class={radioActive === false ? " edit-tags__circle active" : "edit-tags__circle"}></div>
                                    </div>

                                    Private

                                </div>
                            </div>
                        </div>
                        <div class="edit-tags__text status">Privacy flag that defines post visibility and tag visibility at the board</div>
                    </div>
                    <div class="edit-tags__box">
                        <div class="edit-tags__heading">Color</div>
                        <div class="edit-tags__balls">
                            <div class="edit-tags__balls-row">
                                <div class={colorActive[0] === true ? "edit-tags__ball color-0 active" : "edit-tags__ball color-0"}
                                    onClick={() => { handleColorClick(0) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[0] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[1] === true ? "edit-tags__ball color-1 active" : "edit-tags__ball color-1"}
                                    onClick={() => { handleColorClick(1) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[1] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[2] === true ? "edit-tags__ball color-2 active" : "edit-tags__ball color-2"}
                                    onClick={() => { handleColorClick(2) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[2] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[3] === true ? "edit-tags__ball color-3 active" : "edit-tags__ball color-3"}
                                    onClick={() => { handleColorClick(3) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[3] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[4] === true ? "edit-tags__ball color-4 active" : "edit-tags__ball color-4"}
                                    onClick={() => { handleColorClick(4) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[4] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[5] === true ? "edit-tags__ball color-5 active" : "edit-tags__ball color-5"}
                                    onClick={() => { handleColorClick(5) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[5] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[6] === true ? "edit-tags__ball color-6 active" : "edit-tags__ball color-6"}
                                    onClick={() => { handleColorClick(6) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[6] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[7] === true ? "edit-tags__ball color-7 active" : "edit-tags__ball color-7"}
                                    onClick={() => { handleColorClick(7) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[7] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[8] === true ? "edit-tags__ball color-8 active" : "edit-tags__ball color-8"}
                                    onClick={() => { handleColorClick(8) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[8] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[9] === true ? "edit-tags__ball color-9 active" : "edit-tags__ball color-9"}
                                    onClick={() => { handleColorClick(9) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[9] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                            </div>
                            <div class="edit-tags__balls-row">
                                <div class={colorActive[10] === true ? "edit-tags__ball color-10 active" : "edit-tags__ball color-10"}
                                    onClick={() => { handleColorClick(10) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[10] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[11] === true ? "edit-tags__ball color-11 active" : "edit-tags__ball color-11"}
                                    onClick={() => { handleColorClick(11) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[11] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[12] === true ? "edit-tags__ball color-12 active" : "edit-tags__ball color-12"}
                                    onClick={() => { handleColorClick(12) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[12] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[13] === true ? "edit-tags__ball color-13 active" : "edit-tags__ball color-13"}
                                    onClick={() => { handleColorClick(13) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[13] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[14] === true ? "edit-tags__ball color-14 active" : "edit-tags__ball color-14"}
                                    onClick={() => { handleColorClick(14) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[14] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[15] === true ? "edit-tags__ball color-15 active" : "edit-tags__ball color-15"}
                                    onClick={() => { handleColorClick(15) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[15] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[16] === true ? "edit-tags__ball color-16 active" : "edit-tags__ball color-16"}
                                    onClick={() => { handleColorClick(16) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[16] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[17] === true ? "edit-tags__ball color-17 active" : "edit-tags__ball color-17"}
                                    onClick={() => { handleColorClick(17) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[17] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[18] === true ? "edit-tags__ball color-18 active" : "edit-tags__ball color-18"}
                                    onClick={() => { handleColorClick(18) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[18] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[19] === true ? "edit-tags__ball color-19 active" : "edit-tags__ball color-19"}
                                    onClick={() => { handleColorClick(19) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[19] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="edit-tags__buttons status">
                        <button class="edit-tags__button cancel">Cancel</button>
                        <button class="edit-tags__button">Submit</button>
                    </div>
                </div>


            </div>
        </>
    );
}
export default AddStatus;