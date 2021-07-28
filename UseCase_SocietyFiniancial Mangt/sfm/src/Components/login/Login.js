import React,{useState} from 'react'
import { useHistory, useParams } from "react-router-dom";

import './Login.css';

export default function Login() 
{
    let history=useHistory();
    const [submitted, setSubmitted] = useState(false);
    const[admin,setAdmin]=useState({
        aname:"",
        pwd:""
    });
    // const validationSchema = Yup.object({
    //     aname : Yup.string().required("required field"),
    //     pwd : Yup.string().required("required field"),})

    // const { handleOnSubmit,handleOnChange,values,errors} = useFormik({
    //         initialValues: {
    //             aname:"",
    //             pwd:""
    //         },
    //         validationSchema,
    //         handleonSubmit(values) {
    //             console.log("=============Submitted");
    //             console.log(values);
    //             setSubmitted(true);
    //             alert("Login Successfully");
    //             history.push('/dashboard');}})
               
    const handleOnChange = (event) => {
        const {name,value} = event.target;
        
        setAdmin((prevstate) => {
            return {
                ...prevstate,
                [name]:value,
            }
        })        
    }
    const handleOnSubmit =(e) => {
        e.preventDefault();
        console.log(admin);
        alert("Login Successfully");
        history.push('/dashboard');
      };
    return (
        <div>
        <div className="container login-container">
            <div className="row">
                <div className="col-md-4 login-form-1">
                    <h3 className="adcolor">Admin Login</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" name="aname"placeholder="username *" value={admin.aname}  onChange={handleOnChange}/>
                            {/* <h6>{errors.aname ? errors.aname : null}</h6> */}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="pwd" placeholder="password *" value={admin.pwd} onChange={handleOnChange}/>
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
