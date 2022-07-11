import styles from '../styles/Hamburger.module.scss'

type obj = {
    closenav: (e:React.MouseEvent<HTMLDivElement>)=> void
}

const Hamburgerclose = ({closenav}: obj)=>{

    return (
        <div className="hamburgerclose" style={{display: 'none'}}>
            <div className="hamburger-inner">
                <div className="btntimes">
                    <div className="tms" onClick={closenav}>                                     
                    &times;
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Hamburgerclose