import React, { FunctionComponent, useState } from "react";
import ReactDOM from "react-dom";
import CitySelect from "./citySelect";

interface Props {

}
const CitySelectExample: FunctionComponent<Props> = (props) => {


    return (
        <div>
            <div><h2>第一个例子</h2>
                <CitySelect>选择城市</CitySelect>
            </div>

        </div>
    )
}
export default CitySelectExample