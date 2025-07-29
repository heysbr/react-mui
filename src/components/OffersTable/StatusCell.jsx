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
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <CircleIcon sx={{ fontSize: "8px", color: getStatusColor(status) }} />
          {status}
        </Box>
      }
      sx={{
        backgroundColor: COLORS.surface,
        color: COLORS.primary,
        border: `1.5px solid #FEC84B`,
        fontWeight: "500",
        fontSize: "12px",
        ...(variant === 'expandable' && {
          minWidth: '80px'
        })
      }}
    />
  );
});

StatusCell.displayName = 'StatusCell';

export default StatusCell;
