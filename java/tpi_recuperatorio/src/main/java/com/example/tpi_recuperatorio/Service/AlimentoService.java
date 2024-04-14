package com.example.tpi_recuperatorio.Service;

import com.example.tpi_recuperatorio.Model.Alimento;
import com.example.tpi_recuperatorio.Repository.AlimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class AlimentoService {

    private AlimentoRepository alimentoRepository;

    @Autowired
    public AlimentoService(AlimentoRepository alimentoRepository) {
        this.alimentoRepository = alimentoRepository;
    }

    //metodos manuales
    public Alimento guardarAlimento(Alimento alimento){
        return this.alimentoRepository.save(alimento);
    }
    public void actualizarAlimento(Alimento alimento){
        this.alimentoRepository.save(alimento);
    }
    public void eliminarAlimento(Long id){
        alimentoRepository.deleteById(id);
    }
    public Optional<Alimento> buscarPorId(Long id){
        return alimentoRepository.findById(id);
    }

    public List<Alimento> obtenerTodos(){
        return alimentoRepository.findAll();
    }
}
