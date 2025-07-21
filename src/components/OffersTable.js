import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import {Box, Typography, Button, Chip, Avatar, Select, MenuItem, FormControl, Paper, } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon, } from "@mui/icons-material";
import Image from "next/image";
import verified from "../assets/verified.svg"; 
import CircleIcon from "@mui/icons-material/Circle";

const OffersTable = ({offers = [], title = "Offers received by Buyers", }) => {
  
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
          <span className="font-normal">★{params.row.rating}</span>
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
      headerName: "Buyer",
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
      field: "totalOfferValue",
      headerName: "Total Offer value",
      flex: 1,
      renderCell: (params) => formatCurrency(params.value),
    },
    {
      field: "askPricePercentage",
      headerName: "+/- to Ask Price",
      flex: 1,
      renderCell: (params) => formatPercentage(params.value),
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
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" textAlign="center">
          {params.row.expiryDate}
          <br />
          {params.row.expiryTime}
        </Typography>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1.5,
      renderCell: renderActionCell,
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
        </Box>
        <Button
          variant="outlined"
          startIcon={<CloudDownloadIcon />}
          sx={{
            textTransform: "none",
            borderColor: "#D0D5DD",
            borderRadius: "8px",
            boxShadow: "1",
          }}
          color="#0A1B2B"
        >
          Export Offer data
        </Button>
      </Box>

      <DataGrid
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
      />
    </Paper>
  );
};

export default OffersTable;
