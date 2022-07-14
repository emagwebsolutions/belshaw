import Sectiontitle from '../components/Sectiontitle';
import Bannertitle from '../components/Bannertitle';
import Banner from '../components/Banner';
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import { postactiontype } from '../redux/features/Post'
import {PortableText} from '@portabletext/react'
import imageUrlBuilder  from '@sanity/image-url';


const Ourmission = ({data}: any) => {

 
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


  const builder = imageUrlBuilder({
    projectId: 'x6mgs9be',
    dataset: 'production'
  })


  useEffect(()=>{

    const obj = Object.values(data.result).map( (v: any) => {
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
          <img src={vl.mainImage} alt="" />
        </div>
      </div>
  ))


  return (
    <>
        <Banner img="/aboutus.jpeg" />

      <Bannertitle 
        mainheading='Our Mission' 
        subheading='Our customers are our top priority' 
      />

      <section className="sectiontwo">
        {laundryservice}
      </section>
    </>
  )
}


export const getServerSideProps = async ()=>{

  const query = encodeURIComponent(`*[_type == "post" && slug.current  == 'our-mission' ]{
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
      data: result
    }
  }

}


export default Ourmission
