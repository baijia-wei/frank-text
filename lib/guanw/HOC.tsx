import React, { useEffect } from "react";
import '../mock/index'
import axios from 'axios'
interface Props {
    name: string,
    stage: string
}
interface Proposes {
    stage: string
}
function Zhifu(props: Props) {
    return (
        <div>
            {props.name}-----{props.stage}
        </div>
    )
}

const withZhifu = (Comp: (props: Props) => JSX.Element) => {




    const name: string = "高阶组件"
    return (props: Proposes) => <Comp {...props} name={name} />
}
const NewZhihan = withZhifu(Zhifu)

const Hoc: React.FunctionComponent<Props> = (props) => {

    useEffect(() => {
        //get请求
        //   axios.get('/mock/jiawei').then(res => {
        //       console.log(res.data)
        //   })

        axios.post('/mock/path',{
            data: {
                username: 'admin',
                password: 123
            }
        }).then(res => {
            console.log(res.data)
        })


    }, [])
    return (
        <div>
            <NewZhihan stage="react" />
        </div>
    );
};
export default Hoc

