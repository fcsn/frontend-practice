// redux-thunk에서 커링을 타는것도 사실,
// 리덕스 미들웨어랑 결과적으로 같은 동작인데요. 문제는 이제
// 저걸 통제하려면 위의 코드가 엄청 복잡해지게되요 try, catch 뿐만아니라 if문도 엄청 들어가야하죠

// 구버전-redux-thunk
// export const sample = values => async dispatch => {
//     const { data } = await getUser()
//     return {
//         type: 'SET_USER',
//         payload: data,
//     }
// }

// 신버전-redux-saga
// export const newCode = values => {
//     return {
//         type: 'SET_USER',
//         payload: values,
//     }
// }
