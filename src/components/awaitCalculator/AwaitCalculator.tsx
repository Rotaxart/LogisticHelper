"use client";
import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";

interface AwaitCalcProps {
  cnyRate: number;
}

export const AwaitCalculator: FC<AwaitCalcProps> = ({ cnyRate }) => {
  const [days, setDays] = useState<number>(0);
  const [cny, setCny] = useState<number>(cnyRate);
  const [volume, setVolume] = useState<number>(0);
  const [price, setPrice] = useState<number>(600);

  return (
    <>
      <Grid container spacing={2}>
        <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <TextField
            id="outlined-basic"
            label="Days"
            variant="outlined"
            type="number"
            sx={{ m: 1 }}
            onChange={(e) => setDays(Number(e.target.value))}
          />
          <TextField
            id="outlined-basic"
            label="Volume"
            variant="outlined"
            type="number"
            sx={{ m: 1 }}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            defaultValue="600"
            sx={{ m: 1 }}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <TextField
            id="outlined-basic"
            label="Cny Rate"
            variant="outlined"
            type="number"
            defaultValue={cnyRate}
            sx={{ m: 1 }}
            onChange={(e) => setCny(Number(e.target.value))}
          />
        </Box>
        <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography sx={{ m: 1, mb: 4 }}>
            {" "}
            {`(${days} * ${price} * ${volume}) / (${cny} * 0.95) = ${
              (days * (price * volume)) / (cny * 0.95)
            }
            `}
          </Typography>
          <Typography sx={{ m: 1 }}>{`CNY/RUB: ${cny}`}</Typography>
          <Typography sx={{ m: 1 }}>{`CNY per day: ${
            (price * volume) / (cny * 0.95)
          }`}</Typography>
          <Divider />
          <Typography sx={{ mt: 1, m: 1 }} variant="h5">{`Total: ${
            (days * (price * volume)) / (cny * 0.95)
          } CNY`}</Typography>
        </Box>
      </Grid>
    </>
  );
};
