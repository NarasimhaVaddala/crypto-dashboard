import { useEffect, useState } from "react";
import { getSimplePriceData, getCoinHistoryUSD } from "../Services/SimpleData";
import type { PriceData } from "@/types";
export const useDataHook = () => {
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [history, setHistory] = useState<[number, number][]>([]);
  const [cardLoading, setCardLoading] = useState<boolean>(false);
  const [chartLoading, setChartLoading] = useState<boolean>(false);
  const [cardsError, setCardsError] = useState<string | null>(null);
  const [chartError, setChartError] = useState<string | null>(null);
  const [coin, setCoin] = useState("bitcoin");

  const getCardData = async () => {
    setCardLoading(true);
    try {
      const priceData = await getSimplePriceData();
      setPriceData(priceData);
    } catch (error) {
      setCardsError("Failed to Fetch Price Data");
    } finally {
      setCardLoading(false);
    }
  };

  const getChartData = async () => {
    setChartLoading(true);
    try {
      const data = await getCoinHistoryUSD(coin);
      setHistory(data);
    } catch (error) {
      setChartError(`Failed to Fetch ${coin} Price History`);
    } finally {
      setChartLoading(false);
    }
  };

  useEffect(() => {
    getCardData();
    getChartData();

    const intervalId = setInterval(() => {
      getCardData();
      getChartData();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    getChartData();
  }, [coin]);

  return {
    priceData,
    history,
    cardLoading,
    chartLoading,
    cardsError,
    chartError,
    getCardData,
    getChartData,
    coin,
    setCoin,
  };
};
