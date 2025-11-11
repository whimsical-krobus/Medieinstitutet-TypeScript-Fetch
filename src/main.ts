import { createHtml } from "./htmlUtils";
import type { OmdbResponse } from "./models/OmdbResponse";
import "./style.css";

fetch(import.meta.env.VITE_API_URL)
  .then((response) => response.json())
  .then((data: OmdbResponse) => {
    createHtml(data.Search);
  });
