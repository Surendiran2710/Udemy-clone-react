import back from '../assets/image/sale-image.jpeg'




function Saleimage(){
    return(
        <div className="sale-image">
        <img src={back} alt="sale-image"/>
        <div className="sale-image__s1">
            <h2>Udemey Flash Sale! 24 hours to save!</h2>
            <p>
                Get the top courses for just ₹449. Just one day to save but a lifetime to learn.
            </p>
            <button>View Course</button>
        </div>
    </div>

    )
}
export default Saleimage