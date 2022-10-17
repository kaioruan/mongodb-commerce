db.produtos.find({ nome: { $nin: ["McChicken", "Big Mac"] } },
{ _id: 0, nome: 1, curtidas: 1, vendidos: 1 });