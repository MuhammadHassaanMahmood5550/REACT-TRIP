const Footer = () => {
    return ( 
        <div id="Footer">
            <div className="for-footer">
                <div className="container">
                    <div className="row align-items-center pt-5" style={{height: "400px"}}>
                        <div className="col-lg-4 mb-4">
                            <h6>Instagram</h6>
                            <div className="d-flex flex-row mt-4">
                                <div className="mr-3">  
                                  <img src={require('../images/insta_1.jpg').default} width="75" height="75" class="d-inline-block align-top for-insta-img" alt=""/> 
                                  </div>
                                <div className="mr-3">
                                <img src={require('../images/insta_2.jpg').default} width="75" height="75" class="d-inline-block align-top for-insta-img" alt=""/>
                                </div>
                                <div className="">
                                <img src={require('../images/insta_3.jpg').default} width="75" height="75" class="d-inline-block align-top for-insta-img" alt=""/>
                                </div>
                            </div>

                            <div className="d-flex flex-row mt-3">
                                <div className="mr-3">  
                                  <img src={require('../images/insta_4.jpg').default} width="75" height="75" class="d-inline-block align-top for-insta-img" alt=""/> 
                                  </div>
                                <div className="mr-3">
                                <img src={require('../images/insta_5.jpg').default} width="75" height="75" class="d-inline-block align-top for-insta-img" alt=""/>
                                </div>
                                <div className="">
                                <img src={require('../images/insta_6.jpg').default} width="75" height="75" class="d-inline-block align-top for-insta-img" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <h6 className="mb-4">Quick Links</h6>
                            <h6 className="mb-3 footer-li">About Us</h6>
                            <h6 className="mb-3 footer-li">Testimonials</h6 >
                            <h6 className="mb-3 footer-li">Trems of Service</h6>
                            <h6 className="mb-3 footer-li">Privacy</h6>
                            <h6 className="footer-li">Contact Us</h6>
                        </div>
                        <div className="col-lg-4">
                            <h6 className="mb-4">Newsletter</h6>
                            <p className="text-justify mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quas ipsam beatae suscipit esse modi ad voluptates voluptatibus.</p>
                            <form className="form-inline">
                                
                                    <div className="form-group mr-3 mb-3">
                                        <input type="text" placeholder="Email" className="form-control py-4 px-4"/>
                                    </div>
                                    <button type="submit" className="btn py-2 px-4 mb-3 
                                     for-bg" style={{backgroundColor: "#EFBA6C"}}>SEND</button>
                               
                            </form>
                        </div>
                        <p className="mx-auto mt-4">@ Hassaankhan 5550</p>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default Footer;