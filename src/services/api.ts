import axios from "axios";

const baseURL = "https://tinytales.trendline.marketing/api";
console.log("BASE URL:", process.env.NEXT_PUBLIC_API_URL)


export const api = axios.create({
  baseURL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});
