import express from "express";
import setupSwagger from "./swagger.js";
import clientesRouter from "./routes/clientes.js";
import concessionariaRouter from "./routes/concessionaria.js";
import veiculosRouter from "./routes/veiculos.js";
import ordensRouter from "./routes/ordens.js";

const app = express();
app.use(express.json());


app.use("/clientes", clientesRouter);

app.use("/concessionaria", concessionariaRouter);

app.use("/veiculos", veiculosRouter);

app.use("/ordens", ordensRouter);

// 
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

