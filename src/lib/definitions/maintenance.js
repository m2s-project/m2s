export const maintenance = {
  maintenance_id: "",
  type: "",
  name: "",
  equipment_id: "",
  date_created: "",
  frequency: "",
  status: "",
  technicians: [
    {
      id: "",
      name: "",
    },
  ],
  estimated_cost: {
    labor: 0,
    parts: 0,
    total: 0,
  },
  actual_cost: null,
  spare_parts_used: [
    {
      part_id: "",
      name: "",
      quantity: 0,
    },
  ],
  estimated_duration: "",
  actual_duration: null,
  maintenance_report: null,
  next_maintenance_date: "",
  risk_analysis: "",
  maintenance_history: [
    {
      maintenance_id: "",
      date: "",
      technicians: [
        {
          id: "",
          name: "",
        },
      ],
      result: "",
    },
  ],
  instructions: "",
  kpi_tracking: {
    MTTR: "",
    MTBF: "",
  },
  supervisor_approval: false,
};
