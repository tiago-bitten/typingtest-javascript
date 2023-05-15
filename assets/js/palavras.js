export class Palavras {
    constructor() {
        this.palavras = [
            "abóbora",
            "abacaxi",
            "abelha",
            "abismo",
            "acorde",
            "acrobacia",
            "admirar",
            "aeróbica",
            "afetuoso",
            "água",
            "alicate",
            "alma",
            "amigo",
            "amor",
            "andar",
            "anjo",
            "anúncio",
            "aplauso",
            "arco-íris",
            "árvore",
            "asa",
            "astronauta",
            "atleta",
            "áudio",
            "aula",
            "automóvel",
            "ave",
            "azul",
            "bailarina",
            "bala",
            "banco",
            "barco",
            "bateria",
            "beijo",
            "berço",
            "bicicleta",
            "bola",
            "bolha",
            "borboleta",
            "brincar",
            "cabelo",
            "cachorro",
            "cadeira",
            "café",
            "cama",
            "caminhão",
            "cana",
            "canto",
            "carro",
            "casa",
            "casaco",
            "castelo",
            "céu",
            "chave",
            "chinelo",
            "chocolate",
            "circo",
            "cobra",
            "colina",
            "colher",
            "computador",
            "concha",
            "construir",
            "coração",
            "corrida",
            "coruja",
            "cozinha",
            "criança",
            "cubo",
            "dançar",
            "dedo",
            "dentista",
            "desenhar",
            "dia",
            "diamante",
            "dinossauro",
            "doce",
            "doceria",
            "dominó",
            "eclipse",
            "elefante",
            "embarcar",
            "empinar",
            "engrenagem",
            "escada",
            "escorregar",
            "escova",
            "escrever",
            "escultura",
            "esporte",
            "estrela",
            "exercício",
            "fada",
            "fantasia",
            "farol",
            "felicidade",
            "festa",
            "flor",
            "floresta",
            "folha",
            "fonte",
            "foto",
            "futebol",
            "gato",
            "girafa",
            "ginástica",
            "girassol",
            "guitarra",
            "hamster",
            "harmonia",
            "hora",
            "igreja",
            "ilha",
            "imagem",
            "índio",
            "infância",
            "inseto",
            "inverno",
            "janela",
            "joaninha",
            "jogar",
            "jogo",
            "jornal",
            "labirinto",
            "lagarta",
            "lampião",
            "leão",
            "leitura",
            "liberdade",
            "linha",
            "livro",
            "lua",
            "luz",
            "mágico",
            "maçã",
            "mamãe",
            "mar",
            "maravilha",
            "máscara",
            "matemática",
            "melodia",
            "menina",
            "menino",
            "mensagem",
            "mestre",
            "milagre",
            "minuto",
            "miragem",
            "mistério",
            "montanha",
            "mundo",
            "música",
            "nariz",
            "natureza",
            "navio",
            "neve",
            "noite",
            "nota",
            "nuvem",
            "obra",
            "oceano",
            "olhar",
            "onda",
            "ônibus",
            "organizar",
            "ovelha",
            "pai",
            "palhaço",
            "pássaro",
            "paz",
            "peixe",
            "piano",
            "pintar",
            "pipa",
            "planeta",
            "planta",
            "poesia",
            "porta",
            "princesa",
            "professor",
            "pular",
            "quebra-cabeça",
            "quente",
            "rádio",
            "rainha",
            "rato",
            "recife",
            "recreio",
            "reflexo",
            "rio",
            "roda",
            "rosa",
            "sabonete",
            "sapato",
            "segredo",
            "semente",
            "silêncio",
            "sorriso",
            "som",
            "sonho",
            "sorvete",
            "super-herói",
            "surpresa",
            "tartaruga",
            "telefone",
            "tempo",
            "tesouro",
            "tigre",
            "tinta",
            "trabalho",
            "tranquilo",
            "transporte",
            "travesseiro",
            "trem",
            "truque",
            "túnel",
            "união",
            "universo",
            "utopia",
            "vassoura",
            "vento",
            "verão",
            "verde",
            "viagem",
            "vida",
            "violeta",
            "voo",
            "xícara",
            "zebra",
            "zero",
            "zoológico"
        ]
    }

    randomizarPalavras() {
        const palavrasEscolhidas = [];
        const copiaPalavras = this.palavras.slice();

        for (let i = 0; i < 20; i++) {
            const indice = Math.floor(Math.random() * copiaPalavras.length);
            const palavra = copiaPalavras.splice(indice, 1)[0];
            palavrasEscolhidas.push(palavra);
        }

        return palavrasEscolhidas;
    }
}