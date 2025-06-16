import supabase from "../config/bd.js";

export const criarOrdemServico = async (req, res) => {
  const { cliente_id, veiculo_id, descricao_problema } = req.body;

  const { data: cliente } = await supabase.from("clientes").select("id").eq("id", cliente_id).single();
  const { data: veiculo } = await supabase.from("veiculos").select("id").eq("id", veiculo_id).single();

  if (!cliente) {
    return res.status(404).json({ error: "Cliente não encontrado." });
  }
  if (!veiculo) {
    return res.status(404).json({ error: "Veículo não encontrado." });
  }

  const { data, error } = await supabase
    .from("ordens_servico")
    .insert([{
      cliente_id,
      veiculo_id,
      descricao_problema,
      status: "aberta",
      data_abertura: new Date().toISOString()
    }])
    .select(); // Garante que retorna o registro inserido

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(201).json(data[0]);
};

// Listar todas as ordens de serviço
export const listarOrdensServico = async (req, res) => {
  const { data, error } = await supabase
    .from("ordens_servico")
    .select("*");

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json(data);
};