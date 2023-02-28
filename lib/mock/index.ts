import Mock from 'mockjs'

export default Mock.mock('/mock/usermsg', 'get', {
    code: '200',
    msg: 'success',
    'list|5': [{ name: '@name', age: '@integer(18, 25)'}]
})

const box = Mock.mock( {
    'list|5': [{ name: '@name', age: '@integer(18, 25)'}]
})
export const jiawei= Mock.mock('/mock/jiawei', 'get', (options)=>{
    const ret =Mock.mock({
        'user': {username:'@cname'}
    })


    return {
        code:200,
        data:ret
    }
})

export const paths= Mock.mock('/mock/path', 'post', (options:any)=>{

    console.log(JSON.parse(options.body));
    
    return {
        code:200,
        data: JSON.parse(options.body).data
    }
    
})