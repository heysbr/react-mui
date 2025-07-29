import React, { memo } from 'react';
import { 
  Box, 
  Table, 
  TableHead, 
  TableBody, 
  TableRow, 
  TableCell, 
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  IconButton
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { formatCurrency } from './utils';
import { COLORS } from './constants';

// Sample expanded data - in real app, this would come from props or API
const EXPANDED_DATA = [
  {
    lineNumber: "001",
    product: "Apple iPhone 11 128GB A-1",
    availableQty: 200,
    askPrice: 756.00,
    offers: [
      { 
        company: "Phone Bid International", 
        companyInitials: "PBI", 
        rating: 4.5, 
        offer: 800.00, 
        percentage: 6.3, 
        qty: 10, 
        totalValue: 7000.00, 
        avgOffer: 795.00, 
        avgPercentage: 6.3, 
        action: "Select" 
      },
    ]
  },
  {
    lineNumber: "002", 
    product: "Apple iPhone 11 128GB A-2",
    availableQty: 200,
    askPrice: "Undefined",
    offers: [
      { 
        company: "Phone Bid International", 
        companyInitials: "PBI", 
        rating: 4.5, 
        offer: 800.00, 
        percentage: "-", 
        qty: 10, 
        totalValue: 7000.00, 
        avgOffer: 795.00, 
        avgPercentage: 6.3, 
        action: "Select" 
      },
      { 
        company: "CY Global", 
        companyInitials: "CY", 
        rating: 3.8, 
        offer: 700.00, 
        percentage: "-", 
        qty: 40, 
        totalValue: 28000.00, 
        avgOffer: 0, 
        avgPercentage: 12.3, 
        action: "Go to offer" 
      },
    ]
  }
];

/**
 * Expanded table showing detailed breakdown for selected offers
 */
const ExpandedTable = memo(({ rowId }) => {
  const data = EXPANDED_DATA; // In real app, this would be dynamic based on rowId

  return (
    <Box sx={{ backgroundColor: "#F8F9FA", p: 2 }}>
      <Table size="small">
        <TableHead>
          <TableRow sx={{
            "& .MuiTableCell-head": {
              fontSize: "11px",
              fontWeight: "500",
              color: "#6B7280",
              backgroundColor: "#F1F5F9",
              padding: "8px 12px",
              textAlign: "center",
            }
          }}>
            <TableCell sx={{ textAlign: "left !important" }}>Line #</TableCell>
            <TableCell sx={{ textAlign: "left !important" }}>Product</TableCell>
            <TableCell>Available Qty</TableCell>
            <TableCell>Ask Price (ea)</TableCell>
            <TableCell>Offer (ea)</TableCell>
            <TableCell>+/- to Ask Price</TableCell>
            <TableCell>Offer Qty</TableCell>
            <TableCell>Total Line Value</TableCell>
            <TableCell>Avg offer received (ea)</TableCell>
            <TableCell>+/- to Avg offer</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Other buyers offers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((line) => (
            <React.Fragment key={line.lineNumber}>
              {line.offers.map((offer, index) => (
                <TableRow 
                  key={`${line.lineNumber}-${index}`}
                  sx={{
                    "& .MuiTableCell-body": {
                      fontSize: "12px",
                      color: "#374151",
                      padding: "12px",
                      textAlign: "center",
                      borderBottom: "1px solid #E5E7EB",
                    }
                  }}
                >
                  {index === 0 && (
                    <>
                      <TableCell rowSpan={line.offers.length} sx={{ textAlign: "left !important", fontWeight: "500" }}>
                        {line.lineNumber}
                      </TableCell>
                      <TableCell rowSpan={line.offers.length} sx={{ textAlign: "left !important" }}>
                        {line.product}
                      </TableCell>
                      <TableCell rowSpan={line.offers.length}>
                        {line.availableQty}
                      </TableCell>
                      <TableCell rowSpan={line.offers.length}>
                        {typeof line.askPrice === 'number' ? formatCurrency(line.askPrice) : line.askPrice}
                      </TableCell>
                    </>
                  )}
                  <TableCell>{formatCurrency(offer.offer)}</TableCell>
                  <TableCell>
                    {offer.percentage !== "-" ? (
                      <Typography sx={{ 
                        color: offer.percentage >= 0 ? "#10B981" : "#EF4444",
                        fontWeight: "600"
                      }}>
                        {offer.percentage >= 0 ? "+" : ""}{offer.percentage}%
                      </Typography>
                    ) : "-"}
                  </TableCell>
                  <TableCell>{offer.qty}</TableCell>
                  <TableCell>{formatCurrency(offer.totalValue)}</TableCell>
                  <TableCell>{offer.avgOffer > 0 ? formatCurrency(offer.avgOffer) : "-"}</TableCell>
                  <TableCell>
                    <Typography sx={{ 
                      color: "#10B981",
                      fontWeight: "600"
                    }}>
                      {offer.avgPercentage}%
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {offer.action === "Go to offer" ? (
                      <Button
                        variant="text"
                        size="small"
                        sx={{ 
                          textTransform: "none",
                          color: "#6366F1",
                          textDecoration: "underline",
                          "&:hover": { backgroundColor: "transparent" }
                        }}
                      >
                        {offer.action}
                      </Button>
                    ) : (
                      <FormControl size="small" sx={{ minWidth: 80 }}>
                        <Select
                          value={offer.action}
                          sx={{
                            fontSize: "12px",
                            color: offer.action === "Accept" ? "#10B981" : "#6B7280",
                            fontWeight: offer.action === "Accept" ? "600" : "400",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: offer.action === "Accept" ? "#10B981" : "#D1D5DB",
                            }
                          }}
                        >
                          <MenuItem value="Select">Select</MenuItem>
                          <MenuItem value="Accept">Accept</MenuItem>
                          <MenuItem value="Reject">Reject</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  </TableCell>
                  <TableCell>
                    {index === 0 && line.offers.length > 1 && (
                      <IconButton size="small">
                        <ExpandMoreIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
});

ExpandedTable.displayName = 'ExpandedTable';

export default ExpandedTable;
