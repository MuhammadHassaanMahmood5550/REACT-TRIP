const Header = (props) => {
    return ( 
        <div id="Header">
            <div className="for-img">
              <div className="container">
                 
               {props.home && <div data-aos="fade-right" className="row text-white align-items-end text-center text-md-left" style={{height: "480px"}}>
                      <div className="col-md-5">
                        {props.heading && <h1 className="text-capitalize for-font mb-3">
                              let's enjoy the <br/> 
                          wonder of <br/> nature </h1> }

                         {props.paragraph && <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis velit voluptates sunt quia quo magnam a ipsa 
                              at ratione nemo? ello neque esse.</p> }
                   {props.video && <div className="d-flex flex-row justify-content-center justify-content-md-start">
                              <div className=""> 
                              <a href="" className="text-white">
                              <i className="fas fa-play fa-3x"></i> </a>
                              </div>

                              <div className="pl-3 align-self-center">Watch the video</div>
                          </div> }
                      </div>
                  </div> }

                
                {props.otherheading && <div data-aos="fade-up-right" className="row text-center text-white justify-content-center
                align-items-end"
                style={{height: "400px"}}>
                      <div className="col-md-5">
                      <h1 className="text-capitalize for-font mb-3">
                              {props.otherheading} </h1>
                              <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit rem nostrum porro omnis exercitationem officia quaerat nostrum reiciendis nulla.</p>
                      </div>
                  </div> }
              </div>
            </div>
        </div>
     );
}
 
export default Header;