import React, { memo, useCallback } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableHeader from './OffersTableSimple/TableHeader';
import TableRowComponent from './OffersTableSimple/TableRowComponent';
import { COLORS, COLUMN_HEADERS } from './OffersTableSimple/constants';

const OffersTable = memo(({ 
  offers = [], 
  title = "Offers received by Buyers",
  onExportData,
  onActionChange,
}) => {

  const handleExportData = useCallback(() => {
    onExportData?.();
  }, [onExportData]);

  const handleActionChange = useCallback((rowId, action) => {
    onActionChange?.(rowId, action);
  }, [onActionChange]);

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
                color: COLORS.primary,
                backgroundColor: COLORS.tableHeader,
                textAlign: "center",
                borderBottom: `1px solid ${COLORS.border}`,
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
                onActionChange={handleActionChange}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
});

OffersTable.displayName = 'OffersTable';

export default OffersTable;
