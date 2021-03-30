import React, {useState ,Fragment} from "react";
import Form,{FormValue} from "./form";
import Validator, {noError} from './validator';
import Buttonss from '../button/button';
const FormExample: React.FunctionComponent = () =>{
    const  [formData,setFromData]=useState<FormValue>({
        username:'',
        password:''
    });

    const [fields]=useState([
        {name:'username',label:'用户名',input:{type:'text'}},
        {name:'password',label:'密码',input: {type: 'password'}}
    ]);
    const [errors,setErors]=useState({});
    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{

        const  rules=[
            {key:'username',required:true},
            {key:'username',minLength:8,maxLength:11},
            {key:'username',pattern:/^[A-Za-z0-9]+$/},
            {key:'password',required:true},
        ]
        Validator(formData,rules)
        setErors(errors)

        if (noError(errors)) {

        }
    }
    return(
        <Form value={formData} fields={fields}
        buttons={
            <Fragment>
                <Buttonss type="submit">提交</Buttonss>
                <Buttonss>返回</Buttonss>
            </Fragment>
        }
              errors={errors}
              onChange={(newValue)=>setFromData(newValue)}
              onSubmit={onSubmit}

        />
    );
};
export  default  FormExample