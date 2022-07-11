import type { NextPage } from 'next'
import Sectiontitle from '../components/Sectiontitle';
import Image from 'next/image'
import Headertitle from '../components/Headertitle'

const Home: NextPage = () => {

  return (
    <>

      <div className="slideshow">
        <div style={{
          backgroundImage: 'url("/header.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw'
        }}>

        </div>
      </div>
      <Headertitle />

      <section className="sectionone">

      </section>



    </>
  )
}

export default Home
