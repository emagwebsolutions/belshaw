import React from "react"
import Head from "next/head"


type Title  = {
  title: string
}

const Meta = ( { title }: Title ) => {
  return (
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Garment Construction,
          Dressmaking & Tailoring " />
          <meta name="keywords" content="Garment,construction,
          Dressmaking,Tailoring " />
          <link rel="icon" href="/favicon.ico" />

          <title>{ title }</title>
        </Head>
      )
}

export default Meta