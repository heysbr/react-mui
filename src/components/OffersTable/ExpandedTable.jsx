import React, { memo } from 'react';
import { 
  Box, 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  IconButton
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { formatCurrency, formatPercentage } from './utils';
import { COLORS, SAMPLE_EXPANDED_DATA } from './constants';

const ExpandedTable = memo(({ rowId }) => {
  const data = SAMPLE_EXPANDED_DATA;

  const renderActionCell = (offer) => {
    if (offer.action === "Go to offer") {
      return (
        <Button
          variant="text"
          size="small"
          sx={{ 
            textTransform: "none",
            color: COLORS.accent,
            textDecoration: "underline",
            "&:hover": { backgroundColor: "transparent" }
          }}
        >
          {offer.action}
        </Button>
      );
    }

    return (
      <FormControl size="small" sx={{ minWidth: 80 }}>
        <Select
          value={offer.action}
          sx={{
            fontSize: "12px",
            color: offer.action === "Accept" ? COLORS.success : "#6B7280",
            fontWeight: offer.action === "Accept" ? "600" : "400",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: offer.action === "Accept" ? COLORS.success : "#D1D5DB",
            }
          }}
        >
          <MenuItem value="Select">Select</MenuItem>
          <MenuItem value="Accept">Accept</MenuItem>
          <MenuItem value="Reject">Reject</MenuItem>
        </Select>
      </FormControl>
    );
  };

  const renderPercentageCell = (percentage) => {
    if (percentage === "-") return "-";
    
    const formatted = formatPercentage(percentage);
    return (
      <Typography sx={{ 
        color: formatted.color,
        fontWeight: "600"
      }}>
        {formatted.value}
      </Typography>
    );
  };

  return (
    <Box sx={{ backgroundColor: COLORS.expandedBg, p: 2 }}>
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
            {[
              "Line #", "Product", "Available Qty", "Ask Price (ea)", 
              "Offer (ea)", "+/- to Ask Price", "Offer Qty", "Total Line Value",
              "Avg offer received (ea)", "+/- to Avg offer", "Action", "Other buyers offers"
            ].map((header, index) => (
              <TableCell 
                key={header}
                sx={{ 
                  textAlign: index < 2 ? "left !important" : "center !important" 
                }}
              >
                {header}
              </TableCell>
            ))}
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
                  <TableCell>{renderPercentageCell(offer.percentage)}</TableCell>
                  <TableCell>{offer.qty}</TableCell>
                  <TableCell>{formatCurrency(offer.totalValue)}</TableCell>
                  <TableCell>{offer.avgOffer > 0 ? formatCurrency(offer.avgOffer) : "-"}</TableCell>
                  <TableCell>
                    <Typography sx={{ 
                      color: COLORS.success,
                      fontWeight: "600"
                    }}>
                      {offer.avgPercentage}%
                    </Typography>
                  </TableCell>
                  <TableCell>{renderActionCell(offer)}</TableCell>
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
