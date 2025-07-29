import React, { memo, useCallback } from 'react';
import { Box, FormControl, Select, MenuItem, Button } from "@mui/material";
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from "@mui/icons-material";

/**
 * Unified action cell component with different behaviors
 */
const ActionCell = memo(({ 
  row, 
  onActionChange,
  variant = 'simple' // 'simple' or 'expandable'
}) => {
  const isCounterAction = row.action === "Counter";

  const handleChange = useCallback((event) => {
    onActionChange?.(row.id, event.target.value);
  }, [row.id, onActionChange]);

  // For expandable variant, show different action types
  if (variant === 'expandable' && row.action === "Go to offer") {
    return (
      <Button
        variant="text"
        size="small"
        sx={{ 
          textTransform: "none",
          color: "#6366F1",
          textDecoration: "underline",
          "&:hover": { backgroundColor: "transparent" }
        }}
        onClick={() => onActionChange?.(row.id, row.action)}
      >
        {row.action}
      </Button>
    );
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <FormControl
        size="small"
        sx={{
          minWidth: variant === 'expandable' ? 80 : 120,
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
            fontSize: "0.875rem",
            color: row.action === "Accept" ? "#10B981" : "#475467",
            fontWeight: row.action === "Accept" ? "600" : "400",
            py: 0.5,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: row.action === "Accept" ? "#10B981" : "#D1D5DB",
            }
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
