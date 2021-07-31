import React from 'react'
import './Dashboard.css'
export default function Dashboard() {
    return (
        <div>
            
  <body><div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                    <a href="#">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Dashboard
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="/admin/onboarding">
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            OnBoarding
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="/admin/ownerdetails">
                       <i class="fa fa-list fa-2x"></i>
                        <span class="nav-text">
                            Owner Details
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="/admin/vendordetails">
                       <i class="fa fa-folder-open fa-2x"></i>
                        <span class="nav-text">
                            Vendor Details
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="/admin/complaint">
                        <i class="fa fa-bar-chart-o fa-2x"></i>
                        <span class="nav-text">
                            Complaint Request
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-font fa-2x"></i>
                        <span class="nav-text">
                           Complaint Report
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
                            Event History
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

