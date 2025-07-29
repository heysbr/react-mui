import React, { useState, memo, useCallback } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableHeader from './OffersTable/TableHeader';
import TableFooter from './OffersTable/TableFooter';
import TableRowComponent from './OffersTable/TableRowComponent';
import { COLORS } from './OffersTable/constants';

const COLUMN_HEADERS = [
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
];

const OffersTable = memo(({ 
  offers = [], 
  title = "Offers received by Buyers",
  onExportData,
  onSubmit,
}) => {
  const [expandedRowId, setExpandedRowId] = useState(null);

  const handleExpandClick = useCallback((rowId) => {
    setExpandedRowId(prev => prev === rowId ? null : rowId);
  }, []);

  const handleExportData = useCallback(() => {
    onExportData?.();
  }, [onExportData]);

  const handleSubmit = useCallback(() => {
    onSubmit?.();
  }, [onSubmit]);

  return (
    <Paper>
      <TableHeader 
        title={title}
        offersCount={offers.length}
        onExportData={handleExportData}
      />

      <TableContainer sx={{
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        borderTop: "0px",
      }}>
        <Table>
          <TableHead>
            <TableRow sx={{
              "& .MuiTableCell-head": {
                fontWeight: "500",
                fontSize: "12px",
                color: COLORS.secondary,
                backgroundColor: "#FAFAFA",
                textAlign: "center",
                borderBottom: `1px solid ${COLORS.border}`,
                padding: "16px 8px",
              },
              "& .company-column-header": {
                textAlign: "left",
              }
            }}>
              {COLUMN_HEADERS.map((header, index) => (
                <TableCell 
                  key={header.label}
                  className={index === 0 ? "company-column-header" : ""}
                  sx={{ width: header.width }}
                >
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {offers.map((row) => (
              <TableRowComponent
                key={row.id}
                row={row}
                expandedRowId={expandedRowId}
                onExpandClick={handleExpandClick}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <TableFooter onSubmit={handleSubmit} />
    </Paper>
  );
});

OffersTable.displayName = 'OffersTable';

export default OffersTable;
