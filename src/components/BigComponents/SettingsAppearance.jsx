import React from "react";
import { useState, useEffect } from 'react';

const AppearanceSettings = ({ components, setCurrentComponent }) => {

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

    const [chosenTheme, setChosenTheme] = useState(true);








    const [firstFile, setFirstFile] = useState([]);

    const onInputChangeFirstFile = (e) => {
        const filesArray = Array.from(e.target.files);
        setFirstFile((prevFiles) => [...prevFiles, ...filesArray]);
    };

    const onDeleteFirstFile = (index) => {
        setFirstFile((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const renderImageFirstPreview = (fileItem, index) => {
        const imageUrl = URL.createObjectURL(fileItem);
        return (
            <div key={index} className="edit-post__imported-file">
                <img src={imageUrl} alt={`Preview ${index}`} className="edit-post__image-preview" />
                <img
                    src="./img/cross-icon.svg"
                    alt=""
                    className="edit-post__cancel-icon"
                    onClick={() => onDeleteFirstFile(index)}
                />
            </div>
        );
    };




    const [file, setFile] = useState([]);

    const onInputChangeFile = (e) => {
        const filesArray = Array.from(e.target.files);
        setFile((prevFiles) => [...prevFiles, ...filesArray]);
    };

    const onDeleteFile = (index) => {
        setFile((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const renderImagePreview = (fileItem, index) => {
        const imageUrl = URL.createObjectURL(fileItem);
        return (
            <div key={index} className="edit-post__imported-file">
                <img src={imageUrl} alt={`Preview ${index}`} className="edit-post__image-preview" />
                <img
                    src="./img/cross-icon.svg"
                    alt=""
                    className="edit-post__cancel-icon"
                    onClick={() => onDeleteFile(index)}
                />
            </div>
        );
    };

    return (
        <>
            <div class="page-content">
                <div class="history-path"  >
                    <button class="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    <button class="history-path__button" onClick={() => { setCurrentComponent(31) }}>
                        Settings  /
                    </button>
                    Appearance
                </div>

                <div class="boards__head">

                    <div class="component-title">
                        Appearance
                    </div>

                </div>


                <div class="appearance">
                    <div class="appearance__files-container">
                        <div class="appearance__import-file">
                            <div class="appearance__box">
                                <div class="appearance__heading">Logo</div>
                                <div class="appearance__file-container" >
                                    <img src="./img/clip-icon.svg" alt="" class="appearance__clip-icon" />
                                    <div class="appearance__file-text">
                                        <label htmlFor="file">Add file</label>
                                        <br />
                                        <div>or drop files here</div></div>
                                    <input id="file" type="file" class="appearance__input" onChange={onInputChangeFirstFile} />
                                </div>
                            </div>
                            <div className="appearance__imported">
                                {firstFile.map((fileItem, index) => renderImageFirstPreview(fileItem, index))}
                            </div>
                        </div>

                        <div class="appearance__import-file">
                            <div class="appearance__box">
                                <div class="appearance__heading">Favicon</div>
                                <div class="appearance__file-container" >
                                    <img src="./img/clip-icon.svg" alt="" class="appearance__clip-icon" />
                                    <div class="appearance__file-text"><label htmlFor="file">Add file</label> <br /> <div>or drop files here</div></div>
                                    <input id="file" type="file" class="appearance__input" onChange={onInputChangeFile} />
                                </div>
                            </div>
                            <div className="appearance__imported">
                                {file.map((fileItem, index) => renderImageFirstPreview(fileItem, index))}
                            </div>
                        </div>
                    </div>

                    <div class="appearance__heading second">Theme</div>
                    <div class="appearance__themes">
                        <div class="appearance__theme white" onClick={() => { setChosenTheme(true) }}>
                            <img src="./img/theme-blue-icon.svg" alt="" class={chosenTheme === true ? "appearance__chosen-icon active" : "appearance__chosen-icon"} />
                            <div class="appearance__balls">
                                <div class="appearance__ball color-1"></div>
                                <div class="appearance__ball color-2"></div>
                                <div class="appearance__ball color-3"></div>
                            </div>
                        </div>
                        <div class="appearance__theme black" onClick={() => { setChosenTheme(false) }}>
                            <img src="./img/theme-white-icon.svg" alt="" class={chosenTheme === false ? "appearance__chosen-icon active" : "appearance__chosen-icon"} />
                            <div class="appearance__balls">
                                <div class="appearance__ball color-4"></div>
                                <div class="appearance__ball color-5"></div>
                                <div class="appearance__ball color-6"></div>
                            </div>
                        </div>
                    </div>

                    <div class="appearance__buttons settings">
                        <button class="appearance__button">Submit</button>
                    </div>
                </div>


            </div>
        </>
    );
}
export default AppearanceSettings;