//Calculadora de Partidas Rankeadas

let ResultadoPartida = soma(100, 20, "Kratos")

function soma(victories, defeats, nome) {
    let ResultadoPartida = victories - defeats

    if (ResultadoPartida <= 10) {
        console.log(`O Herói de nome ${nome} tem de saldo de ${ResultadoPartida} vitórias está no nível de Ferro`)
    } else if (ResultadoPartida >= 11 && ResultadoPartida <= 20) {
        console.log(`O Herói de nome ${nome} tem de saldo de ${ResultadoPartida} vitórias está no nível de Bronze`)
    } else if (ResultadoPartida >= 21 && ResultadoPartida <= 50) {
        console.log(`O Herói de nome ${nome} tem de saldo de ${ResultadoPartida} vitórias está no nível de Prata`)
    } else if (ResultadoPartida >= 51 && ResultadoPartida <= 80) {
        console.log(`O Herói de nome ${nome} tem de saldo de ${ResultadoPartida} vitórias está no nível de Ouro`)
    } else if (ResultadoPartida >= 81 && ResultadoPartida <= 90) {
        console.log(`O Herói de nome ${nome} tem de saldo de ${ResultadoPartida} vitórias está no nível de Diamante.`)
    } else if (ResultadoPartida >= 91 && ResultadoPartida <= 100) {
        console.log(`O Herói de nome ${nome} tem de saldo de ${ResultadoPartida} vitórias está no nível de Lendário`)
    } else if (ResultadoPartida > 100) {
        console.log(`O Herói de nome ${nome} tem de saldo de ${ResultadoPartida} vitórias está no nível de Imortal`)
    }


    return ResultadoPartida

}

