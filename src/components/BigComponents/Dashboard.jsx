import React, { useState } from 'react';
import Rechart from '../ComplexComponents/Chart';

const Dashboard = ({ components, setCurrentComponent }) => {


    const [active, setActive] = useState(1);

    return (
        <>
            <div className="dashboard">
                <div className="history-path" onClick={()=>{setCurrentComponent(1)}}>
                    Dashboard
                </div>

                <div className="component-title">
                    Dashboard
                </div>


                <div className="dashboard__wrapper">
                    <div className="dashboard__container">


                        <div className="dash-cards">
                            <div className="dash-cards__card">
                                <div className="dash-cards__heading">Boards</div>
                                <div className="dash-cards__number">123</div>
                            </div>
                            <div className="dash-cards__card">
                                <div className="dash-cards__heading">Users</div>
                                <div className="dash-cards__number">1 623</div>
                            </div>
                            <div className="dash-cards__card">
                                <div className="dash-cards__heading">Posts</div>
                                <div className="dash-cards__number">1 623</div>
                            </div>
                            <div className="dash-cards__card">
                                <div className="dash-cards__heading">Votes</div>
                                <div className="dash-cards__number">1 623</div>
                            </div>
                        </div>

                        <div className="dash-main">
                            <div className="dash-main__upper">
                                <div className="dash-main__heading">Statistic</div>
                                <div className="dash-main__choises">
                                    <div className="dash-main__choise" onClick={() => { setActive(1) }}>
                                        <div className={active === 1 ? "dash-main__radio active" : "dash-main__radio"} >
                                            <div className={active === 1 ? "dash-main__radio-circle active" : "dash-main__radio-circle"}></div>
                                        </div>
                                        <div className="dash-main__choise-text">Users</div>
                                    </div>
                                    <div className="dash-main__choise" onClick={() => { setActive(2) }}>
                                        <div className={active === 2 ? "dash-main__radio active" : "dash-main__radio"} >
                                            <div className={active === 2 ? "dash-main__radio-circle active" : "dash-main__radio-circle"}></div>
                                        </div>
                                        <div className="dash-main__choise-text green">Voters</div>
                                    </div>
                                    <div className="dash-main__choise" onClick={() => { setActive(3) }}>
                                        <div className={active === 3 ? "dash-main__radio active" : "dash-main__radio"} >
                                            <div className={active === 3 ? "dash-main__radio-circle active" : "dash-main__radio-circle"}></div>
                                        </div>
                                        <div className="dash-main__choise-text orange">Posts</div>
                                    </div>
                                </div>
                                <div className="dash-main__sort">
                                    <div className="dash-main__sort-preview">
                                        last 90 days
                                        <img src="./img/dropdown-arrow.svg" alt="" className="dash-main__arrow" />
                                    </div>
                                </div>
                            </div>

                            <div className="dash-main__graph">
                                <Rechart activeChart={active} setActiveChart={setActive}></Rechart>
                                <div className="dash-main__rechart-months">
                                    <div className="dash-main__month j">January</div>
                                    <div className="dash-main__month f">February</div>
                                    <div className="dash-main__month m">March</div>
                                    <div className="dash-main__month a">April</div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="dash-activities">
                        <div className="dash-activities__head">Activities</div>

                        <div className="dash-activities__rows">
                            <div className="dash-activities__row">
                                <div className="dash-activities__content">
                                    <img src="./img/dashboard-activities-avatar-1.svg" alt="" className="dash-activities__avatar" />
                                    <div className="dash-activities__box">
                                        <div className="dash-activities__name">Sophia-Rose Nava</div>
                                        <div className="dash-activities__voted">upvoted</div>
                                    </div>
                                    <div className="dash-activities__time">6 min ago</div>
                                </div>
                                <div className="dash-activities__additional-heading">
                                    Welcome to Nolt #1
                                </div>
                            </div>
                            <div className="dash-activities__row grey with-text">
                                <div className="dash-activities__content">
                                    <img src="./img/dashboard-activities-avatar-2.svg" alt="" className="dash-activities__avatar" />
                                    <div className="dash-activities__box">
                                        <div className="dash-activities__name">Yuvaan Whittington</div>
                                        <div className="dash-activities__voted">commented</div>
                                    </div>
                                    <div className="dash-activities__time">38 min ago</div>
                                </div>
                                <div className="dash-activities__additional-heading">
                                    Tips and Tricks #2
                                </div>
                                <div className="dash-activities__additional-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                            <div className="dash-activities__row">
                                <div className="dash-activities__content">
                                    <img src="./img/dashboard-activities-avatar-1.svg" alt="" className="dash-activities__avatar" />
                                    <div className="dash-activities__box">
                                        <div className="dash-activities__name">Sophia-Rose Nava</div>
                                        <div className="dash-activities__voted">upvoted</div>
                                    </div>
                                    <div className="dash-activities__time">6 min ago</div>
                                </div>
                                <div className="dash-activities__additional-heading">
                                    Welcome to Nolt #1
                                </div>
                            </div>
                            <div className="dash-activities__row grey">
                                <div className="dash-activities__content">
                                    <img src="./img/dashboard-activities-avatar-2.svg" alt="" className="dash-activities__avatar" />
                                    <div className="dash-activities__box">
                                        <div className="dash-activities__name">Yuvaan Whittington</div>
                                        <div className="dash-activities__voted">commented</div>
                                    </div>
                                    <div className="dash-activities__time">38 min ago</div>
                                </div>
                                <div className="dash-activities__additional-heading">
                                    Tips and Tricks #2
                                </div>
                            </div>
                        </div>

                        <button className="dash-activities__button">View more</button>
                    </div>


                </div>




            </div>
        </>
    );
}
export default Dashboard;