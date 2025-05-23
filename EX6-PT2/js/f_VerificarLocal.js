export function verificarLocal() {
    const ipinfoToken = '8cfd2234738764';

    fetch(`https://ipinfo.io/json?token=${ipinfoToken}`)
        .then(response => response.json())
        .then(data => {
            if (data.country !== 'BR') {
                alert("This service it's exclusive of pesons in Bazil, right?");
                window.location.href = "https://google.com";
            }
        })
}