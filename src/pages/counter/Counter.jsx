import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getHistory, getInit } from "./getData";
import { INCREMENT, DECREMENT, SETDATA, RESET } from "../../store/counterReducer"
import { getCount, postCount, deleteCount } from "../../api/counter";

const Left = ({handleDispatch}) => {
    const {count} = useSelector((state) => state);

    return (
        <>
            {count}
            <button onClick={() => handleDispatch(INCREMENT, count + 1)}>+</button>
            <button onClick={() => handleDispatch(DECREMENT, count - 1)}>-</button>
            <button onClick={() => handleDispatch(RESET)}>RESET</button>
        </>
    )
}

const Right = () => {
    const {history} = useSelector((state) => state);
    return (
        <ul>
            {history.map((value) => (
                <React.Fragment key={value.id}>
                    <li>{value.createdAt}</li>   
                </React.Fragment>        
            ))}
        </ul>
    )
}

export const Counter = () => {
    // 전역 상태 가져오기 => useSelector
    // 전역 상태 바꾸기 => useDispatch
    // const {state} = useCounter
    const { history } = useSelector((state) => state);
    const dispatch = useDispatch();

    // 초기값
    useEffect(()=> {
        const fetchData = async() => {
            try {
                const data = await getInit();
                dispatch({ type: SETDATA, payload: data });
            } catch (error) {
                console.error("초기 데이터 로딩 실패", error);
            }
        }
        fetchData()
    }, [])
    // type: "INCREMENT" | "DECREMENT" | "RESET"
    const handleDispatch = async (type, newValue) => {
        try {
            if (type === RESET) {
                await deleteCount(newValue); 
            } else {
                await postCount(newValue); // 새로운 값 저장
            }
            
            const result = await getCount(); // 최신 데이터 불러오기

            if(result.length === 0) {
                return dispatch({ type, payload: { count: 0, history: []}});
            }
            
            const updatedHistory = getHistory(result);
            

            return dispatch({ type, payload: { count: result[0].value, history: updatedHistory}});
        } catch (error) {
            console.error("Counter 기능 실패...", error);
        }
    };
    
    if(history.length < 0) return <>값이 존재하지 않습니다.</>
    
    return (
        <>
            <Left handleDispatch={handleDispatch}/>
            <Right/>
        </>
    )
}

// import React, { useEffect } from "react"
// import { useCounter } from "../../store"
// import { useDispatch, useSelector } from "react-redux"

// export const INCREMENT = "INCREMENT"
// export const DECREMENT = "DECREMENT"

// const Left = () => {
//     const { count, handleDispatch } = useCounter();

//     return (
//         <>
//             {count}
//             <button onClick={() => handleDispatch({type: INCREMENT})}>+</button>
//             <button onClick={() => handleDispatch({type: DECREMENT})}>-</button>
//         </>
//     )
// }

// const Right = () => {
//     const {history} = useCounter();
//     return(
//         <ul>
//             {history.map((value) => (
//                 <React.Fragment key={value.id}>
//                  <li>{value.createdAt}</li>
//               </React.Fragment>
//             ))}
//         </ul>
//     )
// }
// export const Counter = () => {
//     // const { history}= useCounter();
//     // 전역 상태 가져오기 => useSelector (초기값)
//     // 전역 상태 바꾸기 => useDispatch
//     const { count, history } = useSelector((state) => state);
//     const dispatch = useDispatch();

//     // 초기값
//     useEffect(()=> {

//     },[])
//     if(history.length <= 0) return <>값이 존재하지 않음</>
    
//     return (
//         <>
//            <Left/>
//            <Right/>
//         </>
//     )
// }

