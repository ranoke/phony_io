import React from "react";
import { useState, useEffect } from 'react';

const AddChangeLogLabel = ({ components, setCurrentComponent }) => {

    const [colorActive, setColorActive] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]);
    const handleColorClick = (index) => {
        const newActiveItems = colorActive.map((item, i) => i === index);
        setColorActive(newActiveItems);
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
                    <button class="history-path__button" onClick={() => { setCurrentComponent(27) }}>
                        Changelog labels  /
                    </button>
                    Adds new changelog label
                </div>

                <div class="boards__head">

                    <div class="component-title">
                        Adds new changelog label
                    </div>

                </div>

                <div class="edit-tags">
                    <div class="edit-tags__box">
                        <div class="edit-tags__heading">Name</div>
                        <input type="text" class="edit-tags__input changelog-label" placeholder="Enter status name" />
                    </div>
                    <div class="edit-tags__box changelog-label">
                        <div class="edit-tags__heading">Color</div>
                        <div class="edit-tags__balls">
                            <div class="edit-tags__balls-row">
                                <div class={colorActive[0] === true ? "edit-tags__ball color-30 active" : "edit-tags__ball color-30"}
                                    onClick={() => { handleColorClick(0) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[0] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[1] === true ? "edit-tags__ball color-31 active" : "edit-tags__ball color-31"}
                                    onClick={() => { handleColorClick(1) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[1] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[2] === true ? "edit-tags__ball color-32 active" : "edit-tags__ball color-32"}
                                    onClick={() => { handleColorClick(2) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[2] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[3] === true ? "edit-tags__ball color-33 active" : "edit-tags__ball color-33"}
                                    onClick={() => { handleColorClick(3) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[3] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[4] === true ? "edit-tags__ball color-34 active" : "edit-tags__ball color-34"}
                                    onClick={() => { handleColorClick(4) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[4] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                                <div class={colorActive[5] === true ? "edit-tags__ball color-35 active" : "edit-tags__ball color-35"}
                                    onClick={() => { handleColorClick(5) }}
                                >
                                    <img src="./img/tag-chosen-icon.svg" alt="" class={colorActive[5] === true ? "edit-tags__chosen-icon active" : "edit-tags__chosen-icon"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="edit-tags__buttons">
                        <button class="edit-tags__button cancel">Cancel</button>
                        <button class="edit-tags__button">Submit</button>
                    </div>
                </div>


            </div>
        </>
    );
}
export default AddChangeLogLabel;