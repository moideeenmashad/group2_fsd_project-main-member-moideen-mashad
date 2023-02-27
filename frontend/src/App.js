
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import './Components/HeadFoot/HeadFoot.css';
import './Components/Home.css';
import './Components/Requirementform/Requirementform.css'

// import Account from './Components/Account/Account'
// import './Components/Account/Account.css';
import Footer from './Components/HeadFoot/Footer';
import Admin from './Components/AdminPanel/Admin';
import './Components/AdminPanel/Admin.css';
import TopNavbar from './Components/HeadFoot/TopNavbar';
// import FacultyPanel from './Components/FacultyPanel/FacultyPanel';
import Requirementform from './Components/Requirementform/Requirementform';
import Card from './Components/Card'
import ViewCurriculum from './Components/ViewCurriculum';
import AddCurriculum from './Components/AddCurriculum';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import AdminRequirement from './Components/AdminRequirement/AdminRequirement.jsx'
import './Components/AdminRequirement/AdminRequirement.css'
import EditRequirement from './Components/AdminPanel/EditRequirement';
import './Components/PastCurriculum/PastCurriculum.css'
import PastCurriculum from './Components/PastCurriculum/PastCurriculum.jsx';




function App() {
  return (
    <div>
          <TopNavbar/>
          <BrowserRouter>
          <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/Signin' exact element={<Signin/>}/>
          <Route path='/Signup' exact element={<Signup/>}/>
          {/* <Route path='/Account' exact element={<Account/>}/> */}
          <Route path='/AdminPanel' exact element={<Admin/>}/>
          {/* <Route path='/facultypanel' exact element={<FacultyPanel/>}/> */}
          <Route path='/Requirementform' exact element={<Requirementform/>}/>
          <Route path='/Card' exact element={<Card/>}/>
          <Route path='/view' exact element={<ViewCurriculum/>}/>
          <Route path='/add' exact element={<AddCurriculum/>}/>
          <Route path='/AdminRequirement' exact element={<AdminRequirement/>}/>
          <Route path='/edit/:id' exact element={<EditRequirement/>}/>
          <Route path='PastCurriculum' exact element={<PastCurriculum/>}/>

          </Routes>
          </BrowserRouter>
          {/* <Footer/> */}
          
    </div>
    
  );
}


export default App;
