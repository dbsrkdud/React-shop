import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart(){

    let state = useSelector((state) => { return state });
    console.log(state);

    return (
        <div>
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
                                    <td>{ i + 1 }</td>                    
                                    <td>{ state.cart[i].name }</td>
                                    <td>안녕</td>
                                    <td>안녕</td>
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