package com.example.tpi_recuperatorio.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor

@NoArgsConstructor
@Entity
@Table(name = "vinos")
public class Vino {

    private Long id;
    private String nombre;
    private Double Precio;

    public Vino(Long id, String nombre, Double precio) {
        this.id = id;
        this.nombre = nombre;
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

    public Double getPrecio() {
        return Precio;
    }

    public void setPrecio(Double precio) {
        Precio = precio;
    }
}

