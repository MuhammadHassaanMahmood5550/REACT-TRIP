const Tripsection = () => {
    return ( 
        <div id="Tripsection" className="text-center py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                    <small>JOURNEY</small>
                       <h4 className="mb-5 mt-2">Our Journey Starts Here</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                    <img data-aos="fade-up" src={require('../images/img_1.jpg').default} class="img-fluid mb-4" alt=""/>
                    <div className="content">
                    <button className="btn text-white mb-2 for-btn for-bg for-bg" style={{backgroundColor: "#EFBA6C"}}>$200.00</button>
                    <h5 className="">Dignissimos debitis</h5>
                    </div>
                    </div>
                    <div className="col-lg-4">
                        <img data-aos="fade-up" src={require('../images/img_2.jpg').default} className="img-fluid mb-4" alt=""/>
                        <div className="content">
                    <button className="btn text-white mb-2 for-btn for-bg" style={{backgroundColor: "#EFBA6C"}}>$200.00</button>
                    <h5 className="">Dignissimos debitis</h5>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <img data-aos="fade-up" src={require('../images/img_3.jpg').default} className="img-fluid mb-4" alt=""/>
                    <div className="content">
                    <button className="btn text-white mb-2 for-btn for-bg" style={{backgroundColor: "#EFBA6C"}}>$200.00</button>
                    <h5 className="">Dignissimos debitis</h5>
                    </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                    <img src={require('../images/img_4.jpg').default} class="img-fluid mb-4" alt=""/>
                    <div className="content">
                    <button className="btn text-white mb-2 for-btn for-bg" style={{backgroundColor: "#EFBA6C"}}>$200.00</button>
                    <h5 className="">Dignissimos debitis</h5>
                    </div>
                    </div>
                    <div className="col-lg-4">
                        <img src={require('../images/img_5.jpg').default} className="img-fluid mb-4" alt=""/>
                        <div className="content">
                    <button className="btn text-white mb-2 for-btn for-bg" style={{backgroundColor: "#EFBA6C"}}>$200.00</button>
                    <h5 className="">Dignissimos debitis</h5>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <img src={require('../images/img_6.jpg').default} className="img-fluid" alt=""/>
                    <div className="content">
                    <button className="btn text-white mb-2 for-btn for-bg " style={{backgroundColor: "#EFBA6C"}}>$200.00</button>
                    <h5 className="">Dignissimos debitis</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Tripsection;