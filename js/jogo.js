var criaJogo = function (sprite) {
    var palavraSecreta = '';
    var lacunas = [];
    var etapa = 1;

    var ganhou = function () {
        return lacunas.length ?
            !lacunas.some(function (lacuna) {
                return lacuna == '';
            }) :
            false;
    };

    var perdeu = function () {
        return sprite.isFinished();
    };

    var ganhouOuPerdeu = function () {
        return ganhou() || perdeu();
    };

    var reinicia = function () {
        etapa = 1,
            lacunas = [];
        palavraSecreta = '';
        sprite.reset();
    };

    var processaChute = function (chute) {
        if(!chute.trim()){
            throw Error('Chute inválido');
        }
        var exp = new RegExp(chute, 'gi'),
            resultado,
            acertou = false;

        while (resultado = exp.exec(palavraSecreta)) {
            lacunas[resultado.index] = chute;
            acertou = true;
        }

        if (!acertou) {
            sprite.nextFrame();
        }
    };

    var criaLacunas = function () {
        lacunas = Array(palavraSecreta.length).fill('');
    };

    var proximaEtapa = function () {
        etapa = 2;
    }

    var getEtapa = function () {
        return etapa;
    };

    var setPalavraSecreta = function (palavra) {
        if (!palavra.trim()) {
            throw Error('Palavra secreta inválida');
        }

        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();

    };

    var getLacunas = function () {
        return lacunas;
    };

    return {
        getEtapa: getEtapa,
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu,
        reinicia: reinicia,
    };
}