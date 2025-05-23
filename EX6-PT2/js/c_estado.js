console.log("Js funcionando e connectado");

const apiKey = '87d2bf52';
export class Estado {
    constructor(nome, sigla, regiao, populacao, capital) {
        this.nome = nome;
        this.sigla = sigla;
        this.regiao = regiao;
        this.populacao = populacao;
        this.capital = capital;
    }

    async previsaoDoTempo(capital) {
        if (capital) {
            return "Capital não informada.";
        }
        try {
            const response = await fetch(
                `https://api.hgbrasil.com/weather?key=${apiKey}&city_name=${encodeURIComponent(capital)}`
            );
            const data = await response.json();

            if (data.results) {
                const clima = data.results;
                return `
                    Previsão para ${clima.city_name} (capital):
                    Temperatura: ${clima.temp}°C
                    Condição: ${clima.description}
                    Umidade: ${clima.humidity}%
                    Vento: ${clima.wind_speedy}
                `;
            } else {
                return "Não foi possível obter a previsão para a capital.";
            }
        } catch (error) {
            console.error('Erro na API de clima:', error);
            return "Erro ao consultar a previsão do tempo.";
        }
    }

    informacoes() {
        return `
            Estado: ${this.nome} (${this.sigla})
            Capital: ${this.capital}
            Região: ${this.regiao}
            População: ${this.populacao.toLocaleString('pt-BR')} habitantes
        `;
    }
}