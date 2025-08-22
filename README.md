# Sistema de Biblioteca

Este proyecto es una aplicación sencilla en JavaScript para gestionar una biblioteca. Permite agregar libros, buscar por título y prestar libros, incluyendo libros infantiles con edad mínima recomendada. Está diseñado para practicar los conceptos de Programación Orientada a Objetos (POO): Encapsulamiento, Herencia, Abstracción y Polimorfismo.

## Reto Semana 7

Implementar las siguientes clases y métodos en JavaScript:

- Libro: clase para representar libros con propiedades titulo, autor, anio y disponible.

- LibroInfantil: hereda de Libro y agrega la propiedad edadMinima.

- Biblioteca: clase que contiene la lista de libros y los métodos:

  - agregarLibro(libro): agrega un nuevo libro a la biblioteca.

  - buscarPorTitulo(titulo): devuelve una lista de libros que coinciden con el título.

  - prestarLibro(titulo): presta un libro si está disponible, cambia su estado a no disponible y devuelve un mensaje.

## Tecnologías

- HTML
- JavaScript

## Estructura del Reto
catalogoProductos/

  ├── index.html
  
  ├── sistemaBiblioteca.js
  
  └── README.md

## Cómo usar

1. Abre el archivo `index.html` en un navegador.
2. El script `sistemaBiblioteca.js` se ejecuta automáticamente.
3. Abre la consola del navegador para ver los resultados.

## Ejemplo de uso

```javascript
const biblio = new Biblioteca();
biblio.agregarLibro(new Libro("El príncipe", "Nicolás Maquiavelo", 1532, true));
biblio.agregarLibro(new Libro("Leviatán", "Thomas Hobbes", 1651, true));
biblio.agregarLibro(new Libro("La República", "Platón", -380, true));
biblio.agregarLibro(new LibroInfantil("Harry Potter", "J.K. Rowling", 9));
biblio.agregarLibro(new LibroInfantil("El Principito", "Antoine de Saint-Exupéry", 1943, true, 6));
biblio.agregarLibro(new LibroInfantil("Alicia en el País de las Maravillas", "Lewis Carroll", 1865, true, 8));
console.log(biblio.buscarPorTitulo("El príncipe"));
console.log(biblio.buscarPorTitulo("Leviatán"));
console.log(biblio.prestarLibro("El Señor de los Anillos"));
console.log(biblio.prestarLibro("Leviatán"));
console.log(biblio.buscarPorTitulo("Leviatán"));
console.log(biblio.prestarLibro("Leviatán"));
console.log(biblio.buscarPorTitulo("Test1"));
```
## Resultados
<img width="620" height="397" alt="image" src="https://github.com/user-attachments/assets/52885ff4-b129-4b9d-942a-a07dfd8d0056" />

