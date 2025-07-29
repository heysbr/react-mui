import React, { memo } from 'react';
import { Box, Typography, Chip, Avatar } from "@mui/material";
import Image from "next/image";
import verified from "@/assets/verified.svg";
import { COLORS } from './constants';

/**
 * Company cell component displaying company info with avatar and rating
 */
const CompanyCell = memo(({ row }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: 0.5,
    }}
  >
    <Chip
      label="offer #001"
      size="small"
      sx={{
        backgroundColor: COLORS.chipBlue,
        color: COLORS.chipBlueText,
        fontWeight: 500,
        borderRadius: "8px",
      }}
    />
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Avatar
        sx={{
          width: 40,
          height: 40,
        }}
      >
        {row.companyInitials}
        <Image
          src={verified}
          alt="Verified"
          width={16}
          height={16}
          className="absolute bottom-0 right-0 z-50"
        />
      </Avatar>
      <Typography variant="body2" sx={{ fontWeight: "400", mb: 0.5 }}>
        {row.companyName}{" "}
        <span className="font-normal">&#9733;{row.rating}</span>
      </Typography>
    </Box>
  </Box>
));

CompanyCell.displayName = 'CompanyCell';

export default CompanyCell;
