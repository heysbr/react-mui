"use client";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import OffersTable from "@/components/OffersTable/OffersTable";
import { TABLE_VARIANTS } from "@/components/OffersTable/constants";

const sampleData = [
  {
    id: 1,
    lineNumber: 1,
    product: "Apple iPhone 11 128GB A-1",
    availableQty: 100,
    askPrice: 756.00,
    status: "Active",
    noOfOffers: 3,
    avgOfferValue: 750.00,
    askPricePercentage: 2.0,
  },
  {
    id: 2,
    lineNumber: 1,
    product: "Apple iPhone 11 128GB A-1",
    availableQty: 100,
    askPrice: 756.00,
    status: "Active",
    noOfOffers: 3,
    avgOfferValue: 750.00,
    askPricePercentage: 2.0,
  },
  {
    id: 3,
    lineNumber: 1,
    product: "Apple iPhone 11 128GB A-1",
    availableQty: 100,
    askPrice: 756.00,
    status: "Active",
    noOfOffers: 3,
    avgOfferValue: 750.00,
    askPricePercentage: 2.0,
  },
  
];

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  }
});

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      Hello world
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Offers received by product */}
        <OffersTable 
          offers={sampleData} 
          title="Offers received by Product"
          variant={TABLE_VARIANTS.offersReceivedByProduct}
        />
      </Container>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Offers  */}
        <OffersTable 
          offers={sampleData} 
          title="Offers received by Buyers"
          variant={TABLE_VARIANTS.NEW_TASK_TABLE_2}
        />
      </Container>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Phone Bid International  */}
        <OffersTable 
          offers={sampleData} 
          title="Offers received by Buyers"
          variant={TABLE_VARIANTS.NEW_TASK_TABLE_3}
        />
      </Container>
    </ThemeProvider>
  );
}
