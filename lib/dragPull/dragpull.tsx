import React, { DragEventHandler, useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./dragpull.scss"

interface ListItem {
    id: number,
    title: string,
    username: string,
    point: number
}
const dragPull: React.FunctionComponent = () => {

    const dragItemRef = useRef<ListItem>();
    const dropAreaRef = useRef<HTMLDivElement>(null);
    //  每行多少列
    const COLUMN = 4;
    //  每个元素宽度
    const WIDTH = 110;
    //  每个元素高度
    const HEIGHT = 30;
    // 图片左右 padding
    const IMAGE_PADDING = 5;

    // 秋天是影响情绪多变的季节，时而快乐，时而悲凉
    const [tasks, setTasks] = useState([
        {
            id: 1,

            title: "床前明月光",
            username: "0000ff",
            point: 10
        },
        {
            id: 2,

            title: "疑是地上霜",
            username: "cc00cc",
            point: 20
        },
        {
            id: 3,

            title: "举头望明月",
            username: "9900ff",
            point: 30
        },
        {
            id: 4,
            title: "低头思故乡",
            username: "ff0033",
            point: 40
        },
        {
            id: 5,
            title: "李白",
            username: "ff00cc",
            point: 40
        }
    ])

   


    const sortedList = useMemo(() => {
        return tasks.slice().sort((a, b) => {
            return a.id - b.id;
        });
    }, [tasks]);

    const listHeight = useMemo(() => {
        const size = tasks.length;
        return Math.ceil(size / COLUMN) * HEIGHT;
    }, [tasks]);


    function isEqualBy<T>(a: T[], b: T[], key: keyof T) {
        const aList = a.map((item) => item[key])
        const bList = b.map((item) => item[key])
        let flag = true;
        aList.forEach((i, index) => {
            if (i !== bList[index]) {
                flag = false
            }
        })
        return flag
    }

    // 将某个元素插入到数组中的某个位置
    function insertBefore<T>(list: T[], from: T, to?: T): T[] {
        const copy = [...list];
        const fromIndex = copy.indexOf(from)
        if (from === to) {
            return copy;
        }
        copy.splice(fromIndex, 1);
        const newToIndex = to ? copy.indexOf(to) : -1
        if (to && newToIndex >= 0) {
            copy.splice(newToIndex, 0, from)
        } else {
            // 没有to或者to不在序列莉将元素移动到末尾
            copy.push(from)
        }
        return copy
    }

    const updateList = useCallback((clientX: number, clientY: number) => {
        // 方法返回元素的大小及其相对于视口的位置。
        const dropRect = dropAreaRef.current?.getBoundingClientRect()
        if (dropRect) {
            const offsetX = clientX - dropRect.left
            const offsetY = clientY - dropRect.top
            const dragItem = dragItemRef.current;
            // console.log(offsetX,offsetY,dropRect.width);
            if (
                !dragItem || offsetX < 0 ||
                offsetX > dropRect.width ||
                offsetY < 0 ||
                offsetY > dropRect.height
            ) {
                return;
            }
            const col = Math.floor(offsetX / WIDTH)
            const row = Math.floor(offsetY / HEIGHT)
            let currentIndex = row * COLUMN + col
            const fromIndex = tasks.indexOf(dragItem)
            if (fromIndex < currentIndex) {
                currentIndex++
            }
            const currentItem = tasks[currentIndex]
            const ordered = insertBefore(tasks, dragItem, currentItem)


            if (isEqualBy(ordered, tasks, "id")) {
                return;
            }


            setTasks(ordered)

        }



    }, [tasks]);

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        updateList(e.clientX, e.clientY)
    }, [updateList])



    // 用户开始拖动元素时触发
    const handleDragStart = (e: React.DragEvent<HTMLLIElement>, data: ListItem) => {


        dragItemRef.current = data
        const le = dropAreaRef.current?.querySelector(`[data-id="${data.id}"]`)
        if (le) {
            le.classList.add("draggingItem")
        }

    }
    // 拖动结束
    const handleDragEnd = useCallback(() => {
        const data = dragItemRef.current
        if (data) {
            const le = dropAreaRef.current?.querySelector(`[data-id="${data.id}"]`)
            if (le) {
                le.classList.remove("draggingItem")
            }
            dragItemRef.current = undefined
        }
    }, [])

    return (
        <div className="dragpull"
            ref={dropAreaRef}
            style={{ width: COLUMN * (WIDTH + IMAGE_PADDING) + IMAGE_PADDING }}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
        >
            <ul
                className='list'
                style={{ height: listHeight }}
            >
                {/* <div className="dragpull-title">静夜思</div> */}
                {sortedList.map((item) => {
                    const index = tasks.findIndex((i) => i === item);
                    const row = Math.floor(index / COLUMN);
                    const col = index % COLUMN;
                    return <li
                        className="item"
                        key={item.id}
                        draggable
                        style={{
                            height: HEIGHT,
                            left: col * (WIDTH + IMAGE_PADDING),
                            top: row * HEIGHT,
                            padding: `0 ${IMAGE_PADDING}px`,
                        }}
                        data-id={item.id}
                        onDragStart={(e) => handleDragStart(e, item)}

                    >{item.title}</li>
                })}
            </ul>
        </div>
    );
};
export default dragPull
