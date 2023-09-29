let heroi = {
  nome: "Gladiador",
  elo: " ",
  quantidadeDeExp: 77000,
};

let elo

if (heroi.quantidadeDeExp <= 1000) {
  elo = "Ferro";
} else if (heroi.quantidadeDeExp > 1000 && heroi.quantidadeDeExp <= 2000) {
  elo = "Bronze";
} else if (heroi.quantidadeDeExp > 2000 && heroi.quantidadeDeExp <= 5000) {
  elo = "Prata";
} else if (heroi.quantidadeDeExp > 5000 && heroi.quantidadeDeExp <= 7000) {
  elo = "Ouro";
} else if (heroi.quantidadeDeExp > 7000 && heroi.quantidadeDeExp <= 8000) {
  elo = "Platina";
} else if (heroi.quantidadeDeExp > 8000 && heroi.quantidadeDeExp <= 9000) {
  elo = "Ascendente";
} else if ( heroi.quantidadeDeExp > 9000  && heroi.quantidadeDeExp <= 10000) {
  elo = "Imortal";
} else {
  elo = "Radiante";
}

console.log("O Herói # " + heroi.nome + " # está no elo: " + elo);
