function Navbar() {
    return (



        <div className="navebar">

            <div className="navebar__s1">
                <h1 className="navebar__s1__title">
                    Ûdemy
                </h1>
            </div>

            <div className="navebar__s2">

                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search for anything here. Tech, Business, Arts ..."></input>


            </div>


            <div class="navebar__s3">

                <p>Course</p>


                <div className="My-learning">
                    <p>My Learning</p>
                    <div className="My-learning__popup">
                        <p>You did not purchase anything</p>
                    </div>
                </div>

                <i className="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
                <i className="fa-solid fa-bell" style={{color: "#000000"}}></i>
                <i className="fa-solid fa-user" style={{color: "#000000"}}></i>
            </div>

            <div className="navebar__s4">
                <i className="fa-solid fa-bars"></i>
            </div>

        </div>

    )


}

export default Navbar