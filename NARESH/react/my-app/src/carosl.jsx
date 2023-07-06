import Carousel from 'react-bootstrap/Carousel';
import Bangles from "./bangles.jpg"
import Bag from "./bags.webp"
import Shirt from "./shirts.jpg"

let Carsol=()=>{
  return(
      <div style={{height:"200px"}}>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Bangles}
          alt="First slide"
          height="400px"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Bag}
          alt="Second slide"
          height="400px"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Shirt}
          alt="Third slide"
          height="400px"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
         
      </div>
  )
}
export default Carsol;