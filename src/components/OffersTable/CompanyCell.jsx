import React, { memo } from "react";
import { Box, Typography, Chip, Avatar } from "@mui/material";
import Image from "next/image";
import verified from "@/assets/verified.svg";
import { COLORS } from "./constants";
import ProfileDummy from "@/assets/Profile.png";

/**
 * Unified company cell component for both table variants
 */
const CompanyCell = memo(
  ({ row, showOfferChip = false, offerNumber = "001" }) => (

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: 0.5,
        marginLeft: "10px"
      }}
    >
      {showOfferChip && (
        <Chip
          label={`offer #${offerNumber}`}
          size="small"
          sx={{
            backgroundColor: COLORS.chipBlue,
            color: COLORS.chipBlueText,
            fontSize: "10px",
            fontWeight: 500,
            borderRadius: "8px",
            height: "18px",
            width: "fit-content",
          }}
        />
      )}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>


        <Box sx={{ position: "relative",m: 0,p: 0, height: "40px", }}>
          <Image
            src={ProfileDummy}
            alt="Company Logo"
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
          <Image
            src={verified}
            alt="Verified"
            width={16}
            height={16}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              zIndex: 50,
            }}
          />
        </Box>

        <Typography variant="body2" sx={{ fontWeight: "400", mb: 0.5, display: "flex", gap: "8px", alignItems: "center" }}>
          {row.companyName}
          <span style={{ fontWeight: "normal" }}>★{row.rating}</span>
        </Typography>
      </Box>
    </Box>
  )
);

CompanyCell.displayName = "CompanyCell";

export default CompanyCell;
