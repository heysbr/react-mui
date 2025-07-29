import { memo } from 'react';
import { Box, Typography, Chip, Avatar } from "@mui/material";
import Image from "next/image";
import verified from "@/assets/verified.svg";
import { COLORS, SIZES } from './constants';

const CompanyCell = memo(({ row }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 0.5,
    }}
  >
    <Chip
      label={`offer #${String(row.id).padStart(3, '0')}`}
      size="small"
      sx={{
        backgroundColor: COLORS.offerChip,
        color: COLORS.offerChipText,
        fontWeight: 500,
        borderRadius: SIZES.borderRadius,
      }}
    />
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Box sx={{ position: 'relative' }}>
        <Avatar
          sx={{
            width: SIZES.avatar,
            height: SIZES.avatar,
          }}
        >
          {row.companyInitials}
        </Avatar>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <Image
            src={verified}
            alt="Verified"
            width={16}
            height={16}
          />
        </Box>
      </Box>
      <Typography variant="body2" sx={{ fontWeight: "400" }}>
        {row.companyName}{" "}
        <Box component="span" sx={{ fontWeight: 'normal' }}>
          ★{row.rating}
        </Box>
      </Typography>
    </Box>
  </Box>
));

CompanyCell.displayName = 'CompanyCell';

export default CompanyCell;
