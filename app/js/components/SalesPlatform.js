import React from "react";
import SalesPlatformItem from "./SalesPlatformItem.js";

function SalesPlatform(){
    return(
        <>
            <section className="sales-platform">
                <h2>The most popular sales platform in the country</h2>
                <div className="container sales-platform__content">
                    <SalesPlatformItem itemProps={{className:"circle-one", itemText:"100000+", spanClass:"text-under-item-one", spanText:"daily entries"}}/>
                    <SalesPlatformItem itemProps={{className:"circle-two", itemText:"2000000+", spanClass:"text-item-two", spanText:"seen products every day"}}/>
                    <SalesPlatformItem itemProps={{className:"circle-three", itemText:"10000+", spanClass:"text-item-three", spanText:"added posts daily"}}/>
                </div>
            </section>
            </>
    )
}

export default SalesPlatform;