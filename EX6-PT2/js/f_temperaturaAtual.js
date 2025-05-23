console.log("Carregando o módulo c_estado.js...");
    const apiKey = '4ffe122ddc97e87cc61838e3315ca9db';
    const ipinfoToken = '8cfd2234738764';

    fetch(`https://ipinfo.io/json?token=${ipinfoToken}`)
        .then(response => response.json())
        .then(data => {
            const city = data.city;
            if (city) {
                getWeather(city);
                console.log("cidade: " + city);
            } else {
                document.getElementById("weather").innerText = "city não encontrada.";
            }
        })
        .catch(error => {
            document.getElementById("weather").innerText = "Erro ao detectar localização.";
            console.error("Erro na geolocalização:", error);
        });

    function getWeather(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`)
            .then(response => response.json())
            .then(data => {
                console.log("cidade verificada: " + city);
                if (data.cod === 200) {
                    const temp = data.main.temp;
                    const desc = data.weather[0].description;
                    document.getElementById("weather").innerText = `Tempo em ${city}: ${temp}°C, ${desc}`;
                } else {
                    document.getElementById("weather").innerText = `Erro: ${data.message}`;
                }
            })
            .catch(error => {
                document.getElementById("weather").innerText = "Erro ao buscar o clima.";
                console.error("Erro no OpenWeather:", error);
            });
    }
    