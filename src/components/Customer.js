import Slider from 'react-slick'

const Customer = () => {
  var settings = {
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
        },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div id="Customer" className="py-5">
      <div className="container py-5">
        <div className="row text-center">
          <div className="col">
            <small>TESTIMONI</small>
            <h4 className="mb-5 mt-2">Happy Customers</h4>
          </div>
        </div>

        <div className="row text-primary">
          <div className="col">
            <Slider {...settings}>
              <div className="">
                <div className="text-dark mr-1 mr-md-3 for-bg">
                  <div className="d-flex flex-row for-testi" style={{height: "300px"}}>
                      <div className="mt-5 ml-5">
                      <img
                  src={require('../images/person_1.jpg').default}
                  className="img-fluid cus-img"
                  alt=""
                />
                      </div>
                      <div className="pl-4 pr-5 py-5">
                          <h5 className="text-muted para">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque consequatur quasi beatae, modi quisquam saepe ipsam rem, temporibus quo atque cupiditate dolorum ad labore dolorem maiores hic"</h5>
                          <h5 className="text-muted">-- John Doe</h5>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="">
                <div className="text-dark mr-1 mr-md-3 for-bg">
                  <div className="d-flex flex-row" style={{height: "300px"}}>
                      <div className="mt-5 ml-5">
                      <img
                  src={require('../images/person_2.jpg').default}
                  className="img-fluid cus-img"
                  alt=""
                />
                      </div>
                      <div className="pl-4 pr-5 py-5 cus-pad">
                          <h5 className="text-muted para">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque consequatur quasi beatae, modi quisquam saepe ipsam rem, temporibus quo atque cupiditate dolorum ad labore dolorem maiores hic"</h5>
                          <h5 className="text-muted">-- Jean Doe</h5>
                      </div>
                  </div>
                  </div>
              </div>
        <div className="">
        <div className="text-dark mr-1 mr-md-3 for-bg">
                  <div className="d-flex flex-row" style={{height: "300px"}}>
                      <div className="mt-5 ml-5">
                      <img
                  src={require('../images/person_4.jpg').default}
                  className="img-fluid cus-img" 
                  alt=""
                />
                      </div>
                      <div className="pl-4 pr-5 py-5 ">
                          <h5 className="text-muted para">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque consequatur quasi beatae, modi quisquam saepe ipsam rem, temporibus quo atque cupiditate dolorum ad labore dolorem maiores hic"</h5>
                          <h5 className="text-muted">-- Jean Doe</h5>
                      </div>
                  </div>
                  </div>

        </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customer
