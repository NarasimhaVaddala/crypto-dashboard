import { TrendingDown, TrendingUp } from "lucide-react";
import type { CardProps } from "@/types";

export default function Card({ image, name, data, onClick }: CardProps) {
  const change = data?.usd_24h_change ?? 0;
  const isPositive = change >= 0;

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-2xl p-6 flex items-center justify-between h-[130px] transition-all duration-300
        ${"bg-white/5 border border-gray-700 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:scale-[1.01]"}`}
    >
      <div className="h-12 w-12 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-2 text-white">
        <div className="flex items-center gap-3">
          <h2 className={`font-semibold text-2xl ${"text-gray-200"}`}>
            $ {data?.usd.toLocaleString("en-IN")}
          </h2>
          <h3 className="font-medium text-sm text-gray-400">{name}</h3>
        </div>

        <div className="flex items-center gap-2">
          {isPositive ? (
            <TrendingUp className="w-5 h-5 text-green-400" />
          ) : (
            <TrendingDown className="w-5 h-5 text-red-400" />
          )}
          <p>
            <span
              className={`text-sm ${
                isPositive ? "text-green-400" : "text-red-400"
              }`}
            >
              {change.toFixed(2)}%
            </span>{" "}
            <span className="text-xs">in last 24 hours</span>
          </p>
        </div>
      </div>
    </div>
  );
}
