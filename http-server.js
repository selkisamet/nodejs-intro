// request -> server -> response (olumlu / olumsuz)
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    fs.appendFile("log.txt", req.url, (err, html) => {
        if (err) {
            throw new Error("Hata");
        }
        else {
            switch (req.url) {
                case "/":
                    res.end("Anasayfa");
                    break;
                case "/about":
                    res.end("Hakkımızda");
                    break;
                default:
                    res.end("404 - Sayfa Bulunamadı");
                    break;
            }
        }
    });
});

server.listen(3000, () => {
    console.log("Server çalıştı: 3000");
});