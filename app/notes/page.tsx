import { articles } from "../../lib/articles";

export const metadata = { title:"Security Notes — YuboSec", description:"Security writeups, study notes, and field observations by Yubo Sun." };

export default function NotesPage(){
  return <main className="archive-page">
    <header className="about-nav"><a className="wordmark" href="/">YuboSec</a><a className="back-home" href="/">← Back home</a></header>
    <section className="archive-head"><span className="paper-kicker coral">field notes &amp; ideas</span><h1>Notes &amp; Writeups</h1><p>Security writeups, learning notes, and useful things I want to remember and share.</p></section>
    <section className="archive-list">{articles.map((article,index)=><a className="archive-card" href={`/notes/${article.slug}`} key={article.slug}>
      <small>{String(index+1).padStart(2,"0")} · {article.category}</small><h2>{article.title}</h2><span>{article.date} <b>Read note →</b></span>
    </a>)}</section>
    <footer><span>◎ &nbsp; yubosec.com</span><span className="scribble">observe · understand · share</span><span>© {new Date().getFullYear()} Yubo Sun</span></footer>
  </main>;
}
