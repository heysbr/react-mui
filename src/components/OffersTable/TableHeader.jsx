import React, { memo } from "react";
import { Box, Typography, Chip, Button } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { COLORS, TABLE_VARIANTS } from "./constants";
import DownloadBtn from "../DownloadBtn";

/**
 * Unified table header with variant-specific features
 */
const TableHeader = memo(
  ({
    title,
    offersCount,
    onExportData,
    variant = TABLE_VARIANTS.SIMPLE,
    showVariantSwitch = false,
    onVariantChange,
    currentVariant,
  }) => (
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
        <Typography
          variant="h6"
          sx={{ fontWeight: "600", color: COLORS.primary }}
        >
          {title}
        </Typography>
        {
          // For Offer Chip
          (variant === TABLE_VARIANTS.SIMPLE ||
            variant === TABLE_VARIANTS.EXPANDABLE) && (
            <Chip
              label={`${offersCount} offers`}
              sx={{
                backgroundColor: COLORS.chipBackground,
                color: COLORS.chipBlueText,
                fontWeight: "500",
                fontSize: "12px",
              }}
            />
          )
        }

        {/* For Switch to product view btn */}
        {variant === TABLE_VARIANTS.EXPANDABLE && (
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              borderColor: "#D0D5DD",
              borderRadius: "8px",
              color: COLORS.primary,
            }}
          >
            Switch to product view
          </Button>
        )}

        {/* product view btn functionality*/}
        {/* {showVariantSwitch && (
        <Button
          variant="outlined"
          onClick={() => onVariantChange?.(
            currentVariant === TABLE_VARIANTS.SIMPLE 
              ? TABLE_VARIANTS.EXPANDABLE 
              : TABLE_VARIANTS.SIMPLE
          )}
          sx={{
            textTransform: "none",
            borderColor: "#D0D5DD",
            borderRadius: "8px",
            color: COLORS.primary,
          }}
        >
          Switch to {currentVariant === TABLE_VARIANTS.SIMPLE ? 'Expandable' : 'Simple'} View
        </Button>
      )} */}
      </Box>

      {/* Export Offer Data Button  */}
      {(variant === TABLE_VARIANTS.SIMPLE ||
        variant === TABLE_VARIANTS.EXPANDABLE) && (
        <Button
          variant="outlined"
          startIcon={<DownloadBtn />}
          onClick={onExportData}
          sx={{
            textTransform: "none",
            borderColor: "#D0D5DD",
            borderRadius: "8px",
            color: COLORS.primary,
          }}
        >
          Export Offer data
        </Button>
      )}
    </Box>
  )
);

TableHeader.displayName = "TableHeader";

export default TableHeader;
