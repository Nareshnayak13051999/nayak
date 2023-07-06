import axios from 'axios';
import './Register.css';


let  Register=()=>{
    
    return(  

        <form action="" id="register" onSubmit={(event)=>{
            event.preventDefault()
            console.log(event)
            let username=event.target[0].value;
    let email=event.target[1].value;
    let password=event.target[2].value
    let confrompassword=event.target[3].value;
    console.log(username," ",  email," ",password," ",confrompassword)




    let users=username.match(/[A-Z]/)
    console.log(users)
    let mail=email.match(/[@gamil.com]$/)
    console.log(mail)
     let passes=password.match(/^[A-Z]/)
    console.log(passes)
   if(users && username.length == 10){
    if(mail){
      if(password.length==6){
        if(confrompassword.length==password.length){
          window.location.href="/Login"
          let mirchi={
            username:username,
            Email:email,
            password:password,
          }
        //   let options={
        //     method:"POST", 
        //     body:JSON.stringify(mirchi),
        //     headers:{
        //       "Content-type" : "application/json"
        //     }
        //     }
          
          axios.post("http://localhost:3000/posts",mirchi).then(val=>console.log(val))
        }else{
          alert("enter crct cnfrm pass")
        }
      }else{
        alert("enter pass")
      }
    }else{
      alert("enter a valid mail")
    }
   }else{
    alert("username length should 10 digit and fisrt letter should be captial")
   }  

        }}>
          
        <div class="ram">
          
            <div class="mass">
              
        <label for="" > username:</label>
        <input type="text" id="username" />
    </div>
    <div class="maha">
       <label for="">Email:</label>
       <input type="text" id="Email" />
    </div>
    <div class="raj">
       <label for="">Password:</label>
       <input type="text" id="pass"/>
    </div>
    <div class="ravi">
       <label for="">conform password:</label>
       <input type="text" id="cpass" />
    </div>
    <div class="check">
        <input type="checkbox" required id="check"/>I agree 
    </div>
    <div class="reg">
       <input type="submit"  value="Register" required id="reg"/>
       <p>already a member? <button  onClick={() => window.location.href='/Login'} >LOGIN</button></p>
    </div>
   
    </div>
    </form>
    )
};
export default Register;