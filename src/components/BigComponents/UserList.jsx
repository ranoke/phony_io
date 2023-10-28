import React from "react";
import { useState, useEffect } from 'react';

const UserList = ({ components, setCurrentComponent }) => {
    const [menuActive, setMenuActive] = useState(false);
    const [menuRowActive, setMenuRowActive] = useState(false);

    const [likeActive, setLikeActive] = useState([false, false, false, false, false, false, false, false, false, false,]);
    const handleLikeClick = (index) => {
        const newActiveItems = likeActive.map((item, i) =>
            i === index ? !item : item // Змінюємо значення на протилежне для вибраного індексу
        );
        setLikeActive(newActiveItems);
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

    const [quantityActive, setQuantityActive] = useState(false);
    const [quantity, setQuantity] = useState([10, 5]);
    const handleQuantityClick = () => {
        const newActiveItems = [];
        newActiveItems[0] = quantity[1];
        newActiveItems[1] = quantity[0];
        setQuantity(newActiveItems);
    };

    const [sortActive, setSortActive] = useState(false);
    const [sort, setSort] = useState(["Last activity", "Oldest"]);
    const handleSortClick = () => {
        const newActiveItems = [];
        newActiveItems[0] = sort[1];
        newActiveItems[1] = sort[0];
        setSort(newActiveItems);
    };






    const [filtersDropActive, setFiltersDropActive] = useState([false, false, false, false, false, false, false, false]);
    const handleFiltersDropClick = (index) => {
        const newActiveItems = filtersDropActive.map((item, i) =>
            i === index ? !item : false // Змінюємо значення на протилежне для вибраного індексу
        );
        setFiltersDropActive(newActiveItems);
    };


    const [segments, setSegments] = useState({
        active: [false, false, false],
    });

    const [mail, setMail] = useState({
        active: [false, false, false],
    });


    const [firstName, setFirstName] = useState({
        active: [false, false, false],
    });

    const [lastName, setLastName] = useState({
        active: [false, false, false],
    });

    const [role, setRole] = useState({
        active: [false, false, false],
    });

    const [banned, setBanned] = useState(true);



    const handleSegmentsClick = (index) => {
        const newActiveItems = segments.active.map((item, i) =>
            i === index ? !item : item
        );
        setSegments({ ...segments, active: newActiveItems });
    };

    const handleMailClick = (index) => {
        const newActiveItems = mail.active.map((item, i) =>
            i === index ? !item : item
        );
        setMail({ ...mail, active: newActiveItems });
    };

    const handleFirstNameClick = (index) => {
        const newActiveItems = firstName.active.map((item, i) =>
            i === index ? !item : item
        );
        setFirstName({ ...firstName, active: newActiveItems });
    };

    const handleLastNameClick = (index) => {
        const newActiveItems = lastName.active.map((item, i) =>
            i === index ? !item : item
        );
        setLastName({ ...lastName, active: newActiveItems });
    };

    const handleRoleClick = (index) => {
        const newActiveItems = role.active.map((item, i) =>
            i === index ? !item : item
        );
        setRole({ ...role, active: newActiveItems });
    };


    // Підрахунок активних елементів для кожного компонента
    const activeSegmentsCount = segments.active.filter((item) => item).length;
    const activeRoleCount = role.active.filter((item) => item).length;
    const activeMailCount = mail.active.filter((item) => item).length;
    const activeFirstNameCount = firstName.active.filter((item) => item).length;
    const activeLastNameCount = lastName.active.filter((item) => item).length;

    return (
        <>
            <div className="page-content">
                <div className="history-path"  >
                    <button className="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    Users
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Users
                    </div>


                </div>

                <div className="post-component">

                    <div className="post-head users">

                        <div className="post-head__wrapper users">


                            <div className="post-head__filter segments">
                                <div className="post-head__preview segments" onClick={() => { handleFiltersDropClick(0) }}>

                                    <div className={activeSegmentsCount != 0 ? " post-head__chosen active" : "post-head__chosen"}>
                                        {activeSegmentsCount}
                                    </div>

                                    <div className="post-head__filter-name">User segments</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[0] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div className={filtersDropActive[0] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div className="post-head__title">User segments</div>

                                    <div className="post-head__dropdown-content">
                                        <div className="post-head__row" onClick={() => { handleSegmentsClick(0) }}>

                                            <div className={segments.active[0] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Segment1</div>
                                        </div>
                                        <div className="post-head__row" onClick={() => { handleSegmentsClick(1) }}>

                                            <div className={segments.active[1] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Segment2</div>
                                        </div>
                                        <div className="post-head__row" onClick={() => { handleSegmentsClick(2) }}>

                                            <div className={segments.active[2] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Segment3</div>

                                        </div>
                                    </div>

                                    <div className="post-head__dropdown-buttons">
                                        <button className="post-head__dropdown-button">Apply filters</button>
                                        <button className="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(0) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>

                            <div className="post-head__filter approved">
                                <div className="post-head__preview approved" onClick={() => { handleFiltersDropClick(1) }}>

                                    <div className={activeMailCount != 0 ? " post-head__chosen active" : "post-head__chosen"}>
                                        {activeMailCount}
                                    </div>

                                    <div className="post-head__filter-name">E-mail</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[1] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div className={filtersDropActive[1] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div className="post-head__title">E-mail</div>

                                    <div className="post-head__dropdown-content">
                                        <div className="post-head__row" onClick={() => { handleMailClick(0) }}>

                                            <div className={mail.active[0] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Mail 1</div>
                                        </div>

                                        <div className="post-head__row" onClick={() => { handleMailClick(1) }}>

                                            <div className={mail.active[1] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Mail 2</div>
                                        </div>

                                        <div className="post-head__row" onClick={() => { handleMailClick(2) }}>

                                            <div className={mail.active[2] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Mail 3</div>
                                        </div>
                                    </div>

                                    <div className="post-head__dropdown-buttons">
                                        <button className="post-head__dropdown-button">Apply filters</button>
                                        <button className="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(1) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>

                            <div className="post-head__filter approved">
                                <div className="post-head__preview approved" onClick={() => { handleFiltersDropClick(2) }}>

                                    <div className={activeFirstNameCount != 0 ? " post-head__chosen active" : "post-head__chosen"}>
                                        {activeFirstNameCount}
                                    </div>

                                    <div className="post-head__filter-name">First name</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[2] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div className={filtersDropActive[2] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div className="post-head__title">First name</div>

                                    <div className="post-head__dropdown-content">
                                        <div className="post-head__row" onClick={() => { handleFirstNameClick(0) }}>

                                            <div className={firstName.active[0] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">First name 1</div>
                                        </div>

                                        <div className="post-head__row" onClick={() => { handleFirstNameClick(1) }}>

                                            <div className={firstName.active[1] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">First name 2</div>
                                        </div>

                                        <div className="post-head__row" onClick={() => { handleFirstNameClick(2) }}>

                                            <div className={firstName.active[2] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">First name 3</div>
                                        </div>
                                    </div>

                                    <div className="post-head__dropdown-buttons">
                                        <button className="post-head__dropdown-button">Apply filters</button>
                                        <button className="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(2) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>
                            <div className="post-head__filter approved">
                                <div className="post-head__preview approved" onClick={() => { handleFiltersDropClick(3) }}>

                                    <div className={activeLastNameCount != 0 ? " post-head__chosen active" : "post-head__chosen"}>
                                        {activeLastNameCount}
                                    </div>

                                    <div className="post-head__filter-name">Last Name</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[3] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div className={filtersDropActive[3] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div className="post-head__title">Last Name</div>

                                    <div className="post-head__dropdown-content">
                                        <div className="post-head__row" onClick={() => { handleLastNameClick(0) }}>

                                            <div className={lastName.active[0] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Last Name 1</div>
                                        </div>

                                        <div className="post-head__row" onClick={() => { handleLastNameClick(1) }}>

                                            <div className={lastName.active[1] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Last Name 2</div>
                                        </div>

                                        <div className="post-head__row" onClick={() => { handleLastNameClick(2) }}>

                                            <div className={lastName.active[2] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Last Name 3</div>
                                        </div>
                                    </div>

                                    <div className="post-head__dropdown-buttons">
                                        <button className="post-head__dropdown-button">Apply filters</button>
                                        <button className="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(3) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>
                            <div className="post-head__filter approved">
                                <div className="post-head__preview approved" onClick={() => { handleFiltersDropClick(4) }}>

                                    <div className={activeRoleCount != 0 ? " post-head__chosen active" : "post-head__chosen"}>
                                        {activeRoleCount}
                                    </div>

                                    <div className="post-head__filter-name">Role</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[4] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div className={filtersDropActive[4] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div className="post-head__title">Role</div>

                                    <div className="post-head__dropdown-content">
                                        <div className="post-head__row" onClick={() => { handleRoleClick(0) }}>

                                            <div className={role.active[0] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Role 1</div>
                                        </div>

                                        <div className="post-head__row" onClick={() => { handleRoleClick(1) }}>

                                            <div className={role.active[1] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Role 2</div>
                                        </div>

                                        <div className="post-head__row" onClick={() => { handleRoleClick(2) }}>

                                            <div className={role.active[2] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Role 3</div>
                                        </div>
                                    </div>

                                    <div className="post-head__dropdown-buttons">
                                        <button className="post-head__dropdown-button">Apply filters</button>
                                        <button className="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(4) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>

                            <div className="user-filter">

                                <div className="post-head__row" onClick={() => { if (banned === true) { setBanned(false) } else { setBanned(true) } }}>

                                    <div className={banned === true ? " post-head__check-box active" : "post-head__check-box"}>
                                        <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                    </div>

                                    <div className="post-head__row-name">Banned</div>
                                </div>
                            </div>





                        </div>

                        <div className="post-head__controls">
                            <div className="post-foot__show head-sort users" >
                                <div className="post-foot__show-text head-sort users">Sort by:</div>
                                <div className="post-foot__quantity head-sort users">
                                    <div className="post-foot__quantity-preview head-sort users" onClick={() => {
                                        if (quantityActive === true) {
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

                            <div className="post-foot__show head-sort-lower users" >
                                <div className="post-foot__show-text">Show:</div>
                                <div className="post-foot__quantity">
                                    <div className="post-foot__quantity-preview" onClick={() => {
                                        if (quantityActive === true) {
                                            setQuantityActive(false)
                                        } else {
                                            setQuantityActive(true)
                                        }
                                    }}>
                                        {quantity[0]}
                                        <img src="./img/dropdown-small-arrow.svg" alt="" className="post-foot__qauntity-arrow" />
                                    </div>
                                    <div onClick={() => { handleQuantityClick(); setQuantityActive(false) }} className={quantityActive === true ? "post-foot__quantity-dropdown  active" : "post-foot__quantity-dropdown "}>
                                        {quantity[1]}
                                    </div>
                                </div>
                                <div className="post-foot__show-text small">per page</div>
                            </div>
                        </div>

                    </div>

                    <div className="post-line"></div>

                    <div className={pagination === 1 ? "user-list active" : "user-list"}>
                        <div className="user-list__row">
                            <img src="./img/user-list-avatar-1.png" alt="" className="user-list__avatar" />
                            <div className="user-list__text-container">
                                <div className="user-list__name">Kairo Bruce</div>
                                <div className="user-list__email">anna_w@gmail.com</div>
                                <div className="user-list__date">21-01-2019</div>
                            </div>
                            <div className="user-list__buttons">
                                <div className="user-list__button" onClick={() => { setCurrentComponent(20) }}>
                                    <img src="./img/user-list-edit-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">23</div>
                                </div>
                                <div className="user-list__button">
                                    <img src="./img/user-list-like-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">123</div>
                                </div>
                                <div className="user-list__button">
                                    <img src="./img/user-list-comment-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">64</div>
                                </div>
                            </div>
                            <div className="user-list__partnership">Admin</div>
                            <img src="../../img/board-list-menu-icon.svg" alt="" className="user-list__menu-button" onClick={() => { setMenuActive(true) }} />
                        </div>
                        <div className="user-list__row even">
                            <img src="./img/user-list-avatar-2.png" alt="" className="user-list__avatar" />
                            <div className="user-list__text-container">
                                <div className="user-list__name">Lowri Leach</div>
                                <div className="user-list__email">anna_w@gmail.com</div>
                                <div className="user-list__date">21-01-2019</div>
                            </div>
                            <div className="user-list__buttons">
                                <div className="user-list__button" onClick={() => { setCurrentComponent(20) }}>
                                    <img src="./img/user-list-edit-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">23</div>
                                </div>
                                <div className="user-list__button">
                                    <img src="./img/user-list-like-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">123</div>
                                </div>
                                <div className="user-list__button">
                                    <img src="./img/user-list-comment-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">64</div>
                                </div>
                            </div>
                            <div className="user-list__partnership">Admin</div>
                            <img src="../../img/board-list-menu-icon.svg" alt="" className="user-list__menu-button" onClick={() => { setMenuActive(true) }} />
                        </div>
                        <div className="user-list__row">
                            <img src="./img/user-list-avatar-3.png" alt="" className="user-list__avatar" />
                            <div className="user-list__text-container">
                                <div className="user-list__name">Maria Gallegos</div>
                                <div className="user-list__email">anna_w@gmail.com</div>
                                <div className="user-list__date">21-01-2019</div>
                            </div>
                            <div className="user-list__buttons" >
                                <div className="user-list__button" onClick={() => { setCurrentComponent(20) }}>
                                    <img src="./img/user-list-edit-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">23</div>
                                </div>
                                <div className="user-list__button">
                                    <img src="./img/user-list-like-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">123</div>
                                </div>
                                <div className="user-list__button">
                                    <img src="./img/user-list-comment-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">64</div>
                                </div>
                            </div>
                            <div className="user-list__partnership"><span>Member</span></div>
                            <img src="../../img/board-list-menu-icon.svg" alt="" className="user-list__menu-button" onClick={() => { setMenuActive(true) }} />
                        </div>
                        <div className="user-list__row even">
                            <img src="./img/user-list-avatar-4.png" alt="" className="user-list__avatar" />
                            <div className="user-list__text-container">
                                <div className="user-list__name">Kristopher Winter</div>
                                <div className="user-list__email">anna_w@gmail.com</div>
                                <div className="user-list__date">21-01-2019</div>
                            </div>
                            <div className="user-list__buttons">
                                <div className="user-list__button" onClick={() => { setCurrentComponent(20) }}>
                                    <img src="./img/user-list-edit-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">23</div>
                                </div>
                                <div className="user-list__button">
                                    <img src="./img/user-list-like-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">123</div>
                                </div>
                                <div className="user-list__button">
                                    <img src="./img/user-list-comment-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">64</div>
                                </div>
                            </div>
                            <div className="user-list__partnership">Admin</div>
                            <img src="../../img/board-list-menu-icon.svg" alt="" className="user-list__menu-button" onClick={() => { setMenuActive(true) }} />
                        </div>
                        <div className="user-list__row">
                            <img src="./img/user-list-avatar-5.png" alt="" className="user-list__avatar" />
                            <div className="user-list__text-container">
                                <div className="user-list__name">Yuvaan Whittington</div>
                                <div className="user-list__email">anna_w@gmail.com</div>
                                <div className="user-list__date">21-01-2019</div>
                            </div>
                            <div className="user-list__buttons">
                                <div className="user-list__button" onClick={() => { setCurrentComponent(20) }}>
                                    <img src="./img/user-list-edit-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">23</div>
                                </div>
                                <div className="user-list__button">
                                    <img src="./img/user-list-like-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">123</div>
                                </div>
                                <div className="user-list__button">
                                    <img src="./img/user-list-comment-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">64</div>
                                </div>
                            </div>
                            <div className="user-list__partnership"><span>Member</span></div>
                            <img src="../../img/board-list-menu-icon.svg" alt="" className="user-list__menu-button" onClick={() => { setMenuActive(true) }} />
                        </div>
                        <div className="user-list__row even">
                            <img src="./img/user-list-avatar-6.png" alt="" className="user-list__avatar" />
                            <div className="user-list__text-container">
                                <div className="user-list__name">Clarke Wickens</div>
                                <div className="user-list__email">anna_w@gmail.com</div>
                                <div className="user-list__date">21-01-2019</div>
                            </div>
                            <div className="user-list__buttons">
                                <div className="user-list__button" onClick={() => { setCurrentComponent(20) }}>
                                    <img src="./img/user-list-edit-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">23</div>
                                </div>
                                <div className="user-list__button">
                                    <img src="./img/user-list-like-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">123</div>
                                </div>
                                <div className="user-list__button">
                                    <img src="./img/user-list-comment-icon.svg" alt="" className="user-list__icon" />
                                    <div className="user-list__button-number">64</div>
                                </div>
                            </div>
                            <div className="user-list__partnership">Admin</div>
                            <img src="../../img/board-list-menu-icon.svg" alt="" className="user-list__menu-button" onClick={() => { setMenuActive(true) }} />
                        </div>
                    </div>




                    <div className="post-line"></div>

                    <div className="post-foot">
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
                        <div className="post-foot__show" >
                            <div className="post-foot__show-text">Show:</div>
                            <div className="post-foot__quantity">
                                <div className="post-foot__quantity-preview" onClick={() => {
                                    if (quantityActive === true) {
                                        setQuantityActive(false)
                                    } else {
                                        setQuantityActive(true)
                                    }
                                }}>
                                    {quantity[0]}
                                    <img src="./img/dropdown-small-arrow.svg" alt="" className="post-foot__qauntity-arrow" />
                                </div>
                                <div onClick={() => { handleQuantityClick(); setQuantityActive(false) }} className={quantityActive === true ? "post-foot__quantity-dropdown active" : "post-foot__quantity-dropdown"}>
                                    {quantity[1]}
                                </div>
                            </div>
                            <div className="post-foot__show-text small">per page</div>
                        </div>
                    </div>

                </div>

                <div className={menuActive === true ? "boards-menu active" : "boards-menu"}>
                    <div className="boards-menu__box posts">
                        <img src="./img/boards-menu-cross.svg" onClick={() => { setMenuActive(false) }} alt="" className="boards-menu__cross" />
                        <div className="boards-menu__rows">
                            <div className={menuRowActive === true ? "boards-menu__row active" : "boards-menu__row"} onClick={() => { setMenuActive(false); setCurrentComponent(16); }}>
                                <img src="./img/tags-refresh-icon.svg" alt="" className={menuRowActive === true ? "boards-menu__icon active" : "boards-menu__icon"} />
                                <div className="boards-menu__row-text">Change user role</div>
                            </div>
                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(17) }}>
                                <img src="./img/posts-menu-icon-2.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">Delete user</div>
                            </div>


                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(18) }}>
                                <img src="./img/warning-icon.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">Ban user</div>
                            </div>

                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(19) }}>
                                <img src="./img/star-icon.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">User roles</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserList;