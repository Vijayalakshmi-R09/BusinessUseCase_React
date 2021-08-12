import './App.css';
import {
  React,
  useState,
} from 'react';
import AdminLogin from './Components/login/AdminLogin';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Dashboard from './Components/admin/Dashboard/Dashboard';
import UDashboard from './Components/user/UDashboard';
import UserLogin from './Components/login/UserLogin';
import Logout from './Components/login/Logout';
import OnBoarding from './Components/admin/Dashboard/OnBoarding';
import UserProfile from './Components/user/UserProfile';
import OwnerDetails from './Components/admin/Dashboard/OwnerDetails';
import Complaint from './Components/admin/Dashboard/Complaint';
import VendorDetails from './Components/admin/Dashboard/VendorDetails';
import ComplaintReq from './Components/user/ComplaintReq';
import Events from './Components/user/Events';
import OwnerdetailsEdit from './Components/admin/Dashboard/OwnerdetailsEdit';
import ComplaintStatus from './Components/user/ComplaintStatus';
import PrivateRoute from './Components/Routes/PrivateRoute';
function App() 
{
  const [Auth,setSuth]=useState(false);
  return (
    <div className="App">
      <Router>
     
     <Switch>
      
       <Route path="/admin" exact component={AdminLogin}></Route>
       <Route path="/user" exact component={UserLogin}></Route>
       <Route path="/admin/dashboard" exact component={Dashboard}></Route>
       <Route path="/admin/onboarding" exact component={OnBoarding}></Route>
       <Route path="/logout" exact component={Logout}></Route>
       <Route path="/user/dashboard" exact component={UDashboard}></Route>
       <Route path="/user/userprofile" exact component={UserProfile}></Route>
       <Route path="/user/events" exact component={Events}></Route>
       <Route path="/user/complaintrequest" exact component={ComplaintReq}></Route>
       {/* <Route path="/user/complaintstatus" exact component={ComplaintStatus}></Route> */}
       <PrivateRoute exact path="/user/complaintstatus" a={Auth} component={ComplaintStatus}></PrivateRoute>
       <Route path="/admin/ownerdetails" exact component={OwnerDetails}></Route>
       <Route path="/admin/complaint" exact component={Complaint}></Route>
       <Route path="/admin/vendordetails" exact component={VendorDetails}></Route>
       <Route path="/ownerdetails/:id" exact component={OwnerdetailsEdit}></Route>
     </Switch>
   
 </Router>
    </div>
  );
}
export default App;
