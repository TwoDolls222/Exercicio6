/*import { TemperaturaAtual } from "./f_temperaturaAtual.js";
import { previsaoTempo } from "./f_previsaoTempo.js";

*/
import { verificarLocal } from "./f_VerificarLocal.js";
import { teste } from "./t_teste.js";
//import { consultarEstado } from "./f_consultarEstado.js";
verificarLocal();
console.log("js connect v 1.8")
const _btnTeste = document.getElementById("btnTeste");
const _btnConsulta = document.getElementById("btnConsultar");
const _btnTemperatura = document.getElementById("btnTemperatura");
const _btnPrevisao = document.getElementById("btnPrevisao");


function pagiConsulta() {
    window.location.href = '../html/consultarEstado.html';
    console.log("Click registrado")
}

function pagiTemperatura() {
    window.location.href = '../html/temperaturaAtual.html';
    console.log("Click registrado")
}

function pagiPrevisao() {
    window.location.href = "../html/previsaoTempo.html";
    console.log("Click registrado");
}

_btnTeste.addEventListener('click', teste);
_btnConsulta.addEventListener('click', pagiConsulta);
_btnTemperatura.addEventListener('click', pagiTemperatura);
_btnPrevisao.addEventListener('click', pagiPrevisao);