const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e)  { 
    e.preventDefault(); // Evento de recarregar a página

    // Soma

    const inputCalcSoma = e.target.querySelector('#somaAtual');
    const somaAtual = Number(inputCalcSoma.value);

        if (!somaAtual) {
            setResultado('Valor informado inválido', false)
            return;
        }

            const outroNumeroSomando = e.target.querySelector('#outroNumeroAtual');
            const outroNumeroAtual = Number(outroNumeroSomando.value)

                if (!outroNumeroAtual) {
                    setResultado('Valor informado inválido', false)
                    return;
                }

    // Multiplicação

    const inputCalcMult = e.target.querySelector('#somaMult');
    const somaMult = Number(inputCalcMult.value);

        if(!somaMult) {
            setResultado('Valor informado inválido', false)
            return;
        }

            const outroNumeroMultplicar = e.target.querySelector('#outroNumeroMult');
            const outroNumeroAtualMult = Number(outroNumeroMultplicar.value);

                if(!outroNumeroAtualMult) {
                    setResultado('Valor informado inválido', false)
                    return;
                }

    // Divisão

    const inputCalcDivisao = e.target.querySelector('#somaDivisao');
    const somaDivisao = Number(inputCalcDivisao.value);

        if(!somaDivisao) {
            setResultado('Valor informado inválido', false)
            return;
        }

            const outroNumeroDividirFuc = e.target.querySelector('#outroNumeroDividir');
            const outroNumeroDividir = Number(outroNumeroDividirFuc.value);

                if(!outroNumeroDividir) {
                    setResultado('Valor informado inválido', false)
                    return;
                }


            const somandoValor = getSomar(somaAtual, outroNumeroAtual);

                const multplicandoValor = getMult(somaMult, outroNumeroAtualMult);

                    const dividindoValor = getDiv(somaDivisao, outroNumeroDividir)
        

    const msgSoma = `Soma total ${somandoValor}`;

        const msgMult = `Soma da Multplicação ${multplicandoValor}`;

            const msgDiv = `Soma da Divisão ${dividindoValor}`;

            setResultado(msgSoma, msgMult, msgDiv, true);

                //setResultado();

    //setResultado(`${msg} ${msgMult} ${msgDiv}`);

});

    // Função de Soma

    function getSomar (somaAtual, outroNumeroAtual) {
        const somandoValor = somaAtual + outroNumeroAtual;
        return somandoValor;
    }

    // Função de Multiplicação
    
    function getMult (somaMult, outroNumeroAtualMult) {
        const multplicandoValor = somaMult * outroNumeroAtualMult;
        return multplicandoValor;
    }

    // Função de Divisão

    function getDiv (somaDivisao, outroNumeroDividir) {
        const dividindoValor = somaDivisao / outroNumeroDividir;
        return dividindoValor;
    }


function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msgSoma, msgMult, msgDiv, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;

    const pSoma = criaP();

    const pMult = criaP()

    const pDiv = criaP();

    if (isValid) { 
        pSoma.classList.add('paragrafo-resultado');
        pMult.classList.add('paragrafo-resultado');
        pDiv.classList.add('paragrafo-resultado');
    } else {
        pSoma.classList.add('bad');
        pMult.classList.add('bad');
        pDiv.classList.add('bad');
    }

    pSoma.innerHTML = msgSoma;

    pMult.innerHTML = msgMult;

    pDiv.innerHTML = msgDiv;

    resultado.appendChild(pSoma)

    resultado.appendChild(pMult)

    resultado.appendChild(pDiv)
}