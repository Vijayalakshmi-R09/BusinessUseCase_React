import React from 'react'
import Dashboard from './Dashboard'
export default function Complaint() {
    return (
        <div>
          <Dashboard />
            <div><br></br>

            <div className="container-sm ">
            <div className="col-sm-15">
            <div className="card"> 
            <div className="card-header"><h4>COMPLAINT REQUESTS</h4></div>
            <div className="card-body"> 
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">S.No</th> 
                    <th scope="col">CustomerName</th>
                    <th scope="col">Block No</th>
                    <th scope="col">House No</th>
                    <th scope="col">Complaint Msg</th>
                    <th scope="col">Date</th>
                    <th scope="col">Actions</th>

                    </tr>
                </thead>
                 <tbody>
                    <tr>
                    <td><label ></label></td>
                    <td><label ></label></td>
                    <td><label ></label></td>
                    <td><label ></label></td>
                    <td><label ></label></td>
                    <td><label ></label></td>
                    <td><button className="btn btn-success" >Accept</button></td>
                    <td><button className="btn btn-danger" >Reject</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div></div>
</div></div>
</div>
 )
}
