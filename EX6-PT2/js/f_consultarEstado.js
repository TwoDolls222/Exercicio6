import { Estado } from './c_estado.js';
import { previsaoTemp } from './f_temp.js';
import { dadosEstados } from './v_dadosEstados.js';

const historico = [];


async function consultarEstado() {
    const sigla = document.getElementById('estado').value;
    if (!sigla) {
        alert('Selecione um estado.');
        return;
    }

    try {
        const dados = dadosEstados[sigla];
        if (!dados) throw new Error('Estado não encontrado nos dados.');

        const estado = new Estado(
            dados.nome,
            sigla,
            dados.regiao,
            dados.populacao,
            dados.capital
        );

        const [clima, info] = await Promise.all([
            previsaoTemp(dados.capital),
            estado.informacoes()
        ]);

        document.getElementById('resultado').innerHTML = `
            <div class="info-estado">
                <h3>${dados.nome}</h3>
                <p><strong>Capital:</strong> ${dados.capital}</p>
                <p><strong>Região:</strong> ${dados.regiao}</p>
                <p><strong>População:</strong> ${dados.populacao.toLocaleString('pt-BR')}</p>
            </div>
            <div class="previsao-tempo">
                <h4>Previsão na Capital</h4>
                <pre>${clima}</pre>
            </div>
        `;

        historico.unshift(`${dados.nome} - ${new Date().toLocaleString()}`);
        atualizarHistorico();

    } catch (error) {
        document.getElementById('resultado').innerHTML = `
            <p class="error">Erro ao consultar: ${error.message}</p>
        `;
    }
}

function atualizarHistorico() {
    const lista = document.getElementById('listaHistorico');
    lista.innerHTML = '';

    const historicoRecente = historico.slice(0, 5);

    historicoRecente.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
}

function selectDinamico() {
    const selectEstado = document.getElementById('estado');

    for (const sigla in dadosEstados) {
        const option = document.createElement('option');
        option.value = sigla;
        option.textContent = dadosEstados[sigla].nome;
        selectEstado.appendChild(option);
    }

    document.getElementById("consultar").addEventListener("click", consultarEstado);
}

document.addEventListener("DOMContentLoaded", selectDinamico);
