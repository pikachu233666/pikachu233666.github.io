export const metadata = {
  title: "About Yubo — YuboSec",
  description: "Meet Yubo Sun: cybersecurity student, builder, photographer, and curious explorer.",
};

const profile = [
  ["name", '"Yubo Sun"'],
  ["birthday", '"12.25"'],
  ["hometown", '"Shenyang, Liaoning"'],
  ["now", '"Oakville, Ontario"'],
  ["school", '"Sheridan College"'],
  ["MBTI", '"ESFJ"'],
];

export default function AboutPage() {
  return <main className="about-page">
    <header className="about-nav">
      <a className="wordmark" href="/">YuboSec</a>
      <a className="back-home" href="/">← Back home</a>
    </header>

    <section className="about-hero">
      <div className="about-title">
        <span className="paper-kicker">a little more personal</span>
        <h1>About Yubo</h1>
        <div className="blue-stroke" />
        <p>I&apos;m a cybersecurity student who likes making complicated systems feel understandable, useful, and a little more human.</p>
      </div>
      <div className="about-desk">
        <img src="/hero-desk.webp" alt="Hand-drawn desk with an orange cat, laptop, camera, and security objects" />
        <span>curious by nature ↗</span>
      </div>
    </section>

    <section className="about-grid" aria-label="About Yubo Sun">
      <article className="about-note profile-note">
        <span className="note-label">profile.py</span>
        <h2>Nice to meet you.</h2>
        <div className="profile-code"><p>class <b>Me</b>:</p>{profile.map(([key, value]) => <p key={key}><span>{key}</span> = {value}</p>)}</div>
      </article>

      <article className="about-note security-note">
        <span className="note-label coral">01 / security & systems</span>
        <h2>Build. Break. Understand.</h2>
        <p>I study Cyber Security at Sheridan College, with a growing focus on offensive security, red-team thinking, digital forensics, and the small details that make systems resilient.</p>
        <p>My projects include <strong>Healix</strong>, an AI-assisted Linux auto-healing platform; <strong>Astryx</strong>, a BaZi and Western astrology fusion experience made with Yuxin Liu ♡; and hands-on security work through ISSessions CTF.</p>
      </article>

      <article className="about-note outside-note">
        <span className="note-label">02 / away from the terminal</span>
        <h2>Light, people, places, and everything between.</h2>
        <p>When I&apos;m not at a terminal, I&apos;m usually carrying a camera—photographing city streets, landscapes, people, wildlife, the night sky, and the quiet details of everyday life.</p>
        <p><strong>Lunari Photography</strong> is an open visual journal: no single subject, just the moments, colours, and stories that make me stop and look twice.</p>
      </article>

      <aside className="about-connect">
        <p className="scribble">find me elsewhere</p>
        <nav aria-label="Contact and social links">
          <a href="https://github.com/pikachu233666" target="_blank" rel="noreferrer">GitHub <b>↗</b></a>
          <a href="https://www.linkedin.com/in/yubosun1225/" target="_blank" rel="noreferrer">LinkedIn <b>↗</b></a>
          <a href="https://www.instagram.com/lunariphotograph/" target="_blank" rel="noreferrer">Lunari Photography <b>↗</b></a>
          <a href="mailto:sunyubo1225@gmail.com">Email <b>↗</b></a>
        </nav>
      </aside>
    </section>

    <footer><span>◎ &nbsp; yubosec.com</span><span className="scribble">stay curious, stay kind</span><span>© {new Date().getFullYear()} Yubo Sun</span></footer>
  </main>;
}
