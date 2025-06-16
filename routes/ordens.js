import express from "express";
import { criarOrdemServico, listarOrdensServico } from "../controllers/Ordemcontroller.js";
import { fecharOrdemServico } from "../controllers/Closeordercontroller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ordens de Serviço
 *   description: Rotas para gerenciar ordens de serviço
 */
/**
 * @swagger
 * /ordens:
 *   post:
 *     summary: Cria uma nova ordem de serviço
 *     tags: [Ordens de Serviço]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cliente_id
 *               - veiculo_id
 *               - descricao_problema
 *             properties:
 *               cliente_id:
 *                 type: integer
 *               veiculo_id:
 *                 type: integer
 *               descricao_problema:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ordem de serviço criada com sucesso
 */
router.post("/", criarOrdemServico);
/**
 * @swagger
 * /ordens:
 *   get:
 *     summary: Lista todas as ordens de serviço
 *     tags: [Ordens de Serviço]
 *     responses:
 *       200:
 *         description: Lista de ordens de serviço
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   cliente_id:
 *                     type: integer
 *                   veiculo_id:
 *                     type: integer
 *                   descricao_problema:
 *                     type: string
 *                   status:
 *                     type: string
 *                   data_abertura:
 *                     type: string
 *                     format: date-time
 *                   data_conclusao:
 *                     type: string
 *                     format: date-time
 *                   notas_finais:
 *                     type: string
 *                   custo_total:
 *                     type: number
 */

router.get("/", listarOrdensServico);

/**
 * @swagger
 * /ordens/{id}/fechar:
 *   patch:
 *     summary: Fecha uma ordem de serviço
 *     tags: [Ordens de Serviço]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da ordem de serviço
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - notas_finais
 *               - custo_total
 *             properties:
 *               notas_finais:
 *                 type: string
 *               custo_total:
 *                 type: number
 *     responses:
 *       200:
 *         description: Ordem de serviço fechada com sucesso
 *       404:
 *         description: Ordem de serviço não encontrada ou já fechada
 */

router.patch("/:id/fechar", fecharOrdemServico);

export default router;
