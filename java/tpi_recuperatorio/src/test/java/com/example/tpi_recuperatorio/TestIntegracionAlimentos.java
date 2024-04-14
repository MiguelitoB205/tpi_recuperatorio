package com.example.tpi_recuperatorio;

import com.example.tpi_recuperatorio.Model.Alimento;
import com.example.tpi_recuperatorio.Service.AlimentoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.net.http.WebSocketHandshakeException;

import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)

public class TestIntegracionAlimentos {
    @Autowired
    private AlimentoService alimentoService;
    @Autowired
    private MockMvc mockMvc;
    public void cargarDatos(){
        Alimento alimento = alimentoService.guardarAlimento(new Alimento(1L,"Sánduches","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-GC2h3RdMdrFDt5KavsijH368RUu-YF5IUKIExaPdQ&s",
                78.05));
    }
    @Test
    public void listarTodosLosAlimentosTest() throws Exception {
        cargarDatos();
        MvcResult Resultado=mockMvc.perform(MockMvcRequestBuilders.get("/alimentos").accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();


        assertFalse(resultado.getResponse().getContentAsString().isEmpty());
    }

}
