import express from "express";
import { criarVeiculo, listarVeiculos } from "../controllers/VeiculosController.js";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Veículos
 *   description: Rotas para gerenciar veículos
 */
/**
 * @swagger
 * /veiculos:
 *   post:
 *     summary: Cria um novo veículo
 *     tags: [Veículos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - marca
 *               - modelo
 *               - ano
 *               - chassis
 *               - cor
 *               - combustivel
 *               - concessionaria_id
 *             properties:
 *               marca:
 *                 type: string
 *               modelo:
 *                 type: string
 *               ano:
 *                 type: integer
 *               chassis:
 *                 type: string
 *               cor:
 *                 type: string
 *               combustivel:
 *                 type: string
 *               concessionaria_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Veículo criado com sucesso
 */
/**
 * @swagger
 * /veiculos:
 *   get:
 *     summary: Lista todos os veículos
 *     tags: [Veículos]
 *     responses:
 *       200:
 *         description: Lista de veículos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   modelo:
 *                     type: string
 *                   ano:
 *                     type: integer
 *                   
 */

router.post("/", criarVeiculo);

router.get("/", listarVeiculos);

export default router;
