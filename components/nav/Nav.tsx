import  Link  from 'next/link'
import Hamburgeropen from './Hamburgeropen'
import Hamburgerclose from './Hamburgerclose'
import React, { useRef,useEffect } from 'react'
import Image from 'next/image'

import { useInView } from 'react-intersection-observer';

const Nav = ()=>{

    const { ref: navElem, inView: navElemVal } = useInView({
        /* Optional options */
        threshold: 0,
      });

    const nav = useRef<HTMLElement>(null)
    const navwrapper = navElemVal ? 'nav-wrapper' : 'navanim'

    const opennav = ( e:React.MouseEvent<HTMLDivElement> )=>{
        const cur = nav.current? nav.current : ''
        const navElem = cur ? cur.getAttribute('data-nav') : ''
        if(navElem === 'false'){
            cur && cur.setAttribute('data-nav', 'true')
        }
    }

    const closenav = ( e:any) => { 
        const cur = nav.current? nav.current : ''
        const navElem = cur ? cur.getAttribute('data-nav') : ''
        if(navElem === 'true'){
            cur && cur.setAttribute('data-nav', 'false')
        }
    }

    useEffect(() => {
        const onclick = (ev: any) => {
            if(ev.target.matches('nav')){
                ev.target.setAttribute('data-nav', 'false')
            }
        }
          
        window.addEventListener('click', onclick);
    
        return () => {
          window.removeEventListener('click', onclick);
        }
      }, []);

        return (
            <div className="navbar" ref={navElem}> 

            <Hamburgeropen opennav = {opennav}  name="Belshaw Cleaning Services" />
    
            <nav data-nav="false" ref={nav} className="nav">
       
                <div className={navwrapper}>

                <Hamburgerclose closenav = {closenav}  />

                <ul>
                    <li className="logo-img-bx">
                        <Link href="/">
                            <a onClick={closenav}>
                                <Image width="7" height="2" layout="responsive" src="/logo.jpg" alt="" />
                            </a>
                        </Link>
                    </li>
                    <li className="active">
                        <Link href="/">
                            <a onClick={closenav}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#">
                            <a onClick={closenav}>About Us</a>
                        </Link>
                        <ul>

                        <li>
                            <Link href="/team">
                                <a onClick={closenav}>
                                Our Team
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/whoweare">
                                <a onClick={closenav}>
                                Who we are
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/ourvision">
                                <a onClick={closenav}>
                                Our Vision
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/ourmission">
                                <a onClick={closenav}>
                                Our Mission
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/ourcorevalues">
                                <a onClick={closenav}>
                                Our Core Values
                                </a>
                            </Link>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/#">
                            <a onClick={closenav}>Products </a>
                        </Link>
                        <ul>
                                <li>
                                    <Link href="/detergents">
                                        <a onClick={closenav}>
                                        Detergents
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/disinfectants">
                                        <a onClick={closenav}>
                                        Disinfectants
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/degreasers">
                                        <a onClick={closenav}>
                                        Degreasers
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                    </li>
                    
                    <li>
                        <Link href="/services">
                            <a onClick={closenav}>Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a onClick={closenav}>Contact</a>
                        </Link>
                    </li>
                    <li className="getquote">
                        <Link href="/contact">
                            <a onClick={closenav}>Get a free quote</a>
                        </Link>
                    </li>

                </ul>
                </div>

            </nav>

            </div>
        )


}








export default Nav