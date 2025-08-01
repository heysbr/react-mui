import React, { memo, useState } from 'react';
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
  IconButton,
  Collapse,
  Tab
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
    offer: 800.00,
    avgPercentage: 6.3, 
    totalValue: 7000.00, 
    avgOffer: 795.00, 
    percentage: 6.3, 
    action: "Select",
    subOffers: [
      {
        lineNumber: "001-A",
        product: "Sub Offer 1",
        availableQty: 100,
        askPrice: 750.00,
        offer: 780.00,
        avgPercentage: 4.0,
        totalValue: 3500.00,
        avgOffer: 775.00,
        percentage: 4.0,
        action: "Select",
      },
      {
        lineNumber: "001-B",
        product: "Sub Offer 2",
        availableQty: 100,
        askPrice: 762.00,
        offer: 820.00,
        avgPercentage: 7.6,
        totalValue: 3500.00,
        avgOffer: 815.00,
        percentage: 7.6,
        action: "Select",
      }
    ]
  },
  {
    lineNumber: "002",
    product: "Apple iPhone 11 128GB A-1",
    availableQty: 200,
    askPrice: 756.00,
    offer: 800.00,
    avgPercentage: 6.3, 
    totalValue: 7000.00, 
    avgOffer: 795.00, 
    percentage: 6.3, 
    action: "Select",
    subOffers: [
      {
        lineNumber: "001-A",
        product: "Sub Offer 1",
        availableQty: 100,
        askPrice: 750.00,
        offer: 780.00,
        avgPercentage: 4.0,
        totalValue: 3500.00,
        avgOffer: 775.00,
        percentage: 4.0,
        action: "Select",
      },
      {
        lineNumber: "001-B",
        product: "Sub Offer 2",
        availableQty: 100,
        askPrice: 762.00,
        offer: 820.00,
        avgPercentage: 7.6,
        totalValue: 3500.00,
        avgOffer: 815.00,
        percentage: 7.6,
        action: "Select",
      }
    ]
  },
];


const ExpandedTable = memo(({ rowId }) => {
  const data = EXPANDED_DATA; // In real app, this would be dynamic based on rowId
  const [expandedRows, setExpandedRows] = useState(new Set());

  const handleExpandClick = (lineNumber) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(lineNumber)) {
      newExpandedRows.delete(lineNumber);
    } else {
      newExpandedRows.add(lineNumber);
    }
    setExpandedRows(newExpandedRows);
  };

  return (
    <Box sx={{ backgroundColor: "#EAECF0", p: 0 }}>
      <Table size="small">
        <TableHead>
          <TableRow sx={{
            "& .MuiTableCell-head": {
              fontSize: "11px",
              fontWeight: "500",
              color: "#475467",
              backgroundColor: "#EAECF0",
              padding: "8px 12px",
              textAlign: "center",
            }
          }}>
            <TableCell>Line #</TableCell>
            <TableCell>Product</TableCell>
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
          {data.map((line, index) => (
            <React.Fragment key={line.lineNumber}>
              <TableRow 
                sx={{
                  "& .MuiTableCell-body": {
                    backgroundColor: "#FFFFFF",
                    fontSize: "12px",
                    color: "#374151",
                    padding: "12px",
                    textAlign: "center",
                    borderBottom: "1px solid #E5E7EB",
                  }
                }}
              >
                <TableCell rowSpan={1} sx={{ textAlign: "left ", fontWeight: "500" }}>
                  {line.lineNumber}
                </TableCell>
                <TableCell rowSpan={1} sx={{ textAlign: "left " }}>
                  {line.product}
                </TableCell>
                <TableCell rowSpan={1}>
                  {line.availableQty}
                </TableCell>
                <TableCell rowSpan={1}>
                  {formatCurrency(line.askPrice)}
                </TableCell>
                <TableCell rowSpan={1}>
                  {formatCurrency(line.offer)}
                </TableCell>
                <TableCell rowSpan={1}>
                  {formatCurrency(line.offer - line.askPrice)}
                </TableCell>
                <TableCell rowSpan={1}>
                  {line.availableQty}
                </TableCell>
                <TableCell rowSpan={1}>
                  {formatCurrency(line.totalValue)}
                </TableCell>
                <TableCell rowSpan={1}>
                  {formatCurrency(line.avgOffer)}
                </TableCell>
                <TableCell rowSpan={1}>
                  <Typography sx={{ 
                    color: line.avgPercentage >= 0 ? "#10B981" : "#EF4444",
                    fontWeight: "600"
                  }}>
                    {line.avgPercentage >= 0 ? "+" : ""}{line.avgPercentage}%
                  </Typography>
                </TableCell>
                <TableCell>
                  <FormControl size="small" sx={{ minWidth: 80 }}>
                    <Select
                      value={line.action}
                      sx={{
                        fontSize: "12px",
                        color: line.action === "Accept" ? "#10B981" : "#6B7280",
                        fontWeight: line.action === "Accept" ? "600" : "400",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: line.action === "Accept" ? "#10B981" : "#D1D5DB",
                        }
                      }}
                    >
                      <MenuItem value="Select">Select</MenuItem>
                      <MenuItem value="Accept">Accept</MenuItem>
                      <MenuItem value="Reject">Reject</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  {line.subOffers && line.subOffers.length > 0 && (
                    <IconButton 
                      size="small"
                      onClick={() => handleExpandClick(line.lineNumber)}
                      sx={{
                        transform: expandedRows.has(line.lineNumber) ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <ExpandMoreIcon sx={{ fontSize: "16px" }} />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
              
              {/* Sub-offers rows - directly in the same table structure */}
              {expandedRows.has(line.lineNumber) && line.subOffers && line.subOffers.map((subOffer, subIndex) => (
                <TableRow 
                  key={`${line.lineNumber}-${subOffer.lineNumber}`}
                  sx={{
                    "& .MuiTableCell-body": {
                      backgroundColor: "#F9FAFB",
                      fontSize: "12px",
                      color: "#374151",
                      padding: "8px 12px",
                      textAlign: "center",
                      borderBottom: "1px solid #E5E7EB",
                    }
                  }}
                >
                  <TableCell sx={{ textAlign: "left", fontWeight: "500" }}>
                    -
                  </TableCell>
                  <TableCell sx={{ textAlign: "left" }}>
                    {subOffer.product}
                  </TableCell>
                  <TableCell>
                    -
                  </TableCell>
                  <TableCell>
                    -
                  </TableCell>
                  <TableCell>
                    {formatCurrency(subOffer.offer)}
                  </TableCell>
                  <TableCell>
                    -
                  </TableCell>
                  <TableCell>
                    {subOffer.availableQty}
                  </TableCell>
                  <TableCell>
                    {formatCurrency(subOffer.totalValue)}
                  </TableCell>
                  <TableCell>
                    -
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ 
                      color: subOffer.avgPercentage >= 0 ? "#10B981" : "#EF4444",
                      fontWeight: "600"
                    }}>
                      {subOffer.avgPercentage >= 0 ? "+" : ""}{subOffer.avgPercentage}%
                    </Typography>
                  </TableCell>
                  <TableCell>
                    -
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="text"
                      size="small"
                      sx={{ 
                        textTransform: "none",
                        color: "#6366F1",
                        textDecoration: "underline",
                        fontSize: "12px",
                        "&:hover": { backgroundColor: "transparent" }
                      }}
                    >
                      Goto Offer
                    </Button>
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
