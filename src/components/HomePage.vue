
<template>
  <div>

      <!-- Header -->
      <header class="header">
        <center>
          <br><br><br>
          <img class="hero-image" alt="Graphic by Jenette Sellin" src="../assets/dodona.png">
          <h1 class="dodona-title">Dodona</h1>
        </center>
      </header>

      <!-- Main text and map -->
      <div class="container-flavor">
        <h1 class="header-font-left"> Music from Greece and Albania </h1>
        <p class="paragraph-font-left">
              Dodona performs the music of Epirus in Northwestern Greece and Southern Albania as well as nearby regions. The songs are connected to the nature of life itself, each note expressing longing, love, lament, celebration, or nostalgia. This heartfelt and exciting group brings out their love for this specific region through the melodies that are both unique and everlasting. With a repertoire that goes from plaintive, to trance inducing, to driving, Dodona is the only band in the Bay Area specifically focused on the Northwestern Greek and Albanian regions. So whether you love a good line dance with community, or even if you just love to dance with wild abandon, this unique project creates spaces both transcendent and uplifting. 
        </p>
        <p class="paragraph-font-left">
              Dodona’s members are Calvin Lai on clarinet, Genevieve Krause on vocals, Kent Kessinger on guitar, Jenette Sellin on accordion, Gregory Masaki Jenkins on vocals and clarinet, and Sean Tergis on percussion.
        </p>
        <!-- Map -->
        <!-- <center>
          <img width='75%' alt="Graphic by Jenette Sellin" src="../assets/map.png">
        </center> -->
      </div>

      <!-- Youtube Player -->
        <div class="youtube-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL2LJVnzoi_n3hIyfk5msH0QX74IsoYAmU&autohide=1&showinfo=0&controls=1&playlist=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> 

      <!-- Contact-->
       <div class="booking-container">
      <br>
        <h1 class="header-font-left" > Contact </h1>
        <p class="paragraph-font-left">
            For booking, inquiries, and anything else, please contact
            Calvin Lai at calvinlaiart@gmail.com.
        </p>
      </div>

        <!-- FB and Youtube icon links -->
        <Container>
          <div class="icon-link-container">
            <a href="https://www.facebook.com/p/Dodona-61559323565103/" aria-label="Dodona on Facebook">
              <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/playlist?list=PL2LJVnzoi_n3hIyfk5msH0QX74IsoYAmU" aria-label="Dodona on YouTube">
              <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </Container>

      <br><br><br>
    
  </div>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.meta-container{ 
    justify-content: center;
    width: 100%;
    max-width: 800px;
    background-color: #181F2A;
    display: flex;
    flex-wrap: wrap;
}
.dodona-title {
  color: #C37F46;
  font-size: 4em;
  margin: 0.1em 0 0;
}
.hero-image {
  width: 60%;
  margin: 0 auto;
}
.social-icon {
  width: 25px;
  height: 25px;
  margin: 10px;
  fill: #FFCD86;
  display: block;
  transition: fill 0.25s ease;
}
.social-icon:hover {
  fill: #F6A45E;
}
.header {
  background-color: #181F2A;
  padding-top: 15px;
  padding-bottom: 10px;
}
.header-font-center {
  color: #FFCD86;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 10px;
}
.header-font-right {
    color: #FFCD86;
  text-align: right;
}
.header-font-left{ 
  color: #FFCD86;
  text-align: left;
}
.paragraph-font-center {
  color: #C37F46;
  text-align: center;
  font-size:large;
}
.paragraph-font-right {
  color: #C37F46;
  text-align: right;
  font-size: large;
}
.paragraph-font-left{ 
  color: #C37F46;
  text-align: left;
  font-size: large;
}
.container-flavor {
  /* padding: 55px 55px 5% 50px; */
  padding: 10px 100px;
  background-color: #181F2A;
}
.indented-list {
  margin-left: 50px;
  background-color: #181F2A;
  line-height: 2;
}
.youtube-container {
  padding: 20px 5% 20px;
  background-color: #181F2A;
}
.booking-container {
  padding: 10px 100px;
  background-color: #181F2A;
}
.link-colors {
  color: #FFCD86;
  display: inline;
  width: 100%;
}
.icon-link-container {
  width: 45px;
  justify-content: center;
  display: inline-flex;
  align-items: center;
}
img {
  height: auto;
  display: block;
}
</style>

