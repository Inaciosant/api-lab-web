import supabase from "../config/bd.js";

export const criarVeiculo = async (req, res) => {
  const { marca, modelo, ano, chassis, cor, combustivel, concessionaria_id } = req.body;

  const { data: existente, error: errorBusca } = await supabase
    .from("veiculos")
    .select("*")
    .eq("chassis", chassis);

  if (errorBusca) {
    return res.status(400).json({ error: errorBusca.message });
  }

  if (existente && existente.length > 0) {
    return res.status(409).json({ error: "Veículo já cadastrado com esse número de chassis." });
  }

  const { data, error } = await supabase
    .from("veiculos")
    .insert([{ marca, modelo, ano, chassis, cor, combustivel, concessionaria_id }])
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(201).json(data[0]);
};

export const listarVeiculos = async (req, res) => {
  const { data, error } = await supabase
    .from("veiculos")
    .select("*");

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json(data);
};