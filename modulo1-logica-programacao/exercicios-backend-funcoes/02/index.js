const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
        }
    },
    desligar: function () {
        if (this.ligado && this.velocidade === 0) {
            this.ligado = false;
            this.velocidade = 0;
            console.log(`Carro desligado. Velocidade: ${this.velocidade}.`);
        } else if (this.ligado && this.velocidade > 0) {
            console.log("Este carro precisa estar com velocidade 0 para ser desligado.");
        } else if (!this.ligado) {
            console.log("Este carro já está desligado.");
        }
    },
    acelerar: function () {
        if (this.ligado) {
            this.velocidade += 10;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
        } else {
            console.log("Não é possível acelerar um carro desligado.");
        }
    },
    desacelerar: function () {
        if (this.ligado) {
            this.velocidade -= 10;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
        } else {
            console.log("Não é possível desacelerar um carro desligado.");
        }
    }
};

carro.desligar(); // 1 - desligar carro
carro.ligar(); // 2 - ligar carro
carro.ligar(); // 3 - ligar carro
carro.acelerar(); // 4 - acelerar carro
carro.acelerar(); // 5 - acelerar carro
carro.desacelerar(); // 6 - desacelerar carro
carro.desligar(); // 7 - desligar carro
carro.acelerar(); // 8 - acelerar carro
carro.desacelerar(); // 9 - desacelerar carro