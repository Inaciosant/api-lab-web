import express from "express";
import { criarCliente, listarClientes } from "../controllers/ClientController.js";

const router = express.Router();

/**
 * @swagger
 * tag: Clientes
 * name: Clientes
 * description: Endpoints para gerenciar clientes 
 */
/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               concessionaria_id:
 *                type: integer
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *               cpf:
 *                type: string
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 */
router.post("/", criarCliente);
/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 */

router.get("/", listarClientes);

export default router;
