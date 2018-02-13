function parseArguments(args) {
    var currentParameter = '',
        isParameter = false,
        res = {},
        value = true;

    for (var i in args) {
        isParameter = args[i][0] === '-';
        value = args[i];
        if (isParameter) {
            currentParameter = args[i].replace(new RegExp('-', 'g'), '');
            value = true;
        }
        res[currentParameter] = value;
    }
    return res;
}

module.exports = {
    parseArguments
}