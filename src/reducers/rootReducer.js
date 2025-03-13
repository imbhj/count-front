import { combineReducers } from "redux"
import { counterReducer } from "./counterReducer"
import { counterReducer2 } from "./counterReducer2";

const rootReducer = combineReducers({
    count: counterReducer,
    count2: counterReducer2
});

export default rootReducer;
/* 

    const { count, history } = useSelector((state) => state.count)
    cosnt { count } = combineReducers.count

    const combineReducers = {
        count: () => {
            count: 0,
            history: []
        },
        count2: () => {
            count: 0
        }
    }

    값이 서로 다른 리듀서 함수로 구성 된객체를 하나의 리듀서 함수로 결합해야 할 때
    => 하나로 합쳐서 내보낼때.
    => 상태를 반환하는 함수 => 리듀서 => 하나로 관리할 수 있게끔

    주의

    리듀서는 절때 `undefined`
    => return 반환값이 무조건 값이 존재해야 하는거에요.
    => return {...state} 또는 state
*/