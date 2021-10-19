import { scopedClassMaker } from "../helpers/classes";
import React from "react";
import "./tree.scss"
export interface SourceDataItem {
    text: string;
    value: string;
    children?: SourceDataItem[];

}
type Props = {
    sourceData: SourceDataItem[],
    // 第一个是你点击那个 ，第二个是关闭还是开启的
    onChange: (item: SourceDataItem, bool: boolean) => void;
} & (A | B)

type A = { selected: string[], multiple: true }
type B = { selected: string, multiple: false }

const scw = scopedClassMaker('ands-tree')

const Tree: React.FunctionComponent<Props> = (props) => {

    // 递归渲染数据
    const renderItem = (
        item: SourceDataItem,
        selected: string[],
        onChange: (item: SourceDataItem, bool: boolean) => void,

        level = 1) => {
        const classes = {
            ['level-' + level]: true,
            'item': true
        };
        // 按照层级缩进
        return <div key={item.value} className={scw(classes)}>

            <div>
                <label htmlFor="" className={scw("text")}>
                    <input type="checkbox" onChange={(e) => onChange(item, e.target.checked)} checked={selected.indexOf(item.value) >= 0} />
                </label>
                {item.text}</div>
            {item.children?.map(sub => {
                return renderItem(sub, selected, onChange, level + 1)
            })}
        </div>
    }

    if (props.multiple) {
        return (
            <div>
                {/* {Props.sourceData[0].text} */}
                {
                    props.sourceData?.map((item, index) => {
                        return renderItem(item, props.selected, props.onChange)
                    })}
            </div>
        );
    } else {
        return (
            <div>未完成

            </div>
        )
    }

};


export default Tree