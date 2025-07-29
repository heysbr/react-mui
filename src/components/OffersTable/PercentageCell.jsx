import { memo } from 'react';
import { Typography } from "@mui/material";
import { formatPercentage } from './utils';

const PercentageCell = memo(({ value }) => {
  const formatted = formatPercentage(value);
  
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
