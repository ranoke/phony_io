import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Search from "../components/Search.jsx";
import Calculator from '../components/Calculator.jsx';
import Interesting from '../components/Interesting.jsx';
const Quiz = () => {
    const [currentComponent, setCurrentComponent] = useState(Calculator);
    console.log(currentComponent);
    useEffect(() => {
        setCurrentComponent(Calculator);
    }, []);

    const WhatsBudget = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">What's your budget?</div>
                    <div className="quiz__heading">Find vehicle options that fit your budget.</div>
                    <div className="quiz__4-buttons">
                        <button className="quiz__button" onClick={() => { setCurrentComponent(EmploymentStatus); setCurrentProgress(1) }}>Under $250/Month</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(EmploymentStatus); setCurrentProgress(1) }}>$250-374/Month</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(EmploymentStatus); setCurrentProgress(1) }}>$374-500/Month</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(EmploymentStatus); setCurrentProgress(1) }}>Over $500/Month</button>
                    </div>
                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue mobile start" onClick={() => { setCurrentComponent(EmploymentStatus); setCurrentProgress(1) }}>Сontinue</button>
                    </div>
                </div>
            </>
        );
    };

    const EmploymentStatus = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">What's your employment status?</div>
                    <div className="quiz__heading">Your employment status will help determine the best vehicle and financing options for you.</div>
                    <div className="quiz__4-buttons">
                        <button className="quiz__button" onClick={() => { setCurrentComponent(MonthlyIncome); setCurrentProgress(2) }}>Employed</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(MonthlyIncome); setCurrentProgress(2) }}>Self-Employed</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(MonthlyIncome); setCurrentProgress(2) }}>Student</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(MonthlyIncomeRetired); setCurrentProgress(2) }}>Retired / Pension</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(OtherIncome); setCurrentProgress(2) }}>Other</button>
                    </div>
                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(MonthlyIncome); setCurrentProgress(2) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(WhatsBudget); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>

            </>
        );
    };

    const MonthlyIncome = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">Enter your monthly income</div>
                    <div className="quiz__heading">Your income details help us make sure your vehicle payments are easy and affordable. <span> Before taxes and deductions.</span></div>
                    <div className="quiz__big-inputs">
                        <input type="number" className="quiz__input" placeholder='Monthly income' />
                    </div>
                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(EmploymentTell); setCurrentProgress(3) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(EmploymentStatus); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };

    const MonthlyIncomeRetired = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">Enter your monthly income</div>
                    <div className="quiz__heading">Your income details help us make sure your vehicle payments are easy and affordable. <span> Before taxes and deductions.</span></div>
                    <div className="quiz__big-inputs">
                        <input type="number" className="quiz__input" placeholder='Monthly income' />
                    </div>
                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(CurrentlyWorking); setCurrentProgress(3) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(EmploymentStatus); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };

    const MonthlyIncomeOther = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">Enter your monthly income</div>
                    <div className="quiz__heading">Your income details help us make sure your vehicle payments are easy and affordable. <span> Before taxes and deductions.</span></div>
                    <div className="quiz__big-inputs">
                        <input type="number" className="quiz__input" placeholder='Monthly income' />
                    </div>
                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(TimeReceivingOther); setCurrentProgress(3) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(OtherIncome); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };

    const EmploymentTell = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">Tell us about your employment</div>
                    <div className="quiz__heading">We won’t come visit but we need these details to confirm your employment status so you can get the best rates possible.</div>
                    <div className="quiz__big-inputs">
                        <input type="text" className="quiz__input" placeholder='Employer' />
                        <input type="text" className="quiz__input" placeholder='Title' />
                    </div>
                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(HowLongEarning); setCurrentProgress(4) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(MonthlyIncome); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };

    const CurrentlyWorking = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">What's your employment status?</div>
                    <div className="quiz__heading">Your employment status will help determine the best vehicle and financing options for you.</div>
                    <div className="quiz__4-buttons">
                        <button className="quiz__button" onClick={() => { setCurrentComponent(TimeReceivingRetire); setCurrentProgress(4) }}>YES</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(TimeReceivingRetire); setCurrentProgress(4) }}>NO</button>
                    </div>
                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(TimeReceivingRetire); setCurrentProgress(4) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(MonthlyIncomeRetired); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };

    const OtherIncome = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">What's your employment status?</div>
                    <div className="quiz__heading">Your employment status will help determine the best vehicle and financing options for you.</div>
                    <div className="quiz__4-buttons">
                        <button className="quiz__button" onClick={() => { setCurrentComponent(MonthlyIncomeOther); setCurrentProgress(3) }}>Long-term disability</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(MonthlyIncomeOther); setCurrentProgress(3) }}>Spousal support / Alimony</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(MonthlyIncomeOther); setCurrentProgress(3) }}>Child support</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(MonthlyIncomeOther); setCurrentProgress(3) }}>Social assistance / Welfare</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(MonthlyIncomeOther); setCurrentProgress(3) }}>Maternity leave</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(MonthlyIncomeOther); setCurrentProgress(3) }}>Baby bonus / Child tax</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(MonthlyIncomeOther); setCurrentProgress(3) }}>Unemployed / EI</button>
                        <button className="quiz__button" onClick={() => { setCurrentComponent(MonthlyIncomeOther); setCurrentProgress(3) }}>Other / Not listed</button>
                    </div>
                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(MonthlyIncome); setCurrentProgress(3) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(EmploymentStatus); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };

    const HowLongEarning = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">How long have you been earning <br />this income?</div>
                    <div className="quiz__heading">Your income details help us make sure your vehicle payments are easy and affordable.</div>
                    <div className="quiz__small-inputs">
                        <input type="text" className="quiz__input-small" placeholder='Years' />
                        <input type="text" className="quiz__input-small" placeholder='Mounths' />
                    </div>
                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(TimeReceiving); setCurrentProgress(5) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(EmploymentTell); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };

    const TimeReceiving = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">How long receiving?</div>
                    <div className="quiz__heading">Your income details help us make sure your vehicle payments are easy and affordable.</div>
                    <div className="quiz__big-inputs">
                        <input type="text" className="quiz__input" placeholder='Time' />
                    </div>
                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(WhereLive); setCurrentProgress(6) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(EmploymentTell); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };

    const TimeReceivingRetire = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">How long receiving?</div>
                    <div className="quiz__heading">Your income details help us make sure your vehicle payments are easy and affordable.</div>
                    <div className="quiz__big-inputs">
                        <input type="text" className="quiz__input" placeholder='Time' />
                    </div>
                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(WhereLiveRetire); setCurrentProgress(5) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(CurrentlyWorking); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };

    const TimeReceivingOther = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">How long receiving?</div>
                    <div className="quiz__heading">Your income details help us make sure your vehicle payments are easy and affordable.</div>
                    <div className="quiz__big-inputs">
                        <input type="text" className="quiz__input" placeholder='Time' />
                    </div>
                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(WhereLiveOther); setCurrentProgress(5) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(MonthlyIncomeOther); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };

    const WhereLive = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">Where do you live?</div>
                    <div className="quiz__heading">Providing your location helps find the best deals near you.</div>


                    <div className="quiz__lot-inputs">
                        <div className="quiz__big-inputs-live">
                            <input type="text" className="quiz__input" placeholder='Street address' />
                            <input type="text" className="quiz__input" placeholder='City' />
                        </div>
                        <div className="quiz__small-inputs-live">
                            <input type="text" className="quiz__input-small" placeholder='Province' />
                            <input type="text" className="quiz__input-small" placeholder='Postal code' />
                        </div>
                    </div>

                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(WhenBorn); setCurrentProgress(7) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(TimeReceiving); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };
    const WhereLiveRetire = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">Where do you live?</div>
                    <div className="quiz__heading">Providing your location helps find the best deals near you.</div>


                    <div className="quiz__lot-inputs">
                        <div className="quiz__big-inputs-live">
                            <input type="text" className="quiz__input" placeholder='Street address' />
                            <input type="text" className="quiz__input" placeholder='City' />
                        </div>
                        <div className="quiz__small-inputs-live">
                            <input type="text" className="quiz__input-small" placeholder='Province' />
                            <input type="text" className="quiz__input-small" placeholder='Postal code' />
                        </div>
                    </div>

                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(WhenBornRetire); setCurrentProgress(6) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(TimeReceivingRetire); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };
    const WhereLiveOther = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">Where do you live?</div>
                    <div className="quiz__heading">Providing your location helps find the best deals near you.</div>


                    <div className="quiz__lot-inputs">
                        <div className="quiz__big-inputs-live">
                            <input type="text" className="quiz__input" placeholder='Street address' />
                            <input type="text" className="quiz__input" placeholder='City' />
                        </div>
                        <div className="quiz__small-inputs-live">
                            <input type="text" className="quiz__input-small" placeholder='Province' />
                            <input type="text" className="quiz__input-small" placeholder='Postal code' />
                        </div>
                    </div>

                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(WhenBornOther); setCurrentProgress(6) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(TimeReceivingOther); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };


    const WhenBorn = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">When were you born?</div>


                    <div className="quiz__mid-inputs">
                        <input type="text" className="quiz__input-small" placeholder='Year' />
                        <div className="quiz__small-inputs-mid">
                            <input type="text" className="quiz__input-very-small" placeholder='Mounth' />
                            <input type="text" className="quiz__input-very-small" placeholder='Day' />
                        </div>
                    </div>

                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(LastStep); setCurrentProgress(8) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(WhereLive); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };
    const WhenBornRetire = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">When were you born?</div>


                    <div className="quiz__mid-inputs">
                        <input type="text" className="quiz__input-small" placeholder='Year' />
                        <div className="quiz__small-inputs-mid">
                            <input type="text" className="quiz__input-very-small" placeholder='Mounth' />
                            <input type="text" className="quiz__input-very-small" placeholder='Day' />
                        </div>
                    </div>

                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(LastStepRetire); setCurrentProgress(7) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(WhereLiveRetire); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };
    const WhenBornOther = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">When were you born?</div>


                    <div className="quiz__mid-inputs">
                        <input type="text" className="quiz__input-small" placeholder='Year' />
                        <div className="quiz__small-inputs-mid">
                            <input type="text" className="quiz__input-very-small" placeholder='Mounth' />
                            <input type="text" className="quiz__input-very-small" placeholder='Day' />
                        </div>
                    </div>

                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(LastStepOther); setCurrentProgress(7) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(WhereLiveOther); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };

    const LastStep = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">Congratulations! Last step.</div>
                    <div className="quiz__heading">Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. </div>


                    <div className="quiz__lot-inputs">
                        <div className="quiz__small-inputs-live">
                            <input type="text" className="quiz__input-small" placeholder='First name' />
                            <input type="text" className="quiz__input-small" placeholder='Last name' />
                        </div>
                        <div className="quiz__big-inputs-live">
                            <input type="text" className="quiz__input" placeholder='Email' />
                            <input type="text" className="quiz__input" placeholder='Phone number' />
                        </div>

                    </div>

                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(Success); setCurrentProgress(9) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(WhenBorn); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };
    const LastStepRetire = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">Congratulations! Last step.</div>
                    <div className="quiz__heading">Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. </div>


                    <div className="quiz__lot-inputs">
                        <div className="quiz__small-inputs-live">
                            <input type="text" className="quiz__input-small" placeholder='First name' />
                            <input type="text" className="quiz__input-small" placeholder='Last name' />
                        </div>
                        <div className="quiz__big-inputs-live">
                            <input type="text" className="quiz__input" placeholder='Email' />
                            <input type="text" className="quiz__input" placeholder='Phone number' />
                        </div>

                    </div>

                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(Success); setCurrentProgress(8) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(WhenBornRetire); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };
    const LastStepOther = () => {
        return (
            <>
                <div className="quiz">
                    <div className="quiz__title">Congratulations! Last step.</div>
                    <div className="quiz__heading">Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. </div>


                    <div className="quiz__lot-inputs">
                        <div className="quiz__small-inputs-live">
                            <input type="text" className="quiz__input-small" placeholder='First name' />
                            <input type="text" className="quiz__input-small" placeholder='Last name' />
                        </div>
                        <div className="quiz__big-inputs-live">
                            <input type="text" className="quiz__input" placeholder='Email' />
                            <input type="text" className="quiz__input" placeholder='Phone number' />
                        </div>

                    </div>

                    <div className="quiz__nav-buttons">
                        <button className="quiz__continue" onClick={() => { setCurrentComponent(Success); setCurrentProgress(8) }}>Сontinue</button>
                        <button className="quiz__back" onClick={() => { setCurrentComponent(WhenBornOther); progressBack() }}>
                            <img src="./img/back-arrow.svg" alt="" className="quiz__back-arrow" />
                            Back
                        </button>
                    </div>

                </div>
            </>
        );
    };


    const Success = () => {
        return (
            <>
                <div className="quiz__progress-hide">
                    <div className="quiz">
                        <img src="./img/quiz-success.svg" alt="" className="quiz__img" />
                        <div className="quiz__title">Application successful!</div>
                        <div className="quiz__heading success">Your response was successfully submitted. Thank you!
                            Our team will reach out to you shortly.</div>
                        <div className="quiz__confirm-head">Confirmation number:</div>
                        <div className="quiz__confirmation">
                            0002466-1vwrh0
                        </div>
                        <Link to="/">
                            <button className="quiz__continue mobile">Go to main page</button>
                        </Link>
                    </div>
                </div>
            </>
        );
    };



    const [currentProgress, setCurrentProgress] = useState(0);

    const progressBack = () => {
        let decrement = currentProgress - 1;
        setCurrentProgress(decrement);
    }

    const progressBarStyle = {
        width: `${currentProgress * 10}%`
    };

    return (
        <>
            <Search />
            <div className="quiz-line"></div>
            <div className="quiz-progressbar">
                <div className="quiz-progressbar__line" style={progressBarStyle}></div>
            </div>


            {currentComponent}
        </>
    );
}

export default Quiz;
