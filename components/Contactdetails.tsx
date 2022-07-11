type Headings = {
  icons: string
  heading: string
  details: string
}

const Contactdetails = ( {icons,heading,details}: Headings ) => {

  return (
    <div className="contactdetails">
    <i className={icons}></i>
    <div>
      <h4>{heading}</h4>
      <div>
        {details}
      </div>
    </div>
    </div>
  )

}

export default Contactdetails