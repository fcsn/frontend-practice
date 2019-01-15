import axios, { CancelToken } from 'axios'
import { CANCEL } from 'redux-saga'

export function getUser (userName) {
    const source = CancelToken.source()
    // 이 캔슬 토큰으로 아래처럼 xhr로 만들어진 통신을 중단할 수 있습니다.
    const request = axios.get(`https://api.github.com/users/${userName}`, {
        cancelToken: source.token
    })
    request[CANCEL] = source.cancel
    // 사가가 자기가 call로 실행했던 함수를 캔슬하기 위해 넣어주는 것.
    return request
}
