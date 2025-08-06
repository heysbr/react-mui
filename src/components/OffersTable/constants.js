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
  SIMPLE: "simple",
  EXPANDABLE: "expandable",
  offersReceivedByProduct: "offersReceivedByProduct",
  OFFER: "OFFER",
  NEW_TASK_TABLE_3: "new_task_table_3",
};

// Column configurations for each variant
export const COLUMN_CONFIGS = {
  [TABLE_VARIANTS.SIMPLE]: [
    { label: "Buyer", width: "20%", align: "left" },
    { label: "Offer received", width: "12%" },
    { label: "Status", width: "10%" },
    { label: "Total Offer value", width: "13%" },
    { label: "+/- to Ask Price", width: "12%" },
    { label: "Avg. Offer (ea)", width: "12%" },
    { label: "Offer expiry", width: "11%" },
    { label: "Action", width: "15%" },
  ],
  [TABLE_VARIANTS.EXPANDABLE]: [
    { label: "Company", align: "left" },
    { label: "Offer received", },
    { label: "Status", },
    { label: "Offer Qty", },
    { label: "Total Offer value",  },
    { label: "+/- to Ask Price",  },
    { label: "Offer type", },
    { label: "Avg. Offer (ea)", },
    { label: "Offer expiry", },
    { label: "Lines in Offer", },
    { label: "", },
  ],
  [TABLE_VARIANTS.offersReceivedByProduct]: [
    { label: "Line #", align: "left" },
    { label: "Product",  },
    { label: "Available Qty",  },
    { label: "Ask Price(ea)",  },
    { label: "no of Offers",  },
    { label: "Avg Offer Value", },
    { label: "+/- to Ask Price",  },
    { label: "",  },
  ],
  [TABLE_VARIANTS.OFFER]: [
    { label: "Buyer #", align: "left" },
    { label: "Offer received",  },
    { label: "Status",  },
    { label: "Offer Qty",  },
    { label: "Offer(ea)",  },
    { label: "+/- to Ask Price",  },
    { label: "Total Offer Value",  },
    { label: "Offer type", },
    { label: "Lines in Offer", },
    { label: "", },

  ],
  [TABLE_VARIANTS.NEW_TASK_TABLE_3]: [
    { label: "Line #", align: "left" },
    { label: "Product",  },
    { label: "Status",  },
    { label: "Available Qty",  },
    { label: "Ask Price(ea)",  },
    { label: "no of Offers",  },
    { label: "Avg Offer Value", },
    { label: "+/- to Ask Price",  },
  ],
};
