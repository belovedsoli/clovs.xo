/* ============================================================
   clovs.acp — SITE CONFIG
   Everything member-specific lives here: which sections they show
   up in on the main site, and their socials/music/background on
   their own portfolio page. Both index.html and clovs.acp.html
   load this file, so edit it once and both pages update.
   ============================================================ */

// ---------------------------------------------------------------
// SECTION MEMBERSHIP — controls who shows up where on index.html
// ---------------------------------------------------------------
const HALL_OF_FAME_IDS = [
  '1265987459490250774',
  '1412504659385647134',
  '1362445683092619326'
];

// "we run ts" members (shown in the home page preview)
const WE_RUN_TS_IDS = [
  '884238761624489985',
  '1371714257279782952',
  '1229021820292960328'
];

// "xclsv" section members
const XCLSV_IDS = [
  '1355792420994027583',
  '1521774710059171850',
  '1505594070565654778',
  '1051531791581859960',
  '1437719585871757443',
  '1291808679796146201'
];

// Scrolling pill section
const MEMBER_IDS = [
  '1513236793271648305',
  '745923442674630686',
  '921560030698950656',
  '467318916411031562',
  '1507439509065957538',
  '1418927332982521956',
  '1090959043780149349',
  '1510211540517916928'
];

// ---------------------------------------------------------------
// PER-MEMBER DATA — used on their portfolio page (clovs.acp.html)
// Add/keep one block per Discord ID used above. Every field is
// optional; blank or missing fields just fall back to a default.
//
// slug: give someone a short, memorable link — set slug:'soli' and
// their page becomes clovs.acp.html#soli instead of the long
// clovs.acp.html?id=1234567890 one. Leave blank to keep the ID link.
// ---------------------------------------------------------------
const MEMBERS = {
  '1265987459490250774': {
    slug: 'aizen',                                       // e.g. 'soli' → link becomes clovs.acp.html#soli
    tagline: 'kupal kami, sama ka?',                                   // small caps line under their name
    socials: {
      instagram: 'https://www.instagram.com/_jzshhc',                                // e.g. 'https://instagram.com/username'
      tiktok: 'https://www.tiktok.com/@aizxnx_',                                    // e.g. 'https://tiktok.com/@username'
      youtube: '',                                    // e.g. 'https://youtube.com/@username'
      spotify: 'https://open.spotify.com/user/31bssrtowm4u2jzd6ukq4k6bkktq',
      discord: ''                                    // blank = auto-fills to discord.com/users/<id>
    },
    music: { name: 'aizen', src: 'aizen.mp3' },                    // e.g. { name: 'sosa', src: 'sosa.mp3' } — leave blank to use DEFAULT_TRACK
    background: 'soli.gif',                                   // image, gif, or video (mp4/webm/mov) URL/path — blank = default grunge look
    portfolioLink: ''                                 // full URL — set this to send clicks to an external site INSTEAD of clovs.acp.html
  },
  '1412504659385647134': {
    slug: 'sinful', tagline: 'alergic sa lames', socials: { instagram:'', tiktok:'', youtube:'', spotify:'', discord:'' }, music: { name:'sinful', src:'sinf.mp3' }, background: 'migo.gif', portfolioLink: ''
  },
  '1362445683092619326': {
    slug: 'migo', tagline: 'better than your boyfriend', socials: { instagram:'', tiktok:'', youtube:'', spotify:'https://open.spotify.com/user/31nltdglmhiwuqcgsyzmngje3xsm?si=-16nUC72SqKol2Dc8HGu1w&utm_source=copy-link', discord:'' }, music: { name:'migo', src:'migo.mp3' }, background: 'migo.gif', portfolioLink: ''
  },
  '884238761624489985': {
    slug: 'yska', tagline: 'is it better to speak or die?', socials: { instagram:'https://www.instagram.com/yska.sznn?igsh=MWZsa2l4OW5jM3E3cQ%3D%3D&utm_source=qr', tiktok:'', youtube:'', spotify:'', discord:'' }, music: { name:'', src:'' }, background: 'yska.png', portfolioLink: ''
  },
  '1371714257279782952': {
    slug: 'swoli', tagline: 'kupal ako, sama ka?', socials: { instagram:'', tiktok:'https://www.tiktok.com/@iwishyounoregrets?lang=en', youtube:'https://www.youtube.com/@alittlesilencebetweenus', spotify:'', discord:'' }, music: { name:'soli malameg', src:'soli.mp3' }, background: 'soli1.png', portfolioLink: ''
  },
  '1229021820292960328': {
    slug: 'aeki', tagline: 'El honor jamás muere.', socials: { instagram:'https://www.instagram.com/aekishit?igsh=OXpsdThka3IyazN3', tiktok:' https://vt.tiktok.com/ZSX9hB4LC/', youtube:'', spotify:'https://open.spotify.com/user/31blgej76dx6slv36erzwupoqfwu?si=TuZMBdIcQt6zL2Nx2FCkEw&utm_source=copy-link', discord:'' }, music: { name:'aeki', src:'aeki.mp3' }, background: 'aeki.png', portfolioLink: ''
  },
  '1355792420994027583': {
    slug: '', tagline: '', socials: { instagram:'', tiktok:'', youtube:'', spotify:'', discord:'' }, music: { name:'', src:'' }, background: '', portfolioLink: ''
  },
  '1521774710059171850': {
    slug: 'astra', tagline: 'ANTI BITCHES', socials: { instagram:'  https://www.instagram.com/die4.777?igsh=dmRudGowa25qdzZk', tiktok:'', youtube:'', spotify:'', discord:'' }, music: { name:'kleeko cute', src:'kleeko.mp3' }, background: 'kleeko.mp4', portfolioLink: ''
  },
  '1505594070565654778': {
    slug: 'ziye', tagline: 'mind over matter', socials: { instagram:'https://www.instagram.com/_zycl6?igsh=MWR0ZHgxMTc4eXo4bA==', tiktok:'', youtube:'', spotify:'', discord:'' }, music: { name:'oleeko', src:'oleeko.mp3' }, background: 'oleeko.png', portfolioLink: ''
  },
  '1051531791581859960': {
    slug: 'tia', tagline: ' to those who love, will be loved ', socials: { instagram:'https://www.instagram.com/tialucies?igsh=MXVlY3VzZTFxMm45bA== ', tiktok:' https://www.tiktok.com/@poemsandra?_r=1&_t=ZS-98BdMRhQnzA', youtube:'', spotify:'', discord:'' }, music: { name:'tia', src:'tia.mp3' }, background: 'tia.png', portfolioLink: ''
  },
  '1513236793271648305': {
    slug: 'saint1', tagline: 'Try and try until you die; if you die, at least you tried.', socials: { instagram:'https://www.instagram.com/santikewl?igsh=ZWZveDhuNzR1anNj&utm_source=qr', tiktok:'', youtube:'', spotify:'', discord:'' }, music: { name:'saint1', src:'saint1.mp3' }, background: 'saint1.png', portfolioLink: ''
  },
  '745923442674630686': {
    slug: 'pshikaa', tagline: 'beyond everyone', socials: { instagram:' https://www.instagram.com/_pshika?igsh=bzAwcDU5amRveXpq', tiktok:'https://www.tiktok.com/@_pshika?_r=1&_t=ZS-98Bq8BxkBKn', youtube:'', spotify:'', discord:'' }, music: { name:'eleeko', src:'eleeko.mp3' }, background: 'eleeko.png', portfolioLink: ''
  },
  '467318916411031562': {
    slug: 'xiao', tagline: 'missing what never was', socials: { instagram:'https://www.instagram.com/dmn.fm/', tiktok:'', youtube:'', spotify:'', discord:'' }, music: { name:'xiao', src:'xiao.mp3' }, background: 'xiao.png', portfolioLink: ''
  },
  '1507439509065957538': {
    slug: 'sebby', tagline: 'Suck my non existing dick bitch', socials: { instagram:' https://www.instagram.com/h4tefvckboyz?igsh=enR1eHh1bXpmZzZk', tiktok:'', youtube:'', spotify:'', discord:'' }, music: { name:'rleeko', src:'rleeko.mp3' }, background: 'rleeko.png', portfolioLink: ''
  },
  '1418927332982521956': {
    slug: 'nia', tagline: 'mind over matter', socials: { instagram:'https://www.instagram.com/niaqzs?igsh=bmxicmE0NzI3OHg0', tiktok:'', youtube:'', spotify:'', discord:'' }, music: { name:'nia', src:'nia.mp3' }, background: 'nia.png', portfolioLink: ''
  },
  '1090959043780149349': {
   slug: 'nin', tagline: 'better than everybody', socials: { instagram:'https://www.instagram.com/ninis3y?igsh=M3k2dGo4Znl2b285', tiktok:'', youtube:'', spotify:'', discord:'' }, music: { name:'nin', src:'nin.mp3' }, background: 'nin.png', portfolioLink: ''
  },
  '1510211540517916928': {
    slug: 'alchi', tagline: ' i suck your nipple niggas', socials: { instagram:' https://www.instagram.com/alchialchialchi_?igsh=end1bHQ0bXhzc2Rt', tiktok:': https://www.tiktok.com/@alchialchialchi_?_r=1&_t=ZS-98Bo6EyIcxr', youtube:'', spotify:'', discord:'' }, music: { name:'alchi', src:'alchi.mp3' }, background: '', portfolioLink: ''
  },
  '1437719585871757443': {
    slug: 'zecko', tagline: 'Fuck all niggas', socials: { instagram:'', tiktok:'', youtube:'', spotify:'', discord:'' }, music: { name:'zecko', src:'zeecko.mp3' }, background: 'zeecko.png', portfolioLink: ''
  },
  '1291808679796146201': {
    slug: 'blue', tagline: 'sama ako', socials: { instagram:'https://www.instagram.com/kindestgirlintheworld?igsh=MWI3MWgyMWl2ZWE0cg%3D%3D&utm_source=qr', tiktok:'https://www.tiktok.com/@kindestgirlintheworld?_r=1&_t=ZS-98Cvr8siTSO', youtube:'', spotify:'https://open.spotify.com/user/12167682805?si=cxSZfongTqW5UMsqtW4T9g&utm_source=copy-link', discord:'' }, music: { name:'blue', src:'soli.mp3' }, background: 'soli1.png', portfolioLink: ''
  }

};

// ---------------------------------------------------------------
// SITE-WIDE DEFAULTS
// ---------------------------------------------------------------
const API_BASE = 'https://api.lanyard.rest/v1/users/';
const DEFAULT_TRACK = { name: 'clovs.acp', src: '4217 Freestyle.mp3' }; // used when a member has no music.src set
const DEFAULT_BACKGROUND = ''; // image URL/path used when a member has no background set — blank = built-in grunge look

// ---------------------------------------------------------------
// DEBUG — confirms config.js actually loaded and shows what it sees.
// Safe to delete once things are working.
// ---------------------------------------------------------------
console.log('[config.js] loaded OK —', {
  hallOfFame: HALL_OF_FAME_IDS.length,
  weRunTs: WE_RUN_TS_IDS.length,
  xclsv: XCLSV_IDS.length,
  members: MEMBER_IDS.length,
  totalMemberEntries: Object.keys(MEMBERS).length
});