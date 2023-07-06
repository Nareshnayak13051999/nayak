
import PHOTO from "./imagesland/PHOTO.jpeg"


let Resume = ()=>{
    return(

<div style={{background:"white",marginLeft:"90px",marginRight:"90px"}}>
    
<h1 style={{textAlign:"center",fontFamily:"fantasy", fontSize:"40px"}}>RESUME</h1><hr/>
<h1 style={{fontSize:"25px", fontFamily:"fantasy", textDecorationLine:"underline",marginLeft:"10px"}}>P NARESH NAYAK</h1>
<a><img src={PHOTO} alt=""  style={{height:"150px",marginLeft:"10px"}}/></a>
<h3 style={{padding:"10px 0",marginLeft:"10px"}}>H.NO: 5-39, SALKELAPURAM THANDA<br />
    Khilla Ghanpoor Mandal, Wanaparthy Dist.<br />
   <b>Contact No:</b>6302764591<br />
  E-mail: <a href="" style={{color:"skyblue",display:"flex"}}>nareshnayak1305@gmail.com</a><br />
   
</h3>
<h1 style={{textDecorationLine:"underline",fontStyle:"oblique", fontSize:"25px", backgroundColor:"powderblue"}}>Career Objectives:</h1>
<h3 style={{textIndent:"5%" , padding:"10px 0"}}>I want to work with an organization that gives me ample opporthunities to growso that I will be able to help in the growth <br /> of that organization  and will be able to enchance my skills and my capabilities</h3>
<h1 style={{textDecorationLine:"underline",fontStyle:"oblique", fontSize:"25px", backgroundColor:"powderblue"}}>Qualification Profile:</h1>

<table style={{border:"2px solid black",borderCollapse:"collapse",marginLeft:"10px",backgroundColor:"gainsboro"}}>
    <tr>
        <th style={{border:"2px solid black",fontSize:"20px", paddingLeft:"80px"}}>Type</th>
        <th style={{border:"2px solid black",fontSize:"20px",padding:"5px"}}>University/Institute</th>
        <th style={{border:"2px solid black",fontSize:"20px",padding:"5px"}}>Year Passing</th>
        <th style={{border:"2px solid black",fontSize:"20px",padding:"5px"}}>percentage/ CGPA</th>
    </tr>
    <tr> 
         <td style={{border:"2px solid black",fontSize:"20px",padding:"5px"}}>BSC.Computer Science</td>
         <td style={{border:"2px solid black",fontSize:"20px",padding:"5px"}}>OUSMANIA UNIVERSITY</td>
         <td style={{border:"2px solid black",fontSize:"20px",paddingLeft:"30px"}}>2022</td>
         <td style={{border:"2px solid black",fontSize:"20px",paddingLeft:"25px"}}> 8.16 CGPA</td>
    </tr>
    <tr> 
         <td style={{border:"2px solid black",fontSize:"20px",padding:"5px"}}>INTER</td>
         <td style={{border:"2px solid black",fontSize:"20px",padding:"5px"}}>Balapur Chaitanya Junior College</td>
         <td style={{border:"2px solid black",fontSize:"20px",paddingLeft:"30px"}}>2018</td>
         <td style={{border:"2px solid black",fontSize:"20px",paddingLeft:"25px"}}> 92 percentage</td>
    </tr>
    <tr> 
        <td style={{border:"2px solid black",fontSize:"20px",padding:"5px"}}>10TH</td>
        <td style={{border:"2px solid black",fontSize:"20px",padding:"5px"}}>Annu's Academy High School</td>
        <td style={{border:"2px solid black",fontSize:"20px",paddingLeft:"30px"}}>2016</td>
        <td style={{border:"2px solid black",fontSize:"20px",paddingLeft:"25px"}}> 8.8 CGPA</td>
    </tr>
    </table>
    <h1 style={{textDecorationLine:"underline",fontStyle:"oblique", fontSize:"25px", backgroundColor:"powderblue",marginTop:"5px"}}>IT PROFICIENCY:</h1>
    <div style={{marginLeft:"30px",fontSize:"20px"}}>
        *HTML<br />
        *CSS<br />
        *JAVATSCRIP<br />
        *BOOT STRAP<br />
        *GIT HUB<br />
        *REACT JS<br />
    </div>
    <h1 style={{textDecorationLine:"underline",fontStyle:"oblique", fontSize:"25px", backgroundColor:"powderblue",marginTop:"5px"}}>PROJECTS:</h1>
    <div style={{marginLeft:"30px",fontSize:"20px"}}>
       <button style={{padding:"5px",margin:"5px"}} onClick={(e)=>{
e.preventDefault()
window.location.href="/Landingpage"
       }}>Landingpage</button><br/>
       <button style={{padding:"5px",margin:"5px"}} onClick={(e)=>{
        window.location.href="/Weather"
       }}>Weatherapp</button><br/>
       <button style={{padding:"5px",margin:"5px"}} onClick={(e)=>{
        window.location.href="/Todo"
       }}>Todo</button>
       
    </div>


</div>








    )
}
export default Resume;