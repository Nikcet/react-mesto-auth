import React from "react";
import img from '../images/ok.svg';
import bad from '../images/bad.svg';

export default function InfoTooltip(props) {
    return (
        <div id="infoTooltip" className="popup">
            <div className="popup__container popup__info">
                <button
                    type="button"
                    className="popup__close"
                    aria-label="Закрыть"
                    onClick={props.onClose}
                ></button>
                <img src={img} alt={props.title} className="popup__info-image" />
                <h2 className="popup__header">{props.title}</h2>
            </div>
        </div>
    )
}