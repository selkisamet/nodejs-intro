const express = require("express");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

const products = [
    { id: 1, name: "Telefon", price: 1000 },
    { id: 2, name: "Televizyon", price: 2000 },
    { id: 3, name: "Bilgisayar", price: 3000 }
]

app.use("/detail/:id", (req, res) => {
    // res.send("Hakkımızda Express");
    const detailProduct = products.find(pr => pr.id == req.params.id);
    res.render("detail", { detailProduct });
});

app.use("/", (req, res, next) => {
    console.log("Bu bir ara katman yazılımıdır.");
    next();
});

app.use("/", (req, res) => {
    // res.send("Anasayfa Express");
    res.render("products", { products: products });
});

app.listen(3000, () => {
    console.log("Server çalıştı: 3000");
})