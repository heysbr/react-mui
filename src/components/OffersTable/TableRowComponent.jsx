import React, { memo } from 'react';
import { TableRow, TableCell, Typography, Collapse } from "@mui/material";
import CompanyCell from './CompanyCell';
import StatusCell from './StatusCell';
import PercentageCell from './PercentageCell';
import ActionCell from './ActionCell';
import ExpandButton from './ExpandButton';
import ExpandedTable from './ExpandedTable';
import { formatCurrency, formatDate } from './utils';
import { COLORS, TABLE_VARIANTS } from './constants';

/**
 * Unified table row component that adapts to different variants
 */
const TableRowComponent = memo(({ 
  row, 
  variant = TABLE_VARIANTS.SIMPLE,
  expandedRowId,
  onExpandClick,
  onActionChange 
}) => {
  const isExpanded = expandedRowId === row.id;
  // const showOfferChip = variant === TABLE_VARIANTS.EXPANDABLE;
  const showOfferChip = true;

  const renderCells = () => {
    const commonCells = [
      <TableCell key="company" className="company-column-cell">
        <CompanyCell row={row} showOfferChip={showOfferChip} />
      </TableCell>,
      <TableCell key="received">
        {formatDate(row.offerReceived)}
      </TableCell>,
      <TableCell key="status">
        <StatusCell status={row.status} variant={variant} />
      </TableCell>
    ];

    if (variant === TABLE_VARIANTS.SIMPLE) {
      return [
        ...commonCells,
        <TableCell key="totalValue" sx={{ 
          fontSize: '18px', 
          fontWeight: 500 
        }}>
          {formatCurrency(row.totalOfferValue)}
        </TableCell>,
        <TableCell key="percentage" >
          <PercentageCell value={row.askPricePercentage} />
        </TableCell>,
        <TableCell key="avgOffer" sx={{ 
          fontSize: '18px' 
        }}>
          {formatCurrency(row.avgOffer)}
        </TableCell>,
        <TableCell key="expiry">
          <Typography variant="body2" textAlign="center">
            {row.expiryDate}
            <br />
            {row.expiryTime}
          </Typography>
        </TableCell>,
        <TableCell key="action">
          <ActionCell row={row} onActionChange={onActionChange} variant={variant} />
        </TableCell>
      ];
    }

    // Expandable variant
    return [
      ...commonCells,
      <TableCell key="qty">
        {row.offerQty}
      </TableCell>,
      <TableCell key="totalValue" sx={{ 
        fontSize: '18px', 
        fontWeight: 500 
      }}>
        {formatCurrency(row.totalOfferValue)}
      </TableCell>,
      <TableCell key="percentage" >
        <PercentageCell value={row.askPricePercentage} />
      </TableCell>,
      <TableCell key="type">
        {row.offerType}
      </TableCell>,
      <TableCell key="avgOffer" sx={{ 
        fontSize: '18px' 
      }}>
        {formatCurrency(row.avgOffer)}
      </TableCell>,
      <TableCell key="expiry">
        <Typography variant="body2" textAlign="center">
          {row.expiryDate}
          <br />
          {row.expiryTime}
        </Typography>
      </TableCell>,
      <TableCell key="lines">
        {row.linesInOffer}
      </TableCell>,
      <TableCell key="expand">
        <ExpandButton 
          isExpanded={isExpanded}
          onExpandClick={onExpandClick}
          rowId={row.id}
        />
      </TableCell>
    ];
  };

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
            borderBottom: variant === TABLE_VARIANTS.EXPANDABLE && isExpanded 
              ? "none" 
              : `1px solid ${COLORS.border}`,
            padding: "16px 8px",
          },
          "& .company-column-cell": {
            textAlign: "left",
          }
        }}
      >
        {renderCells()}
      </TableRow>
      
      {variant === TABLE_VARIANTS.EXPANDABLE && (
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
      )}
    </React.Fragment>
  );
});

TableRowComponent.displayName = 'TableRowComponent';

export default TableRowComponent;
