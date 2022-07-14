import Link from 'next/link'
import ScrollToTop from "react-scroll-to-top"

const Footer = ()=>{
    return (
        <>
            <footer>
                <div>
                <h1>BELSHAW CLEANING SERVICES</h1>

                <div>
                    <i className="fa fa-envelope"></i> info@belshawcleaningservices.com
                </div>

                <div>
                    <i className="fa fa-phone"></i> +233 59 605 6615
                </div>

                <div>
                    &copy; all rights reserved BELSHAW CLEANING SERVICES 
                </div>
                </div>
                <ScrollToTop smooth className="scrolltotop" />

                    <a className="whatsappbtn" href="http://wa.me/233596056615?text=Hello%20I%20want%20to%20make%20enquiries%20about%20your%20cleaning%20service">
                    <i className="fa fa-whatsapp"></i>
                    </a>
            </footer>

        </>


    )
}

export default Footer
