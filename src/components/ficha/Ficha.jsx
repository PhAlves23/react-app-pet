import React, { useEffect } from "react";
import { DivFicha, DivFichas } from "../style/styled";

export default function Ficha(props) {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <DivFicha>
      <h2>{props.nome}</h2>
      <img src={props.imagemPet} alt="Imagem do pet" />
      <p>
        <span>Idade:</span> {props.idade}
      </p>
      <p>
        <span>Raça:</span> {props.raca}
      </p>
      <p>
        <span>Tamanho:</span> {props.tamanho}
      </p>
      <p>
        <span>Dono:</span> {props.nomeDono}
      </p>
      <p>
        <span>Telefone:</span> {props.telefone}
      </p>
      <p>
        <span className="obs">Observações:</span> {props.observacoes}
      </p>
    </DivFicha>
  );
}
