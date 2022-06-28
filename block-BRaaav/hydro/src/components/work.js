 import pic1 from "../media/work-image4.jpg"
import pic2 from "../media/work-image3.jpg"
import pic3 from "../media/work-image2.jpg"
import pic4 from "../media/work-image1.jpg"

function Work(){
    return (
        <section className="work padding">
        <div className="container">
          <header className="sec-header text-center">
            <h2 className="heading">Our Work</h2>
            <div className="dot-wrapper">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </header>
          <div className="flex">
            <div className="flex-23">
              <img
                className="flexible-img"
                src={pic4}
                alt="Work 1"
              />
            </div>
            <div className="flex-23">
              <img
                className="flexible-img"
                src={pic3}
                alt="Work 1"
              />
            </div>
            <div className="flex-23">
              <img
                className="flexible-img"
                src={pic2}
                alt="Work 1"
              />
            </div>
            <div className="flex-23">
              <img
                className="flexible-img"
                src={pic1}
                alt="Work 1"
              />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Work