"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  Paper,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CircleIcon from "@mui/icons-material/Circle";
import verified from "@/assets/verified.svg";
import Image from "next/image";

const OffersTableMui = ({ offers = [], title = "Offers received by Buyers" }) => {
  // For this example, we'll keep local state for action selections
  const [actions, setActions] = useState(
    offers.reduce((acc, offer) => {
      acc[offer.id] = offer.action || "Select";
      return acc;
    }, {})
  );

  const handleActionChange = (id, value) => {
    setActions((prev) => ({ ...prev, [id]: value }));
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const formatPercentage = (value) => {
    const color = value >= 0 ? "#4caf50" : "#f44336";
    return (
      <Typography sx={{ color, fontWeight: "bold" }}>
        {value >= 0 ? "+" : ""}
        {value}%
      </Typography>
    );
  };

  return (
    <Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          backgroundColor: "#F9FAFB",
          border: "1px solid #EAECF0",
          borderRadius: "8px",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#0A1B2B" }}>
            {title}
          </Typography>
          <Chip
            label={`${offers.length} Offers`}
            sx={{
              backgroundColor: "#F4F3FF",
              fontWeight: 500,
              color: "#0A1B2B",
              fontSize: "12px",
            }}
          />
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              borderColor: "#D0D5DD",
              borderRadius: "8px",
            }}
            color="#0A1B2B"
          >
            Switch to product view
          </Button>
        </Box>
        <Button
          variant="outlined"
          startIcon={<CloudDownloadIcon />}
          sx={{
            textTransform: "none",
            borderColor: "#D0D5DD",
            borderRadius: "8px",
          }}
          color="#0A1B2B"
        >
          Export Offer data
        </Button>
      </Box>

      <TableContainer>
        <Table sx={{ minWidth: 650, borderRadius: "0 0 8px 8px" }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
              <TableCell sx={{ fontWeight: 600, fontSize: 12, color: "#475467" }}>
                Company
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 12, color: "#475467" }}>
                Offer received
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 12, color: "#475467" }}>
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 12, color: "#475467" }}>
                Offer Qty
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 12, color: "#475467" }}>
                Total Offer value
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 12, color: "#475467" }}>
                +/- to Ask Price
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 12, color: "#475467" }}>
                Offer type
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 12, color: "#475467" }}>
                Avg. Offer (ea)
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 12, color: "#475467" }}>
                Offer expiry
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 12, color: "#475467" }}>
                Lines in Offer
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {offers.map((offer) => {
              const date = new Date(offer.offerReceived);
              const offerDateStr = `${date.getDate()} ${
                date.toLocaleDateString("en-US", { month: "short" })
              } ${date.getFullYear()}`;

              return (
                <TableRow
                  key={offer.id}
                  sx={{
                    "&:hover": { backgroundColor: "rgba(234, 236, 240, 0.4)" },
                    height: 98,
                  }}
                >
                  {/* Company cell */}
                  <TableCell sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <Chip
                      label={`offer #${offer.offerNumber || "001"}`}
                      size="small"
                      sx={{
                        backgroundColor: "#ECEDFE",
                        color: "#5056D6",
                        fontWeight: 500,
                        borderRadius: "8px",
                        width: "fit-content",
                      }}
                    />
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 0.5 }}>
                      <Avatar sx={{ width: 40, height: 40, position: "relative" }}>
                        {offer.companyInitials}
                        <Image
                          src={verified}
                          alt="Verified"
                          width={16}
                          height={16}
                          className="absolute bottom-0 right-0 z-50"
                          style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                          }}
                        />
                      </Avatar>
                      <Typography variant="body2" sx={{ fontWeight: 400, mb: 0.5 }}>
                        {offer.companyName}{" "}
                        <span style={{ fontWeight: "normal" }}>
                          &#9733;{offer.rating}
                        </span>
                      </Typography>
                    </Box>
                  </TableCell>

                  {/* Offer received date */}
                  <TableCell align="center">{offerDateStr}</TableCell>

                  {/* Status */}
                  <TableCell align="center">
                    <Chip
                      label={
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                            fontWeight: 500,
                            fontSize: "12px",
                          }}
                        >
                          <CircleIcon sx={{ fontSize: 8, color: "#FDB022" }} />
                          {offer.status}
                        </Box>
                      }
                      sx={{
                        backgroundColor: "#FFFFFF",
                        color: "#0A1B2B",
                        border: "1.5px solid #FEC84B",
                      }}
                    />
                  </TableCell>

                  {/* Offer Qty */}
                  <TableCell align="center">{offer.offerQty}</TableCell>

                  {/* Total Offer value */}
                  <TableCell align="center">{formatCurrency(offer.totalOfferValue)}</TableCell>

                  {/* +/- to Ask Price */}
                  <TableCell align="center">{formatPercentage(offer.askPricePercentage)}</TableCell>

                  {/* Offer type */}
                  <TableCell align="center">{offer.offerType}</TableCell>

                  {/* Avg. Offer (ea) */}
                  <TableCell align="center">{formatCurrency(offer.avgOffer)}</TableCell>

                  {/* Offer Expiry */}
                  <TableCell align="center">
                    <Typography variant="body2" textAlign="center">
                      {offer.expiryDate}
                      <br />
                      {offer.expiryTime}
                    </Typography>
                  </TableCell>

                  {/* Lines in offer */}
                  <TableCell align="center">{offer.linesInOffer}</TableCell>

                  {/* Action select and icon */}
                  <TableCell align="center">
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <FormControl size="small" sx={{ minWidth: 120 }}>
                        <Select
                          value={actions[offer.id]}
                          onChange={(e) => handleActionChange(offer.id, e.target.value)}
                          sx={{
                            minWidth: 110,
                            fontSize: "0.875rem",
                            color: "#475467",
                            py: 0.5,
                          }}
                          IconComponent={
                            actions[offer.id] === "Counter"
                              ? ExpandLessIcon
                              : ExpandMoreIcon
                          }
                        >
                          <MenuItem value="Select">Select</MenuItem>
                          <MenuItem value="Accept">Accept</MenuItem>
                          <MenuItem value="Reject">Reject</MenuItem>
                          <MenuItem value="Counter">Counter</MenuItem>
                        </Select>
                      </FormControl>

                      <IconButton>
                        <ExpandCircleDownIcon fontSize="large" sx={{ color: "#344054" }} />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default OffersTableMui;
