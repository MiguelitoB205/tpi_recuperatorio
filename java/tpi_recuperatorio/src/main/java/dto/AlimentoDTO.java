package dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AlimentoDTO {
    private Long id;
    private String nombre;
    private String imagen;
    private Double precio;
}
