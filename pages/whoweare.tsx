import Bannertitle from '../components/Bannertitle';
import Banner from '../components/Banner';
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import { datacontext } from '../context/store'
export { getServerSideProps } from '../context/store'

const Whoweare = () => {
  const { post } = datacontext()
    //Get Laundry Service
    const laundryservice = Object.values(post).filter((v: any) => {
      return v.slug === 'who-we-are'
    }).map((vl: any,k: any) =>(
      <div key={k} className="about">
        <div>
          <h1>{vl.title}</h1>
          <div>
            <PortableText value={vl.body} />
          </div>
        </div>
        <div>
        <Image width="5" height="5" layout="responsive" src={vl.mainImage+''} alt="" />
        </div>
      </div>
  ))

  return (
    <>
      <Banner img="/aboutus.jpeg" />
      <Bannertitle 
        mainheading='Who we are' 
        subheading='Discover us' 
      />
      <section className="sectiontwo">
        {laundryservice}
      </section>
    </>
  )
}

export default Whoweare
