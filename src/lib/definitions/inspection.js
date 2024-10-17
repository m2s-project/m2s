export const inspection = {
  inspection_id: "",
  name: "",
  description: "",
  frequency: "",
  equipment_id: "",
  type: "",
  technicians: [
    {
      id: "",
      name: "",
    },
  ],
  status: "",
  date_created: "",
  last_inspection_date: "",
  next_inspection_date: "",
  results: {
    compliance: "",
    non_conformities: [],
  },
  corrective_actions: [],
  report: {
    report_id: "",
    name: "",
    url: "",
  },
  technician_comments: "",
  inspection_criteria: [],
  tools_required: [
    {
      tool_id: "",
      name: "",
    },
  ],
  supervisor_approval: false,
};
