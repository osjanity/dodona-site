<template>
  <div class="admin-wrapper">
    <!-- Login Screen -->
    <div v-if="!isLoggedIn" class="login-screen">
      <div class="login-box">
        <h1 class="login-title">Dodona Admin</h1>
        <form @submit.prevent="login">
          <div class="field">
            <label>Username</label>
            <input v-model="username" type="text" autocomplete="username" />
          </div>
          <div class="field">
            <label>Password</label>
            <input v-model="password" type="password" autocomplete="current-password" />
          </div>
          <p v-if="loginError" class="error-msg">{{ loginError }}</p>
          <button type="submit" class="btn-primary">Login</button>
        </form>
      </div>
    </div>

    <!-- Admin Panel -->
    <div v-else class="admin-panel">
      <header class="admin-header">
        <span class="admin-title">Dodona Admin</span>
        <button class="btn-logout" @click="logout">Logout</button>
      </header>

      <!-- Tabs -->
      <div class="tab-bar">
        <button :class="['tab-btn', { active: tab === 'home' }]" @click="tab = 'home'">Home Page</button>
        <button :class="['tab-btn', { active: tab === 'dance' }]" @click="tab = 'dance'">Dance Page</button>
        <button :class="['tab-btn', { active: tab === 'performances' }]" @click="tab = 'performances'">Performances</button>
      </div>

      <!-- Home Tab -->
      <div v-if="tab === 'home'" class="tab-content">
        <h2>Home Page Content</h2>

        <div class="field">
          <label>Description</label>
          <textarea v-model="homeForm.description" rows="6" />
        </div>
        <div class="field">
          <label>Members Paragraph</label>
          <textarea v-model="homeForm.membersText" rows="3" />
        </div>
        <div class="field">
          <label>Contact Paragraph</label>
          <textarea v-model="homeForm.contactText" rows="3" />
        </div>

        <div class="actions">
          <button class="btn-save" :disabled="saving" @click="saveHome">
            {{ saving ? 'Saving…' : 'Save Home Page' }}
          </button>
          <span v-if="homeSuccess" class="success-msg">Saved!</span>
        </div>
      </div>

      <!-- Dance Tab -->
      <div v-if="tab === 'dance'" class="tab-content">
        <h2>Dance Page Content</h2>

        <div class="field">
          <label>Disclaimer</label>
          <textarea v-model="danceForm.disclaimer" rows="3" />
        </div>

        <h3>Dance Entries</h3>
        <p class="hint">Leave "Prefix" empty if the whole entry name is the link (e.g. "Valle Treshe"). Use "Prefix" for entries like "Papalambrena, Itia - <u>Tsamiko</u>".</p>

        <div v-for="(entry, i) in danceForm.entries" :key="i" class="entry-card">
          <div class="entry-fields">
            <div class="field-inline">
              <label>Prefix (optional)</label>
              <input v-model="entry.prefix" type="text" placeholder="e.g. Papalambrena, Itia" />
            </div>
            <div class="field-inline">
              <label>Name (link text)</label>
              <input v-model="entry.name" type="text" placeholder="e.g. Tsamiko" />
            </div>
            <div class="field-inline url-field">
              <label>YouTube URL</label>
              <input v-model="entry.url" type="url" placeholder="https://youtu.be/..." />
            </div>
          </div>
          <button class="btn-remove" @click="removeDanceEntry(i)">✕</button>
        </div>

        <button class="btn-add" @click="addDanceEntry">+ Add Entry</button>

        <div class="actions">
          <button class="btn-save" :disabled="saving" @click="saveDance">
            {{ saving ? 'Saving…' : 'Save Dance Page' }}
          </button>
          <span v-if="danceSuccess" class="success-msg">Saved!</span>
        </div>
      </div>

      <!-- Performances Tab -->
      <div v-if="tab === 'performances'" class="tab-content">
        <h2>Performances Page Content</h2>

        <h3>Upcoming Shows</h3>
        <div v-for="(show, i) in perfForm.upcoming" :key="'u' + i" class="entry-card">
          <div class="entry-fields">
            <div class="field-inline date-field">
              <label>Date</label>
              <input v-model="show.date" type="text" placeholder="e.g. 5/30/2026" />
            </div>
            <div class="field-inline desc-field">
              <label>Event, Venue, City</label>
              <input v-model="show.description" type="text" placeholder="Event Name, Venue, City, State" />
            </div>
          </div>
          <button class="btn-remove" @click="removeUpcoming(i)">✕</button>
        </div>
        <button class="btn-add" @click="addUpcoming">+ Add Upcoming Show</button>

        <h3>Past Shows</h3>
        <div v-for="(show, i) in perfForm.past" :key="'p' + i" class="entry-card">
          <div class="entry-fields">
            <div class="field-inline date-field">
              <label>Date</label>
              <input v-model="show.date" type="text" placeholder="e.g. 1/17/2026" />
            </div>
            <div class="field-inline desc-field">
              <label>Event, Venue, City</label>
              <input v-model="show.description" type="text" placeholder="Event Name, Venue, City, State" />
            </div>
          </div>
          <button class="btn-remove" @click="removePast(i)">✕</button>
        </div>
        <button class="btn-add" @click="addPast">+ Add Past Show</button>

        <div class="actions">
          <button class="btn-save" :disabled="saving" @click="savePerformances">
            {{ saving ? 'Saving…' : 'Save Performances Page' }}
          </button>
          <span v-if="perfSuccess" class="success-msg">Saved!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useContentStore } from '../stores/content';

const ADMIN_USER = process.env.VUE_APP_ADMIN_USERNAME;
const ADMIN_PASS = process.env.VUE_APP_ADMIN_PASSWORD;

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default {
  name: 'AdminPage',
  data() {
    return {
      isLoggedIn: sessionStorage.getItem('admin_auth') === 'true',
      username: '',
      password: '',
      loginError: '',
      tab: 'home',
      saving: false,
      homeSuccess: false,
      danceSuccess: false,
      perfSuccess: false,
      homeForm: { description: '', membersText: '', contactText: '' },
      danceForm: { disclaimer: '', entries: [] },
      perfForm: { upcoming: [], past: [] },
    };
  },
  mounted() {
    if (this.isLoggedIn) this.loadForms();
  },
  methods: {
    login() {
      if (!ADMIN_USER || !ADMIN_PASS) {
        this.loginError = 'Admin credentials are not configured.';
        return;
      }
      if (this.username === ADMIN_USER && this.password === ADMIN_PASS) {
        sessionStorage.setItem('admin_auth', 'true');
        this.isLoggedIn = true;
        this.loginError = '';
        this.loadForms();
      } else {
        this.loginError = 'Invalid username or password.';
      }
    },
    logout() {
      sessionStorage.removeItem('admin_auth');
      this.isLoggedIn = false;
      this.username = '';
      this.password = '';
    },
    loadForms() {
      const store = useContentStore();
      this.homeForm = clone(store.home);
      this.danceForm = clone(store.dance);
      this.perfForm = clone(store.performances);
    },
    async saveHome() {
      const store = useContentStore();
      this.saving = true;
      this.homeSuccess = false;
      try {
        await store.saveHome(clone(this.homeForm));
        this.homeSuccess = true;
        setTimeout(() => { this.homeSuccess = false; }, 3000);
      } finally {
        this.saving = false;
      }
    },
    async saveDance() {
      const store = useContentStore();
      this.saving = true;
      this.danceSuccess = false;
      try {
        await store.saveDance(clone(this.danceForm));
        this.danceSuccess = true;
        setTimeout(() => { this.danceSuccess = false; }, 3000);
      } finally {
        this.saving = false;
      }
    },
    async savePerformances() {
      const store = useContentStore();
      this.saving = true;
      this.perfSuccess = false;
      try {
        await store.savePerformances(clone(this.perfForm));
        this.perfSuccess = true;
        setTimeout(() => { this.perfSuccess = false; }, 3000);
      } finally {
        this.saving = false;
      }
    },
    addDanceEntry() {
      this.danceForm.entries.push({ prefix: '', name: '', url: '' });
    },
    removeDanceEntry(i) {
      this.danceForm.entries.splice(i, 1);
    },
    addUpcoming() {
      this.perfForm.upcoming.unshift({ date: '', description: '' });
    },
    removeUpcoming(i) {
      this.perfForm.upcoming.splice(i, 1);
    },
    addPast() {
      this.perfForm.past.unshift({ date: '', description: '' });
    },
    removePast(i) {
      this.perfForm.past.splice(i, 1);
    },
  },
};
</script>

<style scoped>
* { box-sizing: border-box; }

.admin-wrapper {
  min-height: 100vh;
  background: #0e131a;
  color: #e0c88a;
  font-family: 'Inter', sans-serif;
}

/* ── Login ── */
.login-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.login-box {
  background: #181F2A;
  border: 1px solid rgba(255,205,134,0.2);
  border-radius: 8px;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 360px;
}
.login-title {
  color: #FFCD86;
  font-size: 1.5rem;
  margin: 0 0 1.5rem;
  text-align: center;
  letter-spacing: 0.08em;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
}

/* ── Panel ── */
.admin-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #181F2A;
  border-bottom: 1px solid rgba(255,205,134,0.2);
}
.admin-title {
  color: #FFCD86;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

/* ── Tabs ── */
.tab-bar {
  display: flex;
  gap: 0;
  background: #111720;
  border-bottom: 1px solid rgba(255,205,134,0.15);
}
.tab-btn {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: #8a7a5a;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  padding: 0.9rem 1.6rem;
  text-transform: uppercase;
  transition: color 0.2s, border-color 0.2s;
}
.tab-btn:hover { color: #FFCD86; }
.tab-btn.active {
  color: #FFCD86;
  border-bottom-color: #F6A45E;
}

/* ── Tab content ── */
.tab-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}
.tab-content h2 {
  color: #FFCD86;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.1em;
  margin: 0 0 1.5rem;
  text-transform: uppercase;
}
.tab-content h3 {
  color: #FFCD86;
  font-family: 'Lato', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  margin: 2rem 0 0.75rem;
  text-transform: uppercase;
}

/* ── Fields ── */
.field {
  margin-bottom: 1.25rem;
}
.field label,
.field-inline label {
  display: block;
  color: #9a8b6a;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}
input[type="text"],
input[type="password"],
input[type="url"],
textarea {
  background: #111720;
  border: 1px solid rgba(255,205,134,0.2);
  border-radius: 4px;
  color: #e0c88a;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  padding: 0.55rem 0.75rem;
  width: 100%;
  transition: border-color 0.2s;
}
input:focus,
textarea:focus {
  border-color: rgba(246,164,94,0.6);
  outline: none;
}
textarea { resize: vertical; }

/* ── Entry cards ── */
.entry-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: #131a24;
  border: 1px solid rgba(255,205,134,0.1);
  border-radius: 6px;
  margin-bottom: 0.6rem;
  padding: 0.75rem;
}
.entry-fields {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.field-inline {
  flex: 1;
  min-width: 140px;
}
.url-field { flex: 2; min-width: 220px; }
.desc-field { flex: 3; min-width: 240px; }
.date-field { flex: 0 0 120px; min-width: 100px; }

/* ── Buttons ── */
.btn-primary {
  background: #C37F46;
  border: none;
  border-radius: 4px;
  color: #0e131a;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.65rem 1.5rem;
  text-transform: uppercase;
  transition: background 0.2s;
  width: 100%;
}
.btn-primary:hover { background: #FFCD86; }

.btn-save {
  background: #C37F46;
  border: none;
  border-radius: 4px;
  color: #0e131a;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.6rem 1.6rem;
  text-transform: uppercase;
  transition: background 0.2s;
}
.btn-save:hover:not(:disabled) { background: #FFCD86; }
.btn-save:disabled { background: #5a4a30; color: #8a7a5a; cursor: default; }

.btn-add {
  background: none;
  border: 1px dashed rgba(255,205,134,0.3);
  border-radius: 4px;
  color: #9a8b6a;
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  padding: 0.45rem 1rem;
  transition: border-color 0.2s, color 0.2s;
}
.btn-add:hover { border-color: #FFCD86; color: #FFCD86; }

.btn-remove {
  background: none;
  border: none;
  color: #6a5a4a;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.2rem 0.3rem;
  transition: color 0.2s;
}
.btn-remove:hover { color: #e06040; }

.btn-logout {
  background: none;
  border: 1px solid rgba(255,205,134,0.3);
  border-radius: 4px;
  color: #9a8b6a;
  cursor: pointer;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.9rem;
  text-transform: uppercase;
  transition: border-color 0.2s, color 0.2s;
}
.btn-logout:hover { border-color: #FFCD86; color: #FFCD86; }

/* ── Actions row ── */
.actions {
  align-items: center;
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

/* ── Messages ── */
.success-msg { color: #6abf6a; font-size: 0.85rem; }
.error-msg { color: #e06040; font-size: 0.85rem; margin: 0.5rem 0; }

.hint {
  color: #6a5a4a;
  font-size: 0.8rem;
  margin: 0 0 0.75rem;
}
</style>
