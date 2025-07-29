import React, { memo } from 'react';
import { Box, Typography, Chip, Avatar } from "@mui/material";
import Image from "next/image";
import verified from "@/assets/verified.svg";
import { COLORS } from './constants';

/**
 * Unified company cell component for both table variants
 */
const CompanyCell = memo(({ 
  row, 
  showOfferChip = false, 
  offerNumber = "001" 
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: 0.5,
    }}
  >
    {showOfferChip && (
      <Chip
        label={`offer #${offerNumber}`}
        size="small"
        sx={{
          backgroundColor: COLORS.chipBlue,
          color: COLORS.chipBlueText,
          fontWeight: 500,
          borderRadius: "8px",
        }}
      />
    )}
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Avatar
        sx={{
          width: 40,
          height: 40,
          position: 'relative',
        }}
      >
        {row.companyInitials}
        <Image
          src={verified}
          alt="Verified"
          width={16}
          height={16}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 50
          }}
        />
      </Avatar>
      <Typography variant="body2" sx={{ fontWeight: "400", mb: 0.5 }}>
        {row.companyName}{" "}
        <span style={{ fontWeight: 'normal' }}>★{row.rating}</span>
      </Typography>
    </Box>
  </Box>
));

CompanyCell.displayName = 'CompanyCell';

export default CompanyCell;
