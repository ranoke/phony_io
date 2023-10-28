import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TwoThumbInputRange } from "react-two-thumb-input-range"


import CardSwiper from '../components/CardSwiper.jsx';
import Footer from '../components/Footer.jsx';


import Search from "../components/Search.jsx";
var data = require("../data/MOCK_DATA.json");
const Catalog = () => {
    const [value, setValue] = useState("");


    const onChange = (event) => {
        setValue(event.target.value);
    };
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };

    const [modelValue, setModelValue] = useState("");
    const modelOnChange = (event) => {
        setModelValue(event.target.value);
    };
    const modelOnSearch = (searchTerm) => {
        setModelValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };

    const [makeValue, setMakeValue] = useState("");
    const makeOnChange = (event) => {
        setMakeValue(event.target.value);
    };
    const makeOnSearch = (searchTerm) => {
        setMakeValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };


    const [sortDropActive, setSortDropActive] = useState(false);
    const [sortText, setSortText] = useState('Recommendations');

    const handleSortClick = (text) => {
        setSortText(text);
        setSortDropActive(false);
    };

    const [modelDropActive, setModelDropActive] = useState(false);
    const [bodyDropActive, setBodyDropActive] = useState(false);
    const [transmissionDropActive, setTransmissionDropActive] = useState(false);
    const [priceDropActive, setPriceDropActive] = useState(false);
    const [timeDropActive, setTimeDropActive] = useState(false);
    const [kmDropActive, setKmDropActive] = useState(false);


    const [activeCheckBoxes, setActiveCheckBoxes] = useState([false, false, false, false, false, false, false, false, false]);

    const handleCheckBoxClick = (index) => {
        const newActiveItems = activeCheckBoxes.map((item, i) =>
            i === index ? !item : item // Змінюємо значення на протилежне для вибраного індексу
        );
        setActiveCheckBoxes(newActiveItems);
    };



    const [inputValue, setInputValue] = useState([1000, 1000000])

    const onValueChange = (values) => {
        setInputValue(values);
    }

    const [inputTimeValue, setInputTimeValue] = useState([2000, 2050])

    const onValueTimeChange = (values) => {
        setInputTimeValue(values);
    }


    const [inputKm, setKmValue] = useState(100000);



    const [filtersActive, setFiltersActive] = useState(false);

    return (
        <>
            <Search />
            <div className="quiz-line"></div>

            <div className="catalog">
                <div className={filtersActive ? "catalog__filters-wrapper active" : "catalog__filters-wrapper"}>
                    <div className={filtersActive ? "catalog__filters active" : "catalog__filters"}>

                        <img src="./img/catalog-filters-cross.svg" alt="" className="catalog__filters-cross" onClick={() => {
                            setFiltersActive(false);
                            setModelDropActive(false);
                            setBodyDropActive(false);
                            setTransmissionDropActive(false);
                            setPriceDropActive(false);
                            setTimeDropActive(false);
                            setKmDropActive(false);
                        }} />


                        <div className="catalog__filters-head">
                            <div className="catalog__filters-title">Detailed search</div>
                            <button className="catalog__clear-button">Clear filters</button>
                        </div>

                        <div className={modelDropActive ? "catalog__filter model-active" : "catalog__filter "}>
                            <div className="catalog__filter-preview" onClick={() => { if (modelDropActive) { setModelDropActive(false) } else { setModelDropActive(true) } }} >
                                Make, Model
                                <img src="./img/terms-arrow.svg" alt="" className={modelDropActive ? "catalog__filter-arrow active" : "catalog__filter-arrow "} />
                            </div>

                            <div className={modelDropActive ? "catalog__filter-dropdown model-active" : "catalog__filter-dropdown "}>
                                <div className="catalog__search-container filter">
                                    <div className="catalog__input-heading">Make</div>
                                    <div className="catalog__search-inner filter">
                                        <input className="catalog__search-input filter" type="text" value={makeValue} onChange={makeOnChange} placeholder='Search Make...' />
                                        <img src="./img/catalog-search-icon.svg" alt="" className="catalog__search-icon" />
                                    </div>
                                    <div className="catalog__search-dropdown filter">
                                        {data
                                            .filter((item) => {
                                                const searchTerm = makeValue.toLowerCase();
                                                const fullName = item.full_name.toLowerCase();

                                                return (
                                                    searchTerm &&
                                                    fullName.startsWith(searchTerm) &&
                                                    fullName !== searchTerm
                                                );
                                            })
                                            .slice(0, 10)
                                            .map((item) => (
                                                <div
                                                    onClick={() => makeOnSearch(item.full_name)}
                                                    className="catalog__search-dropdown-row filter"
                                                    key={item.full_name}
                                                >
                                                    {item.full_name}
                                                </div>
                                            ))}
                                    </div>
                                </div>

                                <div className="catalog__search-container filter">
                                    <div className="catalog__input-heading">Model</div>
                                    <div className="catalog__search-inner filter">
                                        <input className="catalog__search-input filter" type="text" value={modelValue} onChange={modelOnChange} placeholder='Search Model...' />
                                        <img src="./img/catalog-search-icon.svg" alt="" className="catalog__search-icon" />
                                    </div>
                                    <div className="catalog__search-dropdown filter">
                                        {data
                                            .filter((item) => {
                                                const searchTerm = modelValue.toLowerCase();
                                                const fullName = item.full_name.toLowerCase();

                                                return (
                                                    searchTerm &&
                                                    fullName.startsWith(searchTerm) &&
                                                    fullName !== searchTerm
                                                );
                                            })
                                            .slice(0, 10)
                                            .map((item) => (
                                                <div
                                                    onClick={() => modelOnSearch(item.full_name)}
                                                    className="catalog__search-dropdown-row filter"
                                                    key={item.full_name}
                                                >
                                                    {item.full_name}
                                                </div>
                                            ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={bodyDropActive ? "catalog__filter body-active" : "catalog__filter "}>
                            <div className="catalog__filter-preview" onClick={() => { if (bodyDropActive) { setBodyDropActive(false) } else { setBodyDropActive(true) } }} >
                                Body type
                                <img src="./img/terms-arrow.svg" alt="" className={bodyDropActive ? "catalog__filter-arrow active" : "catalog__filter-arrow "} />
                            </div>

                            <div className={bodyDropActive ? "catalog__filter-dropdown body-active" : "catalog__filter-dropdown "}>

                                <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(0) }}>
                                    <div className="catalog__check-box">
                                        <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[0] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                    </div>
                                    <img src="./img/catalog-car-icon-1.svg" alt="" className="catalog__check-car-icon" />
                                    <div className="catalog__check-text">Trucks</div>
                                </div>
                                <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(1) }}>
                                    <div className="catalog__check-box">
                                        <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[1] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                    </div>
                                    <img src="./img/catalog-car-icon-2.svg" alt="" className="catalog__check-car-icon" />
                                    <div className="catalog__check-text">SUV</div>
                                </div>
                                <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(2) }}>
                                    <div className="catalog__check-box">
                                        <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[2] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                    </div>
                                    <img src="./img/catalog-car-icon-3.svg" alt="" className="catalog__check-car-icon" />
                                    <div className="catalog__check-text">Sedan</div>
                                </div>
                                <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(3) }}>
                                    <div className="catalog__check-box">
                                        <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[3] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                    </div>
                                    <img src="./img/catalog-car-icon-4.svg" alt="" className="catalog__check-car-icon" />
                                    <div className="catalog__check-text">Hatchback</div>
                                </div>
                                <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(4) }}>
                                    <div className="catalog__check-box">
                                        <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[4] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                    </div>
                                    <img src="./img/catalog-car-icon-5.svg" alt="" className="catalog__check-car-icon" />
                                    <div className="catalog__check-text">Coupe</div>
                                </div>
                                <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(5) }}>
                                    <div className="catalog__check-box">
                                        <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[5] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                    </div>
                                    <img src="./img/catalog-car-icon-6.svg" alt="" className="catalog__check-car-icon" />
                                    <div className="catalog__check-text">Convertiable</div>
                                </div>
                                <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(6) }}>
                                    <div className="catalog__check-box">
                                        <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[6] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                    </div>
                                    <img src="./img/catalog-car-icon-7.svg" alt="" className="catalog__check-car-icon" />
                                    <div className="catalog__check-text">VAN</div>
                                </div>



                            </div>
                        </div>

                        <div className={transmissionDropActive ? "catalog__filter transmission-active" : "catalog__filter "}>
                            <div className="catalog__filter-preview" onClick={() => { if (transmissionDropActive) { setTransmissionDropActive(false) } else { setTransmissionDropActive(true) } }} >
                                Transmission
                                <img src="./img/terms-arrow.svg" alt="" className={transmissionDropActive ? "catalog__filter-arrow active" : "catalog__filter-arrow "} />
                            </div>

                            <div className={transmissionDropActive ? "catalog__filter-dropdown transmission-active" : "catalog__filter-dropdown "}>

                                <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(7) }}>
                                    <div className="catalog__check-box">
                                        <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[7] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                    </div>
                                    <div className="catalog__check-text"><span>Automatic</span></div>
                                </div>
                                <div className="catalog__check-row" onClick={() => { handleCheckBoxClick(8) }}>
                                    <div className="catalog__check-box">
                                        <img src="./img/catalog-check-icon.svg" alt="" className={activeCheckBoxes[8] ? "catalog__check-icon active" : "catalog__check-icon "} />
                                    </div>
                                    <div className="catalog__check-text"><span>Manual</span></div>
                                </div>



                            </div>
                        </div>

                        <div className={priceDropActive ? "catalog__filter price-active" : "catalog__filter "}>
                            <div className="catalog__filter-preview" onClick={() => { if (priceDropActive) { setPriceDropActive(false) } else { setPriceDropActive(true) } }} >
                                Price
                                <img src="./img/terms-arrow.svg" alt="" className={priceDropActive ? "catalog__filter-arrow active" : "catalog__filter-arrow "} />
                            </div>

                            <div className={priceDropActive ? "catalog__filter-dropdown price-active" : "catalog__filter-dropdown "}>

                                <div>
                                    <div className="catalog__values-container">
                                        <div className="catalog__value-number">
                                            $ {inputValue[0]}
                                        </div>
                                        <div className="catalog__value-number">
                                            $ {inputValue[1]}
                                        </div>
                                    </div>
                                    <TwoThumbInputRange
                                        step={1000}
                                        values={inputValue}
                                        min={1000}
                                        max={1000000}
                                        onChange={onValueChange}
                                        railColor={"#D7D7D7"}
                                        trackColor={"#7481FF"}
                                        style={{
                                            width: '260px',
                                            height: '200px',
                                            borderRadius: '5px',
                                            background: 'var(--secondary-s-color, #D7D7D7)',
                                        }}
                                        trackStyle={{
                                            height: '100%',
                                            borderRadius: '2px',
                                            background: 'var(--secondary-s-color, #D7D7D7)',
                                        }}
                                        thumbStyle={{
                                            width: '18px',
                                            height: '18px',
                                            borderRadius: '2px',
                                            border: '1px solid var(--primary-white, #FFF)',
                                            background: 'var(--primary-accent, #7481FF)',
                                        }}
                                        showLabels={false}
                                    />
                                </div>

                            </div>
                        </div>

                        <div className={timeDropActive ? "catalog__filter price-active" : "catalog__filter "}>
                            <div className="catalog__filter-preview" onClick={() => { if (timeDropActive) { setTimeDropActive(false) } else { setTimeDropActive(true) } }} >
                                Year
                                <img src="./img/terms-arrow.svg" alt="" className={timeDropActive ? "catalog__filter-arrow active" : "catalog__filter-arrow "} />
                            </div>

                            <div className={timeDropActive ? "catalog__filter-dropdown price-active" : "catalog__filter-dropdown "}>

                                <div>
                                    <div className="catalog__values-container">
                                        <div className="catalog__value-number">
                                            {inputTimeValue[0]}
                                        </div>
                                        <div className="catalog__value-number">
                                            {inputTimeValue[1]}
                                        </div>
                                    </div>
                                    <TwoThumbInputRange
                                        step={1000}
                                        values={inputTimeValue}
                                        min={2000}
                                        max={2050}
                                        onChange={onValueTimeChange}
                                        railColor={"#D7D7D7"}
                                        trackColor={"#7481FF"}
                                        style={{
                                            width: '260px',
                                            height: '200px',
                                            borderRadius: '5px',
                                            background: 'var(--secondary-s-color, #D7D7D7)',
                                        }}
                                        trackStyle={{
                                            height: '100%',
                                            borderRadius: '2px',
                                            background: 'var(--secondary-s-color, #D7D7D7)',
                                        }}
                                        thumbStyle={{
                                            width: '18px',
                                            height: '18px',
                                            borderRadius: '2px',
                                            border: '1px solid var(--primary-white, #FFF)',
                                            background: 'var(--primary-accent, #7481FF)',
                                        }}
                                        showLabels={false}
                                    />
                                </div>

                            </div>
                        </div>


                        <div className={kmDropActive ? "catalog__filter price-active" : "catalog__filter "}>
                            <div className="catalog__filter-preview" onClick={() => { if (kmDropActive) { setKmDropActive(false) } else { setKmDropActive(true) } }} >
                                Kilometers
                                <img src="./img/terms-arrow.svg" alt="" className={kmDropActive ? "catalog__filter-arrow active" : "catalog__filter-arrow "} />
                            </div>

                            <div className={kmDropActive ? "catalog__filter-dropdown price-active" : "catalog__filter-dropdown "}>

                                <div>
                                    <div className="catalog__values-container">
                                        <div className="catalog__value-number">
                                            {inputKm} <span className="catalog__or-less-word">or less</span>
                                        </div>
                                    </div>
                                    <input className="calculator__scrollbar filter" type="range" min="50000" max="1000000" step="1"
                                        value={inputKm}
                                        onChange={(ev) => { setKmValue(ev.target.value) }} />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="catalog__main">
                    <div className="catalog__head">
                        <div className="catalog__search">
                            <img src="./img/catalog-filters-button.svg" alt="" className="catalog__filters-button" onClick={() => { setFiltersActive(true) }} />
                            <div className="catalog__search-word">Search Filter </div>
                            <div className="catalog__search-container">
                                <div className="catalog__search-inner">
                                    <input className="catalog__search-input" type="text" value={value} onChange={onChange} placeholder='Find a dream car...' />
                                    <img src="./img/catalog-search-icon.svg" alt="" className="catalog__search-icon" />
                                </div>
                                <div className="catalog__search-dropdown">
                                    {data
                                        .filter((item) => {
                                            const searchTerm = value.toLowerCase();
                                            const fullName = item.full_name.toLowerCase();

                                            return (
                                                searchTerm &&
                                                fullName.startsWith(searchTerm) &&
                                                fullName !== searchTerm
                                            );
                                        })
                                        .slice(0, 10)
                                        .map((item) => (
                                            <div
                                                onClick={() => onSearch(item.full_name)}
                                                className="catalog__search-dropdown-row"
                                                key={item.full_name}
                                            >
                                                {item.full_name}
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <img src="./img/catalog-share-icon.svg" alt="" className="catalog__search-share-icon" />
                        </div>
                        <div className="catalog__sort">
                            <div className="catalog__sort-word">Sorted by </div>
                            <div className="catalog__sort-container" >
                                <div className="catalog__sort-preview" onClick={() => { setSortDropActive(true) }} >
                                    {sortText}
                                    <img src="./img/terms-arrow.svg" alt="" className={sortDropActive ? "catalog__sort-arrow active" : "catalog__sort-arrow "} />
                                </div>
                                <div className={sortDropActive ? "catalog__sort-dropdown active" : "catalog__sort-dropdown "}>
                                    <div className="catalog__sort-dropdown-row" onClick={() => handleSortClick('Newest inventory')}>
                                        Newest inventory
                                    </div>
                                    <div className="catalog__sort-dropdown-row" onClick={() => handleSortClick('Lowest price')}>
                                        Lowest price
                                    </div>
                                    <div className="catalog__sort-dropdown-row" onClick={() => handleSortClick('Highest prices')}>
                                        Highest prices
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="catalog__cards">
                        <div className="catalog__column">
                            <Link to='/car'>
                                <div className="catalog__card">
                                <CardSwiper img='./img/catalog-card-slider-img-1.webp'
                                    img1200='./img/catalog-card-slider-img-1-1200.webp'
                                    img600='./img/catalog-card-slider-img-1-600.webp'></CardSwiper>
                                <div className="catalog__card-content">
                                    <div className="catalog__card-heading">Porsche Panamera II Turbo S E-Hybrid  </div>
                                    <div className="catalog__card-price">$ 150 000</div>
                                    <div className="catalog__characteristics">
                                        <div className="catalog__char-word">2012 year</div>
                                        <div className="catalog__char-line"></div>
                                        <div className="catalog__char-word">Sedan</div>
                                        <div className="catalog__char-line"></div>
                                        <div className="catalog__char-word">Transmission</div>
                                    </div>
                                    <div className="catalog__char-word">
                                        Kilometres
                                    </div>
                                </div>

                                </div>
                            </Link>
                            <Link to='/car'>
                                <div className="catalog__card">
                                    <CardSwiper img='./img/catalog-card-slider-img-3.webp'
                                        img1200='./img/catalog-card-slider-img-3-1200.webp'
                                        img600='./img/catalog-card-slider-img-3-600.webp'></CardSwiper>
                                    <div className="catalog__card-content">
                                        <div className="catalog__card-heading">Mercedes-Benz CLA I (C117, X117) 200 <br />More information  </div>
                                        <div className="catalog__card-price">$ 150 000</div>
                                        <div className="catalog__characteristics">
                                            <div className="catalog__char-word">2012 year</div>
                                            <div className="catalog__char-line"></div>
                                            <div className="catalog__char-word">Sedan</div>
                                            <div className="catalog__char-line"></div>
                                            <div className="catalog__char-word">Transmission</div>
                                        </div>
                                        <div className="catalog__char-word">
                                            Kilometres
                                        </div>
                                    </div>

                                </div>
                            </Link>
                            <Link to='/car'>
                                <div className="catalog__card">
                                    <CardSwiper img='./img/catalog-card-slider-img-5.webp'
                                        img1200='./img/catalog-card-slider-img-5-1200.webp'
                                        img600='./img/catalog-card-slider-img-5.webp'></CardSwiper>
                                    <div className="catalog__card-content">
                                        <div className="catalog__card-heading">Mercedes-Benz E-Class III (W211, S211) Restyling 230</div>
                                        <div className="catalog__card-price">$ 150 000</div>
                                        <div className="catalog__characteristics">
                                            <div className="catalog__char-word">2012 year</div>
                                            <div className="catalog__char-line"></div>
                                            <div className="catalog__char-word">Sedan</div>
                                            <div className="catalog__char-line"></div>
                                            <div className="catalog__char-word">Transmission</div>
                                        </div>
                                        <div className="catalog__char-word">
                                            Kilometres
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </div>
                        <div className="catalog__column">
                            <Link to='/car'>
                                <div className="catalog__card">
                                    <CardSwiper img='./img/catalog-card-slider-img-2.webp'
                                        img1200='./img/catalog-card-slider-img-2-1200.webp'
                                        img600='./img/catalog-card-slider-img-2-600.webp'></CardSwiper>
                                    <div className="catalog__card-content">
                                        <div className="catalog__card-heading">Mitsubishi Outlander III Restyling 3 <br />More datail information</div>
                                        <div className="catalog__card-price">$ 23 500</div>
                                        <div className="catalog__characteristics">
                                            <div className="catalog__char-word">2012 year</div>
                                            <div className="catalog__char-line"></div>
                                            <div className="catalog__char-word">Sedan</div>
                                            <div className="catalog__char-line"></div>
                                            <div className="catalog__char-word">Transmission</div>
                                        </div>
                                        <div className="catalog__char-word">
                                            Kilometres
                                        </div>
                                    </div>

                                </div>
                            </Link>
                            <Link to='/car'>
                                <div className="catalog__card">
                                    <CardSwiper img='./img/catalog-card-slider-img-4.webp'
                                        img1200='./img/catalog-card-slider-img-4-1200.webp'
                                        img600='./img/catalog-card-slider-img-4-600.webp'></CardSwiper>
                                    <div className="catalog__card-content">
                                        <div className="catalog__card-heading">Mercedes-Benz W124 420</div>
                                        <div className="catalog__card-price">$ 23 500</div>
                                        <div className="catalog__characteristics">
                                            <div className="catalog__char-word">2012 year</div>
                                            <div className="catalog__char-line"></div>
                                            <div className="catalog__char-word">Sedan</div>
                                            <div className="catalog__char-line"></div>
                                            <div className="catalog__char-word">Transmission</div>
                                        </div>
                                        <div className="catalog__char-word">
                                            Kilometres
                                        </div>
                                    </div>

                                </div>
                            </Link>
                            <Link to='/car'>
                                <div className="catalog__card">
                                    <CardSwiper img='./img/catalog-card-slider-img-6.webp'
                                        img1200='./img/catalog-card-slider-img-6-1200.webp'
                                        img600='./img/catalog-card-slider-img-6.webp'></CardSwiper>
                                    <div className="catalog__card-content">
                                        <div className="catalog__card-heading">Audi A7 I (4G) S-tronic</div>
                                        <div className="catalog__card-price">$ 23 500</div>
                                        <div className="catalog__characteristics">
                                            <div className="catalog__char-word">2012 year</div>
                                            <div className="catalog__char-line"></div>
                                            <div className="catalog__char-word">Sedan</div>
                                            <div className="catalog__char-line"></div>
                                            <div className="catalog__char-word">Transmission</div>
                                        </div>
                                        <div className="catalog__char-word">
                                            Kilometres
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="catalog-page-footer">
                <Footer></Footer>
            </div >

        </>
    );
}

export default Catalog;
