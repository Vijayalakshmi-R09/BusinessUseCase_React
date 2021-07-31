import React, {useState,useEffect} from 'react'
import UDashboard from './UDashboard'
import axios from 'axios';
import { useParams } from "react-router-dom";
export default function UserProfile() 
{
	const[res,setResult]=useState([]);
	const[address,setAddress]=useState([]);
	const { id } = useParams();
	console.log(id);		
	const loadUser = async () => {
		const result = await axios.get(`http://localhost:8080/api/userdetails/1`);
		setResult(result.data);
		console.log(result.data)
	  };
	  useEffect(() => {
	   console.log("Userdetails");
		loadUser();  
	}, []);

    // useEffect(()=>{
    //     fetch("http://localhost:8080/api/userdetails/").then(res => res.json()).then(data=>{
	// 	  console.log("hi");
    //       console.log(data);
    //       setResult(data);
    //     }).catch(e=>{
    //       console.error("ERR in user...");
    //       console.error(e);
    //     }).finally(()=>{
    //       console.log("I am in finally");
    //     })
    // },[])
    

    return (
        <div>
             <UDashboard />       
    
             <div class="container">
<div class="row gutters">
<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
<div class="card h-100">
	<div class="card-body">
		<div class="account-settings">
			<div class="user-profile">
				<div class="user-avatar">
					<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
				</div>
				<h5 class="user-name">User Profile</h5>
			</div>
		</div>
	</div>
</div>
</div>
<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div class="card h-100">
	<div class="card-body">
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label >First Name</label>
					<input type="text" class="form-control" name="firstname"  value={res.firstname}/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label >Last Name</label>
					<input type="text" class="form-control" name="lastname" value={res.lastname}/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label >Age</label>
					<input type="text" class="form-control" name="age" value={res.age} readOnly/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label >Gender</label>
					<input type="text" class="form-control" name="gen" value={res.gen} readOnly/>
				</div>
			</div>
			
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label>Email</label>
					<input type="email" class="form-control" name="email" value={res.email}/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label >Phone</label>
					<input type="text" class="form-control" name="phonenumber" value={res.phonenumber}/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label >Nationality</label>
					<input type="text" class="form-control" name="nationality" value={res.nationality} readOnly/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label >Blood Group</label>
					<input type="text" class="form-control" name="bloodgp" value={res.bloodgp} readOnly/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label >Block </label>
					<input type="text" class="form-control" name="newadd" value={res.block}  readOnly/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label >House No </label>
					<input type="text" class="form-control" name="newadd" value={res.house}  readOnly/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label >City</label>
					<input type="text" class="form-control" name="newadd" value={res.city}  readOnly/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label >State </label>
					<input type="text" class="form-control" name="newadd" value={res.state}  readOnly/>
				</div>
			</div>
	</div>
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="text-center">
					<button type="button" id="submit" name="submit" class="btn btn-primary">Update</button>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>
        </div>
   
  
    )
}
