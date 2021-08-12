import React,{useState,useEffect} from 'react'
import UDashboard from './UDashboard'
export default function ComplaintStatus() 
{
    const[res,setResult]=useState([]);
    const[res1,setResult1]=useState([]);


    useEffect(()=>{
        fetch("http://localhost:8080/api/complaint").then(res => res.json()).then(data=>{
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
             <UDashboard />   
             <div><br></br>

            <div className="container-md ">
            <div className="col-sm-15">
            <div className="card"> 
            <div className="card-header"><h4>Status Report</h4></div>
            <div className="card-body"> 
            <div class="table-responsive">
            <table className="table table-striped table-dark table table-fixed">
                <thead>
                    <tr>
                    <th scope="col">Complaint ID</th> 
                    <th scope="col">Block</th>
                    <th scope="col">House</th>
                    <th scope="col">Issue</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                 <tbody>
                 {res.map((x)=>{
                    return <><tr>
                    <td><label key={x.id}>{x.id}</label></td>
                    <td><label key={x.id}>{x.block}</label></td>
                    <td><label key={x.id}>{x.house}</label></td>
                    <td><label key={x.id}>{x.msg}</label></td>
                    <td><label key={x.id}>{x.sub}</label></td>
                    <td><label key={x.id}>{x.status}</label></td>
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
