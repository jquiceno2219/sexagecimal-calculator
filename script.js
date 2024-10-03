document.getElementById("calculate-button").addEventListener("click", function (event) {

    event.preventDefault();
    const deg1 = parseInt(document.getElementById("deg1").value) || 0;
    const min1 = parseInt(document.getElementById("min1").value) || 0;
    const sec1 = parseInt(document.getElementById("sec1").value) || 0;

    const deg2 = parseInt(document.getElementById("deg2").value) || 0;
    const min2 = parseInt(document.getElementById("min2").value) || 0;
    const sec2 = parseInt(document.getElementById("sec2").value) || 0;

    // Validar si alguno de los valores es negativo
    if (deg1 < 0 || min1 < 0 || sec1 < 0 || deg2 < 0 || min2 < 0 || sec2 < 0) {
        alert("Por favor solo ingresar números positivos.");
        return; // Detener la ejecución si hay valores negativos
    }

    // Si los valores son correctos, proceder con los cálculos
    const operation = document.getElementById("operation").value;

    // Convertir todos los valores a segundos
    let totalSec1 = deg1 * 3600 + min1 * 60 + sec1;
    let totalSec2 = deg2 * 3600 + min2 * 60 + sec2;

    let resultSec;

    if (operation === "add") {
        resultSec = totalSec1 + totalSec2;
    } else if (operation === "subtract") {
        resultSec = totalSec1 - totalSec2;
    }

    // Convertir el resultado de nuevo a grados, minutos y segundos
    let resultDeg = Math.floor(resultSec / 3600);
    resultSec %= 3600;

    let resultMin = Math.floor(resultSec / 60);
    let resultSecFinal = resultSec % 60;

    // Mostrar el resultado en el div de resultados
    document.getElementById("result").textContent = `${resultDeg}º ${resultMin}' ${resultSecFinal}''`;
});
