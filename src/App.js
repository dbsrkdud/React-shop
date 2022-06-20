import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import 메인사진 from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Category</Nav.Link>
            <Nav.Link href="#pricing">Board</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈 </Link>
      <Link to="/detail">상세페이지</Link>

      <div className="main-bg" style={ { backgroundImage : 'url(' + 메인사진 + ')' } }></div>


      <Routes>
        <Route path="/" element={ 
          <Product shoes={ shoes } />
        }>
        </Route>
        <Route path="/detail" element={ <div>상세페이지</div> } />
      </Routes>

      {/* <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
            PUBLIC 폴더 내 img 사용시 권장방법
            <img src={ process.env.PUBLIC_URL + "/logo192.png" } width="80%" />
            <h4>{ shoes[0].title }</h4>
            <h4>{ shoes[0].price }</h4>
          </div>
          <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>{ shoes[1].title }</h4>
            <h4>{ shoes[1].price }</h4>
          </div>
          <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>{ shoes[2].title }</h4>
            <h4>{ shoes[2].price }</h4>
          </div>
        </div>        
      </div> */}

    </div>
  );
}

function Product(props){
  let data = [...props.shoes];
  return (
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
  )

}

export default App;
