import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, increase } from './../store/userSlice.js';
import { addCount, minusCount } from './../store.js';

function Cart(){

    let state = useSelector((state) => { return state });
    let dispatch = useDispatch();

    return (
        <div>

            { state.user.name }의 장바구니 

            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map( (a, i) => { 
                            return (
                                <tr key ={ i }>
                                    <td>{ state.cart[i].id }</td>                    
                                    <td>{ state.cart[i].name }</td>
                                    <td>{ state.cart[i].count }</td>
                                    <td><button onClick={ () => {
                                        dispatch(addCount(state.cart[i].id))
                                        }}>+</button>
                                        <button onClick={ () => { 
                                            dispatch(minusCount(i))
                                        }}>-</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;