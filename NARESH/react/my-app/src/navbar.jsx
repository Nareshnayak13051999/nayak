import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Register from './Projects/Register';
// import ReactDOM from "react-dom/client";
import Login from './Projects/Login';
import Landing from "./Projects/Landingpage"
import App from './App';
import Resume from './Projects/Resume'
import Weather from "./Projects/Weather";
import Todo from  "./Projects/Todo";
import Resumes from "./Projects/RESUME-NARESH.pdf"



import { BrowserRouter, Routes, Route } from "react-router-dom";
let Navbar1=()=>{
    return(
        <div>
          <BrowserRouter>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{height:"50px", fontSize:"18px"}}>
      <Container>
        <Navbar.Brand href="#home" style={{fontSize:"30px",color:"orange", marginRight:"10px"}}>RESUME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          <Nav style={{marginLeft:"1000px"}}>
            <Nav.Link href={Resumes} download>download</Nav.Link>
            {/* <Nav.Link eventKey={2} href="/Login">
             Login
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
     <Route>
     <Route path="/" element={<App />}/>
        {/* <Route path="/Register" element={<Register/>} /> */}

        {/* <Route path="/Login" element={<Login/>} /> */}
        <Route path="/Resume" element={<Resume/>} />
        {/* <Route path="/Todo" element={<Todo/>} />
        <Route path="/Weather" element={<Weather/>} />
        <Route path="/Landingpage" element={<Landing/>} /> */}
     </Route>
      </Routes>
    </BrowserRouter>
           
        
        </div>
    )
}
export default Navbar1;