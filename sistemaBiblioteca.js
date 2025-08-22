class Libro {
    constructor(titulo,autor,anio,disponible){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.disponible = disponible;
    }
}

class Biblioteca {
    constructor(){
        this.libros = [];
    }
    agregarLibro(libro){
        this.libros.push(libro);
    }
    buscarPorTitulo(titulo){
        return this.libros.filter(l => l.titulo === titulo);
    }
    prestarLibro(titulo) {
        const libro = this.libros.find(l => l.titulo === titulo);
        if(!libro){
            return `El libro "${titulo}" no está en la biblioteca.`;
        }
        if(!libro.disponible){
            return `El libro "${titulo}" ya está prestado.`;
        }
        libro.disponible = false;
        return `El libro "${titulo}" ha sido prestado.`;
    }
}


class LibroInfantil extends Libro {
    constructor(titulo,autor,anio,disponible=true,edadMinima){
        super(titulo,autor,anio,disponible);
        this.edadMinima = edadMinima;
    }
}

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