import Bannertitle from '../components/Bannertitle';
import Banner from '../components/Banner';

const Disinfectants = () => {
  return (
    <>
    <Banner img="/detergent.jpg" />

    <Bannertitle 
      mainheading='Disinfectants' 
      subheading='Keep a healthy compound' 
    />

    <div className="iframeContainer">
    <iframe src="https://belshawlimited.com/product-category/disinfectants" scrolling="no" className="iframeContent"></iframe>
    </div>
    </>
  )
}

export default Disinfectants