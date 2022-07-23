import React, { createContext,useContext,useMemo } from 'react'
import imageUrlBuilder  from '@sanity/image-url';

//Get Data
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

  if(result.result){
    return {
      props: {
        data: result.result
      }
    }
  }
  else{
    return {
      props: {
        data: [{
          title: "",
          slug: "",
          body: "",
          mainImage : "",
          cat_title : ""
        }]
      }
    }
  }
}

type Dt = {
  data: {}[]
}

//Context Controller 
const contextController = ( res: Dt ) => {
  const builder = imageUrlBuilder({
    projectId: 'x6mgs9be',
    dataset: 'production'
  })

  let resdata: Dt;

  if(res){
    resdata = res
  }
  else{
    resdata = { data: [{
      title: "",
      slug: "",
      body: "",
      mainImage : "",
      cat_title : ""
    }]}
  }

  let rr = {}
  if(Object.values(resdata)[0]){
    rr = Object.values(resdata)[0]
  }
  else{
    rr = Object.values(resdata)
  }

  const obj = useMemo(() => 
  Object.values(rr).map((v: any) => {
      return {
        ...v,
        mainImage: builder.image(v.mainImage),
        cat_title: v.cat_title+''
      }
    })
  ,[res])

  if(obj){
    return {
      post: obj
    }
  }
  else{
    return {
      post: []
    }
  }
}

//Create context
const Createcontext = createContext<ReturnType<typeof contextController>>({
  post: []
})

type Child = {
  children: React.ReactNode
  data: Dt
}

export const ConstextProvider = ({children,data}: Child) => {
  return (
    <Createcontext.Provider value={contextController(data)}>
      {children}
    </Createcontext.Provider>
  )
}

export const datacontext = () => useContext(Createcontext)