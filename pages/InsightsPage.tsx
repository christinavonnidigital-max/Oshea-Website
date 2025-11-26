import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { insights } from '../data/insights';

const SITE_URL = "https://www.oshea.co.za";

const InsightsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(insights.map((i) => i.category)))], []);
  const filtered = activeCategory === "All" ? insights : insights.filter((i) => i.category === activeCategory);

  return (
    <Layout>
      <Helmet>
        <title>Insights & Resources | O'Shea SA</title>
        <meta
          name="description"
          content="Latest updates on ISO standards, compliance tips, and industry news from O'Shea SA."
        />
        <meta property="og:title" content="Insights & Resources | O'Shea SA" />
        <meta
          property="og:description"
          content="Read about ISO 27001, ISO 9001, sustainability, and health & safety trends across Sub-Saharan Africa."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
        />
        <link rel="canonical" href={`${SITE_URL}/insights`} />
      </Helmet>
      <PageHero 
        title="Insights & Resources" 
        subtitle="Latest updates on ISO standards, compliance tips, and industry news."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=75"
      />

      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === cat
                    ? "bg-brand-blue text-white border-brand-blue"
                    : "bg-white text-slate-700 border-slate-200 hover:border-brand-blue/60"
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article) => (
              <article key={article.slug} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="720"
                    height="432"
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                  />
                  <div className="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {article.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-xs text-gray-500 mb-3 font-medium">{article.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  <Link 
                    to={`/insights/${article.slug}`} 
                    className="inline-flex items-center text-brand-blue font-semibold text-sm hover:underline"
                  >
                    Read More <span className="ml-1">-&gt;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-16 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter for the latest industry insights and O'Shea SA news.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-accent outline-none"
              required
            />
            <button 
              type="submit"
              className="bg-brand-accent text-white font-bold px-8 py-3 rounded-lg hover:bg-orange-500 transition shadow-md"
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
