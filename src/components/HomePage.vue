<template>
  <center>
  <div class="meta-container">


      <!-- Header -->
      <header class="header">
        <center>
          <br><br><br>
          <img width='50%' alt="Graphic by Jenette Sellin" src="../assets/dodona.png">
        </center>
      </header>
    

      <!-- Main text -->
      <div class="container-flavor">
        <h1 class="header-font-left"> Music from Epirus and Albania </h1>
        <p class="paragraph-font-left">
              Dodona performs the music that crosses the border between Epirus in Greece and Southern Albania. Each note in every song contains longing, romance, nostalgia, and celebration. This heartfelt and exciting group brings out their love for this specific region through the melodies that are both unique and everlasting. With a repertoire that goes from plaintive, to trance inducing, to driving, Dodona is one of the few bands in the Bay Area specifically focused on the Albanian and Epirus diaspora. So whether you love a good line dance with community, or even if you just love to dance with wild abandon, this unique project creates spaces both transcendent and uplifting. 
        </p>
        <!-- <center>
          <img width='70%' alt="Graphic by Jenette Sellin" src="../assets/map.png">
        </center> -->
        <p class="paragraph-font-left">
              Dodona’s members are Genevieve Krause on vocals, Kent Kessinger on guitar, Jenette Sellin on accordion, Gregory Masaki Jenkins on vocals and clarinet, Sean Tergis on percussion, and Calvin Lai on clarinet.
        </p>
      </div>

  
      <!-- Youtube Player -->
        <div class="youtube-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL2LJVnzoi_n3hIyfk5msH0QX74IsoYAmU&autohide=1&showinfo=0&controls=1&playlist=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> 


      <!-- Performances -->
      <div class="container-flavor">
        <h1 class="header-font-left" > Performances </h1> 
        <h3 class="header-font-left"> Upcoming </h3>
        <p class="paragraph-font-left indented-list">
           <!-- Edit below this line to add a new entry for Past Show -->
            <strong> ⟡ 1/17/2026 </strong> - Berkeley Balkan Bacchanal, Starry Plough Pub, Berkeley, CA 
        </p>
        <h3 class="header-font-left"> Past </h3>
        <p class="paragraph-font-left indented-list">
          <!-- Edit below this line to add a new entry for a Past Show -->
             <strong> ⟡ 10/17/25 </strong> - Bakers and Commons, Berkeley, CA <br>
             <strong> ⟡ 9/5/25 </strong> - Selkie Fest, Fremont, CA <br>
             <strong> ⟡ 7/19/25 </strong> - Berkeley Balkan Bacchanal, Starry Plough Pub, Berkeley, CA <br>
             <strong> ⟡ 7/2/25 </strong> - Balkan Camp, Mendocino, CA <br>
             <strong> ⟡ 6/7/25 </strong> - Occidental World Music Fest, Occidental, CA <br>
             <strong> ⟡ 1/18/25 </strong> - Berkeley Balkan Bacchanal, Starry Plough Pub, Berkeley, CA <br>
             <strong> ⟡ 12/31/24 </strong> - New Year’s Eve Balkan Bash, Ashkenaz, Berkeley, CA <br>
             <strong> ⟡ 11/22/24 </strong> - Lost Church, San Francisco, CA <br>
             <strong> ⟡ 7/20/24 </strong> - Berkeley Balkan Bacchanal, Ashkenaz, Berkeley, CA <br>
             <strong> ⟡ 5/19/24 </strong> - Balkan Sundays, Bissap Baobab, San Francisco, CA <br>
             <strong> ⟡ 3/16/24 </strong> - Berkeley Balkan Bacchanal, Starry Plough Pub, Berkeley, CA <br>
        </p>
        

      <!-- Contact-->
      <br>
        <h1 class="header-font-left" > Contact </h1>
        <p class="paragraph-font-left">
            For booking, inquiries, and anything else, please contact
            Calvin Lai at calvinlaiart@gmail.com.
        </p>
      </div>



       <Container>
        <!-- FB and Youtube icon links -->
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
  </center>
</template>



<style scoped>

/* Styles a specific list with an ID of "myList" */
#myList {
  list-style-type: circle; /* Changes bullets to hollow circles */
}

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.meta-container{ 
    justify-content: center;
    width: 100%;
    max-width: 800px;
    background-color: #181F2A;
    display: flex;
    flex-wrap: wrap;
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
  padding: 50px 5% 50px;
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

