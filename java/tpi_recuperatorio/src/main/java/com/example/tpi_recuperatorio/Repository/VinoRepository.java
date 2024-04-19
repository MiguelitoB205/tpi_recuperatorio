package com.example.tpi_recuperatorio.Repository;

import com.example.tpi_recuperatorio.Model.Vino;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

@Repository
public interface VinoRepository extends JpaRepository<Vino,Long> {
    Optional<Vino> findById(Long id);
}
