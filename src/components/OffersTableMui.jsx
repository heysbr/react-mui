"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import sampleData from "./data"; // Your data file
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row.companyName}
        </TableCell>
        <TableCell align="right">{row.offerReceived}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.offerQty}</TableCell>
        <TableCell align="right">
          ${row.totalOfferValue.toLocaleString()}
        </TableCell>
        <TableCell align="right">{row.askPricePercentage}%</TableCell>
        <TableCell align="right">{row.offerType}</TableCell>
        <TableCell align="right">{`${row.expiryDate} ${row.expiryTime}`}</TableCell>
        <TableCell align="right">{row.linesInOffer}</TableCell>
        <TableCell>
          {row.hasDetails && (
            <IconButton size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          )}
        </TableCell>
      </TableRow>

      {row.hasDetails && (
        <TableRow>
          <TableCell style={{}} colSpan={10}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                Additional Details : <br />
                {row.rating} / 5 <br />
                {row.avgOffer} <br />
                {row.action} <br />
                {row.companyInitials} <br />
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align="right">Offer Received</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Offer Qty (g)</TableCell>
            <TableCell align="right">Total Offer Value</TableCell>
            <TableCell align="right">+/- to Ask Price (%)</TableCell>
            <TableCell align="right">Offer Type</TableCell>
            <TableCell align="right">Offer Expiry</TableCell>
            <TableCell align="right">Lines in Offer</TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
