import * as React from 'react';
import { useEffect, useState } from 'react';
import "./activity.scss"

const ActivityExample = () => {



    var list = 8;//宫格数量
    var count = 0;//转圈初始值
    var totalCount = 7;//转动的总圈数
    var speed = 1000;//转圈速度，越大越慢
    var minSpeed = 500;
    var timer: NodeJS.Timeout;
    var index = 3;//指定转到哪个奖品
    const [isClick, setisClick] = useState(true);
    // const [isClick, setisClick] = useState(true);
    let ali: any = null;
    let weizhi = 0
    useEffect(() => {
        var lottery = document.querySelector('.lottery');
        // var prize = document.querySelector('.prize');
        ali = lottery?.querySelectorAll('li');
    }, [])

    const handleChange = () => {
        if (isClick) {
            count = 0;
            roll();
            // setisClick(false)

        }
        console.log("开始抽奖");

    }

    const roll = () => {


     

        speed = speed - 100


        if (speed <= 100) {
            speed = 100;
        }


        //每次调用都去掉全部active类名
        for (var j = 0; j < ali.length; j++) {
            ali[j].classList.remove('active');
        }

        weizhi++


        if (weizhi === ali.length) {
            weizhi = 0
            count++;
        }

        ali[weizhi].classList.add('active');//添加变色类名

        if (count >= totalCount && weizhi === index) {
            clearTimeout(timer);
            setisClick(true)
            speed = minSpeed;
        } else {
            console.log(speed, count);

            timer = setTimeout(roll, speed);//不满足条件时调用定时器
            //最后一圈减速
            if (count >= totalCount - 1 || speed <= 100) {
                speed += 300;
            }
        }





    };


    return <div>
        <h1>我的活动</h1>
        <div className="luckyDraw">

            <ul className="lottery">

                <li className="active">1</li>
                <li >2</li>
                <li >3</li>
                <li >4</li>
                <li >5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>



                <div className="dox" onClick={handleChange}>点击抽奖</div>
            </ul>

        </div>

    </div>
}
export default ActivityExample