const pizzas = [
    { id: 1,
    nombre: "muzarella",
    ingredientes: ["muzzarella", "salsa", "aceitunas"],
    precio: 800, },
    { id: 2,
    nombre: "Anana",
    ingredientes: ["muzzarella", "salsa", "anana", "jamon", "queso"],
    precio: 1400, },
    { id: 3,
    nombre: "calabresa",
    ingredientes: ["muzzarella", "salsa", "salame", "salchichas", "cebollas", ],
    precio: 1500, },
    { id: 4,
    nombre: "especial",
    ingredientes: ["muzzarella", "salsa", "jamon", "aceitunas"],
    precio: 980, },
    { id: 5,
    nombre: "chicken",
    ingredientes: ["muzzarella", "salsa", "pollo", "pimientos", "champignones"],
    precio: 1500, },
    { id: 6,
    nombre: "4 estaciones",
    ingredientes: ["muzzarella", "4 quesos", "aceitunas", "cebolla"],
    precio: 1200, },
    { id: 7,
    nombre: "roquefort",
    ingredientes: ["muzzarella", "salsa", "roquefort", "jamon"],
    precio: 1100, },
    ];
    
    
    // a) Las pizzas que tengan un id impar.
    
    pizzas.forEach((pizzaImpar) => {
       if (pizzaImpar.id % 2 !== 0) {
          console.log(`La pizza con id ${pizzaImpar.id} es impar`);
       }
       });
    
    // b) ¿Hay alguna pizza que valga menos de $600?
    
    if (pizzas.precio > 600){
       console.log("En esta lista tenemos pizzas a menos de $600")
    }
    else {
       console.log("En esta lista no tenemos pizzas a menos de $600")
    }
    
    // c)
    
    console.log(`La lista de nuestras pizzas mas vendidas es:`)
    pizzas.forEach((pizza, i) => console.log(`${i + 1}) ${pizza.nombre}`));
    
    // d)
    
    console.log(`La lista de precios de nuestras pizzas mas vendidas es:`)
    pizzas.forEach((pizza, i) => console.log(`${i + 1}) ${pizza.precio}`));
    
    // e)
    
    pizzas.forEach ((variedad) => {
       console.log(`La variedad de pizza ${variedad.nombre} sale $ ${variedad.precio}`)
       }); 