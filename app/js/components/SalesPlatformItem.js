import React from "react";

function SalesPlatformItem (props) {
    return (
        <div className="sales-platform__item">
            <div className={`circle ${props.itemProps.classStyled}`}>
            </div>
            <p>{props.itemProps.itemText}</p>
            <span className={`sales-platform__item-text ${props.itemProps.spanStyledClass}`}>{props.itemProps.spanText}</span>
        </div>
    )
}


export default SalesPlatformItem;