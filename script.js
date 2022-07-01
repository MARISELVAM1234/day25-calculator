var displayElement = document.getElementById("display-box");
var value = 0;
var add = "";
var b = [];
// var num=0;
function numberFunc(num) {
    // displayElement.value += num;
    displayElement.value =  displayElement.value + num;
    // console.log(displayElement.value);
    // add += num;
    add = add + num ;
    // console.log(add);
}


function operatorFun(operator) {
    displayElement.value += operator;


    if (add != '') {
        b.push(add);
    }
    add = '';
    b.push(operator);
    console.log(b);
}


function equalFunc() {
    b.push(add);
    var addi;
    console.log(b);
    var empty = []
    for (var i = 0; i < b.length; i++) {
        switch (b[i]) {
            case '+':
                if (empty.length == 0) {
                    addi = parseFloat(b[i - 1]) + parseFloat(b[i + 1]);
                    empty.push(addi);
                }
                else {
                    addi = empty[0] + parseFloat(b[i + 1]);
                    empty = [];
                    empty.push(addi);
                }
                break;
            case '-':
                if (empty.length == 0) {
                    addi = parseFloat(b[i - 1]) - parseFloat(b[i + 1]);
                    empty.push(addi);
                }
                else {
                    addi = empty[0] - parseFloat(b[i + 1]);
                    empty = [];
                    empty.push(addi);
                }
                break;

            case '*':
                if (empty.length == 0) {
                    addi = parseFloat(b[i - 1]) * parseFloat(b[i + 1]);
                    empty.push(addi);
                }
                else {
                    addi = empty[0] * parseFloat(b[i + 1]);
                    empty = [];
                    empty.push(addi);
                }
                break;
            case '/':
                if (empty.length == 0) {
                    addi = parseFloat(b[i - 1]) / parseFloat(b[i + 1]);
                    empty.push(addi);
                }
                else {
                    addi = empty[0] / parseFloat(b[i + 1]);
                    empty = [];
                    empty.push(addi);
                }
                break;
        }


    }

    displayElement.value = addi;
    add = addi.toString();
    b = [];
    empty = [];
}





function clearFunc() {
    displayElement.value = ""
}  


