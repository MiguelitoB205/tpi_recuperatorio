package com.example.tpi_recuperatorio.Service;

import com.example.tpi_recuperatorio.Model.Vino;
import com.example.tpi_recuperatorio.Repository.VinoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class VinoService {

    private VinoRepository vinoRepository;

    @Autowired
    public VinoService(VinoRepository vinoRepository) {
        this.vinoRepository = vinoRepository;
    }



    //metodos manuales
    public Vino guardarVino(Vino vino){
        return vinoRepository.save(vino);

    }
    public void actualizarVino(Vino vino){
        this.vinoRepository.save(vino);
    }
    public void eliminarVino(Long id){
        vinoRepository.deleteById(id);
    }
    public Optional<Vino> buscarPorId(Long id){
        return vinoRepository.findById(id);
    }

    public List<Vino> obtenerTodos(){
        return vinoRepository.findAll();
    }


    }

