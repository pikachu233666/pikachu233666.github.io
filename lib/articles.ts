import espionage from "./article-content/espionage-ctf-issessions-2024";
import listening from "./article-content/ielts-listening";
import reading from "./article-content/ielts-reading";
import speaking from "./article-content/ielts-speaking";
import writing from "./article-content/ielts-writing";
import writingOne from "./article-content/ielts-writing-part-1";
import writingTwo from "./article-content/ielts-writing-part-2";
import speaking2023 from "./article-content/ielts-speaking-2023-01-04";
import speakingMay from "./article-content/ielts-speaking-2022-05-08";
import speakingSep from "./article-content/ielts-speaking-2022-09-12";

export type Article = { slug:string; title:string; date:string; category:string; content:string };
export const articles: Article[] = [
  { slug:"espionage-ctf-issessions-2024", title:"Espionage CTF — ISSessions 2024", date:"2024-01-28", category:"CTF WriteUp", content:espionage },
  { slug:"ielts-listening", title:"IELTS Listening Notes (Chinese Version)", date:"2022-05-04", category:"IELTS", content:listening },
  { slug:"ielts-reading", title:"IELTS Reading Notes (Chinese Version)", date:"2022-05-04", category:"IELTS", content:reading },
  { slug:"ielts-speaking", title:"IELTS Speaking Notes (Chinese Version)", date:"2022-05-04", category:"IELTS", content:speaking },
  { slug:"ielts-writing", title:"IELTS Writing Notes (Chinese Version)", date:"2022-05-04", category:"IELTS", content:writing },
  { slug:"ielts-writing-part-1", title:"IELTS Writing Part 1 Notes", date:"2022-05-04", category:"IELTS", content:writingOne },
  { slug:"ielts-writing-part-2", title:"IELTS Writing Part 2 Notes", date:"2022-05-04", category:"IELTS", content:writingTwo },
  { slug:"ielts-speaking-2023-01-04", title:"IELTS Speaking 2023.01–2023.04", date:"2023-01-01", category:"IELTS", content:speaking2023 },
  { slug:"ielts-speaking-2022-05-08", title:"IELTS Speaking 2022.05–2022.08", date:"2022-05-01", category:"IELTS", content:speakingMay },
  { slug:"ielts-speaking-2022-09-12", title:"IELTS Speaking 2022.09–2022.12", date:"2022-09-01", category:"IELTS", content:speakingSep },
];
export const articleBySlug = Object.fromEntries(articles.map(article => [article.slug, article]));
export function markdownBody(source:string){ return source.replace(/^---[\s\S]*?---\s*/, ""); }
