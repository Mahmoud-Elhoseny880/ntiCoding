const fs = require("fs");
const http = require("http");
const url = require("url");
const nunjucks = require("nunjucks");


nunjucks.configure({ autoescape: true });

const data = fs.readFileSync("./data.json", "utf-8");
const posts = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  
  if (pathname === "/" || pathname === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const html = nunjucks.render("temp.html", { posts });
    res.end(html);
  }

  else if (pathname === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });

    if (query.id) {
      const post = posts.find((p) => p.id == query.id); 
      res.end(JSON.stringify(post || null));
    }
  
    else {
      res.end(JSON.stringify(posts));
    }
  }

  
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server running at http://localhost:8000");
});
