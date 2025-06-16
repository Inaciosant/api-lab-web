import express from "express";
import { criarConcessionaria, listarConcessionarias } from "../controllers/ConcessionariaController.js";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Concessionarias
 *   description: Rotas para gerenciar concessionárias
 */
/**
 * @swagger
 * /concessionaria:
 *   post:
 *     summary: Cria uma nova concessionária
 *     tags: [Concessionarias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - endereco
 *               - telefone
 *               - email
 *               - cnpj
 *             properties:
 *               nome:
 *                 type: string
 *               endereco:
 *                 type: string
 *               telefone:
 *                type: string
 *               email:
 *                type: string
 *               cnpj:
 *                type: string
 *     responses:
 *       201:
 *         description: Concessionária criada com sucesso
 *       400:
 *         description: Erro de validação
 */

router.post("/", criarConcessionaria);
/**
 * @swagger
 * /concessionaria:
 *   get:
 *     summary: Lista todas as concessionárias
 *     tags: [Concessionarias]
 *     responses:
 *       200:
 *         description: Lista de concessionárias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   concessionaria_id:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   endereco:
 *                     type: string
 *                   telefone:
 *                     type: string
 *                   email:
 *                     type: string
 *                   cnpj:
 *                     type: string
 *                   
 *                     
 */

router.get("/", listarConcessionarias);

export default router;
