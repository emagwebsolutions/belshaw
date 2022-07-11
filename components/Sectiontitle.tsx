type Headings = {
  subheading: string
  mainheading: string
}

const Sectiontitle = ( {subheading,mainheading}: Headings ) => {

  return (
    <div className="sectiontitle">
    <h4>{subheading}</h4>
    <h1>{mainheading}</h1>
    </div>
  )

}

export default Sectiontitle