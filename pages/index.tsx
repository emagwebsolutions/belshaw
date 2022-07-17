import type { NextPage } from 'next'
import Sectiontitle from '../components/Sectiontitle';
import Headertitle from '../components/Headertitle'
import { postactiontype } from '../redux/features/Post'
import { useDispatch,useSelector } from 'react-redux';
import imageUrlBuilder  from '@sanity/image-url';
import { useState,useEffect } from 'react'
import {PortableText} from '@portabletext/react'
import Link from 'next/link' 
import Image from 'next/image'


const Home: NextPage = ({ data }: any) => {

  const [ getData,setData ] = useState({})

  const dispatch = useDispatch()
  dispatch(postactiontype(data))

  console.log(data)

  type State = {
    post: {
      data: {
        result: {}
      }
    }
  }

  const result = useSelector((state: State) => state.post.data)

  
  useEffect(()=>{

    const builder = imageUrlBuilder({
      projectId: 'x6mgs9be',
      dataset: 'production'
    })

    const obj = Object.values(result).map( (v: any) => {
      return {
        ...v,
        mainImage: builder.image(v.mainImage),
        cat_title: v.cat_title+''
      }
    })

    if(obj){
      setData(obj)
    }
    else{
      setData({})
    }

  },[result])


  //Get Residention Cleaning
  const residentialInfo = Object.values(getData).filter((v: any) => {
      return v.slug === 'residential-cleaning-excerpt'
    }).map((vl: any,k: any) =>(
      <div key={k}>
      <h1>{vl.title}</h1>
      <div>
        <PortableText value={vl.body} />
      </div>
      </div>
  ))

  //Get Residention Cleaning Services thumbnails
  const residentialCleaning = Object.values(getData).filter((v: any) => {
    return v.cat_title === 'Residential Cleaning  '
  }).map((vl: any,k: any) =>(
    <div key={k}>
      <div className="imageBx">
      <Image width="4" height="3" layout="responsive" src={vl.mainImage+''} alt="" />
      </div>
      <h3>{vl.title}</h3>
    </div>
  ))



    //Get Commercial Cleaning
    const commercialInfo = Object.values(getData).filter((v: any) => {
      return v.slug === 'commercial-cleaning-excerpt'
    }).map((vl: any,k: any) =>(
      <div key={k}>
      <h1>{vl.title}</h1>
      <div>
        <PortableText value={vl.body} />
      </div>
      </div>
  ))

  //Get Commercial Cleaning Services thumbnails
  const commercialCleaning = Object.values(getData).filter((v: any) => {
    return v.cat_title === 'Commercial Cleaning '
  }).map((vl: any,k: any) =>(
    <div key={k}>
      <div className="imageBx">
      <Image width="4" height="3" layout="responsive" src={vl.mainImage+''} alt="" />
      </div>
      <h3>{vl.title}</h3>
    </div>
  ))


    //Get Laundry Service
    const laundryservice = Object.values(getData).filter((v: any) => {
      return v.slug === 'laundry-services'
    }).map((vl: any,k: any) =>(
      <div key={k} className="homepage-laundry">
        <div>
          <h1>{vl.title}</h1>
          <div>
            <PortableText value={vl.body} />
          </div>
        </div>
        <div>
        <Image width="4" height="3" layout="responsive" src={vl.mainImage+''} alt="" />
        </div>
      </div>
  ))

  //Get Our Customes

  const ourcustomers = Object.values(getData).filter((v: any) => {
    return v.cat_title === 'Customers'
  }).map((vl: any,k: any) =>(
    <div key={k}>
      <div className="custbx">
      <div>
      <Image width="4" height="3" layout="responsive" src={vl.mainImage+''} alt="" />
      </div>
      <h5>{vl.title}</h5>
    </div>
    </div>
))

  return (
    <>
      <div className="slideshow">
        <div className="headerimage">

        </div>
      </div>

      <Headertitle />
        <section className="sectiontwo residentialCleaning">
          <div className="container">
            {residentialInfo}
          </div>
          <div className="container">
            {residentialCleaning}
          </div>
          <Link href="/services">
            <a>View All</a>
          </Link>
      </section>

      
      <section className="sectiontwo residentialCleaning">
          <div className="container">
            {commercialInfo}
          </div>
          <div className="container">
            {commercialCleaning}
          </div>
          <Link href="/services">
            <a>View All</a>
          </Link>
          <br />
      </section>


      <section className="sectionone aboutus">
            {laundryservice}
      </section>


      <section className="sectiontwo ourclients">
        <h1>Our Clients</h1>
        <div className="container">
        {ourcustomers}
        </div>
        <br />
      </section>

    </>
  )
}


export const getServerSideProps = async ()=>{

  const query = encodeURIComponent(`*[_type == "post"]{
    "title": title,
    "slug": slug.current,
    body,
    mainImage,
    "cat_title" : categories[]->title
  }`)

  const url = `https://x6mgs9be.api.sanity.io/v1/data/query/production?query=${query}`

  const result = await fetch(url).then( data => data.json())

  return {
    props: {
      data: result.result
    }
  }

}


export default Home
