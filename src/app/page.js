"use client";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import OffersTable from "@/components/OffersTable";
import { TABLE_VARIANTS } from "@/components/OffersTable/constants";

const sampleData = [
  {
    id: 1,
    companyName: "Phone Bid International",
    companyInitials: "PBI",
    rating: 4.5,
    offerReceived: new Date("2025-01-26"),
    status: "Pending",
    offerQty: 40,
    totalOfferValue: 100000,
    askPricePercentage: 2.0,
    avgOffer: 350.65,
    expiryDate: "1 Mar 2025",
    expiryTime: "11:00am AEST",
    offerType: "Multi-line",
    linesInOffer: 3,
    action: "Select",
    hasDetails: true,
  },
  {
    id: 2,
    companyName: "Phone Bid",
    companyInitials: "PB",
    rating: 4.1,
    offerReceived: new Date("2025-01-27"),
    status: "Pending",
    offerQty: 40,
    totalOfferValue: 40000,
    askPricePercentage: -2.8,
    avgOffer: 360.65,
    expiryDate: "1 Mar 2025",
    expiryTime: "11:00am AEST",
    offerType: "Individual",
    linesInOffer: 2,
    action: "Counter",
  },
  {
    id: 3,
    companyName: "Phone Bid",
    companyInitials: "PB",
    rating: 4.1,
    offerReceived: new Date("2025-01-25"),
    status: "Pending",
    offerQty: 40,
    totalOfferValue: 22000,
    askPricePercentage: 12.7,
    avgOffer: 275.0,
    expiryDate: "1 Mar 2025",
    expiryTime: "11:00am AEST",
    offerType: "Individual",
    linesInOffer: 1,
    action: "Select",
  },
  {
    id: 4,
    companyName: "International",
    companyInitials: "I",
    rating: 4.1,
    offerReceived: new Date("2025-01-26"),
    status: "Pending",
    offerQty: 40,
    totalOfferValue: 288000,
    askPricePercentage: 3.7,
    avgOffer: 720.0,
    expiryDate: "1 Mar 2025",
    expiryTime: "11:00am AEST",
    offerType: "Individual",
    linesInOffer: 3,
    action: "Select",
  },
];

const theme = createTheme({
  typography: {
    fontFamily: "Outfit",
  }
});

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <OffersTable 
          offers={sampleData} 
          title="Offers received by Buyers"
          variant={TABLE_VARIANTS.SIMPLE}
        />
      </Container>
    </ThemeProvider>
  );
}
