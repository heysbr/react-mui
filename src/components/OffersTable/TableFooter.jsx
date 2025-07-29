import React, { memo } from 'react';
import { Box, Button } from "@mui/material";
import { COLORS } from './constants';

/**
 * Table footer component for expandable variant
 */
const TableFooter = memo(({ onSubmit }) => (
  <Box sx={{ 
    display: 'flex', 
    justifyContent: 'flex-end', 
    p: 3,
    backgroundColor: COLORS.background,
    borderTop: `1px solid ${COLORS.border}`
  }}>
    <Button
      variant="contained"
      onClick={onSubmit}
      sx={{
        backgroundColor: COLORS.button,
        "&:hover": { backgroundColor: COLORS.buttonHover },
        textTransform: "none",
        px: 4,
        py: 1.5,
        borderRadius: "8px",
        fontWeight: "500"
      }}
    >
      Submit response
    </Button>
  </Box>
));

TableFooter.displayName = 'TableFooter';

export default TableFooter;
