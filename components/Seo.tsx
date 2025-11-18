import { useEffect } from 'react';
import type { FC } from 'react';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  structuredData?: object;
}

const Seo: FC<SeoProps> = ({ title, description, keywords, structuredData }) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | O'Shea SA`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Manage JSON-LD structured data
    const scriptId = 'json-ld-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (structuredData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    } else if (scriptTag) {
      scriptTag.remove();
    }

  }, [title, description, keywords, structuredData]);

  return null; // This component does not render anything to the DOM
};

export default Seo;