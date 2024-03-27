import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';

//pages
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import LoginSignup from './Components/Pages/LoginSignup';





function App() {
  return (
    <BrowserRouter>
 <header> 
  <nav>
    <h1>ريالات</h1>
    <NavLink to = "about" >من نحن </NavLink>  
    <NavLink to = "login">التسجيل</NavLink>  
    <NavLink to = "/">الرئيسية</NavLink>
    
    </nav>
 </header>
    
   <main>
    <Routes>
      <Route index element = {<Home />  } />
      <Route path="about" element = {<About />  } />
      <Route path="login" element = {<oginSignup />  } />

    </Routes>
   </main>

<Routes>
<Route path="login" element = {<LoginSignup />  } />

    </Routes>
    </BrowserRouter> 
  );
}

export default App
