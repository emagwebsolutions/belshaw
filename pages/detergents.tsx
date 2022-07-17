
import Bannertitle from '../components/Bannertitle';
import Banner from '../components/Banner';
export { getServerSideProps } from '../context/store'

const Detergents = () => {
  return (
    <>
    <Banner img="/detergent.jpg" />

    <Bannertitle 
      mainheading='Detergents' 
      subheading='For effective cleaning' 
    />

    <div className="iframeContainer">
    <iframe src="https://belshawlimited.com/product-category/detergents/" scrolling="no" className="iframeContent"></iframe>
    </div>
    </>
  )
}

export default Detergents