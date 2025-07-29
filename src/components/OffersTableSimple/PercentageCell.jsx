import React, { memo } from 'react';
import { Typography } from "@mui/material";
import { getPercentageColor } from './utils';

/**
 * Percentage cell component with color coding
 */
const PercentageCell = memo(({ value }) => {
  const color = getPercentageColor(value);
  
  return (
    <Typography sx={{ color, fontWeight: "bold" }}>
      {value >= 0 ? "+" : ""}
      {value}%
    </Typography>
  );
});

PercentageCell.displayName = 'PercentageCell';

export default PercentageCell;
