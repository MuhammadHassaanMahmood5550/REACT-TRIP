const Blgsection = (props) => {
    return ( 
        <div id="Blogsection" className="py-5">
            <div className="container py-5">
                <div className="row text-center">
                   <div className="col">
                   <small>UPDATES</small>
                       <h4 className="mb-5 mt-2">Our Blog</h4>
                   </div>
                </div>

              {props.home &&  
              <div className="row mb-4">
                    <div className="col-lg-4 mb-4">
                        <img src={require('../images/img_1.jpg').default} 
                        className="img-fluid" alt=""/>
                        <h4 className="my-4">Lorem ipsum dolor sit amet</h4>
                        <span><small className="text-muted d-inline">July 17, 2021 by </small><h6 className="text-warning d-inline ml-3">Admin</h6></span>
                        <p className="text-muted mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aspernatur enim facere aliquid, sequi quibusdam atque minima hic alias sapiente animi ducimus ad ullam commodi.</p>
                    </div>
                    <div className="col-lg-4 mb-4">
                    <img src={require('../images/img_2.jpg').default} 
                        className="img-fluid" alt=""/>
                        <h4 className="my-4">Lorem ipsum dolor sit amet</h4>
                        <span><small className="text-muted d-inline">July 17, 2021 by </small><h6 className="text-warning d-inline ml-3">Admin</h6></span>
                        <p className="text-muted mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aspernatur enim facere aliquid, sequi quibusdam atque minima hic alias sapiente animi ducimus ad ullam commodi.</p>
                    </div>
                    <div className="col-lg-4">
                    <img src={require('../images/img_3.jpg').default} 
                        className="img-fluid" alt=""/>
                        <h4 className="my-4">Lorem ipsum dolor sit amet</h4>
                        <span><small className="text-muted d-inline">July 17, 2021 by </small><h6 className="text-warning d-inline ml-3">Admin</h6></span>
                        <p className="text-muted mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aspernatur enim facere aliquid, sequi quibusdam atque minima hic alias sapiente animi ducimus ad ullam commodi.</p>
                    </div>
                </div> }

             {props.blog &&  
              <div className="row">
                    <div className="col-lg-4 mb-4">
                        <img src={require('../images/img_4.jpg').default} 
                        className="img-fluid" alt=""/>
                        <h4 className="my-4">Lorem ipsum dolor sit amet</h4>
                        <span><small className="text-muted d-inline">July 17, 2021 by </small><h6 className="text-warning d-inline ml-3">Admin</h6></span>
                        <p className="text-muted mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aspernatur enim facere aliquid, sequi quibusdam atque minima hic alias sapiente animi ducimus ad ullam commodi.</p>
                    </div>
                    <div className="col-lg-4 mb-4">
                    <img src={require('../images/img_5.jpg').default} 
                        className="img-fluid" alt=""/>
                        <h4 className="my-4">Lorem ipsum dolor sit amet</h4>
                        <span><small className="text-muted d-inline">July 17, 2021 by </small><h6 className="text-warning d-inline ml-3">Admin</h6></span>
                        <p className="text-muted mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aspernatur enim facere aliquid, sequi quibusdam atque minima hic alias sapiente animi ducimus ad ullam commodi.</p>
                    </div>
                    <div className="col-lg-4">
                    <img src={require('../images/img_6.jpg').default} 
                        className="img-fluid" alt=""/>
                        <h4 className="my-4">Lorem ipsum dolor sit amet</h4>
                        <span><small className="text-muted d-inline">July 17, 2021 by </small><h6 className="text-warning d-inline ml-3">Admin</h6></span>
                        <p className="text-muted mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aspernatur enim facere aliquid, sequi quibusdam atque minima hic alias sapiente animi ducimus ad ullam commodi.</p>
                    </div>
                </div>
                    }
            </div>
        </div>
     );
}
 
export default Blgsection;