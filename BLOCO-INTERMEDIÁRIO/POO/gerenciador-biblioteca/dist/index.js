"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = __importDefault(require("./model/Livro"));
const livro1 = new Livro_1.default("dawda", "dawda", 2023);
livro1.emprestar();
livro1.emprestar();
livro1.devolver();
