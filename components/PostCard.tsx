import React from "react";
import { Link } from "react-router-dom";
import type { PostMeta } from "../data/posts";

const PostCard: React.FC<{ post: PostMeta }> = ({ post }) => {
  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-brand-blue/20 transition-all duration-300 flex flex-col h-full">
      <div className="p-8 flex flex-col flex-grow">
        <header className="mb-4">
          <div className="flex gap-2 mb-4">
            {post.tags.map(tag => (
               <span key={tag} className="text-[10px] font-bold text-brand-blue bg-blue-50 px-2 py-1 rounded uppercase tracking-widest">
                 {tag}
               </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-gray-900 leading-tight group">
            <Link to={post.route} className="hover:text-brand-blue transition-colors">
              {post.title}
            </Link>
          </h3>
        </header>
        <p className="text-gray-600 text-sm flex-1 leading-relaxed mb-6">{post.excerpt}</p>
        <footer className="text-xs text-gray-400 flex items-center justify-between pt-4 border-t border-gray-50 font-medium">
          <span className="flex items-center gap-1">
             {new Date(post.date).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1">
             {post.readingMinutes} min read
          </span>
        </footer>
      </div>
    </article>
  );
};

export default PostCard;