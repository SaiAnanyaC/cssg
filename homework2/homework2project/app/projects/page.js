export default function Projects() {
    return (
      <main>
        <body class = "body-backgroundcolor">
        <div class="flex-container">
            <h1 class="title-spacing">Sai Ananya Channamsetti</h1>
            <div class="flex-navbar">
                <div class="flex-navbar-item">
                    <a href="/" class="navButton">Home</a>
                </div>
                <div class="flex-navbar-item; onPage-NavBarColor">STEM Projects</div>
                <div class="flex-navbar-item">
                    <a href="/extracurrics" class="navButton">Extracurriculars</a>
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
                    This page is (or will be) a collection of my STEM related projects. For now, I have only two projects here (one of which is a website I made :D ), but I hope to add more projects eventually over the next four years.
                </h4>
                <div class="proex">
                    <div class="proex-header">
                        <h3>Webmaster - Telecommunications Website</h3>
                    </div>
                    <div class="proex-box">
                        <div class="proexlink"><img src="https://via.placeholder.com/150"/></div>
                        <div class="proextext">
                            <p>I used to be a part of an organization called Technology Student Association (TSA), which hosts regional, state, and national competitions with STEM related events to compete in that are judged by category. 
                            The event I competed in was called "Webmaster", where participants were given a theme and had to create and submit an original website to be judged.
                            My website is a fictitious medical telecommunications website that I collaboratively created during the COVID-19 Pandemic, and it took approximately 9 months to develop and refine this website. 
                            In those 9 months, I competed in all 3 levels of competition.
                            </p>
                            <h5>This website won 1st Place in the Webmaster category in the Regional Competition and 3rd Place in the Webmaster category in the State Competition.</h5>
                        </div>
                    </div>
                </div>
                <div class="proex">
                    <div class="proex-header">
                        <h3>Biotechnology - Cyanobacteria Research</h3>
                    </div>
                    <div class="proex-box">
                        <div class="proexlink"><img src="https://via.placeholder.com/150"/></div>
                        <div class="proextext">
                            <p>
                                The Biotechnology event is another event that I competed in during the TSA Regional competition (I couldn't attend that state competition due to a schedule conflict). 
                                For this event, I collaboratively researched the issue of cyanobacteria, as well as as solutions and applications of those solutions. 
                                My team and I then compiled our research in a meticulous research paper and slideshow.
                            </p>
                            <h5>This project won 1st Place in the Biotechnology category in the Regional Competition.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
      </main>
    )
  }