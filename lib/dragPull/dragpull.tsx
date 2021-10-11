import React, { DragEventHandler, useEffect, useState } from "react";
import "./dragpull.scss"
const dragPull: React.FunctionComponent = () => {
    const STATUS_TODO = 'STATUS_TODO';
    const STATUS_DOING = 'STATUS_DOING';
    const STATUS_DONE = 'STATUS_DONE';
    const STATUS_CODE = {
        STATUS_TODO: '待处理',
        STATUS_DOING: '进行中',
        STATUS_DONE: '已完成'
    }
    // 秋天是影响情绪多变的季节，时而快乐，时而悲凉
    const [tasks, setTasks] = useState([
        {
            id: 1,
            status: STATUS_TODO,
            title: "床前明月光",
            username: "家玮",
            point: 10
        },
        {
            id: 2,
            status: STATUS_TODO,
            title: "疑是地上霜",
            username: "家玮",
            point: 20
        },
        {
            id: 3,
            status: STATUS_TODO,
            title: "举头望明月",
            username: "家玮",
            point: 30
        },
        {
            id: 3,
            status: STATUS_TODO,
            title: "低头思故乡",
            username: "家玮",
            point: 40
        }
    ])
    const [luXun, setLuXun] = useState([
        {
            id: 1,
            status: STATUS_TODO,
            title: "运交华盖欲何求，未敢翻身已碰头。",
            username: "家玮",
            point: 10
        },
        {
            id: 2,
            status: STATUS_TODO,
            title: "破帽遮颜过闹市，漏船载酒泛中流。",
            username: "家玮",
            point: 20
        }
        ,
        {
            id: 2,
            status: STATUS_TODO,
            title: "横眉冷对千夫指，俯首甘为孺子牛。",
            username: "家玮",
            point: 20
        }
        ,
        {
            id: 2,
            status: STATUS_TODO,
            title: "躲进小楼成一统，管他冬夏与春秋。",
            username: "家玮",
            point: 20
        }

    ])

    const [celebrity, setcelebrity] = useState([
        {
            id: 1,
            status: STATUS_TODO,
            title: "其实地上本没有路，走的人多了，也便成了路。",
            username: "家玮",
            point: 60
        }
        ,
        {
            id: 2,
            status: STATUS_TODO,
            title: "我家门前有两棵树，一棵是枣树，另一棵也是枣树。",
            username: "家玮",
            point: 80
        }
    ])
    // 用户开始拖动元素时触发
    const handleDragStart = (e: any) => {
        e.dataTransfer.setData("Text", e.target.innerText);
        console.log(e, "用户开始拖动元素时触发");

    }
    // 拖动用户完成元素拖动后触发
    const cancelSelect = (e: any) => {
        const  data = e.dataTransfer.getData("Text");
        console.log(data,'1');
        console.log(e, '用户完成元素拖动后触发');

    }
    // <-----------------------------------------------------------------------------------------父容器事件>
    // 拖动过程中，释放鼠标触发事件
    const handleDrop = (e: any) => {
        e.preventDefault();
        console.log(e, "拖动过程中，释放鼠标触发事件");

    }
    // 当被鼠标拖动的对象进入其容器范围内时触发此事件
    const handleDragEnter = (e: any) => {
        e.preventDefault();
        console.log(e, " 当被鼠标拖动的对象 进入 其容器范围内");

    }
    // 当被鼠标拖动的对象离开其容器范围内时触发此事件
    const handleDragLeave = (e: any) => {
        e.preventDefault();
        console.log(e, "当被鼠标拖动的对象 离开 其容器范围内");

    }
    // 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
    const onDragOver = () => {

    }
  useEffect(()=>{
    //   天加拖动事件监听
    document.addEventListener("dragstart", (e)=> {
        //dataTransfer.setData()方法设置数据类型和拖动的数据
        e.dataTransfer.setData("Text", e.target.innerText);
        console.log(e.target.innerText);
        
    })
  })
    // <-----------------------------------------------------------------------------------------父容器事件>

    return (
        <div className="dragpull">

            <ul onDrop={handleDrop}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                // onDragOver={handleDragEnter}
            >
                <div className="dragpull-title">静夜思</div>
                {tasks.map((item, index) => (
                    <li draggable="true"  onDragEnd={cancelSelect} key={index}>{item.title}</li>
                ))}
            </ul>
            <ul onDrop={handleDrop}>
                <div className="dragpull-title">鲁迅</div>
                {luXun.map((item, index) => (
                    <li draggable="true" key={index}>{item.title}</li>
                ))}
            </ul>
            <ul>
                <div className="dragpull-title">周树人</div>
                {celebrity.map((item, index) => (
                    <li draggable="true" key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};
export default dragPull
