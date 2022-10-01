import React from "react";
import { DivForm } from "../style/styled";

export default function Formulario(props) {
  return (
    <DivForm>
      <form action="" method="POST" onSubmit={props?.adicionarFicha}>
        <fieldset>
          <legend>Pet Cadastro</legend>
          <div>
            <label htmlFor="nomeId">Nome</label>
            <input
              type="text"
              name="nome"
              id="nomeId"
              value={props?.novaFicha?.nome}
              onChange={props?.digit}
              placeholder="Ex. Trovão"
            />
          </div>
          <div>
            <label htmlFor="nomeId">Foto do animal</label>
            <input
              type="file"
              name="imagemPet"
              id="imagemPetId"
              // value={props?.novaFicha?.imagemPet}
              onChange={props?.digit}
            />
          </div>
          <div>
            <label htmlFor="idadeId">Idade</label>
            <input
              type="text"
              name="idade"
              id="idadeId"
              value={props?.novaFicha?.idade}
              onChange={props?.digit}
              placeholder="Ex. 2 anos"
            />
          </div>
          <div>
            <label htmlFor="racaId">Raça</label>
            <input
              type="text"
              name="raca"
              id="racaId"
              value={props?.novaFicha?.raca}
              onChange={props?.digit}
              placeholder="Ex. Bulldog Francês"
            />
          </div>
          <div>
            <label htmlFor="tamanhoId">Tamanho</label>
            <input
              type="text"
              name="tamanho"
              id="tamanhoId"
              value={props?.novaFicha?.tamanho}
              onChange={props?.digit}
              placeholder="Ex. 35cm"
            />
          </div>
          <div>
            <label htmlFor="nomeDonoId">Nome do dono</label>
            <input
              type="text"
              name="nomeDono"
              id="nomeDonoId"
              value={props?.novaFicha?.nomeDono}
              onChange={props?.digit}
              placeholder="Ex. Paulo Henrique"
            />
          </div>
          <div>
            <label htmlFor="telefoneId">Telefone</label>
            <input
              type="text"
              name="telefone"
              id="telefoneId"
              value={props?.novaFicha?.telefone}
              onChange={props?.digit}
              placeholder="Ex. (11) 97226-6510"
            />
          </div>
          <label htmlFor="observacoesId">Observações</label>
          <textarea
            name="observacoes"
            id="observacoesId"
            cols="30"
            rows="10"
            maxLength={145}
            placeholder="Ex. Muito brincalhão e comilão, tomar cuidado para ele não comer as coisas."
            value={props?.novaFicha?.observacoes}
            onChange={props?.digit}
          ></textarea>
        </fieldset>
      </form>
    </DivForm>
  );
}
