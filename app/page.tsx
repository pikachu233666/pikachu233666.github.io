"use client";

import { useEffect, useState } from "react";

const archiveArticles = [
  ["IELTS Listening Notes (Chinese Version)", "/notes/ielts-listening"],
  ["IELTS Reading Notes (Chinese Version)", "/notes/ielts-reading"],
  ["IELTS Speaking Notes (Chinese Version)", "/notes/ielts-speaking"],
  ["IELTS Writing Notes (Chinese Version)", "/notes/ielts-writing"],
  ["IELTS Writing Part 1 Notes", "/notes/ielts-writing-part-1"],
  ["IELTS Writing Part 2 Notes", "/notes/ielts-writing-part-2"],
  ["IELTS Speaking 202301–202304", "/notes/ielts-speaking-2023-01-04"],
  ["IELTS Speaking 202205–202208", "/notes/ielts-speaking-2022-05-08"],
  ["IELTS Speaking 202209–202212", "/notes/ielts-speaking-2022-09-12"],
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <main>
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <a className="wordmark" href="#top">YuboSec</a>
      <nav aria-label="Primary navigation"><a href="#projects">Projects</a><a href="/notes">Notes</a><a href="#portal">Portal</a><a href="/about">About</a></nav>
    </header>

    <section className="hero" id="top">
      <div className="portrait-sketch" aria-hidden="true"><span>✦</span><i>⌁</i></div>
      <div className="hero-copy"><p className="scribble">hello, I&apos;m</p><h1>Yubo Sun</h1><div className="blue-stroke" />
        <p className="role">Cybersecurity <b>·</b> Creative Coding <b>·</b> Photography</p>
        <p className="intro">I build, protect, and document—turning curious questions into resilient systems and useful stories.</p>
        <div className="hero-links"><a className="paper-button" href="#projects">Explore my work ↘</a><a className="underlink" href="mailto:sunyubo1225@gmail.com">Say hello ↗</a></div>
      </div>
      <div className="hero-art"><img src="/hero-desk.webp" alt="Hand-drawn desk with a cat, laptop, camera and security objects" /></div>
      <span className="taped-note">build · protect · share ♡</span>
    </section>

    <section className="paper-board" aria-label="Explore YuboSec">
      <div className="paper-loop loop-one" aria-hidden="true"/><div className="paper-loop loop-two" aria-hidden="true"/>
      <article className="paper-sheet sheet-projects" id="projects">
        <span className="paper-kicker">projects / 02</span><h2>Projects</h2>
        <p className="sheet-intro">Things I build to explore security, automation, and resilient systems.</p>
        <div className="paper-art art-projects" aria-hidden="true"/>
        <div className="project-list">
          <a className="featured-link" href="https://github.com/pikachu233666/Healix" target="_blank" rel="noreferrer"><small>Python · security automation</small><strong>Healix</strong><span>AI-assisted Linux monitoring and real-time auto-healing · BearHack 2025</span><b>View project ↗</b></a>
          <a className="featured-link project-astryx" href="https://github.com/pikachu233666/Astryx" target="_blank" rel="noreferrer"><small>Next.js · AI interpretation</small><span className="project-title-row"><strong>Astryx</strong><em>Made with Yuxin Liu ♡</em></span><span>Eastern BaZi and Western astrology in one fusion reading</span><b>View project ↗</b></a>
        </div>
      </article>

      <article className="paper-sheet sheet-notes" id="security-notes">
        <span className="paper-kicker coral">writeups</span><h2>Security Notes</h2>
        <p className="sheet-intro">Security writeups, study notes, and ideas collected along the way.</p>
        <div className="paper-art art-notes" aria-hidden="true"/>
        <a className="article-feature" href="/notes/espionage-ctf-issessions-2024"><small>CTF · Jan 28, 2024</small><strong>Espionage CTF — ISSessions 2024</strong><b>Read article →</b></a>
        <details className="article-archive"><summary>More notes <b>＋</b></summary><div>{archiveArticles.map(([title, href]) => <a href={href} key={href}><span>{title}</span><b>→</b></a>)}</div></details>
      </article>

      <article className="paper-sheet sheet-portal" id="portal">
        <span className="paper-kicker">other paths</span><h2>Portal</h2>
        <p className="sheet-intro">A few more corners of the internet I call mine.</p>
        <div className="paper-art art-portal" aria-hidden="true"/>
        <nav className="portal-list" aria-label="Yubo's other links">
          <a href="/about"><span>About me</span><b>→</b></a>
          <a href="https://www.instagram.com/lunariphotograph/" target="_blank" rel="noreferrer"><span>Lunari Photography</span><b>↗</b></a>
          <a href="https://github.com/pikachu233666" target="_blank" rel="noreferrer"><span>GitHub</span><b>↗</b></a>
          <a href="https://www.linkedin.com/in/yubosun1225/" target="_blank" rel="noreferrer"><span>LinkedIn</span><b>↗</b></a>
          <a href="mailto:sunyubo1225@gmail.com"><span>Email</span><b>↗</b></a>
        </nav>
      </article>
    </section>

    <footer><span>◎ &nbsp; yubosec.com</span><span className="scribble">made with curiosity + too much coffee</span><span>© {new Date().getFullYear()} Yubo Sun</span></footer>
  </main>;
}
