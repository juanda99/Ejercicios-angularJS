#ejercicios de Angular
## Versión 1.3. 
## Conceptos:
- Módulos
- Directivas
- Controladores
- Expresiones
- Filtros
1. Crea la estructura básica para realizar una aplicación mediante Angular y Bootstrap a partir del fuente ejercicio1.html. Puedes ayudarte de bower o npm para instalar las dependencias. Comprueba su funcionamiento ejecutando el documento html en el navegador y verificando que Angular resuelve la expresión.
2. Modifica el ejercicio anterior, de modo que por medio el html muestre un artículo definido en el fichero app2.js. Crea y usa el controlador  TiendaController para "pasar" la variable.
3. Completa el ejercicio anterior de modo que se muestre la imagen del artículo
4. Queremos que el precio aparezca con dos decimales y con el simbolo de €. Utiliza algún filtro y carga el fichero de localización correspondiente para conseguirlo de manera automática.
5. Queremos comprar artículos, así que habrá que añadir un botón de compra. No queremos comprar artículos si no tienen stock: habrá que añadir otra propiedad a los artículos de modo que en función de si hay stock (true o false) habilitaremos la opción de compra. (3x)
6. Queremos saber cuanto stock hay disponible y se debe mostrar al cliente, sin perder el comportamiento del ejercicio anterior. Además en función del stock que haya implementaremos una u otra estética en el css:
    <span class="label label-success">nº unidades para 15 o más unidades</span>
    <span class="label label-warning">nº unidades para menos de 15 unidades</span>
    <span class="label label-danger">Sin stock</span>
7. Implementa la directiva ng-repeat de modo que podamos mostrar más de un solo producto.
8. Añade los campos descuento y precio final a los artículos. Este último se debe calcular en función del precio inicial y del descuento.
