import axios from "axios";
import "./Login.css"


let Login=()=>{

    return(
     
        
        <form action="" id="login" onSubmit={(e)=>{
            e.preventDefault()
            console.log(e)
            let mail=e.target[0].value;
let passes=e.target[1].value;
axios.get("http://localhost:3000/posts").then((val)=>{
    console.log(val.data);
    // console.log(mail)
    // console.log(passes)
    let Ram=val.data
    for( var i=0; i<Ram.length; i++){
       if((mail === Ram[i].Email) && (passes === Ram [i].password) ) {
        alert("sucessful")
        window.location.href="/Resume"
        // if(passes === Ram [i].password ){
        //     alert("sucessful")
        //     window.location.href="/Landingpage"
            
        // }else{
        //     alert("enter vaild details")
       
        }else{
            alert("enter crct details")
        }
       
    }
})
        }}>
        <div class="logins">
          <div class="jack">LOGIN HERE</div>
          <div class="mall" >
            
        <label for="" > Eamil:</label>
        <input type="text" id="email1" /><br /><br />
       <label for="">Password:</label>
       <input type="text" id="pass" /><br/><br />
      
      
       <input type="submit" value="login"  id="classes"/>
       <p>already a member? <button  onClick={() => window.location.href='/Register'}>Register</button></p>
      </div>
      
      </div>
    </form>
       
     
      
    )
};
export default Login;
