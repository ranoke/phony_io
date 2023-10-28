import React from "react";

const BidPopUp = ({ active, setActive }) => {
    
    return (
        <div className={active ? "place-bid active" : "place-bid"}>
            <div className="place-bid__cross" onClick={() => setActive(false)} ></div>
            <div className="place-bid__title">Place a bid</div>
            <div className="place-bid__min">Min.sum</div>
            <form action="#" className="place-bid__form">
                <div className="place-bid__input-container">
                    <input type="number" className="place-bid__input" placeholder="00000000" />
                    <div className="place-bid__input-placeholder">TASTE</div>
                </div>
                <div className="place-bid__dollars">(1308.54$)</div>
            </form>
            <button className="place-bid__button" onClick={() => setActive(false)}>Place</button>
        </div>
    );
}
export default BidPopUp;