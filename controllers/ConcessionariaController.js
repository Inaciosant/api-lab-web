import supabase from "../config/bd.js";

export const criarConcessionaria = async (req, res) => {
  const { cnpj, nome, telefone, email, endereco } = req.body;

  const { data: existente, error: errorBusca } = await supabase
    .from("concessionarias")
    .select("*")
    .or(`cnpj.eq.${cnpj},telefone.eq.${telefone},email.eq.${email}`);

  if (errorBusca) {
    return res.status(400).json({ error: errorBusca.message });
  }

  if (existente && existente.length > 0) {
    return res.status(409).json({ error: "Concessionária já cadastrada com esse CNPJ, telefone ou email." });
  }

  const { data, error } = await supabase
    .from("concessionarias")
    .insert([{ cnpj, nome, telefone, email, endereco }])
    .select(); // Garante que retorna o registro inserido

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(201).json(data[0]);
};

// Listar todas as concessionárias
export const listarConcessionarias = async (req, res) => {
  const { data, error } = await supabase
    .from("concessionarias")
    .select("*");

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json(data);
};