/*Create by: Vinicius Monteiro Orlandi */
function to_convert_ddmmaaaa(data) {
    var arrDataExclusao = data.split('/');
    if (arrDataExclusao.length <= 1) {
        var arrDataExclusao = data.split('-');
        if (arrDataExclusao.length < 1) {} else {
            var stringFormatada = arrDataExclusao[1] + '-' + arrDataExclusao[0] + '-' + arrDataExclusao[2];
            var dataFormatada = new Date(stringFormatada);
        }
    } else {
        var stringFormatada = arrDataExclusao[1] + '-' + arrDataExclusao[0] + '-' + arrDataExclusao[2];
        var dataFormatada = new Date(stringFormatada);
    }
    return dataFormatada
}