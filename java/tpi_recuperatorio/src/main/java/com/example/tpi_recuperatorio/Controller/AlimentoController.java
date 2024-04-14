package com.example.tpi_recuperatorio.Controller;

import com.example.tpi_recuperatorio.Exception.ResourceNotFoundException;
import com.example.tpi_recuperatorio.Model.Alimento;
import com.example.tpi_recuperatorio.Service.AlimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/alimentos")


public class AlimentoController {
    private AlimentoService alimentoService;

    @Autowired
    public AlimentoController(AlimentoService alimentoService) {
        this.alimentoService = alimentoService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Alimento>> buscarPorId(@PathVariable Long id){
        return ResponseEntity.ok(alimentoService.buscarPorId(id));
    }
    @GetMapping
    public ResponseEntity<List<Alimento>> listarAlimentos(){
        return ResponseEntity.ok(alimentoService.obtenerTodos());
    }
    @PostMapping
    public ResponseEntity<Alimento> guardarAlimento(@RequestBody Alimento alimento){
        return ResponseEntity.ok(alimentoService.guardarAlimento(alimento));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarAlimento(@PathVariable Long id) throws ResourceNotFoundException {
        Optional<Alimento> alimentoBuscado= alimentoService.buscarPorId(id);
        if(alimentoBuscado.isPresent()){
            alimentoService.eliminarAlimento(id);
            return ResponseEntity.ok("Se eliminó correctamente");
        }else{
            throw  new ResourceNotFoundException("No se encontró lo solicitado para eliminar");
            //return ResponseEntity.badRequest().body("No se encontró lo solicitado para eliminar");
        }
    }
    @PutMapping
    public ResponseEntity<String> actualizarAlimento(@RequestBody Alimento alimento){
        Optional<Alimento> alimentoBuscado= alimentoService.buscarPorId(alimento.getId());
        if(alimentoBuscado.isPresent()){
            alimentoService.actualizarAlimento(alimento);
            return ResponseEntity.ok("Se Actualizo correctamente");
        }else{
            return ResponseEntity.badRequest().body("No se encontro lo solicitado para actualizar");
        }
    }



}
