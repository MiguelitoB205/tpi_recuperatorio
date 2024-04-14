package com.example.tpi_recuperatorio.Model;

public class Alimento {
    private Long id;
    private String nombre;
    private String imagen;
    private Double Precio;

    public Alimento(Long id, String nombre, String imagen, Double precio) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        Precio = precio;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public Double getPrecio() {
        return Precio;
    }

    public void setPrecio(Double precio) {
        Precio = precio;
    }
}
