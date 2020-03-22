module.exports = function toReadable (number) {
    if(number === 0) return 'zero';
    let strnum = number + '';
    let resultstr = '';
    let hundreds = '';
    let tenths = '';
    let unit = '';

    let a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    if (strnum.length == 3) {
        hundreds = a[strnum[0]] + 'hundred';
        strnum = strnum.slice(1);
    }
    if (strnum.length == 2) {
        if (strnum[0] == 1) {tenths = a[strnum];
            strnum = strnum.slice(2);
        }
        else if (strnum[0] == 0) {tenths = '';
        strnum = strnum.slice(1);
        }
        else {tenths = b[strnum[0]];
            strnum = strnum.slice(1);
        }
          
    }
    if (strnum.length == 1) {
        unit = a[strnum[0]];
    }

    resultstr = (tenths != '') ? (hundreds + ' ' + tenths + ' ' + unit) : (hundreds + ' ' + unit);
    return resultstr.trim();
}


