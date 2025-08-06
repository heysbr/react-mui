import React, { useState, memo, useCallback, useMemo } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableHeader from './TableHeader';
import TableFooter from './TableFooter';
import TableRowComponent from './TableRowComponent';
import { 
  COLORS, 
  TABLE_VARIANTS, 
  COLUMN_CONFIGS 
} from './constants';

/**
 * Modern, optimized offers table component with multiple view modes
 */
const OffersTable = memo(({ 
  offers = [], 
  title = "Offers received by Buyers",
  variant = TABLE_VARIANTS.SIMPLE,
  onExportData,
  onActionChange,
  onSubmit,
  onVariantChange,
  showVariantSwitch = false,
}) => {
  const [expandedRowId, setExpandedRowId] = useState(null);

  // Memoized column configuration
  const columnHeaders = useMemo(() => 
    COLUMN_CONFIGS[variant] || COLUMN_CONFIGS[TABLE_VARIANTS.SIMPLE], 
    [variant]
  );

  // Optimized event handlers
  const handleExpandClick = useCallback((rowId) => {
    setExpandedRowId(prev => prev === rowId ? null : rowId);
  }, []);

  const handleExportData = useCallback(() => {
    console.log('Exporting offers data...');
    onExportData?.(variant, offers);
  }, [onExportData, variant, offers]);

  const handleActionChange = useCallback((rowId, action) => {
    console.log('Action changed:', { rowId, action });
    onActionChange?.(rowId, action, variant);
  }, [onActionChange, variant]);

  const handleSubmit = useCallback(() => {
    console.log('Submitting offers...');
    onSubmit?.(variant, offers);
  }, [onSubmit, variant, offers]);

  const handleVariantChange = useCallback((newVariant) => {
    setExpandedRowId(null); // Reset expansion when switching
    onVariantChange?.(newVariant);
  }, [onVariantChange]);

  return (
    <Paper elevation={0} sx={{
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    }}>
      <TableHeader 
        title={title}
        offersCount={offers.length}
        onExportData={handleExportData}
        variant={variant}
        showVariantSwitch={showVariantSwitch}
        onVariantChange={handleVariantChange}
        currentVariant={variant}
      />

      <TableContainer sx={{
        borderBottomLeftRadius: variant === TABLE_VARIANTS.EXPANDABLE ? "0px" : "8px",
        borderBottomRightRadius: variant === TABLE_VARIANTS.EXPANDABLE ? "0px" : "8px",
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
                textAlign: "center",
                borderBottom: `1px solid ${COLORS.border}`,
                padding: "16px 8px",
              },
              "& .company-column-header": {
                textAlign: "left",
                paddingLeft: "20px",
                
              }
            }}>
              {columnHeaders.map((header, index) => (
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
                variant={variant}
                expandedRowId={expandedRowId}
                onExpandClick={handleExpandClick}
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
