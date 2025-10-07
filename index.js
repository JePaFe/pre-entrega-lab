// console.log(process.argv);

// const method = process.argv[2];
// const resource = process.argv[3];
// console.log(method, resource);

let [, , method, resource] = process.argv;

method = method.toUpperCase();
resource = resource.toLowerCase();

// products/5
if (method == "GET" && resource.startsWith("products/")) {
  //   const [, id] = resource.split("/");
  let id = resource.split("/")[1];
  id = parseInt(id);

  if (isNaN(id) || id <= 0) {
    console.log("No es un numero");
  }

  fetch("https://fakestoreapi.com/products/" + id)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// const match = argv.find((arg) => /^products\/\d+$/.test(arg));
// const id = match ? match.split("/")[1] : null;

// if (method == "GET" && id) {}

if (method == "GET" && resource == "products") {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));

  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
}
