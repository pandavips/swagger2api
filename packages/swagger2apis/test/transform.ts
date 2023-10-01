import { transform } from "../src/transform.js";
import rawJSON from "./api.json" assert { type: "json" };

transform(rawJSON);
