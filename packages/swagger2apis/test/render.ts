import { render } from "../src/render.js";
import rawJSON from "./api.json" assert { type: "json" };

render(rawJSON, "");
