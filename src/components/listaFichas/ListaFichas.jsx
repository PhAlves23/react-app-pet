import React, { useState } from "react";
import Ficha from "../ficha/Ficha";
import Formulario from "../form/Formulario";
import { AdicionarFicha, BtnAdicionarFicha, DivFichas } from "../style/styled";
import imgPet from "../../img/bulldog.jpg";

export default function ListaFichas() {
  const [ficha, setFicha] = useState([
    {
      nome: "Trovão",
      idade: "2 meses",
      raca: "Bulldog Francês",
      tamanho: "35cm",
      nomeDono: "Paulo Henrique",
      telefone: "(11)97226-6510",
      imagemPet: imgPet,
      observacoes:
        "Muito brincalhão e comilão, toma cuidado para ele não comer as coisas",
    },
  ]);

  const [nFichas, setNFichas] = useState({
    nome: "",
    idade: "",
    raca: "",
    tamanho: "",
    nomeDono: "",
    telefone: "",
    imagemPet: "",
    observacoes: "",
  });

  async function readImage(file) {
    return new Promise((resolve, reject) => {
      if (file.type && !file.type.startsWith("image/")) {
        reject(
          new Error(`O arquivo não é uma imagem. ${file.type} ${file.name}`)
        );
        return;
      }
      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        // img.src = event.target.result;
        resolve(event.target.result);
      });
      reader.readAsDataURL(file);
    });
  }

  //adicionando fichas
  const addFicha = (e) => {
    e.preventDefault();
    setNFichas({
      nome: "",
      idade: "",
      raca: "",
      tamanho: "",
      nomeDono: "",
      telefone: "",
      imagemPet: "",
      observacoes: "",
    });

    setFicha([...ficha, nFichas]);
  };

  const captura = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === "nome") {
      setNFichas({
        nome: value,
        idade: nFichas.idade,
        raca: nFichas.raca,
        tamanho: nFichas.tamanho,
        nomeDono: nFichas.nomeDono,
        telefone: nFichas.telefone,
        imagemPet: nFichas.imagemPet,
        observacoes: nFichas.observacoes,
      });
    } else if (name === "idade") {
      setNFichas({
        nome: nFichas.nome,
        idade: value,
        raca: nFichas.raca,
        tamanho: nFichas.tamanho,
        nomeDono: nFichas.nomeDono,
        telefone: nFichas.telefone,
        imagemPet: nFichas.imagemPet,
        observacoes: nFichas.observacoes,
      });
    } else if (name === "raca") {
      setNFichas({
        nome: nFichas.nome,
        idade: nFichas.idade,
        raca: value,
        tamanho: nFichas.tamanho,
        nomeDono: nFichas.nomeDono,
        telefone: nFichas.telefone,
        imagemPet: nFichas.imagemPet,
        observacoes: nFichas.observacoes,
      });
    } else if (name === "tamanho") {
      setNFichas({
        nome: nFichas.nome,
        idade: nFichas.idade,
        raca: nFichas.raca,
        tamanho: value,
        nomeDono: nFichas.nomeDono,
        telefone: nFichas.telefone,
        imagemPet: nFichas.imagemPet,
        observacoes: nFichas.observacoes,
      });
    } else if (name === "nomeDono") {
      setNFichas({
        nome: nFichas.nome,
        idade: nFichas.idade,
        raca: nFichas.raca,
        tamanho: nFichas.tamanho,
        nomeDono: value,
        telefone: nFichas.telefone,
        imagemPet: nFichas.imagemPet,
        observacoes: nFichas.observacoes,
      });
    } else if (name === "telefone") {
      setNFichas({
        nome: nFichas.nome,
        idade: nFichas.idade,
        raca: nFichas.raca,
        tamanho: nFichas.tamanho,
        nomeDono: nFichas.nomeDono,
        telefone: value,
        imagemPet: nFichas.imagemPet,
        observacoes: nFichas.observacoes,
      });
    } else if (name === "imagemPet") {
      try {
        const image = await readImage(e.target.files[0]);
        setNFichas({
          nome: nFichas.nome,
          idade: nFichas.idade,
          raca: nFichas.raca,
          tamanho: nFichas.tamanho,
          nomeDono: nFichas.nomeDono,
          telefone: nFichas.telefone,
          imagemPet: image,
          observacoes: nFichas.observacoes,
        });
      } catch (e) {
        alert(e.message);
      }
    } else if (name === "observacoes") {
      setNFichas({
        nome: nFichas.nome,
        idade: nFichas.idade,
        raca: nFichas.raca,
        tamanho: nFichas.tamanho,
        nomeDono: nFichas.nomeDono,
        telefone: nFichas.telefone,
        imagemPet: nFichas.imagemPet,
        observacoes: value,
      });
    }
  };

  return (
    <div>
      <Formulario
        digit={captura}
        novaFicha={nFichas}
        adicionarFicha={addFicha}
      />
      <AdicionarFicha>
        <button onClick={addFicha}>Adicionar ficha</button>
      </AdicionarFicha>
      <DivFichas>
        {ficha.map((f, indice) => (
          <Ficha
            key={indice}
            id={indice + 1}
            nome={f.nome}
            idade={f.idade}
            raca={f.raca}
            tamanho={f.tamanho}
            nomeDono={f.nomeDono}
            telefone={f.telefone}
            imagemPet={f.imagemPet}
            observacoes={f.observacoes}
          />
        ))}
      </DivFichas>
    </div>
  );
}
