import * as React from 'react';
import { createContext, useContext, useReducer } from 'react';
interface statexw {
    user: string,
    books: string,
    movies: string
}
// 状态存储
const store = {
    user: "",//信息
    books: "",//书籍
    movies: "" //电影
}
interface Action {
    type: string,
    [key: string]: string;
}

const reducer = (state: statexw, action: Action) => {
    switch (action.type) {
        case "setUser":
            return { ...state, user: action.user }
        case "setBook":
            return { ...state, books: action.books }
        default:
            throw new Error()
    }

}


interface ContextProps {
    state: statexw;
    dispatch: React.Dispatch<Action>;
}

const Context = createContext({} as ContextProps)


const Reduxxws = () => {
    const [state, dispatch] = useReducer(reducer, store)
    return (
        <Context.Provider value={{ state, dispatch }}>
            <User></User>
            <Books></Books>
            <Moovies></Moovies>
        </Context.Provider>
    )

};

const User = () => {
    const { state, dispatch } = useContext(Context)
    const dsadw = () => {
        dispatch({ type: "setUser", user: 'baijiawei' })
    }
    return <div>
        <h1 onClick={dsadw}>我的信息</h1>
        <h1>name:{state?.user}</h1>
    </div>
}
const Books = () => {
    return (
        <div>
            <h1>我的书籍</h1>
        </div>
    )
}
const Moovies = () => {
    return (
        <div>
            <h1>我的电影</h1>
        </div>
    )
}


export default Reduxxws;