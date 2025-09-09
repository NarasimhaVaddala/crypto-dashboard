# 🚀 Crypto Dashboard

A simple yet elegant **Cryptocurrency Dashboard**.

The dashboard fetches real-time price details of **Bitcoin (BTC)**, **Ethereum (ETH)**, and **Dogecoin (DOGE)**, displaying them in interactive cards.

Clicking on any card reveals a **trending chart** powered by Chart.js at the bottom of the cards, giving users insights into the coin’s performance in last **6 hours**.

---

## ✨ Features

- **Crypto Overview Cards** – Displays details of BTC, ETH, and DOGE.
- **Interactive Chart** – Clicking a card shows a live trend chart below.
- **Auto Fetch Prices** – Auto Fetch **prices** for every 30 seconds.
- **Modern UI** – Styled with **Tailwind CSS** for a clean, responsive design.
- **Type Safety** – Built with **TypeScript** for reliable code.
- **Charting Library** – Integrated with **Chart.js** for dynamic data visualization.

---

## 🌐 API

- Used CoinGecko Api as mentioned for realtime changes of prices.
- Used demo version of CoinGecko which has 10,000 monthly requests limit

---

## 🛠️ Tech Stack

- **React** – UI library
- **TypeScript** – Type safety
- **Chart.js** – Charts & visualization
- **Tailwind CSS** – Styling

---

## 📷 Demo Preview

**Dashboard Layout:**

- Top section: 3 crypto cards (BTC, ETH, DOGE)
- Bottom section: Trending chart appears on card click

![Dashboard Screenshot](./screenshot.png)

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash

# Signup and Obtain api key from Coingecko
https://www.coingecko.com

# Clone the repository
git clone https://github.com/NarasimhaVaddala/crypto-dashboard

# Navigate into the project folder
cd crypto-dashboard

# Install dependencies
npm install

# Run development server
npm run dev
```
