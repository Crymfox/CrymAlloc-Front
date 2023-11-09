import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Header = () => {
    return (
        <Carousel showThumbs={false} showStatus={false} emulateTouch infiniteLoop={true} autoPlay>
          <img src="/src/images/image1.png" />
          <img src="/src/images/image2.png" />
          <img src="/src/images/image3.png" />
          <img src="/src/images/image4.png" />
          <img src="/src/images/image5.png" />
          <img src="/src/images/image6.png" />
          <img src="/src/images/image7.png" />
      </Carousel>
    )
}

export default Header