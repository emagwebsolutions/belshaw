import Bannertitle from '../components/Bannertitle';
import Banner from '../components/Banner';

const Degreasers = () => {
  return (
    <>
    <Banner img="/detergent.jpg" />

    <Bannertitle 
      mainheading='Degreasers' 
      subheading='Keep a healthy compound' 
    />

    <div className="iframeContainer">
    <iframe src="https://belshawlimited.com/product-category/degreasers" scrolling="no" className="iframeContent"></iframe>
    </div>
    </>
  )
}

export default Degreasers