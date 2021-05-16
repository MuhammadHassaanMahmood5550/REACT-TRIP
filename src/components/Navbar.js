import {Link} from "react-router-dom";


const Navbar = () => {
    return ( 
       <div className="for-navbar">
        
           <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
               <div className="container">
           <a class="navbar-brand" href="#">
    <img src={require('../images/logo.png').default} width="75" height="75" class="d-inline-block align-top" alt=""/>
  </a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active ml-3">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li class="nav-item active ml-3">
      <Link to="/About" className="nav-link">About</Link>
      </li>
      <li class="nav-item active ml-3">
      <Link to="/Trip" className="nav-link">Trip</Link>
      </li>
      <li class="nav-item active ml-3">
      <Link to="/Blog" className="nav-link">Blog</Link>
      </li>
      <li class="nav-item active ml-3">
      <Link to="/Contact" className="nav-link">Contact</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
       </div> 
     );
}
 
export default Navbar;
