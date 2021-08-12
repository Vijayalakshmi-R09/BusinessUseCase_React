import React,{useState,useEffect} from 'react'
import Dashboard from './Dashboard'
import './Vendor.css'
import { Modal,Button } from 'react-bootstrap';
import axios from 'axios';
export default function VendorDetails() 
{
    const[res,setResult]=useState([]);
    const[res1,setResult1]=useState([]);


    useEffect(()=>{
        fetch("http://localhost:8080/api/vendordetails").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
        }).catch(e=>{
          console.error("ERR ...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })
    },[res1])
    const deletevendor  =(e)=>{
        e.preventDefault();
        const id=e.target.id;
        const url=`http://localhost:8080/api/vendordetails/${id}`
        axios.delete(url)
        .then(res1 => {
          console.log(res1);
          alert("Record Deleted!")
          setResult1(res1.data);
          console.log(res1.data);
        })
    }
    return (
        <div>
            <Dashboard />
            <div><br></br>

            <div className="container-md ">
            <div className="col-sm-15">
            <div className="card"> 
            <div className="card-header"><h4>VENDOR DETAILS</h4></div>
            <div className="card-body"> 
            <div class="table-responsive">
            <table className="table table-striped table-dark table table-fixed">
                <thead>
                    <tr>
                    <th scope="col">S.No</th> 
                    <th scope="col">Vendor Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">Company</th>
                    <th scope="col">Company Address</th>
                    <th scope="col">Speciality</th>

                    </tr>
                </thead>
                 <tbody>
                 {res.map((x)=>{
                    return <><tr>
                    <td><label key={x.id}>{x.id}</label></td>
                    <td><label key={x.id}>{x.vname}</label></td>
                    <td><label key={x.id}>{x.mail}</label></td>
                    <td><label key={x.id}>{x.phone}</label></td>
                    <td><label key={x.id}>{x.company}</label></td>
                    <td><label key={x.id}>{x.companyaddress}</label></td>
                    <td><label key={x.id}>{x.speciality}</label></td>
                    <td><Button variant="danger" id={x.id} onClick={deletevendor}> Delete</Button></td>
                    {/* <td><button className="btn btn-success" >Edit</button></td> */}
                    </tr></>})}
                </tbody>
            </table>
            </div>
        </div>
    </div></div>
</div></div>
</div>
 )
}
