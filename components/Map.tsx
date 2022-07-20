


type Iframe = {
    src: any
    width: any
    height: any
    allowfullscreen: any
    loading: any
    referrerpolicy: any
}

const Map = ( {src,width,height,allowfullscreen,loading,referrerpolicy}: Iframe) => {

    return (
        <>
        <iframe 
            src = {src}
            width = {width}
            height = {height}
            allowFullScreen = {allowfullscreen}
            loading = {loading}
            referrerPolicy = {referrerpolicy}
        ></iframe>
        
        <style>
            {
                `
                iframe{
                    width: 100vw;
                    border: 0;
                    height: 40rem;
                }
                `
            }
     
        </style>
        </>

    )

}



export default Map


