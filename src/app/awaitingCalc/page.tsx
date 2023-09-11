import { AwaitCalculator } from "@/components/awaitCalculator/AwaitCalculator";
import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";

const getRates = async () => {
  try {
    const res = await fetch("https://www.cbr-xml-daily.ru/latest.js", {
      next: { revalidate: 60 * 60 },
    });

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

const AwaitCalc: FC = async () => {
  const rates = await getRates();
  console.log(rates);
  const cnyRate = 1 / rates.rates.CNY;
  return (
    <Box>
      <Typography variant="h4" sx={{ padding: "1rem" }}>
        Calculator
      </Typography>
      <Divider />
      <AwaitCalculator cnyRate={Number(cnyRate.toFixed(4))} />
    </Box>
  );
};

export default AwaitCalc;
