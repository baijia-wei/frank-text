import React from "react";
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
const withZhifu= (Comp: (props: Props) => JSX.Element)=>{
    const name:string="高阶组件"
    return (props:Proposes) => <Comp {...props} name={name}/>
}
const NewZhihan=withZhifu(Zhifu)

const Hoc: React.FunctionComponent<Props> =(props) => {
    return (
        <div>
            <NewZhihan stage="react" />
        </div>
    );
};
export default Hoc

