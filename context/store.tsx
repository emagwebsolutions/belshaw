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
  const resp = await result.result

  return {
    props: {
      data: resp
    }
  }
}

//Context Controller 
const contextController = ( data: [] ) => {
  const builder = imageUrlBuilder({
    projectId: 'x6mgs9be',
    dataset: 'production'
  })

  const obj = useMemo(() => 
  Object.values(data).map((v: any) => {
      return {
        ...v,
        mainImage: builder.image(v.mainImage),
        cat_title: v.cat_title+''
      }
    })
  ,[data])

  return {
    post: obj
  }
}

//Create context
const Createcontext = createContext<ReturnType<typeof contextController>>({
  post: []
})

type Child = {
  children: React.ReactNode
  data: []
}

export const ConstextProvider = ({children,data}: Child) => {
  return (
    <Createcontext.Provider value={contextController(data)}>
      {children}
    </Createcontext.Provider>
  )
}

export const datacontext = () => useContext(Createcontext)