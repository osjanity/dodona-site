import { defineStore } from 'pinia';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const DEFAULT_HOME = {
  description: 'Dodona performs the music of Epirus in Northwestern Greece and Southern Albania as well as nearby regions. The songs are connected to the nature of life itself, each note expressing longing, love, lament, celebration, or nostalgia. This heartfelt and exciting group brings out their love for this specific region through the melodies that are both unique and everlasting. With a repertoire that goes from plaintive, to trance inducing, to driving, Dodona is one of the few bands in the Bay Area specifically focused on the Northwestern Greek and Albanian regions. So whether you love a good line dance with community, or even if you just love to dance with wild abandon, this unique project creates spaces both transcendent and uplifting.',
  membersText: "Dodona's members are Calvin Lai on clarinet, Genevieve Krause on vocals, Kent Kessinger on guitar, Jenette Sellin on accordion, Gregory Masaki Jenkins on vocals and clarinet, and Sean Tergis on percussion.",
  contactText: 'For booking, inquiries, and anything else, please contact Calvin Lai at calvinlaiart@gmail.com.',
};

const DEFAULT_DANCE = {
  disclaimer: "This list isn't comprehensive, but may be used as a partial resource for those interested in learning folk dances. All linked videos feature visible folk dancing at some point in the video.",
  entries: [
    { prefix: '', name: 'Valle Treshe', url: 'https://youtu.be/VKicbvZJhm8' },
    { prefix: '', name: 'Vitori', url: 'https://youtu.be/KGDX6E4q5PU?si=5sRgu07QirD-sXSS' },
    { prefix: 'Papalambrena, Itia', name: 'Tsamiko', url: 'https://www.youtube.com/watch?v=7FGmDGMdoMc' },
    { prefix: '', name: 'Jarnana', url: 'https://youtu.be/HV6totAE6gI?si=H1KWnzjZ4P6mkKqT' },
    { prefix: '', name: 'Ne mes te Delvines', url: 'https://youtu.be/h5Dqd40Te9s?si=7I0Td0Ou8AWCV7BN' },
    { prefix: '', name: 'Millisou', url: 'https://youtu.be/HDV4YqKAous?si=4po5s0VUrIl5HHeS' },
    { prefix: '', name: 'Nuse Moj Sorkadhe', url: 'https://youtube.com/shorts/wFyOiJzAaPU?si=7Oygz29lGWa4L8IS' },
    { prefix: '', name: 'Doli Goça', url: 'https://youtu.be/HDV4YqKAous?si=4po5s0VUrIl5HHeS' },
    { prefix: 'Endheka', name: 'Karsilamas', url: 'https://www.youtube.com/watch?si=fyL2cqa5rXRyydq1&v=3WJ4zWEyPN8&feature=youtu.be' },
    { prefix: '', name: 'Valle Katjuska', url: 'https://youtu.be/cqaPWV-9RDU' },
    { prefix: '', name: 'Sofka', url: 'https://youtu.be/wqXKnbWFJ84?si=PDJFyCeGN3vSROV6' },
    { prefix: 'Karakosteikos', name: 'Tsamiko', url: 'https://youtu.be/w1Yv5A_2t9k?si=740xkm9LZ8NQ8Y8f' },
    { prefix: '', name: 'Piyena to Dromo', url: 'https://www.youtube.com/watch?v=3vky43MB55c' },
    { prefix: 'Papa Yorgis/Nteli Papas', name: 'Sta Tria', url: 'https://www.youtube.com/watch?v=V_cciCOkWSE' },
    { prefix: "Beno Mes T'abeli/Kondoula Vlaha/Tasia", name: 'Berati', url: 'https://www.youtube.com/watch?v=tLUty0u9BCg' },
  ],
};

const DEFAULT_PERFORMANCES = {
  upcoming: [
    { date: '5/30/2026', description: 'Third Annual Occidental World Music and Dance Festival, Occidental Center for the Arts, Occidental, CA' },
  ],
  past: [
    { date: '1/17/2026', description: 'Berkeley Balkan Bacchanal, Starry Plough Pub, Berkeley, CA' },
    { date: '10/17/25', description: 'Bakers and Commons, Berkeley, CA' },
    { date: '9/5/25', description: 'Selkie Fest, Fremont, CA' },
    { date: '7/19/25', description: 'Berkeley Balkan Bacchanal, Starry Plough Pub, Berkeley, CA' },
    { date: '7/2/25', description: 'EEFC Balkan Camp, Mendocino, CA' },
    { date: '6/7/25', description: 'Second Annual Occidental World Music and Dance Festival, Occidental Center for the Arts, Occidental, CA' },
    { date: '1/18/25', description: 'Berkeley Balkan Bacchanal, Starry Plough Pub, Berkeley, CA' },
    { date: '12/31/24', description: "Balkan New Year's Eve, Ashkenaz, Berkeley, CA" },
    { date: '11/22/24', description: 'The Lost Church, San Francisco, CA' },
    { date: '7/20/24', description: 'Berkeley Balkan Bacchanal, Ashkenaz, Berkeley, CA' },
    { date: '5/19/24', description: 'Balkan Sundays, Bissap Baobab, San Francisco, CA' },
    { date: '3/16/24', description: 'Berkeley Balkan Bacchanal, Starry Plough Pub, Berkeley, CA' },
  ],
};

export const useContentStore = defineStore('content', {
  state: () => ({
    home: { ...DEFAULT_HOME },
    dance: {
      disclaimer: DEFAULT_DANCE.disclaimer,
      entries: DEFAULT_DANCE.entries.map(e => ({ ...e })),
    },
    performances: {
      upcoming: DEFAULT_PERFORMANCES.upcoming.map(p => ({ ...p })),
      past: DEFAULT_PERFORMANCES.past.map(p => ({ ...p })),
    },
  }),
  actions: {
    async loadContent() {
      try {
        const [homeSnap, danceSnap, perfSnap] = await Promise.all([
          getDoc(doc(db, 'content', 'home')),
          getDoc(doc(db, 'content', 'dance')),
          getDoc(doc(db, 'content', 'performances')),
        ]);
        if (homeSnap.exists()) this.home = homeSnap.data();
        if (danceSnap.exists()) this.dance = danceSnap.data();
        if (perfSnap.exists()) this.performances = perfSnap.data();
      } catch (e) {
        console.warn('Could not load content from Firestore:', e.message);
      }
    },
    async saveHome(data) {
      this.home = { ...data };
      await setDoc(doc(db, 'content', 'home'), data);
    },
    async saveDance(data) {
      this.dance = JSON.parse(JSON.stringify(data));
      await setDoc(doc(db, 'content', 'dance'), data);
    },
    async savePerformances(data) {
      this.performances = JSON.parse(JSON.stringify(data));
      await setDoc(doc(db, 'content', 'performances'), data);
    },
  },
});
