import React from "react";
import Scroll from "./scroll";


const ScrollExample: React.FunctionComponent = () => {

    return (
        <div>
            <h2>第一个例子</h2>
            <Scroll style={{height:400}}>
                <p>1</p>
                <p>2</p>
                <p>1</p>
                <p>1</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>15</p>
                <p>11</p>
                <p>31</p>
                <p>13</p>
                <p>14</p>
                <p>16</p>
                <p>17</p>
                <p>18</p>
                <p>14</p>
                <p>11</p>
                <p>12</p>
            </Scroll>
        </div>
    )
}
export default ScrollExample