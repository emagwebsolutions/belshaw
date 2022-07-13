const Banner = ({img}: {img: string}) => {

    return (
        <>
        <div className="banner">

        </div>

        <style jsx>
            {`
            .banner{
                background-image: url(${img});
                background-size: cover;
                background-position: center;
            }
            
            `}
        </style>

        </>
    )

}

export default Banner