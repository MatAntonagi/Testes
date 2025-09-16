import * as http from "node:http"

const products = [
    { id: 1, name: 'Camiseta nike', price:80 },
    { id: 2, name: 'Camiseta adidas', price:65 },
    { id: 2, name: 'Camiseta puma', price:55 },
];

const app = http.createServer(( request, response ) => {
  if(request.method === "GET" && request.url === "/products") {
    response.setHeader("Content-Type", "application/json")
    
    response.end(JSON.stringify(products))
  }
});

export { app }
