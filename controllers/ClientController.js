import supabase from "../config/bd.js";

export const criarCliente = async (req, res) => {
  const { nome, email, telefone, cpf, concessionaria_id } = req.body;

  const { data: existente, error: errorBusca } = await supabase
    .from("clientes")
    .select("*")
    .or(`email.eq.${email},cpf.eq.${cpf}`);

  if (errorBusca) {
    return res.status(400).json({ error: errorBusca.message });
  }

  if (existente && existente.length > 0) {
    return res.status(409).json({ error: "Cliente já cadastrado com esse e-mail ou CPF." });
  }

  const { data, error } = await supabase
    .from("clientes")
    .insert([{ nome, email, telefone, cpf, concessionaria_id }])
    .select(); // Garante que retorna o registro inserido

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(201).json(data[0]);
};

export const listarClientes = async (req, res) => {
  const { data, error } = await supabase
    .from("clientes")
    .select("*");

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json(data);
};