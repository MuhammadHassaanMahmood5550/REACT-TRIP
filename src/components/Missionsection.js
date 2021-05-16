const Missionsection = () => {
    return ( 
        <div id="Missionsection py-5">
        <div className="container py-5">
            <div className="row  py-4 align-items-center">
                <div className="col-lg-5 ml-auto order-md-2 order-1">
                   <small className="mt-3">MISSION</small>
                   <h4 className="mb-5">Our Mission</h4>
                   <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus nobis voluptatem, consectetur non rem quibusdam, sequi repellat.</p> 
                   <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam culpa labore facilis id tempore magni.</p>
                </div>
                <div className="col-lg-6 order-md-1 order-2">
                <img data-aos="fade-left"  src={require('../images/hero_1.jpg').default} class="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Missionsection;