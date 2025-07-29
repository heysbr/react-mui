import React, { memo } from 'react';
import { Box, Typography, Chip, Button } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { COLORS } from './constants';

/**
 * Table header component with title, count, and export button
 */
const TableHeader = memo(({ title, offersCount, onExportData }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      p: 3,
      backgroundColor: COLORS.background,
      border: `1px solid ${COLORS.border}`,
      borderRadius: "8px",
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "0px",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "600", color: COLORS.primary }}>
        {title}
      </Typography>
      <Chip
        label={`${offersCount} Offers`}
        sx={{
          backgroundColor: COLORS.chipBackground,
          fontWeight: "500",
          color: COLORS.primary,
          fontSize: "12px",
        }}
      />
    </Box>
    <Button
      variant="outlined"
      startIcon={<CloudDownloadIcon />}
      onClick={onExportData}
      sx={{
        textTransform: "none",
        borderColor: "#D0D5DD",
        borderRadius: "8px",
        boxShadow: "1",
        color: COLORS.primary,
      }}
    >
      Export Offer data
    </Button>
  </Box>
));

TableHeader.displayName = 'TableHeader';

export default TableHeader;
