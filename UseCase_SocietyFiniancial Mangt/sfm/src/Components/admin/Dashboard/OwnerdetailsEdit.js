import React, { useState,useEffect,useHistory } from 'react'; 
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useParams } from "react-router-dom";

export default function OwnerdetailsEdit() 
{
    const validationSchema = Yup.object({
        id : Yup.number().required("mandatory"),
        cname : Yup.string().required("mandatory"),
        email : Yup.string().required("mandatory"),
        Phonenumber:Yup.number().required("mandatory"),
        block : Yup.string().required("mandatory"),
        house : Yup.string().required("mandatory")
        
    }) 
    
    const { id } = useParams();
    console.log(id);
    
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/ownerdetails/${id}`);
        setValues(result.data);
        console.log(result.data)
      };
      useEffect(() => {
       console.log("useeffect");
        loadUser();  
    }, []);
    
    
    const {setValues,handleSubmit,handleChange,values,errors} = useFormik({
        
      initialValues: {
        id:'',
        cname:'',
        email:'',
        phonenumber:0,
        blockno: '',
        houseno:''
      },
      validationSchema,
      onSubmit(values) {
          const url="http://localhost:8080/api/ownerdetails";
        axios.put(url,values).then(res=>res.data).then((data)=>{
              alert("owner updated successfully");
              console.log("=============Submitted");
              console.log(data);
        }
        ).catch((err)=>{
                console.log("err")
            })
    }
    
    }) 
    return (
        <div>
            <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>Owner Details</h4></div>
            <form onSubmit={handleSubmit} noValidate>
                <div class="form-row">
                <div class="col-md-4 mb-3">
                <label>s.No</label>
                <input type="text" class="form-control"  name="id" value={values.id} onChange={handleChange} readOnly/>
                {errors.id ? errors.id : null}
                </div>

                <div class="col-md-4 mb-3">
                    <label >Customer name</label>
                    <input type="text" class="form-control"  name="cname" value={values.cname} onChange={handleChange} />
                    {errors.cname ? errors.cname : null}
                </div>

                <div class="col-md-3 mb-3">
                    <label >Email Id</label>
                    <input type="text" class="form-control"  name="email" value={values.email} onChange={handleChange}  />
                    {errors.email ? errors.email : null}
                </div>

                <div class="col-md-4 mb-3">
                <label >Phonenumber</label>
                <div class="input-group">
                    <input type="text"  class="form-control" name="Phonenumber" value={values.phonenumber} onChange={handleChange} />
                    {errors.phonenumber ? errors.phonenumber : null}
                </div>
                </div>

            <div class="form-row">
                <div class="col-md-6 mb-3">
                <label >Block No</label>
                <input type="text"  class="form-control" name="blockno" value={values.blockno} onChange={handleChange} />
                {errors.block ? errors.block : null}
                </div>
            </div>

            <div class="form-row">
                <div class="col-md-6 mb-3">
                <label >House No</label>
                <input type="text" class="form-control" name="houseno" value={values.houseno} onChange={handleChange} />
                {errors.house ? errors.house : null}
                </div>
            </div>
           </div>
  
            <button class="btn btn-success"  type="submit" >Save Changes</button>
  
        </form>
        </div>
    </div>
</div>
</div>
 )}
