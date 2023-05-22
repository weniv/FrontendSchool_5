// 액션 생성함수
export const sale = () => {
    return { type: "SALE" }
}

export const sold = () => {
    return { type: "SOLD_OUT" }
}

const initialState = {
    message: '판매중!'
}

const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SALE":
            return {
                ...state,
                message: '판매중!'
            }
        case "SOLD_OUT":
            return {
                ...state,
                message: '매진!'
            }
        default:
            return state
    }
}

export default stockReducer