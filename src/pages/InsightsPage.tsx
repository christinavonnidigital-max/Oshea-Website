import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

const InsightsPage: React.FC = () => {
  const ordered = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Layout>
      <Helmet>
        <title>Insights & Resources | O’Shea SA</title>
        <meta
          name="description"
          content="Practical guidance and updates on ISO certification, inspection, and training across Sub-Saharan Africa."
        />
        <link rel="canonical" href="https://oshea.co.za/insights" />
        <meta property="og:title" content="Insights & Resources | O’Shea SA" />
        <meta property="og:description" content="Expert guidance on ISO standards and compliance." />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageHero 
        title="Insights & Resources" 
        subtitle="Latest updates on ISO standards, compliance tips, and industry news."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Expert perspectives on quality management, safety standards, and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ordered.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue py-16 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter for the latest industry insights and O'Shea SA news.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-accent outline-none border-0"
              required
            />
            <button 
              type="submit"
              className="bg-brand-accent text-white font-bold px-8 py-3 rounded-lg hover:bg-orange-500 transition shadow-md whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default InsightsPage;