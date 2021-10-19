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
                <p>1</p>
                <p>2</p>
                <p>3s</p>
                <p>4</p>
            </div>

        </div>
    )
}
export default CitySelectExample