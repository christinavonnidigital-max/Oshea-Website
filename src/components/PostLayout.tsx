import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  children: React.ReactNode;
};

const PostLayout: React.FC<Props> = ({ title, description, date, readingMinutes, children }) => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-sm mb-8">
          <Link to="/insights" className="text-brand-blue hover:underline font-medium">Insights</Link>
          <span className="text-gray-400 mx-2"> › </span>
          <span className="text-gray-600 truncate">{title}</span>
        </nav>

        <header className="mb-10 pb-8 border-b border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{title}</h1>
          <p className="text-xl text-gray-600 mt-4 leading-relaxed">{description}</p>
          <div className="text-sm text-gray-500 mt-4 flex items-center gap-4">
            <span>{new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{readingMinutes} min read</span>
          </div>
        </header>

        {/* Custom typography styles to mimic prose without the plugin */}
        <article className="max-w-none space-y-6 text-gray-800 text-lg leading-relaxed 
          [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-4 
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:marker:text-brand-blue
          [&>li]:pl-2
          [&>p]:text-gray-700
        ">
          {children}
        </article>

        <div className="mt-16 border-t border-gray-200 pt-8 text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to take the next step?</h3>
          <p className="text-gray-600 mb-6">Need certification or training support based on what you've read?</p>
          <Link 
            to="/contact" 
            className="inline-block bg-brand-blue text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-dark transition shadow-md uppercase tracking-wide text-sm"
          >
            Contact O’Shea SA
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PostLayout;