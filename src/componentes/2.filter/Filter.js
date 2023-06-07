import { useState } from "react";
import { FilterContainer } from "./FilterStyles";

function Filter(props) {
  const [valueMin, setValueMin] = useState(0);
  const [valueMax, setValueMax] = useState(1000000);

  return (
    <FilterContainer>
      {/* <p>Filtrar por</p> */}
      <p>
        Valor mínimo:
        <input
          type="number"
          value={valueMin}
          onChange={(event) => {
            setValueMin(event.target.value);
            props.filters(event.target.value, valueMax);
          }}
        />
      </p>
      <p>
        Valor máximo:
        <input
          type="number"
          value={valueMax}
          onChange={(event) => {
            setValueMax(event.target.value);
            props.filters(valueMin, event.target.value);
          }}
        />
      </p>
      <p>
        <input
          placeholder="Buscar por nome"
          onChange={(event) => props.search(event.target.value)}
        />
      </p>
    </FilterContainer>
  );
}

export default Filter;
