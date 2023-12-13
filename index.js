let player = "Douglas";
let victories = 50;
let defeats = 0;

function balanceVictoriesAndDefeats(victories, defeats) {
  return victories - defeats;
}

function ranked(balance) {
  if (balance <= 10) {
    return "Ferro";
  } else if (balance <= 20) {
    return "Bronze";
  } else if (balance <= 50) {
    return "Prata";
  } else if (balance <= 80) {
    return "Ouro";
  } else if (balance <= 90) {
    return "Diamante";
  } else if (balance <= 100) {
    return "Lendário";
  } else if (balance > 100) {
    return "Imortal";
  } else {
    return "Rank não classificado";
  }
}

function main() {
  let balance = balanceVictoriesAndDefeats(victories, defeats);
  let rank = ranked(balance);

  console.log(`O jogador: ${player}`);
  console.log(`Tem um saldo de vitórias de: ${balance}`);
  console.log(`E está na classe de ranking: ${rank}`);
}

main();
