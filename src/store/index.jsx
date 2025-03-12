import { createStore } from "redux";
import { countReducer } from "./counterReducer";

const store = createStore(countReducer);

export {store}

/*
    전역 환경 만드는거 어렵지 않음
    리액트의 기능들을 끌고와서 사용 환경을 구성 하는거임
    황경안에 뭐가있지? 상태 패치함수 등등...
    
    createContext = 환경을 구성 한다, useContext 

    단점

    1.코드가 너무 김
    2. 관리해야 할 것들이 다 한곳에 뭉쳐있음
    
    리덕스 스토어 적용
*/












// import { getCount, postCount } from "../api";
// import { countReducer } from "./counterReducer";
// import React, { createContext, useContext, useState, useEffect} from "react";

// const AppContext = createContext(null);

// export const AppProvider = ({children}) => {
//     const [count,setCount] = useState(0);
//     const [history, sethistory ] = useState([]);
//     const getHistory = (result) => {
//         // result: []
//         const history = result.map((value) => ({ id: value.id, createdAt: value.createdAt }))
//         return history
//     }
    
//     useEffect(() => {
//         const fatchData = async() => {
//             const result = await getCount();
//             const history = getHistory(result);
//             setCount(result[0].value)
//             sethistory(history)
//         }
//         fatchData()
//     }, [])

//     const handleDispatch = async(action) => {
//         try {
//             const newValue = countReducer(count, action);
//             const value = await postCount(newValue);
//             const result = await getCount();
//             const history = getHistory(result);
//             setCount(value);
//             sethistory(history);
//         } catch (error) {
//             console.log("Counter 기능 실패...", error);
//         }
//     }
//     return (
//         <AppContext.Provider value={{count,history,handleDispatch}}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export const useCounter = () => useContext(AppContext);