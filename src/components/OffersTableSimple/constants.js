// Color palette and design tokens
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
};

// Table column configuration
export const COLUMN_HEADERS = [
  { label: "Buyer", width: "25%", align: "left" },
  { label: "Offer received", width: "12%" },
  { label: "Status", width: "10%" },
  { label: "Total Offer value", width: "13%" },
  { label: "+/- to Ask Price", width: "12%" },
  { label: "Avg. Offer (ea)", width: "12%" },
  { label: "Offer expiry", width: "11%" },
  { label: "Action", width: "15%" },
];

// Sample data for testing
export const SAMPLE_OFFERS = [
  {
    id: 1,
    companyName: "Phone Bid International",
    companyInitials: "PBI",
    rating: 4.5,
    offerReceived: "2024-03-15",
    status: "Pending",
    totalOfferValue: 75600,
    askPricePercentage: 6.3,
    avgOffer: 756.00,
    expiryDate: "25 Mar 2024",
    expiryTime: "11:59 PM",
    action: "Select"
  },
  {
    id: 2,
    companyName: "CY Global",
    companyInitials: "CY",
    rating: 3.8,
    offerReceived: "2024-03-14",
    status: "Active",
    totalOfferValue: 68400,
    askPricePercentage: -2.1,
    avgOffer: 684.00,
    expiryDate: "24 Mar 2024", 
    expiryTime: "08:30 AM",
    action: "Counter"
  }
];
