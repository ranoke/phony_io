import React from "react";
import { useState, useEffect } from 'react';

const ReplaceTag = ({ components, setCurrentComponent }) => {
    const [dropActive, setDropActive] = useState(false);
    const [drop, setDrop] = useState("Select tag");


    const [imported, setImported] = useState(false);

    const [file, setFile] = useState([]);

    const onInputChangeFile = (e) => {
        const filesArray = Array.from(e.target.files);
        setFile((prevFiles) => [...prevFiles, ...filesArray]);

        if (file) {
            setImported(true);
        }
    };

    const onDeleteFile = (index) => {
        setFile((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className="page-content">
                <div className="history-path"  >
                    <button className="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    <button className="history-path__button" onClick={() => { setCurrentComponent(11) }}>
                        Tags  /
                    </button>
                    Replace tags
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Replace tag
                    </div>


                </div>

                <div className="replace-tag tag">
                    <div className="replace-tag__box">
                        <div className="replace-tag__heading tag">Replaces Tagname1 tag with another tag</div>
                        <div className="replace-tag__board-choose">
                            <div className="replace-tag__preview" onClick={() => { if (dropActive === true) { setDropActive(false) } else { setDropActive(true) } }}>{drop} <img src="./img/dropdown-small-arrow.svg" alt="" className="replace-tag__drop-arrow" /></div>
                            <div className={dropActive === true ? "replace-tag__dropdown active" : "replace-tag__dropdown"}>
                                <div className="replace-tag__row" onClick={() => { setDropActive(false); setDrop("tag 1") }}>
                                    tag 1
                                </div>
                                <div className="replace-tag__row" onClick={() => { setDropActive(false); setDrop("tag 2") }}>
                                    tag 2
                                </div>
                                <div className="replace-tag__row" onClick={() => { setDropActive(false); setDrop("tag 3") }}>
                                    tag 3
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="replace-tag__buttons">
                        <button className="replace-tag__button cancel">Cancel</button>
                        <button className="replace-tag__button">Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ReplaceTag;