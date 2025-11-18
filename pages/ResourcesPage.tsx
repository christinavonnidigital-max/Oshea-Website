import type { FC } from 'react';
import Resources from '../components/Resources';
import Seo from '../components/Seo';

const ResourcesPage: FC = () => {
  return (
    <>
      <Seo
        title="Resources & Downloads"
        description="Access free guides, checklists, and templates for ISO 9001, FSSC 22000, and more. Helpful tools for your certification journey from O'Shea SA."
        keywords="ISO resources, certification checklists, FSSC 22000 guide, ISO 9001 checklist, O'Shea SA downloads"
      />
      <Resources />
    </>
  );
};

export default ResourcesPage;