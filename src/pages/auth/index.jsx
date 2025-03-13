import React from "react";
import { useDispatch, useSelector } from "react-redux";

// 이거 반드시 reducer 파일 안에 넣을 것
export const AUTH_SUCESS = "AUTH_SUCESS"
export const AUTH_FAILED = "AUTH_FAILED"

export const Login = () => {
    const { isLogin } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(authMe())
    }

    if(isLogin) return <button>로그아웃</button>
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" >로그인</button>
        </form>
    )
}   
    /*
        실습

        1. reducer 사용해서 로그인 로그아웃 구현
        2. useSelector, useDispatch를 활용하여 상태 변경

        실습 요구 사항

        1. 로그인 버튼 누르면 로그아웃 버튼 나오게.
        2. 로그아웃 버튼 누르면 로그인 나오게
        3. 상태는 redux store에서 관리함
        4. 리덕스의 액션(AUTH_SUCCESS, AUTH_FAILED)을 활용
        5. 직접 dispatch(authMe())를 사용하여 상태를 변경할 것 
    */

   /*
        const dispatch = useDispatch()
        store => 
        1. 전역 상태에 reducer 호출 후 반환 받음
        2. 반환 받은 값을 전역 상태에 알려줄려고
        3. 즉, 전역 상태 관리하려고
        dispatch(data)
   */