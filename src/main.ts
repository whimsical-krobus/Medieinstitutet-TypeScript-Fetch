import { createHtml } from "./htmlUtils";
import type { OmdbResponse } from "./models/OmdbResponse";
import "./style.css";

fetch("")
  .then((response) => response.json())
  .then((data: OmdbResponse) => {
    createHtml(data.Search);
  });
