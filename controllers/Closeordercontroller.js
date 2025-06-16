import supabase from "../config/bd.js";

export const fecharOrdemServico = async (req, res) => {
  const { id } = req.params;
  const { notas_finais, custo_total } = req.body;

  const { data: ordem } = await supabase
    .from("ordens_servico")
    .select("*")
    .eq("id", id)
    .eq("status", "aberta")
    .single();

  if (!ordem) {
    return res.status(404).json({ error: "Ordem de serviço não encontrada ou já fechada." });
  }

  const { data, error } = await supabase
    .from("ordens_servico")
    .update({
      status: "fechada",
      data_conclusao: new Date().toISOString(),
      notas_finais,
      custo_total
    })
    .eq("id", id)
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json(data[0]);
};