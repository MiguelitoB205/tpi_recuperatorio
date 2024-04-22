package com.example.backend_con_spring.service;

import com.example.backend_con_spring.entity.Producto;
import com.example.backend_con_spring.repository.IProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    @Autowired
    IProductoRepository productoRepository;

    public List<Producto> getProductos(){
        return (List<Producto>) productoRepository.findAll();
    }

    public Producto saveProducto(Producto producto){
        return productoRepository.save(producto);
    }

    public Optional<Producto>getById(Long id){
        return productoRepository.findById(id);
    }
    public Producto updateById(Producto request, Long id){
        Producto producto = productoRepository.findById(id).get();
        producto.setNombre(request.getNombre());
        producto.setDescripcion(request.getDescripcion());

        return producto;
    }
    public Boolean deleteProducto (Long id){
        try {
            productoRepository.deleteById(id);
            return true;
        }catch (Exception exception){
            return false;
        }
    }
}
