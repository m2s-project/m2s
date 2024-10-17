export const intervention = {
  intervention_id: "",
  name: "",
  description: "",
  equipment_id: "",
  type: "",
  technicians: [
    {
      id: "",
      name: "",
    },
  ],
  priority: "",
  status: "",
  date_created: "",
  start_date: "",
  end_date_estimated: "",
  actual_end_date: null,
  duration: null,
  spare_parts_used: [
    {
      part_id: "",
      name: "",
      quantity: 1,
    },
  ],
  cost: {
    labor: 0,
    parts: 0,
    total: 0,
  },
  documents: [
    {
      doc_id: "",
      name: "",
      url: "",
    },
  ],
  technician_comments: "",
  risk_level: "",
  special_conditions: "",
  supervisor_approval: false,
};
