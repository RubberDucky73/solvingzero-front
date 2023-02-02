/** @format */

import { createClient } from "contentful";
import ArticleCard from "../../components/ArticleCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "articleDefault" });

  return {
    props: {
      articles: res.items,
    },
    revalidate: 30,
  };
}

export default function Articles({ articles }) {
  console.log(articles);

  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.sys.id} article={article} />
      ))}
    </div>
  );
}
