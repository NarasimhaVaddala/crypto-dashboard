import { API } from "@/Lib/ApiUrl";

export const getSimplePriceData = async () => {
  const response = await API.get("/simple/price", {
    params: {
      ids: "bitcoin,ethereum,dogecoin",
      vs_currencies: "usd",
      include_24hr_change: "true",
    },
  });
  return response.data;
};

export async function getCoinHistoryUSD(coin: string) {
  const res = await API.get(`/coins/${coin}/market_chart`, {
    params: {
      vs_currency: "usd",
      days: 1,
    },
  });

  const prices: [number, number][] = res.data.prices;
  const last6h = prices.slice(-72);
  const step = Math.floor(last6h.length / 6);

  const fitered6hprices = [...Array(7)].map(
    (_, i) => last6h[i * step] ?? last6h[last6h.length - 1]
  );

  return fitered6hprices;
}
