export const fetchUser = userName => ({
    type: 'FETCH_USER',
    payload: userName
});

// SET_USER는 통신이 성공했을 경우
// 리스폰스로 받은 데이터를 실제 스토어에
// 저장하는 액션
export const setUser = () => ({
    type: 'SET_USER',
})

export const fetchUserError = () => ({
    type: 'SET_USER_ERROR',
});
