import "./Landing.css"
import zoo from "./imagesland/zoo.jpg"
import about from "./imagesland/about.png"
import gallery1 from "./imagesland/gallery-1.jpg"
import gallery2 from "./imagesland/gallery-2.jpg"
import gallery3 from "./imagesland/gallery-3.jpg"
import gallery4 from "./imagesland/gallery-4.jpg"
import animal1 from "./imagesland/animal_1.jpg"
import animal2 from "./imagesland/animals_2.jpg"
import animal3 from "./imagesland/animals_3.jpg"
import animal4 from "./imagesland/animals_4.jpg"
import banner1 from "./imagesland/banner_1.png"
import pricing1 from "./imagesland/pricing1.png"
import pricing2 from "./imagesland/pricing2.png"
let Landing=()=>{
return(
    <div>
     <header class="header">

        <a href="#" class="logo">zoo</a>

        <nav class="navbar">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#gallery">gallery</a>
            <a href="#animal">animal</a>
            <a href="#pricing">pricing</a>
            <a href="#contact">contact</a>
        </nav>

       

   

    </header>




    {/* // <!-- home --> */}

    <section class="home" id="home">

        <div class="content">
            <h3>enjoy the wonderful <br />
            adventure of the <br /> animals</h3>
            <a href="#" class="btn">meet the zoo</a>
        </div>

        <img src={zoo} alt="" class="wave" />

    </section>

    {/* <!-- end -->

    <!-- about --> */}

    <section class="about" id="about">

        <h2 class="deco-title">About us</h2>

        <div class="box-container">

            <div class="image">
                <img src={about} alt="" />
            </div>

            <div class="content">
                <h3 class="title">you can find all the most popular species</h3>
                <p>Once you can find visit Rajasthan Zoo. you feel the like house can you see 
                    here different spices of anikmals.
                </p>
                
                <div class="icons-container">
                    <div class="icons">
                        <i class="fas fa-graduation-cap"></i>
                        <h3>we educate</h3>
                    </div>
                    <div class="icons">
                        <i class="fas fa-bullhorn"></i>
                        <h3>we play</h3>
                    </div>
                    <div class="icons">
                        <i class="fas fa-book-open"></i>
                        <h3>getting to know</h3>
                    </div>
                </div>
            </div>

        </div>

    </section>


    {/* <!-- end -->

    <!-- gallery --> */}

    <section class="gallery" id="gallery">

        <h2 class="heading">gallery</h2>

        <div class="swiper gallery-slider">

            <div class="swiper-wrapper">

                <div class="swiper-slide slide">
                    <div class="image">
                        <img src={gallery1} alt="" />
                    </div>
                </div>

                <div class="swiper-slide slide">
                    <div class="image">
                        <img src={gallery2} alt="" />
                    </div>
                </div>

                <div class="swiper-slide slide">
                    <div class="image">
                        <img src={gallery3} alt="" />
                    </div>
                </div>

                <div class="swiper-slide slide">
                    <div class="image">
                        <img src={gallery4} alt="" />
                    </div>
                </div>

            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>

        </div>

    </section>

    {/* <!-- end -->

    <!-- animals --> */}

    <section class="animal" id="animal">

        <h2 class="heading">animals</h2>

        <div class="box-container">

            <div class="box">
                <img src={animal1} alt="" />
                <div class="content">
                    <h3>cameleon</h3>
                    <a href="#" class="btn">see datails</a>
                </div>
            </div>

            <div class="box">
                <img src={animal2} alt="" />
                <div class="content">
                    <h3>zebra</h3>
                    <a href="#" class="btn">see datails</a>
                </div>
            </div>

            <div class="box">
                <img src={animal3} alt="" />
                <div class="content">
                    <h3>giraffe</h3>
                    <a href="#" class="btn">see datails</a>
                </div>
            </div>

            <div class="box">
                <img src={animal4} alt="" />
                <div class="content">
                    <h3>monkey</h3>
                    <a href="#" class="btn">see datails</a>
                </div>
            </div>

        </div>

    </section>

    {/* <!-- end -->

    <!-- banner --> */}

    <section class="banner">

        <div class="row">
            
            <div class="content">
                <h3>stay with pets</h3>
            <p> wisit the Rajasthan Zoo. you can feel like home once you visit cannot forget</p> 
            </div>

            <div class="image">
                <img src={banner1} alt="" />
            </div>
            
        </div>

    </section>

    {/* <!-- end -->

    <!-- pricing --> */}

    <section class="pricing" id="pricing">

        <h2 class="heading">pricing</h2>

        <div class="box-container">

            <div class="box">
                <img src={pricing1} alt="" />
                <h3>individuals</h3>
                <h4 class="price">$ 10</h4>
                <p>the entrance is from 8:00 to 14:00</p>
            </div>

            <div class="box">
                <img src={pricing2} alt="" />
                <h3>school</h3>
                <h4 class="price">$ 20</h4>
                <p>the entrance is from 8:00 to 14:00</p>
            </div>

            <div class="box">
                <img src={pricing1} alt="" />
                <h3>family</h3>
                <h4 class="price">$ 30</h4>
                <p>the entrance is from 8:00 to 14:00</p>
            </div>

        </div>

    </section>

    {/* <!-- end -->

    <!-- contact --> */}

    <section class="contact" id="contact" >

        <h2 class="heading">contact</h2>

        <form action="">

            <div class="inputBox">
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
            </div>

            <div class="inputBox">
                <input type="number" placeholder="number" />
                <input type="text" placeholder="subject" />
            </div>

            <textarea name="" id="" cols="30" rows="10" placeholder="meassage"></textarea>

            <a href="#" class="btn">send message</a>

        </form>

    </section>
{/* 
    <!-- end -->

    <!-- footer --> */}

    <section class="footer">

        <div class="box-container">

            <div class="box">
                <h3><i class="fas fa-paw"></i> zoo</h3>
                <p>Thank You for Wisiting Rajasthan Zoo.</p>
                <p class="links"><i class="fas fa-clock"></i>monday - friday</p>
                <p class="days">7:00AM - 11:00PM</p>
            </div>

            <div class="box">
                <h3>Contact Info</h3>
                <a href="#" class="links"><i class="fas fa-phone"></i> 125-090-3322</a>
                <a href="#" class="links"><i class="fas fa-phone"></i> 125-080-9966</a>
                <a href="#" class="links"><i class="fas fa-envelope"></i>zoo@gmail.com</a>
                <a href="#" class="links"><i class="fas fa-map-marker-alt"></i>Rajasthan,India</a>
            </div>

            <div class="box">
                <h3>quick links</h3>
                <a href="#" class="links"> <i class="fas fa-arrow-right"></i>home</a>
                <a href="#" class="links"> <i class="fas fa-arrow-right"></i>about</a>
                <a href="#" class="links"> <i class="fas fa-arrow-right"></i>gallery</a>
                <a href="#" class="links"> <i class="fas fa-arrow-right"></i>animal</a>
                <a href="#" class="links"> <i class="fas fa-arrow-right"></i>pricing</a>
            </div>

            <div class="box">
                <h3>newsletter</h3>
                <p>subscribe for latest updates</p>
                <input type="email" placeholder="Your Email" class="email" />
                <a href="#" class="btn">subscribe</a>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>

        </div>

        

    </section>
    </div>
)
    }
    export default Landing;