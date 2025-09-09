import type React from "react";

export type CoinData = {
  usd: number;
  usd_24h_change: number;
};

export type PriceData = {
  bitcoin: CoinData;
  ethereum: CoinData;
  dogecoin: CoinData;
};

export type CardProps = {
  data: CoinData | undefined;
  name: string;
  image: string;
  onClick: () => void;
};

export type TypeCardProps = {
  priceData: PriceData | null;
  setCoin: React.Dispatch<React.SetStateAction<string>>;
};

export type ErrorDisplayProps = {
  error: string;
  onRetry: () => void;
};

export type ChartProps = {
  history: [number, number][];
  coin: string;
};

export type HeaderProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SidebarItemProps = {
  title: string;
  path: string;
  onClose: () => void;
};

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};
