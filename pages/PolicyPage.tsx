import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';

const PolicyPage: React.FC<{ kind: 'privacy' | 'terms' }> = ({ kind }) => {
  const privacy = kind === 'privacy';
  const title = privacy ? 'Privacy notice' : 'Website information';
  const analyticsConfigured = Boolean(import.meta.env.VITE_GA_MEASUREMENT_ID);

  return (
    <Layout>
      <Helmet>
        <title>{title} | O'Shea SA</title>
        <meta name="description" content={privacy ? 'How this website handles email enquiries and browser requests.' : "Contact details, service information and quotation enquiries for O'Shea SA."} />
        <link rel="canonical" href={`https://www.oshea.co.za/${privacy ? 'privacy' : 'terms'}`} />
      </Helmet>
      <PageHero title={title} compact />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-10 text-slate-600 leading-relaxed sm:px-6 sm:py-14">
        <p className="text-sm">Updated 17 October 2026</p>
        {privacy ? <>
          <section><h2 className="mb-3 text-xl font-bold text-slate-900">Who to contact</h2><p>This website presents O'Shea SA's services. For questions about personal information or your enquiry, contact <a href="mailto:info@oshea.co.za" className="text-primary-700 underline underline-offset-4">info@oshea.co.za</a> or call <a href="tel:+27102107715" className="text-primary-700 underline underline-offset-4">+27 10 210 7715</a>.</p><p className="mt-3">The listed office is Unit RG0-002, Ground Floor, Roland Garros Building, The Campus, 57 Sloane Street, Bryanston, South Africa.</p></section>
          <section><h2 className="mb-3 text-xl font-bold text-slate-900">Email enquiries</h2><p>The enquiry form uses your full name, email address, selected service, message and optional organisation name to prepare an email addressed to info@oshea.co.za. These fields are held in the current page and are not submitted to a form-processing server or saved in browser storage by this website.</p><p className="mt-3">Selecting “Prepare email enquiry” passes the details to your email app. Selecting “Copy enquiry” writes the recipient, subject and enquiry details to your clipboard so you can paste them into webmail. If copying is unavailable, the website displays the message for manual copying. Copying does not send the enquiry. You decide whether to send the email. If you send it, the message is handled by your email provider and the recipient's email service, and is available to O'Shea SA to respond to your enquiry. You can instead contact us directly without completing the form.</p><p className="mt-3">Please avoid including identity documents, financial details or other sensitive information in an initial enquiry. For questions about access, correction, deletion, retention or further use of your correspondence, contact the team using the details above.</p></section>
          <section><h2 className="mb-3 text-xl font-bold text-slate-900">Website requests and external resources</h2><p>This site is hosted on Vercel. Pages load fonts from Google Fonts, styling from the Tailwind CDN, and images from Unsplash. Requests to the host and these providers can include your IP address and browser information. Their processing is separate from the email enquiry workflow.</p><p className="mt-3"><a href="https://vercel.com/legal/privacy-policy" className="text-primary-700 underline underline-offset-4">Vercel privacy notice</a>, <a href="https://policies.google.com/privacy" className="text-primary-700 underline underline-offset-4">Google privacy policy</a>, <a href="https://unsplash.com/privacy" className="text-primary-700 underline underline-offset-4">Unsplash privacy policy</a>.</p></section>
          <section><h2 className="mb-3 text-xl font-bold text-slate-900">Analytics and browser storage</h2><p>{analyticsConfigured ? 'Google Analytics is configured for this version of the website. It can receive browsing events and use cookies or similar identifiers. See Google’s privacy policy above and use your browser settings to manage cookies.' : 'Google Analytics is not configured for this version of the website. The enquiry form does not write cookies or local storage. The hosting platform and external resource providers may handle technical request information as described above.'}</p></section>
        </> : <>
          <section><h2 className="mb-3 text-xl font-bold text-slate-900">Service information and enquiries</h2><p>This website outlines certification, inspection, audit and training services. For available standards, locations, delivery arrangements, fees and service conditions, request a written proposal from O'Shea SA.</p></section>
          <section><h2 className="mb-3 text-xl font-bold text-slate-900">Certification and accreditation details</h2><p>Contact the team for the applicable accreditation certificate, scope and certification body details for the service you need.</p></section>
          <section><h2 className="mb-3 text-xl font-bold text-slate-900">Contacting the team</h2><p>The enquiry form prepares a message in your email app. You must send it there to contact the team. The website does not confirm email delivery. For urgent enquiries, call +27 10 210 7715.</p></section>
          <section><h2 className="mb-3 text-xl font-bold text-slate-900">Questions about this website</h2><p>For corrections, service documents or questions about website content, email <a href="mailto:info@oshea.co.za" className="text-primary-700 underline underline-offset-4">info@oshea.co.za</a>. Information about enquiry data and external website resources is provided in our <Link to="/privacy" className="text-primary-700 underline underline-offset-4">privacy notice</Link>.</p></section>
        </>}
        <Link to="/contact" className="inline-flex rounded-full bg-primary-700 px-6 py-3 font-semibold text-white hover:bg-primary-800">Talk to an expert</Link>
      </article>
    </Layout>
  );
};

export default PolicyPage;
