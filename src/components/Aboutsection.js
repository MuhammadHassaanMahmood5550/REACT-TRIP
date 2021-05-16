const Aboutsection = () => {
    return ( 
        <div id="Aboutsection">
            <div className="container">
                <div className="row  py-4 align-items-center">
                    <div className="col-lg-6 mt-5 mt-md-0">
                       <small>DISCOVER STORY</small>
                       <h4 className="mb-5 mt-2">Our Story</h4>
                       <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus nobis voluptatem, consectetur non rem quibusdam, sequi repellat.</p> 
                       <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam culpa labore facilis id tempore magni.</p>
                    </div>
                    <div data-aos="fade-right" className="col-lg-6">
                    <img  src={require('../images/traveler.jpg').default} class="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Aboutsection;