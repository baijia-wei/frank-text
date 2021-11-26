import { Line } from "@ant-design/charts";
import React, { useEffect, useState } from "react";

import XLSX from 'xlsx';

import "./table.scss"

const Tables: React.FunctionComponent<Props> = (props) => {
    const [display, setdisplay] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    const ondex = (e: any, index: any) => {
        if (e.target.innerText == "展开") {

            if (display[index] === 1) {

                display[index] = 0
                const list = [...display]
                setdisplay(list)
            } else {
                display[index] = 1
                const list = [...display]
                setdisplay(list)

            }

        }
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    // const thretm = (item: any) => {
    //     return <th className="table-th" key={item.key}>{item.title}</th>
    // }
    const onImportExcel = (file: any) => {
        // 获取上传的文件对象
        const { files } = file.target;
        // 通过FileReader对象读取文件
        const fileReader = new FileReader();
        fileReader.onload = event => {
            try {
                const sss = event.target?.result;
                // 以二进制流方式读取得到整份excel表格对象
                const workbook = XLSX.read(sss, { type: 'binary' });
                let data: any = []; // 存储获取到的数据
                // 遍历每张工作表进行读取（这里默认只读取第一张表）
                for (const sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        // 利用 sheet_to_json 方法将 excel 转成 json 数据
                        data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                        // break; // 如果只取第一张表，就取消注释这行
                    }
                }
                console.log(data);
            } catch (e) {
                // 这里可以抛出文件类型错误不正确的相关提示
                console.log('文件类型不正确');
                return;
            }
        };
        // 以二进制方式打开文件
        fileReader.readAsBinaryString(files[0]);
    }

    const datas = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
    ];
    var config = {
        data: data,
        xField: 'year',
        yField: 'value',
        seriesField: 'category',
        yAxis: {
            label: {
                formatter: function formatter(v:any) {
                    
                    return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
                        return ''.concat(s, ',');
                    });
                },
            },
        },
        color: ['#1979C9', '#D62A0D', '#FAA219'],
    };
    return (
        <div className="tables" >
            <input type='file' accept='.xlsx, .xls' onChange={onImportExcel} />



            <div>
                <Line {...config} />

            </div>


            {/* <table  className="table-head">
                <tbody>
                    <tr >
                        {props.columns.map((item: any) => (thretm(item)))}
                    </tr>
                    {props.dataSourcew.map((item: any, index: any) => (
                        <>
                            <tr key={item.key} onClick={(e) => ondex(e, index)}>
                                {Object.keys(item).map((items, index) => {
                                    if (items == "key") {
                                        return
                                    } else {
                                        return <td key={index}>{item[items]}</td>
                                    }
                                })
                                }
                            </tr>
                            <tr key={index} className={display[index] === 1 ? "none" : "visible"}>
                                <td colSpan={Object.keys(item).length}>{props.dome()}</td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table> */}





        </div>
    )
}

interface Props {
    dataSourcew?: any,
    columns?: any,
    dome: any
}

export default Tables;