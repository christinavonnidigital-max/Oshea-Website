export const RESPONSE_TIME = 'We typically respond within one business day.';

export const ENQUIRY_SERVICES = [
  { value: 'certification', label: 'Management systems certification' },
  { value: 'inspection', label: 'Inspection & audits' },
  { value: 'training', label: 'Training & awareness' },
  { value: 'general', label: 'Help choosing a service' },
] as const;

export const enquiryLink = (service: string) => `/contact?service=${encodeURIComponent(service)}`;
