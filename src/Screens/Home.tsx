import HomeHeading from "@/Components/HomeHeading";
import { useDataHook } from "../Hooks/useDataHook";
import PriceCards from "@/Components/PriceCards";
import ChartView from "@/Components/ChartView";
import Loader from "@/Components/Loader";
import ErrorDisplay from "@/Components/ErrorDisplay";

export default function Home() {
  const {
    priceData,
    history,
    cardLoading,
    chartLoading,
    cardsError,
    chartError,
    getCardData,
    getChartData,
    setCoin,
    coin,
  } = useDataHook();

  return (
    <div>
      <HomeHeading
        heading={"Dashboard"}
        subHeading={"Discover about BTC, ETH and DOGE"}
      />

      {cardLoading ? (
        <Loader />
      ) : cardsError ? (
        <ErrorDisplay error={cardsError} onRetry={getCardData} />
      ) : (
        <PriceCards priceData={priceData} setCoin={setCoin} />
      )}

      {chartLoading ? (
        <Loader />
      ) : chartError ? (
        <ErrorDisplay error={chartError} onRetry={getChartData} />
      ) : (
        <ChartView history={history} coin={coin} />
      )}
    </div>
  );
}
