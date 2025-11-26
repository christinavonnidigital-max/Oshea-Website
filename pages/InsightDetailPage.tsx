import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { findInsightBySlug } from "../data/insights";

const SITE_URL = "https://www.oshea.co.za";

const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? findInsightBySlug(slug) : undefined;

  if (!article) {
    return (
      <Layout>
        <PageHero title="Insight not found" subtitle="The article you're looking for doesn't exist." />
        <div className="max-w-3xl mx-auto px-6 py-16 text-center space-y-4">
          <p className="text-gray-600">Try exploring our latest resources instead.</p>
          <Link
            to="/insights"
            className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-white font-semibold shadow-sm hover:bg-primary-800 transition"
          >
            Back to Insights
          </Link>
        </div>
      </Layout>
    );
  }

  const canonical = `${SITE_URL}/insights/${article.slug}`;
  const publishedIso = new Date(article.date).toISOString();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: publishedIso,
    dateModified: publishedIso,
    articleSection: article.category,
    author: { "@type": "Organization", name: "O'Shea SA" },
    publisher: { "@type": "Organization", name: "O'Shea SA" },
    image: [article.image],
    mainEntityOfPage: canonical,
  };

  return (
    <Layout>
      <Helmet>
        <title>{article.title} | O'Shea SA</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={publishedIso} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <PageHero title={article.title} subtitle={article.excerpt} backgroundImage={article.image} />

      <article className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600">
          <span className="font-semibold text-brand-blue">{article.category}</span>
          <span aria-hidden="true">•</span>
          <span>{article.date}</span>
        </div>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          {article.body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="pt-10">
          <Link to="/insights" className="inline-flex items-center text-brand-blue font-semibold hover:underline">
            <span className="mr-2">-&gt;</span> Back to all insights
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default InsightDetailPage;
