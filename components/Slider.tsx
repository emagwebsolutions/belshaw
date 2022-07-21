
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'

const fadeImages = [
  {
  url: '/header.jpg'
  },
  {
  url: '/header2.jpg'
  },
  {
  url: '/header3.jpg'
  },
];


const Slider = () => {

  return (
    <div className="slide-container">
    <Fade>
      {fadeImages.map((fadeImage, index) => (
        <div className="each-fade" key={index}>
          <div className="image-container">
            <Image width="6" height="3" layout="responsive" alt="" src={fadeImage.url} />
          </div>
        </div>
      ))}
    </Fade>
  </div>
  );
}

export default Slider