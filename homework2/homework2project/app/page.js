import Counter from "@/components/counter";
import Counter2 from "@/components/counter2";

export default function Home() {
  return (
    <main>
      <body class = "body-backgroundcolor">
        <div class="flex-container">
            <h1 class="title-spacing">Sai Ananya Channamsetti</h1>
            <div class="flex-navbar">
                <div class="flex-navbar-item; onPage-NavBarColor">Home</div>
                <div class="flex-navbar-item">
                    <a href="/projects">STEM Projects</a>
                </div>
                <div class="flex-navbar-item">
                    <a href="/extracurrics">Extracurriculars</a>
                </div>
                <div class="flex-navbar-item">
                    <Counter />
                </div>
                <div class="flex-navbar-item">
                    <Counter2 />
                </div>
            </div>
            <div class="flex-body">
                <h4 class="introblurb">
                    Welcome to my Portfolio! 
                    Above is a navigation bar to get to the different pages in my portfolio. 
                    You will see a little blurb like this on each page to guide you on what the page is about. 
                    This page is for your to get to know a little more about me.
                </h4>
                <div class="aboutme">
                    <div class="aboutme-header">
                        <h3>About Me</h3>
                    </div>
                    <div class="aboutme-box">
                        <div class="aboutme-photoitem">
                                <img src="https://via.placeholder.com/150" class="aboutme-photo"/>
                        </div>
                        <div class="aboutme-textitem">
                            <p>Hello! My name is Sai Ananya (two-part first name) and I am a first year student at UNC. 
                                I am intending to major in Computer Science and minor in Biology and possibly Environmental Science. 
                                My career goal is Bioinformatics as I am interested in the interdisciplinary field between Computer Science and Biology, and I want to utilize Computer Science techniques to help monitor, model, and solve biological, medical, and environmental problems. 
                                Outside of STEM, I am also really interested in Performing and Visual Arts and pursue them through lessons and/or as hobbies. 
                            </p>
                            <h4>Contact Me! (In order of most to least activity:)</h4>
                            <ol>
                                <li>School Email: csaiana@unc.edu</li>
                                <li>Personal Email: saiananyac@icloud.com</li>
                                <li>Text/Phone Call: 919-593-2775</li>
                                <li>Instagram: @lilsaibird</li>
                                <li>Gmail: csaiananya@gmail.com</li>
                            </ol>
                        </div>
                    </div>
                </div>
                
                <div class="interestsbox">
                    <div class="interestsbox-items">
                        <h3>Classes</h3>
                        <ul class="intersectsbox-itemsalign">
                            <li class="list-items">LFIT107: Intermediate Jogging</li>
                            <li class="list-items">ENEC201: Environment and Society</li>
                            <li class="list-items">MAT381: Discrete Math</li>
                            <li class="list-items">IDST129: Countering Hate</li>
                            <li class="list-items">IDST129L: Data Literacy Lab</li>
                            <li class="list-items">IDST101: College Thriving</li>
                        </ul>
                    </div>
                    <div class="interestsbox-items">
                        <h3>Clubs/Organizations</h3>
                        <ul class="intersectsbox-itemsalign">
                            <li class="list-items">Computer Science + Social Good</li>
                            <li class="list-items">Pearl Hacks (Intended)</li>
                            <li class="list-items">Society of Women Engineers (Intended)</li>
                        </ul>
                    </div>
                    <div class="interestsbox-items">
                        <h3>Hobbies</h3>
                        <ul class="intersectsbox-itemsalign">
                            <li class="list-items">Singing</li>
                            <li class="list-items">Dancing</li>
                            <li class="list-items">Listening to music</li>
                            <li class="list-items">Drawing</li>
                            <li class="list-items">Crafting</li>
                            <li class="list-items">Spending time outdoors</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </main>
  )
}