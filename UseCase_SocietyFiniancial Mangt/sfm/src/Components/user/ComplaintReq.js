import React, {useState,useEffect} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import UDashboard from './UDashboard'
import './ComplaintReq.css'
import axios from 'axios';
export default function ComplaintReq() 
{
  const [submitted, setSubmitted] = useState(false);
  const [res,setRes] = useState(0);

  const validationSchema = Yup.object({
     sub: Yup.string().required("required"),
     msg : Yup.string().required("required"),
     days : Yup.string().required("required"),
     block : Yup.string().required("required"),
     house : Yup.string().required("required")
    })
    const { handleSubmit,handleChange,values,errors} = useFormik({
      initialValues: {
          sub:'',
          msg:'',
          status:'',
          days:0,
          block:'',
          house:''
             },
      validationSchema,
      onSubmit(values) {
          axios.post("http://localhost:8080/api/complaint",values).then(res=>res.data).then((data)=>{
                alert("Complaint registered");
                console.log("=============Submitted");
                console.log(values);
                setSubmitted(true);
          }
          ).catch((err)=>{
                  console.log("err")
              })
      }
  }) 

    return (
        <div>
             <UDashboard />       
                <div class="col-lg-10 offset-lg-1 pt-5 pb-5 bg-dark text-light">
                <div id="client-testimonial-carousel" class="carousel slide" data-ride="carousel" >
                <div class="carousel-inner" role="listbox">
                <div class="carousel-item active text-center p-4">
                <blockquote class="blockquote text-center">
                <p class="mb-0"><h1><i>Register your Complaint here!</i> </h1>
                </p>
               
                </blockquote>
                </div>
                <div class="carousel-item text-center p-4">
                <blockquote class="blockquote text-center">
                <p class="mb-0"><h1><i>Issues might be Plumbing,Lights Flickering , Water Clogging will help via your compliant request...</i></h1>
                </p>
                
                </blockquote>
                </div>
                <div class="carousel-item text-center p-4">
                <blockquote class="blockquote text-center">
                <p class="mb-0"><h1><i>Vendors will be assigned accordingly.</i></h1>
                </p>
                
                </blockquote>
                </div>
                </div>
                <ol class="carousel-indicators">
                <li data-target="#client-testimonial-carousel" data-slide-to="0" class="active"></li>
                <li data-target="#client-testimonial-carousel" data-slide-to="1"></li>
                <li data-target="#client-testimonial-carousel" data-slide-to="2"></li>
                </ol>
                </div>
                </div>

<br/>
<br/>
<div className="container-md">
<div class="card">
<form onSubmit={handleSubmit} noValidate>
<div class="card-body">
  <div class="row">
  <div class="col-sm-4 form-group ">
    <label>Subject </label> <br/>
    <input type="text" name="sub" onChange={handleChange} values={values.sub} placeholder="Electrical/Plumbing.."/>
    <h6>{errors.sub ? errors.sub : null}</h6>
    </div>
    <div class="col-sm-4 form-group ">
    <label>Compaint Message:</label>
    <textarea class="textarea form-control " name="msg" onChange={handleChange} values={values.msg} rows="2" placeholder="Complaint Message"></textarea>    
    <h6>{errors.msg ? errors.msg : null}</h6>
  </div>
  <div class="col-sm-4 form-group ">
        <label>Status </label>
        <input type="text" class="form-control " name="status"  values={values.status}/>
        <h6>{errors.status ? errors.status : null}</h6>
        </div>
  </div>
    <div class="row">
      <div class="col-sm-4 form-group ">
        <label >Duration (in Days)</label>
        <input type= "text" class="form-control " name="days" onChange={handleChange} values={values.days} placeholder="Duration of Days"/>
        <h6>{errors.days ? errors.days : null}</h6>
        </div>
        <div class="col-sm-4 form-group ">
        <label>Block No: </label>
        <input type="text" class="form-control " name="block" onChange={handleChange} values={values.block} placeholder="block no."/>
        <h6>{errors.block ? errors.block : null}</h6>
        </div>
        <div class="col-sm-4 form-group ">
        <label>House No: </label>
        <input type="text" class="form-control " name="house" onChange={handleChange} values={values.house} placeholder="house no."/>
        <h6>{errors.house ? errors.house : null}</h6>
        </div>
      </div>
    </div><br/>
    <div class="text-center " >
      <button  class="btn btn-success" type="submit">RAISE COMPLAINT</button>
    </div>
    </form>
  </div>
  </div>
  </div>
    )
}
