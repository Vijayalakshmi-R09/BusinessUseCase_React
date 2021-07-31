import React from 'react'
import UDashboard from './UDashboard'
import './ComplaintReq.css'
export default function ComplaintReq() {
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
<div class="card-body">
  <div class="row">
  <div class="col-sm-4 form-group ">
    <label>Subject </label><br/>
    <select name="work" class="form-control"><br/>
      <option value="Electrical">Electrical</option>
      <option value="Plumbing">Plumbing</option>
      <option value="Gardener">Gardener</option>    
      <option value="Cleaning">Cleaning</option>
    </select>
    </div>
    <div class="col-sm-4 form-group ">
    <label>Compaint Message </label>
    <textarea id="form7" class="md-textarea form-control "  rows="3" placeholder="Complaint Message"></textarea>    
  </div>
  </div>
    <div class="row">
      <div class="col-sm-4 form-group ">
        <label >Duration of Days</label>
        <input type= "text" class="form-control " placeholder="Duration of Days"/>
        </div>
        <div class="col-sm-4 form-group ">
        <label>Others </label>
        <input type="text" class="form-control " placeholder="Others"/>
        </div>
      </div>
    </div><br/>
    <div class="text-center " >
      <button  class="btn btn-success ">FILE COMPLAINT</button>
    </div>
  </div>
  </div>
        </div>
    )
}
