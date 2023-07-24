export const form1 = [
  {
    id: 1,
    name: 'title',
    type: 'text',
    placeholder: 'ex: UX UI Designer',
    errorMessage: 'Please enter job title',
    label: 'Job title',
    require: true,
    className: 'col-span-2',
  },
  {
    id: 2,
    name: 'company',
    type: 'text',
    placeholder: 'ex: Google',
    errorMessage: 'Please enter company name',
    label: 'Company name',
    require: true,
    className: 'col-span-2',
  },
  {
    id: 3,
    name: 'industry',
    type: 'text',
    placeholder: 'ex: Information Technology',
    errorMessage: 'Please enter industry name',
    label: 'Industry',
    require: true,
    className: 'col-span-2',
  },
  {
    id: 4,
    name: 'location',
    type: 'text',
    placeholder: 'ex: Chennai',
    label: 'Location',
    className: 'col-span-2 md:col-span-1',
  },
  {
    id: 5,
    name: 'remoteType',
    type: 'text',
    placeholder: 'ex: In-office',
    label: 'Remote Type',
    className: 'col-span-2 md:col-span-1',
  },
]

export const form2 = [
  {
    name: 'experienceMin',
    type: 'text',
    label: 'Experience',
    placeholder: 'Minimum',
  },
  {
    name: 'experienceMax',
    type: 'text',
    label: 'Experience',
    placeholder: 'Maximum',
    labelHidden: true,
  },
  {
    name: 'salaryMin',
    type: 'text',
    label: 'Salary',
    placeholder: 'Minimum',
  },
  {
    name: 'salaryMax',
    type: 'text',
    label: 'Salary',
    placeholder: 'Maximum',
    labelHidden: true,
  },
  {
    name: 'totalEmployee',
    type: 'text',
    placeholder: 'ex: 100',
    label: 'Total Employee',
    className: 'col-span-2',
  },
  {
    name: 'applyType',
    type: 'radio', // Specify the type as "radio"
    label: 'Apply Type',
    options: [
      { value: 'quick_apply', label: 'Quick Apply' },
      { value: 'external_apply', label: 'External Apply' },
    ],
    className: 'col-span-2',
  },
]
