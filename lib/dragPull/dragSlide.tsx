import React, { useCallback, useMemo, useRef, useState } from "react";
interface ListItem {
    id: number,
    title: string,
    username: string,
    point: number
}

const dragSlide: React.FunctionComponent = () => {

    let clientHeightY = null
    let clientWeightX = null

    const [luXun, setLuXun] = useState([
        {
            id: 1,

            title: "运交华盖欲何求，未敢翻身已碰头。",
            username: "家玮",
            point: 10
        },
        {
            id: 2,

            title: "破帽遮颜过闹市，漏船载酒泛中流。",
            username: "家玮",
            point: 20
        }
        ,
        {
            id: 2,

            title: "横眉冷对千夫指，俯首甘为孺子牛。",
            username: "家玮",
            point: 20
        }
        ,
        {
            id: 2,

            title: "躲进小楼成一统，管他冬夏与春秋。",
            username: "家玮",
            point: 20
        }

    ])


    const [celebrity, setcelebrity] = useState([
        {
            id: 1,
            title: "其实地上本没有路，走的人多了，也便成了路。",
            username: "家玮",
            point: 60
        }
        ,
        {
            id: 2,
            title: "我家门前有两棵树，一棵是枣树，另一棵也是枣树。",
            username: "家玮",
            point: 80
        }
    ])







    // 用户开始拖动元素时触发
    const handleDragStart = (e: React.DragEvent<HTMLLIElement>, data: ListItem) => {
    }
    // 拖动用户完成元素拖动后触发
    const cancelSelect = (e: any) => {

        console.log(e, '用户完成元素拖动后触发');

    }

    const updateList = useCallback((clientX: number, clientY: number) => {






    }, [luXun])
    const handleDragOver = useCallback((e: React.DragEvent<HTMLUListElement>) => {

    }, [updateList])
    // <-----------------------------------------------------------------------------------------父容器事件>
    // 拖动过程中，释放鼠标触发事件
    const handleDrop = (e: any) => {
        e.preventDefault();
        console.log(e, "拖动过程中，释放鼠标触发事件");

    }
    // 当被鼠标拖动的对象进入其容器范围内时触发此事件
    const handleDragEnter = (e: any) => {
        e.preventDefault();

        console.log(e.clientX);




    }
    // 当被鼠标拖动的对象离开其容器范围内时触发此事件
    const handleDragLeave = (e: any) => {
        e.preventDefault();
        console.log(e, "当被鼠标拖动的对象 离开 其容器范围内");

    }
    // 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
    const onDragOver = () => {

    }
    const handleDragEnters = () => {
        const daec = [...celebrity];
         daec.push({
            id: 1,
            title: "其实地上本没有路，走的人多了，也便成了路。",
            username: "家玮",
            point: 60
        })
        setcelebrity(daec)

    }



    return (
        <div>

            <ul className="luxun-list"
                onDrop={handleDrop}

                // onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}

            >
                <div className="dragpull-title">鲁迅</div>
                {luXun.map((item, index) => {
                    return <li draggable="true" id={`${item.id}`} className="dragpull-li" onDragStart={(e) => handleDragStart(e, item)} key={index}>{item.title}</li>
                })}
            </ul>


            <ul className="luxun-list"

                onDragEnter={handleDragEnters}
            >
                <div className="dragpull-title">周树人</div>
                {celebrity.map((item, index) => {
                    return <li className="dragpull-title" draggable="true" key={index}>{item.title}</li>
                })}
            </ul>


        </div>
    );
};
export default dragSlide

