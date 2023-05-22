import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, substractNumber } from '../modules/goodsCounter';

export default function GoodsCounter() {

    // state를 조회합니다.
    const { stock, goods } = useSelector((state) => {
        console.log(state);
        return ({
            stock: state.goodsReducer.stock,
            goods: state.goodsReducer.goods
        })
    }
    )

    const dispatch = useDispatch();

    // dispatch 실행
    const onAddNumber = () => dispatch(addNumber());
    const onSubstractNumber = () => dispatch(substractNumber());

    return (
        <div>
            <h2>딥러닝 개발자 무릎 담요</h2>
            <span><strong>17,500</strong>원</span>
            <div>
                <button type='button' onClick={onSubstractNumber}>Minus</button>
                <span>{goods}</span>
                <button onClick={onAddNumber}>Plus</button>
            </div>
            <div>
                총 수량 <strong>{goods}</strong>
            </div>
            <div>
                <strong>{goods * 17500}</strong>원
            </div>
            <div>
                재고 <strong>{stock}</strong>
            </div>
        </div >
    )
}
