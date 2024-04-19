package com.example.tpi_recuperatorio.Controller;

import com.example.tpi_recuperatorio.Exception.ResourceNotFoundException;
import com.example.tpi_recuperatorio.Model.Vino;
import com.example.tpi_recuperatorio.Service.VinoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/vinos")


public class VinoController {
    private VinoService vinoService;

    @Autowired
    public VinoController(VinoService vinoService) {
        this.vinoService = vinoService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Vino>> buscarPorId(@PathVariable Long id){
        return ResponseEntity.ok(vinoService.buscarPorId(id));
    }
    @GetMapping
    public ResponseEntity<List<Vino>> listarVinos(){
        return ResponseEntity.ok(vinoService.obtenerTodos());
    }
    @PostMapping
    public ResponseEntity<Vino> guardarVino(@RequestBody Vino vino){
        return ResponseEntity.ok(vinoService.guardarVino(vino));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarVino(Long id) throws ResourceNotFoundException {
        Optional<Vino> vinoBuscado= vinoService.buscarPorId(id);
        if(vinoBuscado.isPresent()){
            vinoService.eliminarVino(id);
            return ResponseEntity.ok("Se eliminó correctamente");
        }else{
            throw  new ResourceNotFoundException("No se encontró lo solicitado para eliminar");
            //return ResponseEntity.badRequest().body("No se encontró lo solicitado para eliminar");
        }
    }
    @PutMapping
    public ResponseEntity<String> actualizarVino(@RequestBody Vino vino){
        Optional<Vino> vinoBuscado= vinoService.buscarPorId(vino.getId());
        if(vinoBuscado.isPresent()){
            vinoService.actualizarVino(vino);
            return ResponseEntity.ok("Se Actualizo correctamente");
        }else{
            return ResponseEntity.badRequest().body("No se encontro lo solicitado para actualizar");
        }
    }



}
