import React, { memo } from 'react';
import { Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { COLORS } from './constants';

/**
 * Status cell component with colored indicator
 */
const StatusCell = memo(({ status }) => (
  <Chip
    label={
      <div className="flex flex-row justify-center items-center gap-x-1">
        <CircleIcon sx={{ fontSize: "8px", color: COLORS.warning }} />
        {status}
      </div>
    }
    sx={{
      backgroundColor: COLORS.surface,
      color: COLORS.primary,
      border: "1.5px solid #FEC84B",
      fontWeight: "500",
      fontSize: "12px",
    }}
  />
));

StatusCell.displayName = 'StatusCell';

export default StatusCell;
