<template>
<div class="sections">
  <div class="border-line-1"></div>
  <div class="border-line-2"></div>
  <div id="Projects">
    <ul class="circles" id="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
    </ul>
      <div id="Projects-Anchor" style="position: relative; top: -90px; left: 0"></div>
      <p class="Projects-Text section-header-text">
        Projects
      </p>
      <div class="container projects-grid">
        <div class="row justify-content-center project-row">
            <div class="col-md-6 col-lg-4 mb-5">
                <div @click="updateProjectBodies" v-b-modal.project-1 class="card project-card modal-container" content-class="your-class" >
                      <img class="project-card-image" src = "../assets/code.png">
                    <div class="card-body">
                        <p class="card-text">This Website!</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" size="lg" content-class="project-popup" id="project-1" body-class="p-0" ok-only centered title="This Website!">
                    <div class="container" id = "project-1-body">
                      <div class="project-body">
                        <div>
                        <b-img id="project-1-image" class="fixed_width project-image" src="../assets/code.png"></b-img>
                        </div>
                          <p class="body-text">
                            This website was built and designed on my own using Bootstrap Vue 4.  This was my first foray into frontend development and required learning an entirely new set of tools which included Bootstrap, Vue, JavaScript, HTML, and CSS.  I relied on my elasticity to adapt to new challenges and develop new skills.  While daunting at first, I eventually became comfortable with many of the intricacies around frontend development to make this site!  I found this project to be both challenging and exciting, as I gained exposure to a new side of programming and helped satisfy my curiosity on web development.
                          </p>
                      </div>
                    </div>
                </b-modal>
            </div>

            <div class="col-md-6 col-lg-4 mb-5">
                <div @click="updateProjectBodies" v-b-modal.project-2 class="card project-card modal-container" content-class="your-class">
                      <img class="project-card-image" src = "../assets/IFE_Logo_Car.jpeg">
                    <div class="card-body">
                        <p class="card-text">Illini Formula Electric</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" size="lg" content-class="project-popup" id="project-2" body-class="p-0" ok-only centered title="Illini Formila Electric">
                    <div class="container" id = "project-2-body">
                      <div class="project-body">
                        <div>
                        <b-img id="project-2-image" class="fixed_width project-image" src="../assets/IFE_Car.png"></b-img>
                        </div>
                        <p class="body-text">
                          Illini Formula Electric (IFE) is a student organization that designs and builds an electric Formula 1 style racecar.  Starting sophomore year, I led the data acquisition and qualitative analysis team (DAQA).  Our goal was to collect, process, and present various vehicle performance data.  This was done using Raspberry Pi’s and STM32’s along with various sensors such as accelerometers and strain gauges.  An important part of this role was communicating with the other subsystems to understand what data they required and how to present/visualize it in a comprehensible way.  This aided the rest of the organization in making improvements and optimizations to the car.                          </p>
                      </div>
                    </div>
                </b-modal>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
                <div @click="updateProjectBodies" v-b-modal.project-3 class="card project-card modal-container" content-class="your-class">
                      <img class="project-card-image" src = "../assets/Space_Invaders_Character.png">
                    <div class="card-body">
                        <p class="card-text">FPGA Space Invaders</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" size="lg" content-class="project-popup" id="project-3" body-class="p-0" ok-only centered title="FPGA Space Invaders">
                    <div class="container" id = "project-3-body">
                      <div class="project-body">
                        <div>
                        <b-img id="project-3-image" class="fixed_width project-image" src="../assets/Space_Invaders_Character.png"></b-img>
                        </div>
                        <p class="body-text">
                          I implemented the classic arcade game Space Invaders on the DE10-Lite FPGA with System Verilog.  The two I/O devices used were a VGA display and a USB keyboard to see and control the game.  This task required creating all aspects of the game from the sprites and movement to the collision detection, enemies’ algorithmic patterns, and scoring system.  I personally found this project to be exciting as it helped me greatly understand and improve my FPGA development skills.                         </p>
                      </div>
                    </div>
                </b-modal>
            </div>
      
       
            <div class="col-md-6 col-lg-4 mb-5">
                <div @click="updateProjectBodies" v-b-modal.project-4 class="card project-card modal-container" content-class="your-class">
                      <img class="project-card-image" src = "../assets/Clicky-Crates-Gameplay-Image.png">
                    <div class="card-body">
                        <p class="card-text">Game Development</p>
                    </div>
                </div>
                <b-modal class="modal fade" content-class="project-popup" size="lg" id="project-4" body-class="p-0" ok-only centered title="Game Development">
                    <div class="container" id = "project-4-body">
                      <div class="project-body">
                        <div>
                        <b-img id="project-4-image" class="fixed_width project-image" src="../assets/Clicky-Crates-Gameplay-Image.png"></b-img>
                        </div>
                        <p class="body-text">
                          Using the Unity engine and C#, I created several unique video games to learn and apply different aspects of game development.  Through this series of projects, I learned how to manage many moving parts to ensure consistent performances and smooth interactions, as well as expanded my critical thinking. This was a great experience in learning a new complicated system, adapting to how it works, and understanding how to effectively utilize it. I’ve always been an avid fan of video games and upon playing the game Hollow Knight and learning that only 3 people created it using Unity, I was inspired to try it out for myself.                        </p>
                      </div>
                    </div>
                </b-modal>
            </div>

            <div class="col-md-6 col-lg-4 mb-5">
                <div @click="updateProjectBodies" v-b-modal.project-5 class="card project-card modal-container" content-class="your-class">
                      <img class="project-card-image" src = "../assets/Snake.png">
                    <div class="card-body">
                        <p class="card-text">AI Snake</p>
                    </div>
                </div>
                <b-modal class="modal fade" content-class="project-popup" size="lg" id="project-5" body-class="p-0" ok-only centered title="AI Snake">
                    <div class="container" id = "project-5-body">
                      <div class="project-body">
                        <div>
                        <b-img id="project-5-image" class="fixed_width project-image" src="../assets/Snake.png"></b-img>
                        </div>
                        <p class="body-text">
                          Using Q reinforcement learning, I trained an AI to play the game Snake using Python with the Pygame and NumPy libraries.  It did not beat the game with a perfect score, but with the right hyperparameters, it performed much better than I could, achieving a high score of 73 across tens of thousands of tests.  This was a fun project in artificial intelligence, allowing me to mix new skills with my passion for video games.                        </p>
                      </div>
                    </div>
                </b-modal>
            </div>
        </div>
      </div>
  </div>

<!-- Experience Section -->
  <div class="border-line-2"></div>
  <div id="Experience">
      <div id="Experience-Anchor" style="position: relative; top: -90px; left: 0"></div>
      <p class="Experience-Text section-header-text">
        Experience
      </p>
      <div class="container projects-grid">
        <div class="row justify-content-center project-row">
            <div class="col-md-6 col-lg-4 mb-5">
                <div @click="updateProjectBodies" v-b-modal.Experience-1 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/Aurora_Innovation_SquareLogo.png" class="project-card-image">
                    <div class="card-body">
                        <p class="card-text">Aurora Innovation</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" size="lg" content-class="project-popup" id="Experience-1" body-class="p-0" ok-only centered title="Aurora Innovation - Summer 2021">
                    <div class="container" id = "Experience1-body">
                      <div class="project-body">
                        <div>
                        <b-img id="Experience-1-image" class="fixed_width project-image" src="../assets/Aurora_Innovation_SquareLogo.png"></b-img>
                        </div>
                        <p class="body-text">
                          My core project was implementing a search feature that provides the ability to filter data logs for a given geospatial area.  This area could be provided with raw coordinates in WKT format or drawn on a map.  There was also an extra feature allowing the user to obtain the start and end points of the logs that entered the geofence.  This was a full stack project, from the PostgreSQL database queries utilizing PostGIS, all the way to the React frontend interface.  In the middle of the stack there is a graphQL API that can be used for implementing the searching features in other high-level tools. Collaborating  with stakeholders, this project saved significant time for other teams at Aurora, greatly reducing time spent searching for logs that cover a specific area such as a certain roundabout or intersection.                            </p>
                      </div>
                    </div>
                </b-modal>
            </div>

            <div class="col-md-6 col-lg-4 mb-5">
                <div @click="updateProjectBodies" v-b-modal.Experience-2 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/Nokia_Logo.jpg" class="project-card-image">
                    <div class="card-body">
                        <p class="card-text">Nokia</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" size="lg" content-class="project-popup" id="Experience-2" body-class="p-0" ok-only centered title="Nokia - Summers 2019/2020">
                    <div class="container" id = "Experience-2-body">
                      <div class="project-body">
                        <div>
                        <b-img id="Experience-2-image" class="fixed_width project-image" src="../assets/Nokia_Logo.jpg"></b-img>
                        </div>
                        <p class="body-text">
                          2020: I managed several projects which included automating the calibration of high frequency testing chambers and small cell units.  Additionally, I wrote multiple programs to help convert and visualize data coming from an overseas manufacturing center.  I also learned and applied an internal scripting language to automate 5G small cell factory testing. <br><br> 2019: I was tasked with a variety of software and hardware projects such as automating calibration for RF lab test benches and creating a program to perform data analysis on small cell transceivers. This was conducted to verify they would meet Nokia's standards.  I also rigorously reviewed RX testing procedures to optimize and improve testing efficiency.  Lastly, I tested power amplifiers on millimeter wave boards to ensure they are working as expected.                        </p>
                      </div>
                    </div>
                </b-modal>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
                <div @click="updateProjectBodies" v-b-modal.Experience-3 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/UIUC_Grainger.png" class="project-card-image">
                    <div class="card-body">
                        <p class="card-text">CARE Tutoring</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" size="lg" content-class="project-popup" id="Experience-3" body-class="p-0" ok-only centered title="CARE Tutoring - January 2019 - Present">
                    <div class="container" id = "Experience-3-body">
                      <div class="project-body">
                        <div>
                        <b-img id="Experience-3-image" class="fixed_width project-image" src="../assets/UIUC_Grainger.png"></b-img>
                        </div>
                        <p class="body-text">
                          I tutor students at the Center for Academic Resources in Engineering (CARE).  At CARE, I assist and advise students with homework and test preparation for math, physics, computer science, computer engineering, and electrical engineering courses.  I also run exam review sessions for calculus, thermal physics, and quantum physics.                        </p>
                      </div>
                    </div>
                </b-modal>
            </div>
        </div>
      </div>
  </div>

  <!-- Education Section -->
  <div class="border-line-2"></div>
  <div id="Education">
      <div id="Education-Anchor" style="position: relative; top: -90px; left: 0"></div>
      <p class="Education-Text section-header-text">
        Education
      </p>
      <div class="container projects-grid">
        <div class="row justify-content-center project-row">
            <div class="col-md-6 col-lg-4 mb-5">
                <div @click="updateProjectBodies" v-b-modal.Education-1 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/block-i-orange-background.png" class="project-card-image">
                    <div class="card-body">
                        <p class="card-text">University of Illinois <br> at Urbana-Champaign</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" size="lg" content-class="project-popup" id="Education-1" body-class="p-0" ok-only centered title="University of Illinois at Urbana-Champaign">
                    <div class="container" id = "Education1-body">
                      <div class="project-body">
                        <div>
                        <b-img id="Education-1-image" class="fixed_width project-image" src="../assets/block-i-orange-background.png"></b-img>
                        </div>
                        <p class="body-text">Throughout my time at UIUC, with the courses taken and additional school activities, I have learned and developed a robust set of problem solving and critical thinking skills.  I have also developed a strong theoretical and technical foundation through the classes listed below. <br><br>
                          ECE 391 - Computer Systems Engineering: This was a low-level programming course in X86 and C focusing on software that handles communication between devices, applications, and hardware. This course included creating a driver for a custom controller as well as a team project that involved the creation of an operating system from scratch.  <br><br>
                          ECE 385 - Digital Systems Laboratory: Focusing on FPGA development, SystemVerilog, and TTL logic, this course taught various components related to the hardware that computers use including storage, timing, and input/output.  There was also a focus on design tradeoffs between different methods.  There were many projects completed throughout the class including microprocessor design and creating a simple LC3 computer. <br><br>
                          ECE 408 - Applied Parallel Programming: This course taught how to use CUDA to speed up parallel tasks such as matrix multiplication and convolution operations.  The final project was using the knowledge learned to speed up a convolutional neural net by applying several parallel programming algorithms. <br><br>
                          ECE 448 - Artificial Intelligence: This course focused on many topics in the artificial intelligence field including computer vision, natural language processing, robotics, and motion planning.  It also covered related problem-solving techniques, research in the field, and societal impacts.  <br><br>
                          CS 225  - Data Structures: Data Structures: A Key course in my curriculum teaching a wide array of data structures and their tradeoffs.  Additionally, it covered algorithms around these structures such as traversal and search algorithms.                       
                        </p>
                      </div>
                    </div>
                </b-modal>
            </div>

            <div class="col-md-6 col-lg-4 mb-5">
                <div @click="updateProjectBodies" v-b-modal.Education-2 class="card project-card modal-container" content-class="your-class">
                      <img src = "../assets/KTH_Logo.png" class="project-card-image">
                    <div class="card-body">
                        <p class="card-text">KTH University<br> Stockholm, Sweden</p>
                    </div>
                </div>
                <b-modal class="modal fade project-modal" size="lg" content-class="project-popup" id="Education-2" body-class="p-0" ok-only centered title="KTH University">
                    <div class="container" id = "Education-2-body">
                      <div class="project-body">
                        <div>
                        <b-img id="Education-2-image" class="fixed_width project-image" src="../assets/KTH_Logo.png"></b-img>
                        </div>
                        <p class="body-text">	I spent the Spring 2020 semester studying abroad at KTH Royal Institute of Technology in Stockholm, Sweden taking computer engineering and computer science courses along with a Swedish heritage course.  Throughout my time abroad I gained an in-depth understanding of cultural variations and different perspectives, meeting many students from countries around the world.  I learned how to effectively communicate with others, handle ambiguity, and adapt to new environments.  <br><br>
                        DD2352 - Algorithms and Complexity: This course covered many topics related to computability, complexity, and the construction of algorithms.  Further diving into the intricacies of software, I learned about dynamic programming and different types of algorithms, as well as how to apply these topics in the real world.  <br><br>
                        DD2421 - Machine Learning: A course that covered many different machine learning methods including decision trees, Bayesian learning, support vector machines, and many more.  It also introduced related topics in statistics, information theory, and probability theory, along with relevant algorithms, principles, advantages, disadvantages, and limitations for different applications.		<br><br>		
                        AK1213 - Swedish Society, Culture, and Industry in Historical Perspective: Studied many aspects of Swedish culture including history, the political system, and industry.  This Included excursions to several related areas like the Swedish Royal Museum of Natural History.  
                        </p>
                      </div>
                    </div>
                </b-modal>
            </div>
        </div>
      </div>
  </div>
  <!-- Recipes Section -->
  <!-- Contact Section -->
  <div class="border-line-2"></div>
  <div id="Contact">
      <div id="Contact-Anchor" style="position: relative; top: -90px; left: 0"></div>
      <p class="Contact-Text section-header-text">
        Contact
      </p>
      <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
      <div class="container projects-grid container-grid">
        <div class="row justify-content-center project-row">
          <div class="col-md-6 col-lg-3 mb-5" align="center">
            <h1 class="contact-info-text">justinbifeld@gmail.com</h1>
          </div>
          <div class="col-md-6 col-lg-3 mb-5" align="center">
            <h1 class="contact-info-text">847-915-9958</h1>
          </div>
          <div class="col-md-6 col-lg-3 mb-5" align="center">
            <p><a href="https://github.com/JustinBifeld"><i class="fab fa-github fa-3x"></i></a></p>
          </div>
          <div class="col-md-6 col-lg-3 mb-5" align="center">
            <a href="https://www.linkedin.com/in/justinbifeld/"><i class="fab fa-linkedin fa-3x"></i></a>
          </div>
        </div>
      </div>
      
  </div>
</div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js" integrity="sha512-cdV6j5t5o24hkSciVrb8Ki6FveC2SgwGfLE31+ZQRHAeSRxYhAQskLkq3dLm8ZcWe1N3vBOEYmmbhzf7NTtFFQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/CSSRulePlugin.min.js" integrity="sha512-0bzaetZStCnsUgbCtGVxftzF/L32PNOnrMlYLXwBOKl8cUjTSSDfJVyyJsNwGoI0iE0WUqni2eEfO35kJjFj5g==" crossorigin="anonymous"></script>




<script>
import gsap from "gsap";
import {CSSRulePlugin, CSSPlugin} from "gsap/all";
export default {
  name: 'Header',
  props: {
    msg: String
  },
  methods: {
    centerName() {
      // Centering name in JS - called when window size changes 
      // easier way to do it with animation constraints (width = text width)
      let name = document.getElementById("About-Name")
      let about = document.getElementById("About")
      name.style.left = (about.offsetWidth / 2) - (name.offsetWidth / 2) + 'px'
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async updateProjectBodies() {
      await this.sleep(1)
      var projectBodyElements = document.getElementsByClassName('project-body')
      for (var projectBodyElement of projectBodyElements) {
        if (window.innerWidth < 992) {
          projectBodyElement.classList.add("project-body-mobile")
        } else {
          projectBodyElement.classList.remove("project-body-mobile")
        }
      }
    },
    circleAnimateUpdate() {
      let projectsElement = document.getElementById("circles")
      console.log(projectsElement.offsetHeight)
      // document.documentElement.style.setProperty('--circles-height', -(projectsElement.offsetHeight) + 'px');
      projectsElement.style.setProperty('--circles-height', -(projectsElement.offsetHeight) + 'px');
      //console.log(projectsElement.scrollHeight)
    },
    resizeUpdate() {
      this.centerName()
      this.updateProjectBodies()
      this.circleAnimateUpdate()
    }
  },
  created() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js")
    recaptchaScript.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/CSSRulePlugin.min.js")
    document.head.appendChild(recaptchaScript)
  },
  mounted() {
    gsap.registerPlugin(CSSRulePlugin)
    gsap.registerPlugin(CSSPlugin)
    const tl = gsap.timeline()
    tl.to('#About-Name', { duration: 2, delay: 2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
    // Centering name in JS - easier way to do it with animation constraints (width = text width)
    let name = document.getElementById("About-Name")
    let about = document.getElementById("About")
    name.style.left = (about.offsetWidth / 2) - (name.offsetWidth / 2) + 'px'
    window.onresize = this.resizeUpdate  //Re center when window size changes
    this.circleAnimateUpdate()
  }
}
</script>

<style scoped>
:root {
  --circles-height: 0;
}

#Projects{
  width: 100%;
  height: auto;
  background: rgba(56, 50, 77, 0);

}
.section-header-text{
  color: white;
  font-size: 30px;
  padding-top: 20px;
  margin-bottom: 0;
}
.contact-info-text{
  color: white;
  font-size: 20px;
}
.projects-grid{
  background: white;
}
.project-card{
    background: black;
    color: white;
    border-width: 3px;
    border-radius: 20px;
    padding: 10px;
}
.project-card:hover{
    font-weight: bold;
    border-width: 3px;
    border-color: white;
}
.project-image-button{
    border: black;
}
.projects-grid{
  padding: 20px;
  padding-top: 0;
  padding-bottom: 0;
  background: rgba(30, 24, 49, 0);
}
.container-grid{
  
}
.card-text{
  font-size: 19px;
}
.card-body{
  padding-bottom: 0;
}
.project-row{
  margin: 20px
}
.project-image{
  margin-bottom: 10px;
  margin-left: 25%;
  width: 50%;
}
.project-card-image{
  max-height: 297px;
  /* object-fit: cover; */
  border-radius: 20px; 
}
#project-card-image2{
  height: 250px;
}
#body-text{
  font-size: 20px;
}
#Experience{
  width: 100%;
  height: auto;
  background: rgba(202, 124, 60, 0);
}
#Education{
  width: 100%;
  height: auto;
  background: rgba(77, 9, 80, 0);
}
#Contact{
  width: 100%;
  height: auto;
  background: rgba(26, 6, 100, 0);
}
.border-line-1{
  top: -200px;
  width: 100%;
  height: 200px;
  position: absolute;
  background: linear-gradient(180deg, rgba(64, 62, 75,0) 0%, rgba(56, 50, 77, 1) 100%);
}
.border-line-2{
  height: 5px;
  width: 90%;
  margin-left: 5%;
  background: rgb(0, 0, 0);
}
.sections{
  background: rgb(56, 50, 77);
}

#project-modal{
  background: black !important;
}
/deep/ .modal-body { 
  text-align: center;
}
/deep/ .project-popup {
  background: rgb(9, 7, 41);
  color: white;
  
}
/deep/ .modal-header {
  border-color: rgb(39, 98, 102);
  margin-bottom: 10px;
}
/deep/ .modal-footer {
  margin-top: 5%;
  border-color: rgb(39, 98, 102);
}
.project-body {
  margin-left: 10%;
  margin-right: 10%;
  text-align: left;
  font-size: 20px;
  font-family: ;
}

.project-body-mobile {
  margin-left: 23px !important;
  margin-right: 23px !important;
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: circle-animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes circle-animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY( var(--circles-height) ) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}

</style>
