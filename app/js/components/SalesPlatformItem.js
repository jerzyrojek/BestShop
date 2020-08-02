import React from "react";

function SalesPlatformItem (props) {
    return (
        <div className="sales-platform__item">
            <div className={`circle ${props.itemProps.className}`}>
            </div>
            <p>{props.itemProps.itemText}</p>
            <span className={`sales-platform__item-text ${props.itemProps.spanClass}`}>{props.itemProps.spanText}</span>
        </div>
    )
}


export default SalesPlatformItem;