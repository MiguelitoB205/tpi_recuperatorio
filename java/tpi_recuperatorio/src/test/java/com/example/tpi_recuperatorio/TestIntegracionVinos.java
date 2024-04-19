package com.example.tpi_recuperatorio;

import com.example.tpi_recuperatorio.Model.Vino;
import com.example.tpi_recuperatorio.Service.VinoService;
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

import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)

public class TestIntegracionVinos {
    @Autowired
    private VinoService vinoService;
    @Autowired
    private MockMvc mockMvc;
    public void cargarDatos(){
        Vino vino = vinoService.guardarVino(new Vino(1L,"Vino Tinto", 78.05));


    }
    @Test
    public void listarTodosLosVinosTest() throws Exception {
        cargarDatos();
        MvcResult resultado=mockMvc.perform(MockMvcRequestBuilders.get("/vinos").accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();


        assertFalse(resultado.getResponse().getContentAsString().isEmpty());
    }

}
