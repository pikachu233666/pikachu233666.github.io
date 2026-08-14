import { Fragment, ReactNode } from "react";
import { notFound } from "next/navigation";
import { articleBySlug, articles, markdownBody } from "../../../lib/articles";

export function generateStaticParams(){ return articles.map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const article=articleBySlug[slug];
  return article ? {title:`${article.title} — YuboSec`,description:`${article.category} note by Yubo Sun.`} : {};
}

function inline(text:string):ReactNode[]{
  const pattern=/(\[[^\]]+\]\(https?:\/\/[^)]+\)|`[^`]+`|\*\*[^*]+\*\*)/g;
  return text.split(pattern).filter(Boolean).map((part,i)=>{
    if(part.startsWith("`")) return <code key={i}>{part.slice(1,-1)}</code>;
    if(part.startsWith("**")) return <strong key={i}>{part.slice(2,-2)}</strong>;
    const link=part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if(link) return <a key={i} href={link[2]} target="_blank" rel="noreferrer">{link[1]} ↗</a>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function Markdown({source}:{source:string}){
  const lines=markdownBody(source).split("\n"); const nodes:ReactNode[]=[]; let code:string[]=[]; let inCode=false; let list:string[]=[];
  const flushList=()=>{ if(list.length){nodes.push(<ul key={`l${nodes.length}`}>{list.map((x,i)=><li key={i}>{inline(x)}</li>)}</ul>);list=[];} };
  lines.forEach((raw)=>{const line=raw.trimEnd();
    if(line.trim().startsWith("```")){ if(inCode){nodes.push(<pre key={`c${nodes.length}`}><code>{code.join("\n")}</code></pre>);code=[];} inCode=!inCode;return; }
    if(inCode){code.push(raw);return;}
    const item=line.match(/^\s*[-*+]\s+(.+)/);if(item){list.push(item[1]);return;} flushList();
    const heading=line.match(/^(#{1,4})\s+(.+)/);if(heading){const Tag=(`h${Math.min(heading[1].length+1,4)}`) as "h2"|"h3"|"h4";nodes.push(<Tag key={`h${nodes.length}`}>{inline(heading[2])}</Tag>);return;}
    if(!line.trim()) return;
    if(/^---+$/.test(line.trim())){nodes.push(<hr key={`r${nodes.length}`}/>);return;}
    nodes.push(<p key={`p${nodes.length}`}>{inline(line.trim())}</p>);
  }); flushList(); if(code.length) nodes.push(<pre key="last"><code>{code.join("\n")}</code></pre>); return <>{nodes}</>;
}

export default async function NotePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const article=articleBySlug[slug]; if(!article) notFound();
  return <main className="note-page">
    <header className="about-nav"><a className="wordmark" href="/">YuboSec</a><nav className="note-nav"><a href="/notes">All notes</a><a href="/about">About</a></nav></header>
    <article className="reading-paper"><a className="back-home" href="/notes">← All notes</a><header><span className="note-label coral">{article.category}</span><h1>{article.title}</h1><p>{article.date} · Yubo Sun</p></header><div className="markdown-body"><Markdown source={article.content}/></div></article>
    <footer><span>◎ &nbsp; yubosec.com</span><span className="scribble">notes from the field</span><span>© {new Date().getFullYear()} Yubo Sun</span></footer>
  </main>;
}
