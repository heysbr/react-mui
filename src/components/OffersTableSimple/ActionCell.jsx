import React, { memo, useCallback } from 'react';
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from "@mui/icons-material";

/**
 * Action cell component with dropdown selection
 */
const ActionCell = memo(({ row, onActionChange }) => {
  const isCounterAction = row.action === "Counter";

  const handleChange = useCallback((event) => {
    onActionChange?.(row.id, event.target.value);
  }, [row.id, onActionChange]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <FormControl
        size="small"
        sx={{
          minWidth: 120,
          "& .MuiSelect-select": {
            padding: "6px 8px",
            "&:focus": {
              outline: "none",
            },
          },
        }}
      >
        <Select
          value={row.action || "Select"}
          onChange={handleChange}
          sx={{
            minWidth: 110,
            fontSize: "0.875rem",
            color: "#475467",
            py: 0.5,
          }}
          IconComponent={isCounterAction ? ExpandLessIcon : ExpandMoreIcon}
        >
          <MenuItem value="Select">Select</MenuItem>
          <MenuItem value="Accept">Accept</MenuItem>
          <MenuItem value="Reject">Reject</MenuItem>
          <MenuItem value="Counter">Counter</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
});

ActionCell.displayName = 'ActionCell';

export default ActionCell;
