const Contactsection = () => {
    return ( 
        <div id="Contactsection" className="py-5">
            <div className="container py-5">
                <div className="row text-center mb-4">
                    <div className="col">
                    <small className="ll" >CONTACT</small>
                       <h4 className="mb-5 mt-2 kk">Contact Us</h4>
                    </div>   
                </div>

                <div className="row">
                    <div className="col-md-8">
                    <form action="">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control py-4 mr-3" 
                                placeholder="First name" required/>
                                </div>
                                <div className="form-group col-md-6">
                                <input type="text" className="form-control  py-4" 
                                placeholder="Last name" required/>
                                </div>
                            </div>

                            <div className="form-group mt-1 mb-4">
                                <input type="email" className="form-control py-4" placeholder="Email address" required/>
                            </div>

                            <div className="form-group">
                                <textarea className="form-control" cols="30" rows="10" placeholder="Write your message" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-lg btn-block pt-2 pb-2 for-bg" style={{backgroundColor: "#EFBA6C", color: "white", fontWeight: "300"}}>SEND MESSAGE</button>

                    </form>
                    </div>
                    <div className="col-md-3 mx-auto align-self-center">
 
<h4 className="mb-4 mt-5">Contat Info</h4>
<h6>Address:</h6>
<p>34 Street Name, City Name Here, United States</p>
<h6>Phone:</h6>
<p>+1 242 4942 290</p>
<h6>Email:</h6>
<p>info@yourdomain.com</p>


                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contactsection;