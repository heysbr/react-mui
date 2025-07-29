// Design system colors and configuration
export const COLORS = {
  primary: "#0A1B2B",
  secondary: "#475467", 
  success: "#4caf50",
  error: "#f44336",
  warning: "#FDB022",
  background: "#F9FAFB",
  surface: "#FFFFFF",
  border: "#EAECF0",
  tableHeader: "#FAFAFA",
  chipBackground: "#F4F3FF",
  chipBlue: "#ECEDFE",
  chipBlueText: "#5056D6",
  hover: "rgba(234, 236, 240, 0.4)",
  button: "#6366F1",
  buttonHover: "#5856eb",
};

// Table view variants
export const TABLE_VARIANTS = {
  SIMPLE: 'simple',
  EXPANDABLE: 'expandable'
};

// Column configurations for each variant
export const COLUMN_CONFIGS = {
  [TABLE_VARIANTS.SIMPLE]: [
    { label: "Buyer", width: "25%", align: "left" },
    { label: "Offer received", width: "12%" },
    { label: "Status", width: "10%" },
    { label: "Total Offer value", width: "13%" },
    { label: "+/- to Ask Price", width: "12%" },
    { label: "Avg. Offer (ea)", width: "12%" },
    { label: "Offer expiry", width: "11%" },
    { label: "Action", width: "15%" },
  ],
  [TABLE_VARIANTS.EXPANDABLE]: [
    { label: "Company", width: "18%", align: "left" },
    { label: "Offer received", width: "9%" },
    { label: "Status", width: "8%" },
    { label: "Offer Qty", width: "8%" },
    { label: "Total Offer value", width: "11%" },
    { label: "+/- to Ask Price", width: "10%" },
    { label: "Offer type", width: "9%" },
    { label: "Avg. Offer (ea)", width: "9%" },
    { label: "Offer expiry", width: "8%" },
    { label: "Lines in Offer", width: "8%" },
    { label: "", width: "7%" },
  ]
};
