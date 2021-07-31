import React,{useState,useEffect} from 'react';
 import Dashboard from './Dashboard'
import axios from 'axios';

export default function OwnerDetails() 
{
    const[res,setResult]=useState([]);
    const[res1,setResult1]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/ownerdetails").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
        }).catch(e=>{
          console.error("ERR ...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })
    },[res1])
    return (
        <div>
            <Dashboard />
            <div><br></br>

            <div className="container-md ">
            <div className="col-sm-15">
            <div className="card"> 
            <div className="card-header"><h4>OWNER DETAILS</h4></div>
            <div className="card-body"> 
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">S.no</th> 
                    <th scope="col">Customer Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">Block No</th>
                    <th scope="col">House No</th>

                    </tr>
                </thead>
                 <tbody>
                 {res.map((x)=>{
                    return <><tr>
                    <td><label key={x.id}>{x.id}</label></td>
                    <td><label key={x.id}>{x.cname}</label></td>
                    <td><label key={x.id}>{x.email}</label></td>
                    <td><label key={x.id}>{x.phonenumber}</label></td>
                    <td><label key={x.id}>{x.blockno}</label></td>
                    <td><label key={x.id}>{x.houseno}</label></td>
                    <td><button className="btn btn-primary" >View</button></td>
                    <td><button className="btn btn-success" >Edit</button></td>
                    </tr></>})}
                </tbody>
            </table>
        </div>
    </div></div>
</div></div>
</div>
 )
}
