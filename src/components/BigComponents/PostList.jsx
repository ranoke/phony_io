import React from "react";
import { useState, useEffect } from 'react';

const PostList = ({ components, setCurrentComponent }) => {
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
    const [quantity, setQuantity] = useState([5, 10]);
    const handleQuantityClick = () => {
        const newActiveItems = [];
        newActiveItems[0] = quantity[1];
        newActiveItems[1] = quantity[0];
        setQuantity(newActiveItems);
    };

    const [sortActive, setSortActive] = useState(false);
    const [sort, setSort] = useState(["Newest", "Oldest"]);
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


    const [statuses, setStatuses] = useState({
        active: [false, false, false],
    });

    const [boards, setBoards] = useState({
        active: [false, false, false],
    });

    const [tags, setTags] = useState({
        active: [false, false, false],
    });

    const [segments, setSegments] = useState({
        active: [false, false, false],
    });

    const [approve, setApprove] = useState({
        active: [false, false, false],
    });

    const [created, setCreated] = useState(1);

    const [owners, setOwners] = useState("Select owners");

    const [authors, setAuthors] = useState("Select authors");



    const handleStatusesClick = (index) => {
        const newActiveItems = statuses.active.map((item, i) =>
            i === index ? !item : item
        );
        setStatuses({ ...statuses, active: newActiveItems });
    };

    const handleBoardsClick = (index) => {
        const newActiveItems = boards.active.map((item, i) =>
            i === index ? !item : item
        );
        setBoards({ ...boards, active: newActiveItems });
    };

    const handleTagsClick = (index) => {
        const newActiveItems = tags.active.map((item, i) =>
            i === index ? !item : item
        );
        setTags({ ...tags, active: newActiveItems });
    };

    const handleSegmentsClick = (index) => {
        const newActiveItems = segments.active.map((item, i) =>
            i === index ? !item : item
        );
        setSegments({ ...segments, active: newActiveItems });
    };

    const handleApproveClick = (index) => {
        const newActiveItems = approve.active.map((item, i) =>
            i === index ? !item : item
        );
        setApprove({ ...approve, active: newActiveItems });
    };


    // Підрахунок активних елементів для кожного компонента
    const activeStatusCount = statuses.active.filter((item) => item).length;
    const activeBoardsCount = boards.active.filter((item) => item).length;
    const activeTagsCount = tags.active.filter((item) => item).length;
    const activeSegmentsCount = segments.active.filter((item) => item).length;
    const activeApprovedCount = approve.active.filter((item) => item).length;

    return (
        <>
            <div className="page-content">
                <div className="history-path"  >
                    <button className="history-path__button" onClick={() => { setCurrentComponent(0) }}>
                        Dashboard  /
                    </button>
                    Posts
                </div>

                <div className="boards__head">

                    <div className="component-title">
                        Posts
                    </div>

                    <div className="posts-buttons">
                        <div className="posts-buttons__export-import">
                            <button className="posts-buttons__button" onClick={() => { setCurrentComponent(7) }}>
                                <img src="./img/post-import-icon.svg" alt="" className="posts-buttons__icon" />
                                Import
                            </button>
                            <button className="posts-buttons__button">
                                <img src="./img/post-export-icon.svg" alt="" className="posts-buttons__icon" />
                                Export
                            </button>
                        </div>
                        <button className="boards__create-button post" onClick={() => { setCurrentComponent(2) }}>Create Post</button>
                    </div>
                </div>

                <div className="post-component">

                    <div className="post-head">

                        <div className="post-head__wrapper">

                            <div className="post-head__search">
                                <input type="text" placeholder="Search all posts" className="post-head__search-input" />
                                <button className="post-head__search-button">
                                    <img src="./img/post-search-icon.svg" alt="" className="post-head__search-icon" />
                                </button>
                            </div>



                            <div className="post-head__filter drop-tags">
                                <div className="post-head__preview drop-tags" onClick={() => { handleFiltersDropClick(2) }}>

                                    <div className={activeTagsCount != 0 ? " post-head__chosen active" : "post-head__chosen"}>
                                        {activeTagsCount}
                                    </div>

                                    <div className="post-head__filter-name">Tags</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[2] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div className={filtersDropActive[2] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div className="post-head__title">Tags</div>

                                    <div className="post-head__dropdown-content">
                                        <div className="post-head__row" onClick={() => { handleTagsClick(0) }}>

                                            <div className={tags.active[0] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">No tags</div>
                                        </div>
                                        <div className="post-head__row" onClick={() => { handleTagsClick(1) }}>

                                            <div className={tags.active[1] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Tagname1</div>
                                        </div>
                                        <div className="post-head__row" onClick={() => { handleTagsClick(2) }}>

                                            <div className={tags.active[2] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Tagname2</div>

                                        </div>
                                    </div>

                                    <div className="post-head__dropdown-buttons">
                                        <button className="post-head__dropdown-button">Apply filters</button>
                                        <button className="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(2) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>

                            <div className="post-head__filter boards">
                                <div className="post-head__preview boards" onClick={() => { handleFiltersDropClick(1) }}>

                                    <div className={activeBoardsCount != 0 ? " post-head__chosen active" : "post-head__chosen"}>
                                        {activeBoardsCount}
                                    </div>

                                    <div className="post-head__filter-name">Boards</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[1] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div className={filtersDropActive[1] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div className="post-head__title">Boards</div>

                                    <div className="post-head__dropdown-content">
                                        <div className="post-head__row" onClick={() => { handleBoardsClick(0) }}>

                                            <div className={boards.active[0] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Board name1</div>
                                        </div>
                                        <div className="post-head__row" onClick={() => { handleBoardsClick(1) }}>

                                            <div className={boards.active[1] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Board name2</div>
                                        </div>
                                        <div className="post-head__row" onClick={() => { handleBoardsClick(2) }}>

                                            <div className={boards.active[2] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Board name11111</div>

                                        </div>
                                    </div>

                                    <div className="post-head__dropdown-buttons">
                                        <button className="post-head__dropdown-button">Apply filters</button>
                                        <button className="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(1) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>
                            <div className="post-head__filter statuses">
                                <div className="post-head__preview statuses" onClick={() => { handleFiltersDropClick(0) }}>

                                    <div className={activeStatusCount != 0 ? " post-head__chosen active" : "post-head__chosen"}>
                                        {activeStatusCount}
                                    </div>

                                    <div className="post-head__filter-name">Statuses</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[0] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div className={filtersDropActive[0] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div className="post-head__title">Statuses</div>

                                    <div className="post-head__dropdown-content">
                                        <div className="post-head__row" onClick={() => { handleStatusesClick(0) }}>

                                            <div className={statuses.active[0] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">No status</div>
                                        </div>
                                        <div className="post-head__row" onClick={() => { handleStatusesClick(1) }}>

                                            <div className={statuses.active[1] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Satus1</div>
                                        </div>
                                        <div className="post-head__row" onClick={() => { handleStatusesClick(2) }}>

                                            <div className={statuses.active[2] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Status2</div>

                                        </div>
                                    </div>

                                    <div className="post-head__dropdown-buttons">
                                        <button className="post-head__dropdown-button">Apply filters</button>
                                        <button className="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(0) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>

                            <div className="post-head__filter owners">
                                <div className="post-head__preview owners" onClick={() => { handleFiltersDropClick(6) }}>

                                    <div className="post-head__chosen">

                                    </div>

                                    <div className="post-head__filter-name">Owners</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[6] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div className={filtersDropActive[6] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div className="post-head__title">Owners</div>

                                    <div className="post-head__inner-preview" onClick={() => { setOwners("Select owners") }}>

                                        <div className="post-head__filter-name">{owners}</div>

                                        <img src="./img/dropdown-small-arrow.svg" alt="" className={owners === "Select owners" ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                    </div>

                                    <div className={owners === "Select owners" ? " post-head__inner-dropdown active" : "post-head__inner-dropdown"}>
                                        <div className="post-head__inner-row" onClick={() => { setOwners("Company") }}>Company</div>
                                        <div className="post-head__inner-row" onClick={() => { setOwners("Human") }}>Human</div>
                                    </div>

                                    <div className="post-head__dropdown-buttons">
                                        <button className="post-head__dropdown-button">Apply filters</button>
                                        <button className="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(6) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>

                            <div className="post-head__filter authors">
                                <div className="post-head__preview authors" onClick={() => { handleFiltersDropClick(7) }}>

                                    <div className="post-head__chosen">

                                    </div>

                                    <div className="post-head__filter-name">Authors</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[7] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div className={filtersDropActive[7] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div className="post-head__title">Authors</div>

                                    <div className="post-head__inner-preview" onClick={() => { setAuthors("Select authors") }}>

                                        <div className="post-head__filter-name">{authors}</div>

                                        <img src="./img/dropdown-small-arrow.svg" alt="" className={authors === "Select authors" ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                    </div>

                                    <div className={authors === "Select authors" ? " post-head__inner-dropdown active" : "post-head__inner-dropdown"}>
                                        <div className="post-head__inner-row" onClick={() => { setAuthors("Man") }}>Man</div>
                                        <div className="post-head__inner-row" onClick={() => { setAuthors("Woman") }}>Woman</div>
                                    </div>

                                    <div className="post-head__dropdown-buttons">
                                        <button className="post-head__dropdown-button">Apply filters</button>
                                        <button className="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(7) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>

                            <div className="post-head__filter created">
                                <div className="post-head__preview created" onClick={() => { handleFiltersDropClick(5) }}>

                                    <div className="post-head__chosen">

                                    </div>

                                    <div className="post-head__filter-name">Created in</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[5] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div className={filtersDropActive[5] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div className="post-head__title">Created in</div>

                                    <div className="post-head__dropdown-content">
                                        <div className="post-head__row" onClick={() => { setCreated(1) }}>

                                            <div className={created === 1 ? " post-head__check-box radio active" : "post-head__check-box radio"}>
                                                <div className={created === 1 ? " post-head__circle active" : "post-head__circle"}></div>
                                            </div>

                                            <div className="post-head__row-name">Last 24 hours</div>
                                        </div>
                                        <div className="post-head__row" onClick={() => { setCreated(2) }}>

                                            <div className={created === 2 ? " post-head__check-box radio active" : "post-head__check-box radio"}>
                                                <div className={created === 2 ? " post-head__circle active" : "post-head__circle"}></div>
                                            </div>

                                            <div className="post-head__row-name">Last week</div>
                                        </div>
                                        <div className="post-head__row" onClick={() => { setCreated(3) }}>

                                            <div className={created === 3 ? " post-head__check-box radio active" : "post-head__check-box radio"}>
                                                <div className={created === 3 ? " post-head__circle active" : "post-head__circle"}></div>
                                            </div>

                                            <div className="post-head__row-name">Last month</div>

                                        </div>
                                    </div>

                                    <div className="post-head__dropdown-buttons">
                                        <button className="post-head__dropdown-button">Apply filters</button>
                                        <button className="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(5) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>

                            <div className="post-head__filter segments">
                                <div className="post-head__preview segments" onClick={() => { handleFiltersDropClick(3) }}>

                                    <div className={activeSegmentsCount != 0 ? " post-head__chosen active" : "post-head__chosen"}>
                                        {activeSegmentsCount}
                                    </div>

                                    <div className="post-head__filter-name">User segments</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[3] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div className={filtersDropActive[3] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

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
                                        <button className="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(3) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>

                            <div className="post-head__filter approved">
                                <div className="post-head__preview approved" onClick={() => { handleFiltersDropClick(4) }}>

                                    <div className={activeApprovedCount != 0 ? " post-head__chosen active" : "post-head__chosen"}>
                                        {activeApprovedCount}
                                    </div>

                                    <div className="post-head__filter-name">Approved</div>

                                    <img src="./img/dropdown-small-arrow.svg" alt="" className={filtersDropActive[4] === true ? " post-head__filter-arrow active" : "post-head__filter-arrow"} />

                                </div>

                                <div className={filtersDropActive[4] === true ? " post-head__dropdown active" : "post-head__dropdown"}>

                                    <div className="post-head__title">Approved</div>

                                    <div className="post-head__dropdown-content">
                                        <div className="post-head__row" onClick={() => { handleApproveClick(0) }}>

                                            <div className={approve.active[0] === true ? " post-head__check-box active" : "post-head__check-box"}>
                                                <img src="./img/filters-check-icon.svg" alt="" className="post-head__check-icon a" />
                                            </div>

                                            <div className="post-head__row-name">Not approved</div>
                                        </div>
                                    </div>

                                    <div className="post-head__dropdown-buttons">
                                        <button className="post-head__dropdown-button">Apply filters</button>
                                        <button className="post-head__dropdown-button cancel" onClick={() => { handleFiltersDropClick(4) }}>Cancel</button>
                                    </div>

                                </div>
                            </div>





                        </div>

                        <div className="post-head__controls">
                            <div className="post-foot__show head-sort" >
                                <div className="post-foot__show-text head-sort">Sort by:</div>
                                <div className="post-foot__quantity head-sort">
                                    <div className="post-foot__quantity-preview head-sort" onClick={() => {
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

                            <div className="post-foot__show head-sort-lower" >
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

                    <div className={pagination === 1 ? "post-list active" : "post-list"}>
                        <div className="post-list__row" >
                            <div className="post-list__author" onClick={() => { setCurrentComponent(6) }}>
                                <img src="./img/post-list-avatar-1.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Konnor Castro</div>
                            </div>
                            <div className="post-list__row-content" onClick={() => { setCurrentComponent(6) }}>
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(0) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[0] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" className="post-list__icon" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row even">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-2.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Bryson Casey</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag">Tagname1</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(1) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[1] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-3.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Montana Leon</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(2) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[2] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row even">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-4.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Safaa Marriott</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(3) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[3] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-5.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Sophia-Rose Nava</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(4) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[4] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row even">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-6.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Kasim Daniels</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(5) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[5] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                    </div>

                    <div className={pagination === 2 ? "post-list active" : "post-list"} >
                        <div className="post-list__row">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-1.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Konnor Castro</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(0) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[0] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" className="post-list__icon" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row even">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-2.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Bryson Casey</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag">Tagname1</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(1) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[1] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-1.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Konnor Castro</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(2) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[2] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row even">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-2.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Bryson Casey</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag">Tagname1</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(3) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[3] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-1.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Konnor Castro</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(4) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[4] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row even">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-2.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Bryson Casey</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag">Tagname1</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(5) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[5] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                    </div>
                    <div className={pagination === 3 ? "post-list active" : "post-list"} >
                        <div className="post-list__row">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-1.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Konnor Castro</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(0) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[0] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" className="post-list__icon" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row even">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-2.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Bryson Casey</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag">Tagname1</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(1) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[1] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-1.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Konnor Castro</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(2) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[2] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row even">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-2.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Bryson Casey</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag">Tagname1</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(3) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[3] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-1.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Konnor Castro</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(4) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[4] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row even">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-2.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Bryson Casey</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag">Tagname1</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(5) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[5] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                    </div>
                    <div className={pagination === 4 ? "post-list active" : "post-list"} >
                        <div className="post-list__row">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-1.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Konnor Castro</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(0) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[0] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" className="post-list__icon" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row even">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-2.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Bryson Casey</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag">Tagname1</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(1) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[1] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-1.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Konnor Castro</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(2) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[2] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row even">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-2.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Bryson Casey</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag">Tagname1</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(3) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[3] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-1.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Konnor Castro</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(4) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[4] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row even">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-2.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Bryson Casey</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag">Tagname1</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(5) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[5] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                    </div>
                    <div className={pagination === 5 ? "post-list active" : "post-list"} >
                        <div className="post-list__row">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-1.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Konnor Castro</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(0) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[0] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" className="post-list__icon" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row even">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-2.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Bryson Casey</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag">Tagname1</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(1) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[1] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
                        </div>
                        <div className="post-list__row">
                            <div className="post-list__author">
                                <img src="./img/post-list-avatar-1.svg" alt="" className="post-list__avatar" />
                                <div className="post-list__author-name">Konnor Castro</div>
                            </div>
                            <div className="post-list__row-content">
                                <div className="post-list__row-upper">
                                    <div className="post-list__post-name">Send status updates back through Intercom</div>
                                    <div className="post-list__time">3 min ago</div>
                                </div>
                                <div className="post-list__text">Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                    Instead of send updates via email, send them through the original
                                    conversation on Intercom
                                </div>
                                <div className="post-list__tags">
                                    <div className="post-list__tag red">Tagname1</div>
                                    <div className="post-list__tag">Tagname2</div>
                                </div>
                            </div>
                            <div className="post-list__buttons">
                                <div className="post-list__active-buttons">
                                    <button className="post-list__active-button" onClick={() => { handleLikeClick(2) }}>
                                        <img src="./img/post-list-like-icon.svg" alt="" className={likeActive[2] === true ? "post-list__icon active" : "post-list__icon"} />
                                        24
                                    </button>
                                    <button className="post-list__active-button">
                                        <img src="./img/post-list-comment-icon.svg" alt="" />
                                        48
                                    </button>
                                </div>

                                <img src="./img/board-list-menu-icon.svg" alt="" className="post-list__menu-button" onClick={() => { setMenuActive(true) }} />
                            </div>
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
                            <div className={menuRowActive === true ? "boards-menu__row active" : "boards-menu__row"} onClick={() => {
                                setMenuActive(false);
                                setCurrentComponent(10);
                            }
                            }>
                                <img src="./img/posts-menu-icon-1.svg" alt="" className={menuRowActive === true ? "boards-menu__icon active" : "boards-menu__icon"} />
                                <div className="boards-menu__row-text">Edit post</div>
                            </div>
                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(9) }}>
                                <img src="./img/posts-menu-icon-2.svg" alt="" className="boards-menu__icon" />
                                <div className="boards-menu__row-text">Delete post</div>
                            </div>


                            <div className="boards-menu__row" onClick={() => { setCurrentComponent(6) }}>
                                <img src="./img/posts-menu-icon-3.svg" alt="" className="boards-menu__icon" onClick={() => { setCurrentComponent(6) }} />
                                <div className="boards-menu__row-text">View post</div>
                            </div>

                            <div className="boards-menu__row" >
                                <img src="./img/posts-menu-icon-4.svg" alt="" className="boards-menu__icon" onClick={() => { setCurrentComponent(9) }} />
                                <div className="boards-menu__row-text">Merge post</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PostList;