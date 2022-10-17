const TOTAL_PRODUCTS = db.produtos.find().count(); 
db.resumoProdutos.insertOne({
  franquia: "McDonalds", totalProdutos: TOTAL_PRODUCTS,
});
db.resumoProdutos.find({}, { _id: 0, franquia: 1, totalProdutos: 1 });