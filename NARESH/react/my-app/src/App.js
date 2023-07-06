// import Name from "./navbar"
import Carsol from "./carosl"
import { useEffect, useState } from "react"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "./footer"
import Resume from "./Projects/Resume";

let App=()=>{
  let  [N,setN]=useState([]);
  useEffect(()=>{
 axios.get("https://fakestoreapi.com/products").then((val)=>{
  console.log(val.data)

  setN(val.data)
 })
  },[] ) 

console.log(N)
let Api=N.map((val,indx,arr)=>{
  return(
    <div >
 <Card style={{ width: '32rem'}}>
      <Card.Img  variant="top" src={val.image} style={{height:"300px", width:"300px"}}/>
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  )
})
  return(
      <div>
         {/* <Name/> */}
         
        {/* <Carsol/>
        <div style={{display:"grid", gridTemplateColumns:"200px 200px 200px 200px" , justifyContent:"space-around" , marginTop:"220px", marginRight:"50px"}}>
           {Api}
        </div> */}
       
         {/* <Footer/> */}
         <Resume />
      </div>
  )
}
export default App;