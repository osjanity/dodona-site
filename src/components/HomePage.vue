
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
              Dodona performs the music of Epirus in Northwestern Greece and Southern Albania as well as nearby regions. The songs are connected to the nature of life itself, each note expressing longing, love, lament, celebration, or nostalgia. This heartfelt and exciting group brings out their love for this specific region through the melodies that are both unique and everlasting. With a repertoire that goes from plaintive, to trance inducing, to driving, Dodona is one of the few bands in the Bay Area specifically focused on the Northwestern Greek and Albanian regions. So whether you love a good line dance with community, or even if you just love to dance with wild abandon, this unique project creates spaces both transcendent and uplifting. 
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
              <a class="link-colors" href="https://www.facebook.com/p/Dodona-61559323565103/">
                <img class="icon-link" width='25px' alt="Link to FZ Facebook Page" src="../assets/fb-icon.png">
              </a>
              <a class="link-colors" href="https://www.youtube.com/playlist?list=PL2LJVnzoi_n3hIyfk5msH0QX74IsoYAmU">
                <img class='icon-link' width='25px'  alt="Link to FZ Youtube Page" src="../assets/yt-icon.png">
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
  color: #F6A45E;
  font-size: 4em;
  margin: 0.1em 0 0;
}
.hero-image {
  width: 60%;
  margin: 0 auto;
}
.icon-link {
  width: 25px;
  margin: 10px;
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
  color: #F6A45E;
  text-align: center;
  font-size:large;
}
.paragraph-font-right {
  color: #F6A45E;
  text-align: right;
  font-size: large;
}
.paragraph-font-left{ 
  color: #F6A45E;
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

