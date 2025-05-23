console.log("Js funcionando e conectado");

const apiKey = '4ffe122ddc97e87cc61838e3315ca9db';
function previsaoTempo(city) {
    if (!city) {
        document.getElementById('saida').textContent = 'Por favor, digite uma cidade.';
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const resultado = `
                Previsão do tempo para ${data.name}:
                ────────────────────────────────
                Temperatura: ${data.main.temp}°C
                Condição:    ${data.weather[0].description}
                Umidade:     ${data.main.humidity}%
                Vento:       ${data.wind.speed} km/h
                                `;
                document.getElementById('saida').textContent = resultado;
            } else {
                document.getElementById('saida').textContent = 'Cidade não encontrada ou erro na API.';
            }
        })
        .catch(error => {
            console.error('Erro ao buscar a previsão do tempo:', error);
            document.getElementById('saida').textContent = 'Erro ao consultar o serviço de previsão.';
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnPrever');
    const city = document.getElementById('cidade');

    btn.addEventListener('click', function () {
        const cidade = city.value;
        console.log('Cidade digitada:', cidade);
        previsaoTempo(cidade);
    });

    city.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            btn.click();
        }
    });
});
