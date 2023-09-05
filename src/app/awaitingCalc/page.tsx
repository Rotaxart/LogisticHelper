import { AwaitCalculator } from "@/components/awaitCalculator/AwaitCalculator";
import { Box, Divider, Typography } from "@mui/material";
import axios from "axios";
import { FC } from "react";

const getRates = async () => {
  try {
    const { data } = await axios.get("https://www.cbr-xml-daily.ru/latest.js");
    return data;
  } catch (error) {
    console.error(error);
  }
};

const AwaitCalc: FC = async () => {
  const rates = await getRates();
  const cnyRate = 1 / rates.rates.CNY;
  return (
    <Box>
      <Typography variant="h4" sx={{ padding: "1rem" }}>
        Calculator
      </Typography>
      <Divider />
      <AwaitCalculator cnyRate={cnyRate} />
    </Box>
  );
};

export default AwaitCalc;
