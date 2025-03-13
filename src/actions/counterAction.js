import { COUNT_SETDATA } from "../reducers/counterReducer";
import { getData } from "../pages/counter/getData"
import { postCount } from "../api/counter";
// 초기값 및 값 불러오고 상태 patch할 때 사용하는 함수
// fetchSetData() 실행 했을 때, dispatch까지 적용한 async 함수 반환
export const fetchSetData = () => {
    return async(dispatch) => {
        try {
            const data = await getData();
            dispatch({ type: COUNT_SETDATA, payload: data })
        } catch (error) {
            console.log(error);  
        }
    }
}

// 원래 이름 handleDispatch => 버튼 눌렀을 때, 서버 통신 후 상태 변경
export const updateCount = (type, newValue) => {
    return async (dispatch) => {
        try {
            await postCount(newValue);
            const data = await getData();
            dispatch({ type, payload: { ...data }})
        } catch (error) {
            console.log(error);
        }
    }
}

/*
    const dispatch = useDispatch();

    dispatch((dispatch) => {
        dispatch({type: ..., payload: ...})
    })

    두 가지가 있음

    1. 서버 통신이 필요 없을 때 => 동기

    dispatch({type: ..., payload: ...})

    2. 서버 통신이 필요할 때 => 비동기 => const count = await getCount()

    dispatch(async(dispatch) => {
        const count = await getCount();
        dispatch({type: "SETDATA", payload: {count: count}})
    })

*/