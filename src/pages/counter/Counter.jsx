import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { COUNT_INCREMENT, COUNT_DECREMENT } from "../../reducers/counterReducer"
import { fetchSetData, updateCount } from "../../actions"

const Left = () => {
    const { count } = useSelector((state) => state.count);
    const dispatch = useDispatch();
    
    return (
        <>
            {count}
            <button onClick={() => dispatch(updateCount(COUNT_INCREMENT, count + 1))}>+</button>
            <button onClick={() => dispatch(updateCount(COUNT_DECREMENT, count - 1))}>-</button>
        </>
    )
}

const Right = () => {
    const { history } = useSelector((state) => state.count);

    if(history.length <= 0) return <>값이 존재하지 않습니다.</>
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
    const dispatch = useDispatch();

    // 초기값
    useEffect(()=> {
        dispatch(fetchSetData());
    }, [dispatch])
    
    return (
        <>
            <Left/>
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

