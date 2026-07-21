export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'checkbox' | 'date' | 'time' | 'number';
  required: boolean;
  placeholder?: string;
  options?: string[];
}

export const incidentReportForm: FormField[] = [
  { id: 'incident-date', label: 'Incident Date', type: 'date', required: true },
  { id: 'incident-time', label: 'Incident Time', type: 'time', required: true },
  { id: 'location', label: 'Location', type: 'text', required: true, placeholder: 'Enter incident location' },
  { id: 'incident-type', label: 'Incident Type', type: 'select', required: true, options: ['Assault', 'Theft', 'Burglary', 'Traffic', 'Other'] },
  { id: 'description', label: 'Description', type: 'textarea', required: true, placeholder: 'Provide detailed incident description' },
  { id: 'injuries', label: 'Any injuries?', type: 'checkbox', required: false },
  { id: 'witnesses', label: 'Witnesses Present', type: 'text', required: false, placeholder: 'Names and contact details' },
];

export const stopSearchForm: FormField[] = [
  { id: 'search-date', label: 'Search Date', type: 'date', required: true },
  { id: 'search-time', label: 'Search Time', type: 'time', required: true },
  { id: 'person-name', label: 'Person Name', type: 'text', required: true },
  { id: 'search-reason', label: 'Reason for Search', type: 'textarea', required: true },
  { id: 'items-found', label: 'Items Found', type: 'textarea', required: false },
  { id: 'consent', label: 'Consent Given', type: 'checkbox', required: true },
];
