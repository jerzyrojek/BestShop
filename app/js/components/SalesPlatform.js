import React from "react";
import SalesPlatformItem from "./SalesPlatformItem.js";

function SalesPlatform(){
    return(
        <>
            <section className="sales-platform">
                <h2>The most popular sales platform in the country</h2>
                <div className="container sales-platform__content">
                    <SalesPlatformItem itemProps={{classStyled:"circle-one", itemText:"100000+", spanStyledClass:"text-under-item-one", spanText:"daily entries"}}/>
                    <SalesPlatformItem itemProps={{classStyled:"circle-two", itemText:"2000000+", spanStyledClass:"text-item-two", spanText:"seen products every day"}}/>
                    <SalesPlatformItem itemProps={{classStyled:"circle-three", itemText:"10000+", spanStyledClass:"text-item-three", spanText:"added posts daily"}}/>
                </div>
            </section>
            </>
    )
}

export default SalesPlatform;