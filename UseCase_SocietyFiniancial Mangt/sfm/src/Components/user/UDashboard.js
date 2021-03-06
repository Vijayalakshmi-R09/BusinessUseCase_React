import React from 'react'
import './Dashboard.css'
export default function UDashboard() {
    return (
        <div>
             <div className="col-md">
            <div className="card text-white bg-secondary"> 
            <div className="card-header"><h3>WELCOME TO USER DASHBOARD</h3></div>
            </div></div> 
             <body><div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                    <a href="http://justinfarrow.com">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Dashboard
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="/user/userprofile">
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            User Profile
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="/user/events">
                       <i class="fa fa-list fa-2x"></i>
                        <span class="nav-text">
                            Events
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="/user/complaintrequest">
                       <i class="fa fa-folder-open fa-2x"></i>
                        <span class="nav-text">
                            Complaint Request
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="/user/complaintstatus">
                        <i class="fa fa-bar-chart-o fa-2x"></i>
                        <span class="nav-text">
                            Complaint Status
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-font fa-2x"></i>
                        <span class="nav-text">
                           Payment Details
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <i class="fa fa-table fa-2x"></i>
                        <span class="nav-text">
                            Payment Details
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Make Payment
                        </span>
                    </a>
                </li>
             
            </ul>

            <ul class="logout">
                <li>
                   <a href="/logout">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
  </body>
   
        </div>
    )
}
