import React from "react";
import { Link } from "react-router-dom";
import type { PostMeta } from "../data/posts";

const PostCard: React.FC<{ post: PostMeta }> = ({ post }) => {
  return (
    <article className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition flex flex-col border border-gray-100">
      <header className="mb-3">
        <div className="flex gap-2 mb-3">
          {post.tags.map(tag => (
             <span key={tag} className="text-xs font-bold text-brand-blue bg-blue-50 px-2 py-1 rounded uppercase tracking-wider">
               {tag}
             </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">
          <Link to={post.route} className="hover:text-brand-blue transition-colors">
            {post.title}
          </Link>
        </h3>
      </header>
      <p className="text-gray-600 text-sm flex-1 leading-relaxed">{post.excerpt}</p>
      <footer className="mt-6 text-xs text-gray-500 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="flex items-center gap-1">
           📅 {new Date(post.date).toLocaleDateString()}
        </span>
        <span className="flex items-center gap-1">
           ⏱️ {post.readingMinutes} min read
        </span>
      </footer>
    </article>
  );
};

export default PostCard;