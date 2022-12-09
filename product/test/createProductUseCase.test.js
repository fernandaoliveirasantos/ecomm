import { createProductUseCase } from "../src/use-case/createProductUseCase.js";

import { produto } from "./products.js";

const product = await createProductUseCase(produto);

console.log("Produto: ", product)