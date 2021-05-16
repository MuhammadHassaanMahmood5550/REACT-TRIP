const Team = () => {
    return ( 
        <div id="team" className="py-5 text-center">
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                    <small>AMAZING STAFF</small>
                       <h4 className="mb-5 mt-2">Meet Our Team</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-5">
                       <img src={require('../images/person_1.jpg').default} 
                       className="w-75" alt=""/> 
                       <h5 className="mt-4">John Doe</h5>
                       <p className="text-muted mb-4">STAFF</p>
                       <p className="text-muted mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, architecto eum. Omnis non consectetur est porro earum debitis ullam excepturi voluptatum culpa </p>
                       <a href=""> 
                       <i className="fab fa-facebook fa-2x for-color"></i> 
                       </a>
                       <a href=""> 
                       <i className="fab fa-instagram fa-2x mx-5 for-color"></i> 
                       </a>
                       <a href=""> 
                       <i className="fab fa-twitter fa-2x  for-color"></i> 
                       </a>
                    </div>
                    <div className="col-md-4 mb-5">
                    <img src={require('../images/person_2.jpg').default} 
                       className="w-75" alt=""/> 
                       <h5 className="mt-4">Jean Doe</h5>
                       <p className="text-muted mb-4">STAFF</p>
                       <p className="text-muted mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, architecto eum. Omnis non consectetur est porro earum debitis ullam excepturi voluptatum culpa </p>
                       <a href=""> 
                       <i className="fab fa-facebook fa-2x  for-color"></i> 
                       </a>
                       <a href=""> 
                       <i className="fab fa-instagram fa-2x mx-5 for-color"></i> 
                       </a>
                       <a href=""> 
                       <i className="fab fa-twitter fa-2x  for-color"></i> 
                       </a>
                    </div>
                    <div className="col-md-4">
                    <img src={require('../images/person_3.jpg').default} 
                       className="w-75" alt=""/> 
                       <h5 className="mt-4">Claire Dormey</h5>
                       <p className="text-muted mb-4">STAFF</p>
                       <p className="text-muted mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, architecto eum. Omnis non consectetur est porro earum debitis ullam excepturi voluptatum culpa </p>
                       <a href=""> 
                       <i className="fab fa-facebook fa-2x  for-color"></i> 
                       </a>
                       <a href=""> 
                       <i className="fab fa-instagram fa-2x mx-5  for-color"></i> 
                       </a>
                       <a href=""> 
                       <i className="fab fa-twitter fa-2x  for-color"></i> 
                       </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Team;