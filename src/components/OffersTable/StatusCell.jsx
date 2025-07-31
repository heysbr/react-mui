import React, { memo } from 'react';
import { Chip, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { COLORS } from './constants';

/**
 * Unified status cell component with different styles based on variant
 */
const StatusCell = memo(({ 
  status, 
  variant = 'simple' // 'simple' or 'expandable'
}) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending': return COLORS.warning;
      case 'active': return COLORS.success;
      case 'expired': return COLORS.error;
      default: return COLORS.warning;
    }
  };

  return (
    <Chip
  label={
    <Box 
      sx={{ 
        display: "flex",
        alignItems: "center",
        p: 0,
        gap: 0.5, // Ensure this is 0 if you want no space between icon and text
        m: 0
      }}
    >
      <CircleIcon sx={{ fontSize: "6px", color: getStatusColor(status), m: 0 }} />
      {status}
    </Box>
  }
  sx={{
    backgroundColor: COLORS.surface,
    color: COLORS.primary,
    border: "1.5px solid #FEC84B",
    fontWeight: "500",
    fontSize: "12px",
    padding: 0,
    margin: 0,
    '& .MuiChip-label': { padding: "2px 8px", margin: "0px", lineHeight: 1 }, // Add lineHeight to reduce internal space
    minHeight: "unset", // Optionally remove default height
    height: "auto",     // Let content decide height
    '.MuiSvgIcon-root': { m: 0, p: "0px" }, // Removes extra icon margin/padding
  }}
/>

  );
});

StatusCell.displayName = 'StatusCell';

export default StatusCell;
