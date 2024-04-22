package com.example.backend_con_spring.controller;

import com.example.backend_con_spring.entity.Producto;
import com.example.backend_con_spring.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/producto")

public class ProductoController {

    @Autowired

    private ProductoService productoService;

    @GetMapping
    public List<Producto> getProductos(){
        return productoService.getProductos();
    }

    @PostMapping
    public Producto saveProducto(@RequestBody Producto producto){
        return this.productoService.saveProducto(producto);
    }
    @GetMapping(path = "/{id}")
        public Optional <Producto> getProductoById(@PathVariable("id") Long id){
            return this.productoService.getById(id);

    }

    @PutMapping (path = "/{id}")
    public Producto updateProductoById(@RequestBody Producto request, @PathVariable("id") Long id){
        return this.productoService.updateById(request, id);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable("id") Long id){
        boolean ok = this.productoService.deleteProducto(id);

        if(ok){
            return "Producto con id " + id + "eliminado";
        } else{
            return "Error, por favor inténtalo de nuevo";
        }
    }


}
