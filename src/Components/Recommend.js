import one from '../assets/image/C1.jpg'
import two from '../assets/image/C2.jpg'
import three from '../assets/image/C3.jpg'
import four from '../assets/image/C4.jpg'
import five from '../assets/image/C5.jpg'
import six from '../assets/image/C6.jpg'
import seven from '../assets/image/C7.jpg'
import eight from '../assets/image/C8.jpg'




function Recommend() {


    return (

        <div className="recommended">

            <h1 className="recommended__title">Recommended for you</h1>
            <p>Pick the best fit</p>

            <div className="recommended__container">

                <div className="course-card">

                    <img src={one} alt='full stack web developer bootcamp'></img>
                    <h3>The Complete 2024 full Stack Web Developer Bootcamp</h3>
                    <p>Srini Vanamala</p>
                    <p>3.7 ★★★★☆</p>
                    <p>₹2999 <del>4999</del></p>

                </div>

                <div className="course-card">

                    <img src={two} alt='web developement'></img>
                    <h3>The Complete 2024 Web Development Bootcamp</h3>
                    <p>Dr. Angela</p>
                    <p>4.7 ★ ★ ★ ★ ★</p>
                    <p>₹1999 <del>2999</del></p>

                </div>

                <div className="course-card">

                    <img src={three} alt='python'></img>
                    <h3>2024 Python Data Visaulisation Masterclass</h3>
                    <p>col steele</p>
                    <p>3.5 ★★★★☆</p>
                    <p>₹999 <del>1999</del></p>
                </div>

                <div className="course-card">

                    <img src={four} alt='web design'></img>
                    <h3>Ultimate Web Design & Developer Course</h3>
                    <p>Brad Hussey</p>
                    <p>4 ★★★★☆</p>
                    <p>₹499 <del>999</del></p>

                </div>

                <div className="course-card">

                    <img src={five} alt='git github'></img>
                    <h3>The Git & Github Complete Masterclass</h3>
                    <p>Brad Hussey</p>
                    <p>3.5 ★★★★☆</p>
                    <p>₹3099 <del>3999</del></p>

                </div>

                <div className="course-card">

                    <img src={six} alt='Larvel'></img>
                    <h3>Larvel - For Beginner to Advanced using AI and Power BI</h3>
                    <p>Web Solution US</p>
                    <p>4.8 ★★★★★</p>
                    <p>₹1499 <del>2999</del></p>

                </div>

                <div className="course-card">

                    <img src={seven} alt='Machine learning'></img>
                    <h3>Python for Data Science and Machine Learning Bootcamp</h3>
                    <p>Brad Jose</p>
                    <p>3.7 ★★★★☆</p>
                    <p>₹1999 <del>2999</del></p>

                </div>

                <div className="course-card">

                    <img src={eight} alt='digital marketing'></img>
                    <h3>Digital Marketing Bootcamp using AI and Chatgpt</h3>
                    <p>David Hussey</p>
                    <p>4.7 ★★★★★</p>
                    <p>₹1499 <del>1999</del></p>

                </div>

            </div>


        </div>

    )
}

export default Recommend