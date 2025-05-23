const apiKey = '4ffe122ddc97e87cc61838e3315ca9db';
export async function previsaoTemp(city) {
    if (!city) {
        throw new Error('Cidade não informada.');
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4ffe122ddc97e87cc61838e3315ca9db&lang=pt_br`
        );
        const data = await response.json();

        if (data.cod === 200) {
            return `${data.weather[0].description}, ${data.main.temp}°C`;
        } else {
            throw new Error(data.message || 'Erro ao obter a previsão do tempo.');
        }
    } catch (error) {
        console.error('Erro na API de previsão do tempo:', error);
        throw error;
    }
}
