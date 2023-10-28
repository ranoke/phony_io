import React from "react";
import { useState, useEffect } from 'react';

const PostView = ({ components, setCurrentComponent }) => {
    const [menuActive, setMenuActive] = useState(false);
    const [menuRowActive, setMenuRowActive] = useState(false);

    const [sortActive, setSortActive] = useState(false);
    const [sort, setSort] = useState(["Recent", "Oldest"]);
    const handleSortClick = () => {
        const newActiveItems = [];
        newActiveItems[0] = sort[1];
        newActiveItems[1] = sort[0];
        setSort(newActiveItems);
    };

    const [dropActive, setDropActive] = useState(false);
    const [drop, setDrop] = useState("1 board");

    const [publicRadio, setPublicRadio] = useState(true);

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

    const [pagination, setPagination] = useState(1);
    const handlePagination = (type) => {
        if (type === '-') {
            if (pagination > 1) {
                let pagIndex = pagination - 1;
                setPagination(pagIndex)
            }
        } else if (type === '+') {
            if (pagination < 5) {
                let pagIndex = pagination + 1;
                setPagination(pagIndex)
            }
        }
    }

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
                    Post view
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Post view
                    </div>

                </div>

                <div className="post-big-container">

                    <div className="post">
                        <div className="post__head">
                            <div className="post__likes">
                                <img src="./img/post-like-icon.svg" alt="" className="post__like-icon" />
                                24
                            </div>
                            <img src="./img/board-list-menu-icon.svg" alt="" className="post__menu-icon" onClick={() => { setMenuActive(true) }} />
                        </div>

                        <div className="post__main">
                            <div className="post__person-container">
                                <img src="./img/post-avatar.png" alt="" className="post__avatar" />
                                <div className="post__person-name">Ross Gillespie</div>
                            </div>
                            <div className="post__about-container">
                                <div className="post__about-head">
                                    <div className="post__post-heading">Send status updates back through Intercom</div>
                                    <div className="post__time">3 min ago</div>
                                </div>
                                <div className="post__completion">
                                    <div className="post__green-dot"></div>
                                    Complete
                                </div>
                                <div className="post__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <img src="./img/post-img.png" alt="" className="post__img" />
                                <div className="post__tags">
                                    <div className="post__tag red">Tagname1</div>
                                    <div className="post__tag">Tagname2</div>
                                </div>
                            </div>
                        </div>

                        <textarea name="" id="" className="post__details-input" placeholder="Enter detailes"></textarea>

                        <div className="post-controls">

                            <div className="post-controls__import">


                                <div className="post-controls__box">
                                    <div className="edit-post__heading">Image </div>
                                    <div className="post-controls__file-container" >
                                        <img src="./img/clip-icon.svg" alt="" className="edit-post__clip-icon" />
                                        <div className="edit-post__file-text"><label htmlFor="file">Add file</label> or drop files here</div>
                                        <input id="file" type="file" className="edit-post__file-input" onChange={onInputChangeFile} />
                                    </div>
                                </div>
                                <div className="edit-post__imported">
                                    {file.map((fileItem, index) => renderImagePreview(fileItem, index))}
                                </div>

                            </div>
                            <div className="post-controls__buttons">
                                <div className="post-controls__radios">
                                    <div className="post-controls__row" onClick={() => { setPublicRadio(true) }}>

                                        <div className={publicRadio === true ? " post-controls__check-box radio active" : "post-controls__check-box radio"}>
                                            <div className={publicRadio === true ? " post-controls__circle active" : "post-controls__circle"}></div>
                                        </div>

                                        Public
                                    </div>
                                    <div className="post-controls__row" onClick={() => { setPublicRadio(false) }}>

                                        <div className={publicRadio === false ? " post-controls__check-box radio active" : "post-controls__check-box radio"}>
                                            <div className={publicRadio === false ? " post-controls__circle active" : "post-controls__circle"}></div>
                                        </div>

                                        Private

                                    </div>
                                </div>
                                <button className="post-controls__submit-button">Comment</button>
                            </div>
                        </div>




                    </div>

                    <div className="post-sort">
                        <div className="post-foot__show head-sort" >
                            <div className="post-foot__show-text head-sort">Sort by:</div>
                            <div className="post-foot__quantity head-sort">
                                <div className="post-foot__quantity-preview head-sort" onClick={() => {
                                    if (sortActive === true) {
                                        setSortActive(false)
                                    } else {
                                        setSortActive(true)
                                    }
                                }}>
                                    {sort[0]}
                                    <img src="./img/dropdown-small-arrow.svg" alt="" className="post-foot__qauntity-arrow" />
                                </div>
                                <div onClick={() => { handleSortClick(); setSortActive(false) }} className={sortActive === true ? "post-foot__quantity-dropdown head-drop  active" : "post-foot__quantity-dropdown head-drop"}>
                                    {sort[1]}
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="post-comments">
                        <div className="post-voters__line"></div>
                        <div className="post-comments__comment">
                            <img src="./img/post-comments-avatar-1.png" alt="" className="post-comments__avatar" />
                            <div className="post-comments__main">
                                <div className="post-comments__head">
                                    <div className="post-comments__likes">
                                        <img src="./img/post-comments-like-icon.svg" alt="" className="post-comments__like-icon" />
                                        3 likes
                                    </div>
                                    <div className="post-comments__time">01-02-2020</div>
                                </div>
                                <div className="post-comments__name">Sophia-Rose Nava</div>
                                <div className="post-comments__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-comments__buttons">
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-1.svg" alt="" className="post-comments__button-icon" />
                                        Edit
                                    </div>
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-2.svg" alt="" className="post-comments__button-icon" />
                                        Reply
                                    </div>
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-3.svg" alt="" className="post-comments__button-icon" />
                                        Delete
                                    </div>
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-4.svg" alt="" className="post-comments__button-icon" />
                                        Privat
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="post-comments__comment even">
                            <img src="./img/post-comments-avatar-2.png" alt="" className="post-comments__avatar" />
                            <div className="post-comments__main">
                                <div className="post-comments__head">
                                    <div className="post-comments__likes">
                                        <img src="./img/post-comments-like-icon.svg" alt="" className="post-comments__like-icon" />
                                        3 likes
                                    </div>
                                    <div className="post-comments__time">01-02-2020</div>
                                </div>
                                <div className="post-comments__name">Anna Walley</div>
                                <div className="post-comments__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-comments__buttons">
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-1.svg" alt="" className="post-comments__button-icon" />
                                        Edit
                                    </div>
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-2.svg" alt="" className="post-comments__button-icon" />
                                        Reply
                                    </div>
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-3.svg" alt="" className="post-comments__button-icon" />
                                        Delete
                                    </div>
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-4.svg" alt="" className="post-comments__button-icon" />
                                        Privat
                                    </div>
                                </div>

                                <div className="post-comments__comment-reply">
                                    <div className="post-comments__comment even">
                                        <img src="./img/post-comments-avatar-3.png" alt="" className="post-comments__avatar" />
                                        <div className="post-comments__main">
                                            <div className="post-comments__head">
                                                <div className="post-comments__likes">
                                                    <img src="./img/post-comments-like-icon.svg" alt="" className="post-comments__like-icon" />
                                                    3 likes
                                                </div>
                                                <div className="post-comments__time">01-02-2020</div>
                                            </div>
                                            <div className="post-comments__name">Uzair Valdez</div>
                                            <div className="post-comments__text">Instead of send updates via email, send them through the original
                                                conversation on Intercom
                                                Instead of send updates via email, send them through the original
                                                conversation on Intercom
                                                Instead of send updates via email, send them through the original
                                                conversation on Intercom
                                            </div>
                                            <div className="post-comments__buttons">
                                                <div className="post-comments__button">
                                                    <img src="./img/post-comments-button-icon-1.svg" alt="" className="post-comments__button-icon" />
                                                    Edit
                                                </div>
                                                <div className="post-comments__button">
                                                    <img src="./img/post-comments-button-icon-2.svg" alt="" className="post-comments__button-icon" />
                                                    Reply
                                                </div>
                                                <div className="post-comments__button">
                                                    <img src="./img/post-comments-button-icon-3.svg" alt="" className="post-comments__button-icon" />
                                                    Delete
                                                </div>
                                                <div className="post-comments__button">
                                                    <img src="./img/post-comments-button-icon-4.svg" alt="" className="post-comments__button-icon" />
                                                    Privat
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="post-comments__comment fuck">
                            <img src="./img/post-comments-avatar-4.png" alt="" className="post-comments__avatar" />
                            <div className="post-comments__main">
                                <div className="post-comments__head">
                                    <div className="post-comments__likes">
                                        <img src="./img/post-comments-like-icon.svg" alt="" className="post-comments__like-icon" />
                                        3 likes
                                    </div>
                                    <div className="post-comments__time">01-02-2020</div>
                                </div>
                                <div className="post-comments__name">Kaylan Graham</div>
                                <div className="post-comments__text">Merge in a post:
                                </div>

                                <div className="post-comments__merge">
                                    <div className="post-comments__merge-heading">Add an Estimate field</div>
                                    <div className="post-comments__merge-head">
                                        <div className="post-comments__grey-text">3 points</div>
                                        <div className="post-comments__grey-text">01-02-2020</div>
                                    </div>
                                    <div className="post-comments__merge-main">
                                        <img src="./img/post-comments-avatar-5.png" alt="" className="post-comments__merge-avatar" />
                                        <div className="post-comments__merge-content">
                                            <div className="post-comments__merge-name">Anna Walley</div>
                                            <div className="post-comments__merge-text">Instead of send updates via email, send them through the original
                                                conversation on Intercom
                                                Instead of send updates via email, send them through the original
                                                conversation on Intercom
                                                Instead of send updates via email, send them through the original
                                                conversation on Intercom</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="post-comments__buttons">
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-1.svg" alt="" className="post-comments__button-icon" />
                                        Edit
                                    </div>
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-2.svg" alt="" className="post-comments__button-icon" />
                                        Reply
                                    </div>
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-3.svg" alt="" className="post-comments__button-icon" />
                                        Delete
                                    </div>
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-4.svg" alt="" className="post-comments__button-icon" />
                                        Privat
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="post-comments__comment even" >
                            <img src="./img/post-comments-avatar-6.png" alt="" className="post-comments__avatar" />
                            <div className="post-comments__main">
                                <div className="post-comments__head">
                                    <div className="post-comments__likes">
                                        <img src="./img/post-comments-like-icon.svg" alt="" className="post-comments__like-icon" />
                                        3 likes
                                    </div>
                                    <div className="post-comments__time">01-02-2020</div>
                                </div>
                                <div className="post-comments__name">Kasim Daniels</div>
                                <div className="post-comments__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <img src="./img/post-comments-img.png" alt="" className="post-comments__img" />
                                <div className="post-comments__buttons">
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-1.svg" alt="" className="post-comments__button-icon" />
                                        Edit
                                    </div>
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-2.svg" alt="" className="post-comments__button-icon" />
                                        Reply
                                    </div>
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-3.svg" alt="" className="post-comments__button-icon" />
                                        Delete
                                    </div>
                                    <div className="post-comments__button">
                                        <img src="./img/post-comments-button-icon-4.svg" alt="" className="post-comments__button-icon" />
                                        Privat
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="post-voters__line"></div>
                    <div className="post-voters__pagination">
                        <div className="post-foot__pagination">
                            <div className="post-foot__pag-box" onClick={() => { setPagination(1) }}>
                                <img src="./img/double-arrow-pag.svg" alt="" className="post-foot__double-arrow" />
                            </div>
                            <div className="post-foot__pag-box" onClick={() => { handlePagination('-') }}>
                                <img src="./img/arrow-pag.svg" alt="" className="post-foot__arrow" />
                            </div>

                            <div className={pagination === 1 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(1) }}>
                                1
                            </div>
                            <div className={pagination === 2 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(2) }}>
                                2
                            </div>
                            <div className={pagination === 3 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(3) }}>
                                3
                            </div>
                            <div className={pagination === 4 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(4) }}>
                                4
                            </div>
                            <div className={pagination === 5 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(5) }}>
                                5
                            </div>

                            <div className="post-foot__pag-box" onClick={() => { handlePagination('+') }}>
                                <img src="./img/arrow-pag.svg" alt="" className="post-foot__arrow right" />
                            </div>
                            <div className="post-foot__pag-box" onClick={() => { setPagination(5) }}>
                                <img src="./img/double-arrow-pag.svg" alt="" className="post-foot__double-arrow right" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={menuActive === true ? "boards-menu active" : "boards-menu"}>
                    <div className="boards-menu__box post-view">
                        <img src="./img/boards-menu-cross.svg" onClick={() => { setMenuActive(false) }} alt="" className="boards-menu__cross" />
                        <div className="boards-menu__rows">
                            <div className="boards-menu__row" >
                                <img src="./img/boards-menu-icon-1.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">Public view</div>
                            </div>
                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(8); }}>
                                <img src="./img/posts-menu-icon-2.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">Delete post</div>
                            </div>
                            <div className={menuRowActive === true ? "boards-menu__row active" : "boards-menu__row"} onClick={() => { setMenuActive(false); setCurrentComponent(8); }}>
                                <img src="./img/posts-menu-icon-1.svg" alt="" className={menuRowActive === true ? "boards-menu__icon active" : "boards-menu__icon"} />
                                <div className="boards-menu__row-text">Edit post</div>
                            </div>
                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(3) }}>
                                <img src="./img/posts-menu-icon-4.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">Merge post</div>
                            </div>
                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(0); }}>
                                <img src="./img/tags-refresh-icon.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">Change status</div>
                            </div>
                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(7); }}>
                                <img src="./img/add-icon.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">Add voter</div>
                            </div>
                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(7); }}>
                                <img src="./img/user-list-like-icon.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">List voters</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default PostView;