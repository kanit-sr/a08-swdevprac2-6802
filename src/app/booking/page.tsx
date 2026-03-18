"use client";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .booking-root {
          min-height: 100vh;
          background: #EDF2FB;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          font-family: 'DM Sans', sans-serif;
        }

        .booking-card {
          width: 100%;
          max-width: 520px;
          background: #F7FAFF;
          border-radius: 24px;
          padding: 40px 44px;
          box-shadow: 0 24px 60px rgba(20,60,130,0.13), 0 4px 16px rgba(20,60,130,0.07);
        }

        .booking-title {
          font-family: 'Playfair Display', serif !important;
          font-size: 2rem !important;
          font-weight: 600 !important;
          color: #0F2248 !important;
          margin-bottom: 32px !important;
          text-align: center;
        }

        /* MUI TextField overrides */
        .booking-card .MuiInput-underline:before {
          border-bottom-color: rgba(100,140,210,0.35);
        }
        .booking-card .MuiInput-underline:hover:not(.Mui-disabled):before {
          border-bottom-color: #2E5FA3;
        }
        .booking-card .MuiInput-underline:after {
          border-bottom-color: #1A3A6B;
        }
        .booking-card .MuiInputLabel-root {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6B8FBF;
        }
        .booking-card .MuiInputLabel-root.Mui-focused {
          color: #1A3A6B;
        }
        .booking-card .MuiInputBase-input {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #0F2248;
          padding-bottom: 8px;
        }
        .booking-card .MuiSelect-icon {
          color: #6B8FBF;
        }

        /* Divider between fields */
        .booking-fields {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Submit button */
        .booking-btn {
          margin-top: 8px !important;
          background: #1A3A6B !important;
          color: #EDF5FF !important;
          font-family: 'DM Sans', sans-serif !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          letter-spacing: 0.1em !important;
          text-transform: uppercase !important;
          border-radius: 999px !important;
          padding: 12px 0 !important;
          box-shadow: 0 4px 20px rgba(20,60,130,0.2) !important;
          transition: background 0.2s ease !important;
        }
        .booking-btn:hover {
          background: #2E5FA3 !important;
        }

        @media (max-width: 600px) {
          .booking-card {
            padding: 28px 20px;
          }
        }
      `}</style>

      <div className="booking-root">
        <div className="booking-card">
          <Typography className="booking-title" component="h1">
            Venue Booking
          </Typography>

          <Box component="form" className="booking-fields">
            <TextField
              name="Name-Lastname"
              label="Name-Lastname"
              variant="standard"
              fullWidth
            />

            <TextField
              name="Contact-Number"
              label="Contact-Number"
              variant="standard"
              fullWidth
            />

            <FormControl variant="standard" fullWidth>
              <InputLabel id="venue-label">Venue</InputLabel>
              <Select id="venue" labelId="venue-label" defaultValue="">
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
              </Select>
            </FormControl>

            <DateReserve />

            <Button
              variant="contained"
              name="Book Venue"
              fullWidth
              className="booking-btn"
            >
              Book Venue
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
}