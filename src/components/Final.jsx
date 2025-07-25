
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import {Box, Typography, Button, Chip, Avatar, Select, MenuItem, FormControl, Paper, IconButton, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Collapse, } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon, } from "@mui/icons-material";
import Image from "next/image";
import verified from "@/assets/verified.svg"; 
import CircleIcon from "@mui/icons-material/Circle";

import sampleData from "./data";
import { useState } from 'react';

const Final = ({offers = [], title = "Offers received by Buyers", }) => {
  
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
  const renderCompanyCell = (params) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: 0.5,
      }}
    >
      <Chip
        // label={params.row.offerType}
        label={"offer #001"}

        size="small"
        sx={{
          backgroundColor: "#ECEDFE",
          color: "#5056D6",
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
          {params.row.companyInitials}
          <Image
            src={verified}
            alt="Verified"
            width={16}
            height={16}
            className="absolute bottom-0 right-0 z-50"
          />
        </Avatar>
        <Typography variant="body2" sx={{ fontWeight: "400", mb: 0.5 }}>
          {params.row.companyName}{" "}
          <span className="font-normal">&#9733;{params.row.rating}</span>
        </Typography>
      </Box>
    </Box>
  );

  const renderStatusCell = (params) => (
    <Chip
      label={
        <div className="flex flex-row justify-center items-center gap-x-1 ">
          <CircleIcon sx={{ fontSize: "8px", color: "#FDB022" }} />{" "}
          {params.value}
        </div>
      }
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#0A1B2B",
        border: "1.5px solid #FEC84B",
        fontWeight: "500",
        fontSize: "12px",
      }}
    />
  );

  const renderActionCell = (params) => {
    const isCounterAction = params.row.action === "Counter";

    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <FormControl
          size="small"
          sx={{
            minWidth: 120,
            "& .MuiSelect-select": {
              padding: "6px 8px",
              "&:focus": {
                outline: "none",
              },
            },
          }}
        >
          <Select
            value={params.row.action || "Select"}
            onChange={(e) => (params.row.id, e.target.value)}
            sx={{
              minWidth: 110,
              fontSize: "0.875rem",
              color: "#475467",
              py: 0.5,
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
  };

  const columns = [
    {
      field: "company",
      headerName: "Company",
      flex: 2.1,
      cellClassName: "company-column-cell",
      headerClassName: "company-column-header",
      renderCell: renderCompanyCell,
    },
    {
      field: "offerReceived",
      headerName: "Offer received",
      flex: 1,
      renderCell: (params) => {
        const date = new Date(params.value);
        return `${date.getDate()} ${date.toLocaleDateString("en-US", {
          month: "short",
        })} ${date.getFullYear()}`;
      },
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      itemClassName: "status-column-item",
      headerClassName: "status-column-header",
      renderCell: renderStatusCell,
    },
    {
      field: "offerQty",
      headerName: "Offer Qty",
      flex: 1,
    },
    {
      field: "totalOfferValue",
      headerName: "Total Offer value",
      flex: 1.2,
      renderCell: (params) => formatCurrency(params.value),
    },
    {
      field: "askPricePercentage",
      headerName: "+/- to Ask Price",
      flex: 1,
      renderCell: (params) => formatPercentage(params.value),
    },
    {
      field: "offerType",
      headerName: "Offer type",
      flex: 1,
    },
    {
      field: "avgOffer",
      headerName: "Avg. Offer (ea)",
      flex: 1,
      renderCell: (params) => formatCurrency(params.value),
    },
    {
      field: "offerExpiry",
      headerName: "Offer expiry",
      flex: 0.8,
      renderCell: (params) => (
        <Typography variant="body2" textAlign="center">
          {params.row.expiryDate}
          <br />
          {params.row.expiryTime}
        </Typography>
      ),
    },
    {
      field: "linesInOffer",
      headerName: "Lines in Offer",
      flex: 0.9,
    },
    {
      field: "btn",
      headerName: "",
      flex: 0.9,
      renderCell: (params) => (
        <IconButton>
          <ExpandCircleDownIcon fontSize='large'  sx={{ color: '#344054' }} />
        </IconButton>
      ),
    },
  ];

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
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "600", color: "#0A1B2B" }}>
            {title}
          </Typography>
          <Chip
            label={`${offers.length} Offers`}
            sx={{
              backgroundColor: "#F4F3FF",
              fontWeight: "500",
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

      {/* <DataGrid
        rows={offers}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        disableColumnMenu
        disableColumnSorting
        disableAutosize
        disableRowSelectionOnClick
        hideFooter
        rowHeight={98}
        sx={{
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          borderTop: "0px",

          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },

          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
            {
              outline: "none",
            },

          "& .MuiDataGrid-cell": {
            color: "#0A1B2B",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },

          "& .MuiDataGrid-row": {
            "&:hover": {
              backgroundColor: "rgba(234, 236, 240, 0.4)",
            },
          },
          "& .MuiDataGrid-columnHeader": {
            fontWeight: "500",
            fontSize: "12px",
            display: "flex",
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            justifyContent: "center",
            color: "#475467",
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .company-column-cell": {
            justifyContent: "start",
          },
          "& .company-column-header .MuiDataGrid-columnHeaderTitleContainer": {
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
          },
        }}
      /> */}
      <TableContainer component={Paper}>
      <Table sx={{ borderCollapse: "collapse" }}>
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
    </Paper>
  );
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{  }}>
        <TableCell component="th" scope="row">
          {row.companyName}
        </TableCell>
        <TableCell align="right">{row.offerReceived}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.offerQty}</TableCell>
        <TableCell align="right">
          ${row.totalOfferValue}
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
        <TableRow  >
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 , borderCollapse: "collapse"}} colSpan={10}>
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

export default Final;
