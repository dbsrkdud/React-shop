import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button`
    background: ${ props => props.bg };
    color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding: 10px;
`

let Box = styled.div`
    background: grey;
    padding: 20px;
`

function Detail(props){

    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function(x){
        return x.id == id
    });
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [num, setNum] = useState('');
    let [탭, 탭변경] = useState(0);

    useEffect( () => {
        let timer = setTimeout( () => { setAlert(false) }, 2000);
        return () => {
            // useEffect 동작 전에 실행
            // 기존 코드 치우는 경우 자주 사용
            clearTimeout(timer);
        }
    }, []);

    useEffect( () => {
        if(isNaN(num) == true) {
            // alert('그러지마세요');
            console.log("돈두댓");

        }
    }, [num])
        
    /*
    1. 재렌더링마다 실행
    useEffect( () => { } )
    1-1. 특정 state 변경시에만 실행 
    useEffect( () => { }, [count] )
    2. mount시 1회 실행
    useEffect( () => { }, [] )
    3. unmount시 1회 실행
    useEffect( () => {
        return () => {

        }
    }, [])
    */
    
    return (
        <div className="container">
            {
                alert == true 
                ? <div className="alert alert-warning">2초이내 구매시 할인</div>
                : null
            }
            <Box>
                <YellowBtn bg="blue">버튼</YellowBtn>
                <YellowBtn bg="green">버튼</YellowBtn>
                <YellowBtn bg="red">버튼</YellowBtn>
            </Box>
            <button onClick={ () => { setCount(count + 1) } }>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={ `https://codingapple1.github.io/shop/shoes${ (parseInt(id) + 1) }.jpg` } width="100%" />
                </div>
                <div className="col-md-6">
                    <input onChange={ (e) => { setNum(e.target.value) } }></input>
                    <h4 className="pt-5">{ 찾은상품.title }</h4>
                    <p>{ 찾은상품.content }</p>
                    <p>{ 찾은상품.price }원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={ () => { 탭변경(0) } } eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={ () => { 탭변경(1) } } eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={ () => { 탭변경(2) } } eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={ 탭 } />

        </div> 
    )
}


function TabContent(props) {
    if(props.탭 == 0) {
        return <div>내용0</div>
    } else if( props.탭 == 1){
        return <div>내용1</div>
    } else if(props.탭 == 2){
        return <div>내용2</div>
    }
}

export default Detail;