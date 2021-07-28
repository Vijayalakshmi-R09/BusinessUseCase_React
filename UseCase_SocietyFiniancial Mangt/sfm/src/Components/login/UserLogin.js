import React,{useState} from 'react'
import { useHistory, useParams } from "react-router-dom";
import './Login.css';
export default function UserLogin() {

   let history=useHistory();
    const [submitted, setSubmitted] = useState(false);
    const[user,setUser]=useState({
        sname:"",
        pwd:""
    });
               
    const handleOnChange = (event) => {
        const {name,value} = event.target;
        
        setUser((prevstate) => {
            return {
                ...prevstate,
                [name]:value,
            }
        })        
    }
    const handleOnSubmit =(e) => {
        e.preventDefault();
        console.log(user);
        alert("Login Successfully");
        history.push('/user/dashboard');
      };
    return (
        <div>
        <div className="container login-container">
            <div className="row">
                <div className="col-md-4 login-form-1">
                    <h3 className="adcolor">User Login</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" name="uname"placeholder="username *" value={user.aname}  onChange={handleOnChange}/>
                            {/* <h6>{errors.aname ? errors.aname : null}</h6> */}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="pwd" placeholder="password *" value={user.pwd} onChange={handleOnChange}/>
                            {/* <h6>{errors.pwd ? errors.pwd : null}</h6> */}
                        </div>
                        <div className="form-group">
                            <input type="submit" classname="btnSubmit" value="Login" onClick={handleOnSubmit}/>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>

     </div>
    )
}