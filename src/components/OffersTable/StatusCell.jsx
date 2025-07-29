import { memo } from 'react';
import { Chip, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { COLORS } from './constants';

const StatusCell = memo(({ status }) => (
  <Chip
    label={
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <CircleIcon sx={{ fontSize: "8px", color: COLORS.warning }} />
        {status}
      </Box>
    }
    sx={{
      backgroundColor: "#FFFFFF",
      color: COLORS.primary,
      border: `1.5px solid ${COLORS.statusBorder}`,
      fontWeight: "500",
      fontSize: "12px",
    }}
  />
));

StatusCell.displayName = 'StatusCell';

export default StatusCell;
