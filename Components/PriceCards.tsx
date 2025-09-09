import Card from "./Card";
import type { TypeCardProps } from "../types";
export default function PriceCards({ priceData, setCoin }: TypeCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      <Card
        name="BTC"
        image="/bitcoin.svg"
        data={priceData?.bitcoin}
        onClick={() => setCoin("bitcoin")}
      />
      <Card
        name="ETH"
        image="/ethereum.svg"
        data={priceData?.ethereum}
        onClick={() => setCoin("ethereum")}
      />
      <Card
        name="DOGE"
        image="/dogecoin.svg"
        data={priceData?.dogecoin}
        onClick={() => setCoin("dogecoin")}
      />
    </div>
  );
}
