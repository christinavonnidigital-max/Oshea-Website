import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { ENQUIRY_SERVICES, RESPONSE_TIME } from '../data/enquiries';

const fieldClass = 'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-primary-700 focus:ring-2 focus:ring-primary-700';

const ContactPage: React.FC = () => {
  const [params] = useSearchParams();
  const requestedService = params.get('service');
  const initialService = ENQUIRY_SERVICES.some((item) => item.value === requestedService) ? requestedService! : 'general';
  const [status, setStatus] = useState('');
  const [manualCopy, setManualCopy] = useState('');
  const [copying, setCopying] = useState(false);

  const handleEnquiry = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const service = ENQUIRY_SERVICES.find((item) => item.value === fields.get('service'))?.label || 'General enquiry';
    const body = [
      'Full name: ' + fields.get('fullName'),
      'Email: ' + fields.get('email'),
      'Organisation: ' + (fields.get('company') || 'Not provided'),
      'Service: ' + service,
      '',
      String(fields.get('message') || ''),
    ].join('\n');
    const subject = service + ' enquiry';
    const action = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    setManualCopy('');
    if (action?.value === 'copy') {
      const message = 'To: info@oshea.co.za\nSubject: ' + subject + '\n\n' + body;
      setCopying(true);
      setStatus('Copying enquiry…');
      try {
        await navigator.clipboard.writeText(message);
        setStatus('Enquiry copied. Paste it into your email app or webmail and send it to info@oshea.co.za. Nothing has been sent by this website.');
      } catch {
        setManualCopy(message);
        setStatus('Automatic copying is unavailable. Select and copy the enquiry below, then paste it into your email app or webmail. Nothing has been sent.');
      } finally {
        setCopying(false);
      }
      return;
    }
    window.location.href = 'mailto:info@oshea.co.za?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    setStatus('Your enquiry has not been sent by this website. Please send the prepared message in your email app. If no app opened, choose Copy enquiry to use webmail.');
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact O'Shea SA | ISO Certification & Compliance Support</title>
        <meta name="description" content="Enquire about ISO certification, inspection, audits or training. Share your requirements with O'Shea SA or contact our team directly." />
        <meta property="og:title" content="Contact O'Shea SA" />
        <meta property="og:description" content="Discuss your certification, inspection or training requirements with O'Shea SA." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1423666639041-f142afb94e90?auto=format&fit=crop&w=1200&q=80" />
        <link rel="canonical" href="https://www.oshea.co.za/contact" />
      </Helmet>
      <PageHero title="Talk to an expert" subtitle={RESPONSE_TIME} compact />
      <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5 lg:gap-12">
          <div id="enquiry" className="scroll-mt-24 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-8 lg:col-span-3">
            <h2 className="text-2xl font-bold text-slate-900">Your enquiry</h2>
            <p className="mt-2 mb-6 text-sm text-slate-600">Prepare an email or copy your enquiry into webmail, then send it to our team. Fields marked * are required.</p>
            <form onSubmit={handleEnquiry} onInput={() => { setStatus(''); setManualCopy(''); }} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-700">Full name *</label><input id="fullName" name="fullName" type="text" autoComplete="name" required maxLength={120} className={fieldClass} /></div>
                <div><label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email address *</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} /></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="company" className="mb-2 block text-sm font-semibold text-slate-700">Organisation (optional)</label><input id="company" name="company" type="text" autoComplete="organization" maxLength={160} className={fieldClass} /></div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-700">Service *</label>
                  <select key={initialService} id="service" name="service" defaultValue={initialService} required className={fieldClass}>{ENQUIRY_SERVICES.map((item) => <option key={item.value} value={item.value}>{item.shortLabel}</option>)}</select>
                </div>
              </div>
              <div><label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">How can we help? *</label><textarea id="message" name="message" rows={4} required maxLength={4000} placeholder="Include your standard or service, location and preferred dates." className={fieldClass + ' resize-y'} /></div>
              <p className="text-sm leading-relaxed text-slate-600">Please include business enquiry details only. Read our <Link to="/privacy" className="font-semibold text-primary-700 underline underline-offset-4">privacy notice</Link> for how these details are handled.</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="submit" name="action" value="email" disabled={copying} className="flex-1 rounded-lg bg-primary-700 px-5 py-3 font-semibold text-white transition hover:bg-primary-800 disabled:opacity-60">Prepare email enquiry</button>
                <button type="submit" name="action" value="copy" disabled={copying} className="rounded-lg border border-primary-700 bg-white px-5 py-3 font-semibold text-primary-700 transition hover:bg-blue-50 disabled:opacity-60">{copying ? 'Copying…' : 'Copy enquiry'}</button>
              </div>
              <p className="text-sm leading-relaxed text-slate-600" role="status" aria-live="polite">{status || 'Using webmail? Copy your enquiry and paste it into a new email to info@oshea.co.za. You will still need to send it.'}</p>
              {manualCopy && <div>
                <label htmlFor="copyEnquiry" className="mb-2 block text-sm font-semibold text-slate-700">Your enquiry — select and copy</label>
                <textarea id="copyEnquiry" readOnly rows={9} value={manualCopy} onFocus={(event) => event.currentTarget.select()} className={fieldClass + ' resize-y'} />
              </div>}
            </form>
          </div>
          <aside aria-label="Direct contact details" className="space-y-7 lg:col-span-2 lg:pt-3">
            <div><h2 className="text-2xl font-bold text-slate-900">Prefer to contact us directly?</h2><p className="mt-3 text-slate-600 leading-relaxed">{RESPONSE_TIME} For urgent enquiries, please call.</p></div>
            <div><h3 className="font-bold text-slate-900">Email</h3><a href="mailto:info@oshea.co.za" className="mt-2 inline-block font-medium text-primary-700 underline underline-offset-4">info@oshea.co.za</a></div>
            <div><h3 className="font-bold text-slate-900">Telephone</h3><a href="tel:+27102107715" className="mt-2 inline-block font-medium text-primary-700 underline underline-offset-4">+27 10 210 7715</a></div>
            <div><h3 className="font-bold text-slate-900">Headquarters</h3><address className="mt-2 text-sm not-italic leading-relaxed text-slate-600">Unit RG0-002, Ground Floor<br />Roland Garros Building, The Campus<br />57 Sloane Street, Bryanston<br />South Africa</address></div>
            <p className="border-t border-slate-200 pt-6 text-sm text-slate-600">In cooperation with <strong>TÜV NORD CERT GmbH</strong>. <Link to="/services#certification" className="text-primary-700 underline underline-offset-4">Discuss certification scope</Link>.</p>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
