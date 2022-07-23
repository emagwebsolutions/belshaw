import Link from 'next/link'
import ScrollToTop from "react-scroll-to-top"

const Footer = ()=>{
    return (
        <>
            <footer>
                <div>
                    <div className="social">
                        <a href="https://www.facebook.com/Belshawcleaningservice/">
                        <i className="fa fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/belshawcleaningservices/?igshid=YmMyMTA2M2Y=">
                        <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                <h1>BELSHAW CLEANING SERVICES</h1>

                <div>
                    <i className="fa fa-envelope"></i> info@belshawcleaningservices.com
                </div>

                <div>
                    <i className="fa fa-phone"></i> 030 330 2878 / 055 477 3252
                </div>

                <div>
                    &copy; all rights reserved BELSHAW CLEANING SERVICES 
                </div>
                </div>
                <ScrollToTop smooth className="scrolltotop" />

            <a className="whatsappbtn" href="https://wa.me/233554773252?text=Hello%2C%20I%20want%20to%20make%20enquiry%20on%20your%20cleaning%20service">
                    <i className="fa fa-whatsapp"></i>
                    </a>
            </footer>

        </>


    )
}

export default Footer
