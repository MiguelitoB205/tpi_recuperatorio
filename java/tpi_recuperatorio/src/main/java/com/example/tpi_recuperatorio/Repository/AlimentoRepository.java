package com.example.tpi_recuperatorio.Repository;

import com.example.tpi_recuperatorio.Model.Alimento;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

@Repository
public interface AlimentoRepository extends JpaRepository<Alimento,Long> {
    Optional<com.example.tpi_recuperatorio.Model.Alimento> findById(Long id);
}
