
import Bannertitle from '../components/Bannertitle';
import Banner from '../components/Banner';
import { useState,useEffect } from 'react'
import {PortableText} from '@portabletext/react'
import imageUrlBuilder  from '@sanity/image-url';
import Image from 'next/image'

const Services = ({data}: any) => {

  const [ getData,setData ] = useState({})

  // const dispatch = useDispatch()
  // dispatch(postactiontype(data))

  // type State = {
  //   post: {
  //     data: {
  //       result: {}
  //     }
  //   }
  // }
  // const result = useSelector((state: State) => state.post.data.result)





  useEffect(()=>{

    const builder = imageUrlBuilder({
      projectId: 'x6mgs9be',
      dataset: 'production'
    })
  
    const obj = Object.values(data).map( (v: any) => {
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

  },[data])



    //Get Laundry Service
    const laundryservice = Object.values(getData).map((vl: any,k: any) =>(
      <div key={k} className="about">
        <div>
          <h1>{vl.title}</h1>
          <div>
            <PortableText value={vl.body} />
          </div>
        </div>
        <div>
        <Image width="5" height="4" layout="responsive" src={vl.mainImage+''} alt="" />
        </div>
      </div>
  ))


  return (
    <>
        <Banner img="/vacation.jpeg" />

      <Bannertitle 
        mainheading='Our Services' 
        subheading='Discover us' 
      />

      <section className="sectiontwo">
        {laundryservice}
      </section>
    </>
  )
}


export const getServerSideProps = async ()=>{

  const query = encodeURIComponent(`*[_type == "post" && 'Services' in categories[]->title ]{
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


export default Services
