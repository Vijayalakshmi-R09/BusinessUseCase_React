import './App.css';
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
function App() {
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
       <Route path="/user/complaintrequest" exact component={ComplaintReq}></Route>
       <Route path="/admin/ownerdetails" exact component={OwnerDetails}></Route>
       <Route path="/admin/complaint" exact component={Complaint}></Route>
       <Route path="/admin/vendordetails" exact component={VendorDetails}></Route>
       
       
     </Switch>
   
 </Router>
    </div>
  );
}
export default App;
