import React from "react";
import { useState, useEffect } from 'react';

const ImportPost = ({ components, setCurrentComponent }) => {
    const [dropActive, setDropActive] = useState(false);
    const [drop, setDrop] = useState("1 board");


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
                    <button className="history-path__button" onClick={() => { setCurrentComponent(5) }}>
                        Posts  /
                    </button>
                    Edit post
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Import post
                    </div>


                </div>

                <div className="import-post">
                    <div className="import-post__box">
                        <div className="import-post__heading">Board selected</div>
                        <div className="import-post__board-choose">
                            <div className="import-post__preview" onClick={() => { if (dropActive === true) { setDropActive(false) } else { setDropActive(true) } }}>{drop} <img src="./img/dropdown-small-arrow.svg" alt="" className="import-post__drop-arrow" /></div>
                            <div className={dropActive === true ? "import-post__dropdown active" : "import-post__dropdown"} onClick={() => { setDropActive(false); setDrop("2 board") }}>
                                2 board                                
                            </div>
                        </div>
                    </div>
                    <div className="import-post__box">
                        <div className="import-post__heading">File</div>
                        <div className="import-post__file-container" >
                            <img src="./img/clip-icon.svg" alt="" className="import-post__clip-icon" />
                            <div className="import-post__file-text"><label htmlFor="file">Add file</label> or drop files here</div>
                            <input id="file" type="file" className="import-post__input" onChange={onInputChangeFile} />
                        </div>
                    </div>
                    <div className={imported === true ? "import-post__imported active" : "import-post__imported"}>
                        {file.map((fileItem, index) => (
                            <div key={index} className="import-post__imported-file">
                                <img src="./img/imported-icon.svg" alt="" className="import-post__imported-icon" />
                                {fileItem.name}
                                <img src="./img/cross-icon.svg" alt="" className="import-post__cancel-icon" onClick={() => onDeleteFile(index)} />
                            </div>
                        ))}
                    </div>
                    <div className="import-post__buttons">
                        <button className="import-post__button cancel">Cancel</button>
                        <button className="import-post__button">Submit</button>
                    </div>
                </div>
            </div>
        </>
    ); 
}
export default ImportPost;