import React, { memo } from 'react';
import { 
  TableRow, 
  TableCell, 
  Typography, 
  Collapse 
} from "@mui/material";
import CompanyCell from './CompanyCell';
import StatusCell from './StatusCell';
import PercentageCell from './PercentageCell';
import ExpandButton from './ExpandButton';
import ExpandedTable from './ExpandedTable';
import { formatCurrency, formatDate } from './utils';
import { COLORS } from './constants';

const TableRowComponent = memo(({ 
  row, 
  expandedRowId, 
  onExpandClick 
}) => {
  const isExpanded = expandedRowId === row.id;

  return (
    <React.Fragment>
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
            borderBottom: isExpanded ? "none" : `1px solid ${COLORS.border}`,
            padding: "16px 8px",
          },
          "& .company-column-cell": {
            textAlign: "left",
          }
        }}
      >
        <TableCell className="company-column-cell">
          <CompanyCell row={row} />
        </TableCell>
        <TableCell>{formatDate(row.offerReceived)}</TableCell>
        <TableCell><StatusCell status={row.status} /></TableCell>
        <TableCell>{row.offerQty}</TableCell>
        <TableCell>{formatCurrency(row.totalOfferValue)}</TableCell>
        <TableCell><PercentageCell value={row.askPricePercentage} /></TableCell>
        <TableCell>{row.offerType}</TableCell>
        <TableCell>{formatCurrency(row.avgOffer)}</TableCell>
        <TableCell>
          <Typography variant="body2" textAlign="center">
            {row.expiryDate}<br />{row.expiryTime}
          </Typography>
        </TableCell>
        <TableCell>{row.linesInOffer}</TableCell>
        <TableCell>
          <ExpandButton 
            isExpanded={isExpanded}
            onClick={() => onExpandClick(row.id)}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell 
          colSpan={11} 
          sx={{ 
            padding: 0,
            borderBottom: `1px solid ${COLORS.border}`
          }}
        >
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <ExpandedTable rowId={row.id} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
});

TableRowComponent.displayName = 'TableRowComponent';

export default TableRowComponent;
