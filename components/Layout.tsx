import React from "react"
import Nav from "./nav/Nav"
import Footer from "./footer/Footer"
import Meta from "./Meta"

type Children = {
  children: React.ReactNode
}

const Layout = ( { children }: Children ) => {
  return (
          <>
          <Meta title="EMINENCE NEEDLE ART" />
          <div className="main-wrapper">
            <Nav />
            <main>
              { children }
            </main>
            <Footer />
            </div>
  
          </>
      )
}

export default Layout