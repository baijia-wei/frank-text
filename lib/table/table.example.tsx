import Icon from "../icon/icon";
import React from "react";
import Tables from "./table";

const TableExample: React.FunctionComponent = () => {
    const dataSource = [
        {
            key: 1,
            name: '三上悠亚',
            age: 32,
            addres: '西湖区湖底公园1号',
            cis:10,
            baxodi:18,
            baodi:100,
            sad: "展开"
        },
        {
            key: 2,
            name: '桥本有菜',
            age: 42,
         
            addres: '西湖区湖底公园2号',
            cis:10,
            baodi:230,
            baxodi:18,
            sad: "展开"
        },
        {
            key: 3,
            name: '波多野结衣',
            age: 32,
           
            addres: '西湖区湖底公园5号',
            cis:10,
            baodi:130,
            baxodi:18,
            sad: "展开"
        },
        {
            key: 4,
            name: '花泽香菜',
            age: 32,
            addres: '西湖区湖底公园6号',
            cis:16,
            baodi:190,
            baxodi:18,
            sad: "展开"
        },
    ];

    const columns = [
        {
            title: '时间',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '名称',
            dataIndex: 'namex',
            key: 'name',
        },
        {
            title: '类别',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '星级',
            dataIndex: 'zhuzhi',
            key: 'zhuzhi',
        },
        {
            title: '总次数',
            dataIndex: 'zhankai',
            key: 'zhankai',
        },
        {
            title: '保底次数',
            dataIndex: 'zhankai',
            key: 'zhankai',
        },
        {
            title: '展开',
            dataIndex: 'zhankai',
            key: 'zhankaiX',
        },
    ];


    const x = () => {
        return <div>

            <Icon name="qq"></Icon>
            <Icon name="baidu"></Icon>
            <Icon name="wechal"></Icon>
        </div>
    }

    return (
        <>
            <div>第一个例子</div>
            <Tables
                dome= {x} 
                dataSourcew={dataSource}
                columns={columns}>
            </Tables>
        </>
    )
}

export default TableExample