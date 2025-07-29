import React, { memo } from 'react';
import { Typography } from "@mui/material";
import { formatPercentage } from './utils';

/**
 * Unified percentage cell component with color formatting
 */
const PercentageCell = memo(({ value }) => {
  const formatted = formatPercentage(value);
  
  if (formatted === "-") {
    return <Typography>-</Typography>;
  }

  return (
    <Typography sx={{ 
      color: formatted.color, 
      fontWeight: "bold" 
    }}>
      {formatted.value}
    </Typography>
  );
});

PercentageCell.displayName = 'PercentageCell';

export default PercentageCell;
