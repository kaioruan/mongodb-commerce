db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });
db.produtos.updateMany({ tags: { $all: ["bovino"] } }, { $inc: { "vendasPorDia.6": 120 } });
db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });