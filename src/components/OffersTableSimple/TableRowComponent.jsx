import React, { memo } from 'react';
import { TableRow, TableCell, Typography } from "@mui/material";
import CompanyCell from './CompanyCell';
import StatusCell from './StatusCell';
import PercentageCell from './PercentageCell';
import ActionCell from './ActionCell';
import { formatCurrency, formatDate } from './utils';
import { COLORS } from './constants';

/**
 * Individual table row component
 */
const TableRowComponent = memo(({ row, onActionChange }) => (
  <TableRow 
    sx={{
      height: "98px",
      "&:hover": {
        backgroundColor: COLORS.hover,
      },
      "& .MuiTableCell-body": {
        color: COLORS.primary,
        textAlign: "center",
        verticalAlign: "middle",
        borderBottom: `1px solid ${COLORS.border}`,
      },
      "& .company-column-cell": {
        textAlign: "left",
      }
    }}
  >
    <TableCell className="company-column-cell">
      <CompanyCell row={row} />
    </TableCell>
    <TableCell>
      {formatDate(row.offerReceived)}
    </TableCell>
    <TableCell>
      <StatusCell status={row.status} />
    </TableCell>
    <TableCell>
      {formatCurrency(row.totalOfferValue)}
    </TableCell>
    <TableCell>
      <PercentageCell value={row.askPricePercentage} />
    </TableCell>
    <TableCell>
      {formatCurrency(row.avgOffer)}
    </TableCell>
    <TableCell>
      <Typography variant="body2" textAlign="center">
        {row.expiryDate}
        <br />
        {row.expiryTime}
      </Typography>
    </TableCell>
    <TableCell>
      <ActionCell row={row} onActionChange={onActionChange} />
    </TableCell>
  </TableRow>
));

TableRowComponent.displayName = 'TableRowComponent';

export default TableRowComponent;
