import Sectiontitle from '../components/Sectiontitle';
import Bannertitle from '../components/Bannertitle';
import Contactdetails from '../components/Contactdetails';
import Banner from '../components/Banner';
export { getServerSideProps } from '../context/store'
import FreeQuote from '../components/FreeQuote';
import Map from '../components/Map';

const Contact = () => {
  
  
  const contactnumbers = `030 330 2878 / 055 477 3252`
  return (
    <>
      <Banner img="/about.jpg" />

      <Bannertitle 
        mainheading='Contact' 
        subheading='Get In Touch' 
      />

      <section className="sectiontwo">

            <Sectiontitle 
              mainheading='Contact Details' 
              subheading='Get In Touch' 
            />

        <div className="container">

          <div className="col-5">

            <div className="">
              <Contactdetails 
                icons = "fa fa-phone"
                heading = "Contact​"
                details = {contactnumbers}
              />
              <Contactdetails 
                icons = "fa fa-envelope"
                heading = "Email"
                details = "info@belshawcleaningservices.com"
              />

              <Contactdetails 
                icons = "fa fa-map-marker"
                heading = "Tema"
                details = "No 1 Vertical center, hospital road community 11. Tema, Ghana."
              />
              <Contactdetails 
                icons = "fa fa-whatsapp"
                heading = "Whatsapp"
                details = "+233 055 477 3252"
              />
            </div>

          </div>

          <div className="col-3">
            <div className="mob-mt"></div>
              <FreeQuote />
            </div>
          </div>
      </section>



      <Map  
              src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3019951200504!2d-0.021421787528055188!3d5.669402395890491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf80c399b17723%3A0x65b50d4251e34ce2!2sBelshaw%20Limited!5e0!3m2!1sen!2sgh!4v1658335883995!5m2!1sen!2sgh"
              width = ""
              height = ""
              allowfullscreen =  ""
              loading =  "lazy"
              referrerpolicy =  "no-referrer-when-downgrade"
        
        />



    </>
  )
}

export default Contact
