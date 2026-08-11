import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Forget from "./Pages/Forget"
import Homepage from "./Pages/Homepage";
import Newpassword from "./Pages/Newpassword";
import Complete2 from "./Pages/Complete2";
import Complete3 from "./Pages/Complete3";
import Income from "./Pages/Income";
import Settings from "./Pages/Setting/Settings";
import Expenses from "./Pages/Expenses";
import Aiassistant from "./Pages/Aiassistant";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import Demo from "./Pages/Demo";
import Notifications from "./Pages/Setting/Notifications";
import Helpdesk from "./Pages/Setting/Helpdesk";
import Account from "./Pages/Setting/Account";
import EditProfile from "./Pages/Setting/EditProfile";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-input-2/lib/style.css';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/signin" element={<Signin/> } />     
      <Route path="/signup" element={<Signup/> } /> 
      <Route path="/newpassword" element={<Newpassword/> } />
      <Route path="/complete2" element={<Complete2/> } />
      <Route path="/complete3" element={<Complete3/> } />
      <Route path="/Home" element={<Home/> } />
      <Route path="/demo" element={<Demo/> } />
      

      <Route path="/" element={<DashboardLayout/> }>
      <Route path="/signinbtn" element={<Homepage/> } />
      <Route path="/Dashboard" element={<Dashboard/> } />
      <Route path="/Settings" element={<Settings/> } />
      <Route path="/Income" element={<Income/> } />
      <Route path="/Aiassistant" element={<Aiassistant/> } />
      <Route path="/Expenses" element={<Expenses/> } />
         
      <Route path="/" element={<Settings/> }>
      <Route path="/Edit" element={<EditProfile/> } />
      <Route path="/Notifi" element={<Notifications/> } />
      <Route path="/Account" element={<Account/> } />
      <Route path="/Help" element={<Helpdesk/> } />
      </Route>

      </Route>

     
    </Routes>
  );
}

export default App;
