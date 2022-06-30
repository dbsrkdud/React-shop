import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import 메인사진 from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios';

/* axios.get 숙제 
  1. 버튼 2번 눌렀을 때 7, 8, 9번 상품 가져오기
  >> 버튼 횟수 저장하는 스위치
  2. 버튼 3번 눌렀을 때 상품 더 없다고 알려주기
  >> 조건문
  3. 버튼 눌렀을 때 로딩 중 UI
*/

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ () => { navigate('/') } }>Home</Nav.Link>
            <Nav.Link onClick={ () => { navigate('/detail') } }>Product</Nav.Link>
            <Nav.Link href="#pricing">Board</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={ 
          <Product shoes={ shoes }/>
        }>
        </Route>
        <Route path="/detail/:id" element={ <Detail shoes={ shoes } /> } />

        <Route path="/about" element={ <About /> } >
          <Route path="member" element={ <div>멤버</div> } />
          <Route path="location" element={ <About /> } />
        </Route>

        <Route path="/event" element={ <Event /> } >
          <Route path="one" element={ <h5>첫 주문시 양배추즙 서비스</h5> } />
          <Route path="two" element={ <h5>생일기념 쿠폰받기</h5> } />
        </Route>
        
        <Route path="*" element={ <div>404</div> } />
      </Routes>
      <button onClick={ () => {
        // 로딩 중 UI 띄우기
        axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((결과) => {
            let copy = [...shoes, ...결과.data];
            setShoes(copy);
            // 로딩 중 UI 숨기기
          })
          .catch ( () => {
            console.log("실패 시 실행");
          })

          axios.post('/', { name : 'kim' });

          // 동시에 ajax 여러개 요청
          Promise.all([ axios.get('/url1'), axios.get('/url2') ])
            .then( () => {

            }) 


        }}>더보기</button>
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Product(props){
  let data = [...props.shoes];
  return (
    <div>
      <div className="main-bg" style={ { backgroundImage : 'url(' + 메인사진 + ')' } }></div>
        <div className="container">
            <div className="row">
            {
              data.map((a, i) => {
                return (
                  <div className="col-md-4">
                    <img src= { `https://codingapple1.github.io/shop/shoes${ (i + 1) }.jpg` } width="80%" />
                    <h4>{ a.title }</h4>
                    <h4>{ a.price }</h4>
                  </div>
                )
              })
            }
            </div>
        </div>
      </div>
  )

}

export default App;
