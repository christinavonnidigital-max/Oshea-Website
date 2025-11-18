import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface Breadcrumb {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
  currentPage: string;
}

const ChevronRight: FC = () => (
  <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const Breadcrumbs: FC<BreadcrumbsProps> = ({ crumbs, currentPage }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol role="list" className="flex items-center space-x-2 text-sm">
        {crumbs.map((crumb) => (
          <li key={crumb.path}>
            <div className="flex items-center">
              <Link to={crumb.path} className="font-medium text-gray-500 hover:text-gray-700">
                {crumb.label}
              </Link>
              <ChevronRight />
            </div>
          </li>
        ))}
        <li>
          <div className="flex items-center">
            <span className="font-semibold text-gray-700">{currentPage}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
