 /* aplicado a array */
 
 let colores = ["Rojo", "Azul", "Amarillo", "oreo"]

 let colorRojo = colores[0]
 let colorAzul = colores[1]
 let colorAmarillo = colores[2]

 let [rojo, azul, amarillo] = colores
 let [ , , oreo] = colores

 console.log(colorAmarillo, amarillo);
 console.log(colorRojo, oreo);

 /* aplicado a OL */

 let auto = {
     marca : 'volkswagen',
     modelo : 'vento',
     precio : 8000000,
     km : 60000,
     color : 'turqueza',
     anio : 2020,
     patente : 'AAB123',
     vendido : true
 }

 let {color, anio, km, marca} = auto

 console.log(color);
