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
       <Route path="/admin/ownerdetails" exact component={OwnerDetails}></Route>
       {/* <Route path="/complaint" exact component={ComplaintRequest}></Route>
       <Route path="/profile" exact component={ProfileDetails}></Route> */}
       
     </Switch>
   
 </Router>
    </div>
  );
}
export default App;
