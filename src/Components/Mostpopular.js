import one from '../assets/image/m1.jpg'
import two from '../assets/image/m2.jpg'
import three from '../assets/image/m3.jpg'
import four from '../assets/image/m4.jpg'
import five from '../assets/image/m5.jpg'
import six from '../assets/image/m6.jpg'
import seven from '../assets/image/m7.jpg'
import eight from '../assets/image/m8.jpg'



function Mostpopular(){


    return(

        <div className="most-popular">

        <h1 className="most-popular__title">Recommended for you</h1>
        <p>Pick the best fit</p>

        <div className="most-popular__container">

            <div className="popular-course-card">

                <img src={one} alt='ethical hacking'></img>
                <h3>Complete Ethical Hacking Bootcamp</h3>
                <p>Andrei</p>
                <p>4.8 ★★★★★</p>
                <p>₹3999 <del>4999</del></p>

            </div>

            <div className="popular-course-card">

                <img src={two} alt='hacking'></img>
                <h3>Learn Ethical Hacking From Scratch 2024</h3>
                <p>Zaid Angela</p>
                <p>4.7 ★★★★★</p>
                <p>₹1999 <del>2999</del></p>

            </div>

            <div className="popular-course-card">

                <img src={three} alt='web design'></img>
                <h3>Creating Responsive Web Design: Complete Course</h3>
                <p>Chris Steele</p>
                <p>3.5 ★★★☆☆</p>
                <p>₹999 <del>1999</del></p>
            </div>

            <div className="popular-course-card">

                <img src={four} alt='ui ux'></img>
                <h3>User Experience (UX): The Ultimate Guide to Usability and UX</h3>
                <p>David Hussey</p>
                <p>4 ★★★★☆</p>
                <p>₹499 <del>999</del></p>

            </div>

            <div className="popular-course-card">

                <img src={five} alt='project management'></img>
                <h3>I.T. Project Management for Beginners: A Step-by-Step Guide</h3>
                <p>Lee Jhon</p>
                <p>4.5 ★★★★☆</p>
                <p>₹3099 <del>3999</del></p>

            </div>

            <div className="popular-course-card">

                <img src={six} alt='trello project managment'></img>
                <h3>Trello Project Management: Complete Course</h3>
                <p>Sri Jaya</p>
                <p>4.8 ★★★★★</p>
                <p>₹1499 <del>2999</del></p>

            </div>


            <div className="popular-course-card">

                <img src={seven} alt='kindle secrets'></img>
                <h3>Kindle Secrets: How I Wrote a Best Selling eBook In 72 hours</h3>
                <p>Brad Jose</p>
                <p>3.7 ★★★★☆</p>
                <p>₹1999 <del>2999</del></p>

            </div>

            <div className="popular-course-card">

                <img src={eight} alt='Project Management Using AI and Chatgpt'></img>
                <h3>Learn Project Management Using AI and Chatgpt</h3>
                <p>David Belly</p>
                <p>4.7 ★★★★★</p>
                <p>₹1499 <del>1999</del></p>

            </div>


        </div>


    </div>
    )
}

export default Mostpopular