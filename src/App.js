// import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Header from './components/Header'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './PrivateRoute';
import PublicRoutes from './PublicRoutes';


// client routes
import AddClient from './components/AddClient';
import ClientDetail from "./components/ClientDetail";
import EditClient from "./components/EditClient";

// project routes
import ProjectDetail from "./components/ProjectDetail";
import AddProject from "./components/AddProject";




function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<PublicRoutes/>}>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Route>
        {/* protected routes */}
      <Route exact path="/" element={<PrivateRoute/>}>

        <Route  path="/dashboard" element={<Dashboard/>}/>
        {/* client route */}
        <Route exact path="/add-client" element={<AddClient/>}/>
        <Route exact path="/client-detail/:id" element={<ClientDetail/>}/>
        <Route exact path="/edit-client/:id" element={<EditClient/>}/>
        {/* project route */}
        <Route exact path="/project-detail/:id" element={<ProjectDetail/>}/>
        <Route exact path="/add-project" element={<AddProject/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
