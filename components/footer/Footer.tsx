import Link from 'next/link'
import ScrollToTop from "react-scroll-to-top"

const Footer = ()=>{
    return (
        <>
        <section className='footer-wrapper'>

            <div className="container mob-container">
                <div className="about-box">
                    <h4>About Smart Roofing</h4>
                    <p>
                    We are one of the leading roofing sheet companies with the objective of providing a well-researched modern and aesthetic roofing for Ghanaians. All ergonomical considerations are made before our roofing sheets are manufactured.
                    </p>

                    <Link href="/about">
                        <a>
                            Learn More
                        </a>
                    </Link>
                </div>
        
                <div>
                <h4>Products</h4>

                    <ul>
                        <li>
                            <Link href="/ibrsheets">
                                <a>IBR Sheets</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/selflocksheets">
                                <a>Selflock Sheets</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/standingseams">
                                <a>Standing Seams</a>
                            </Link>
                         </li>
                        <li>
                            <Link href="/eurotiles">
                                <a>Euro Tiles</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shingles">
                                <a>Shingles</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/steptiles">
                                <a>Step Tiles</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/raingutters">
                                <a>Rain Gutters</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/valleys">
                                <a>Valleys</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sidetrims">
                                <a>Side Trims</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/trusses">
                                <a>Trusses</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/eavetrims">
                                <a>Eave Trims</a>
                            </Link>
                        </li>
                    </ul>
                </div>


                <div>
                    <h4>
                    Important Links
                    </h4>

                    <ul>
                        <li>
                            <Link href="/faq">
                                <a>
                                    FAQ
                                </a>
                            </Link>
                        </li>
                        <li>
                        <Link href="/contact">
                                <a>
                                    Contact
                                </a>
                            </Link>
                        </li>
                        <li>
                        <Link href="/testimonials">
                                <a>
                                    Testimonials
                                </a>
                            </Link>
                        </li>
                        <li>
                        <Link href="/whychooseus">
                                <a>
                                    Why Choose Us
                                </a>
                            </Link>
                        </li>
                        <li>
                        <Link href="/contact">
                                <a>
                                    Request for Quote
                                </a>
                            </Link>
                        </li>
                    </ul>

                </div>


                <div>
                    <h4>Let’s Connect!</h4>
                    <p>
                    Connect with us and interact with our elite team. Together, we roof your building with style and give it a definitive touch.
                    </p>

                    <div className="flex gap-2">
                        <a href="https://web.facebook.com/sroofing22">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/smartroofingghana/">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/smart-roofing-systems-66a61b241/">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                </div>

            </div>

            <ScrollToTop smooth className="scrolltotop" />

            <a className="whatsappbtn" href="http://wa.me/233598775968?text=Hello%2C%20I%20want%20to%20make%20enquiries%20about%20your%20roofing%20sheets">
            <i className="fa fa-whatsapp"></i>
            </a>

        </section>
        <footer>
            <div className="container">
                <div className="col-4">
                Copyright © 2022 www.sroofingsystems.com | All rights reserved.
                </div>
                <div className="col-1"></div>
                <div className="col-2">
                Developed by Emagweb Solutions
                </div>
            </div>
          
        </footer>
       
        </>
    )
}

export default Footer
