const Random = require('./Random.js');

const EAN = function(){

    let sysCode = makeSysCode();//3 digits
    let manCode = makeManCode();//5 digits
    let proCode =  makeProCode();//4 digits
    let code = sysCode+manCode+proCode;
    let checkDigit = check();


    function makeSysCode(){
        let r = Random().discreteRangeIn(1,8);
        if (r == 1){
            return "040";//Germany
        }
        else if (r == 2){
            return "070";//Norway
        }
        else if (r == 3){
            return "590";//Poland
        }
        else if (r == 4){
            return "003";//USA
        }
        else if (r == 5){
            return "690"//China
        }
        else if (r == 6){
            return "539";//Ireland
        }
        else if (r == 7){
            return "741";//El Salvador
        }
        else if (r == 8){
            return "093";//Australia
        }


    }
    function makeManCode(){
        return String(Random().digit(5));
    }
    function makeProCode(){
        return String(Random().digit(4));
    }
    function check(){
        let code = sysCode+manCode+proCode;
        let sum = 0;
        for(let c=0;c<12;c++){
            if(c%2 ==0){
                sum += 1*code[c];
            }
            else{
                sum += 3*code[c];
            }
        }
        let remainder = sum %10;
        if(remainder == 0){
            return 0;
        }
        return 10-remainder;
    }

    function read(){
        let code = sysCode+manCode+proCode;
        return code + "-" + checkDigit;

    }
    return {sysCode,manCode,proCode,checkDigit,read,code};
};

function test(){
    let e = new EAN();
    console.log(e.checkDigit);
    console.log(e.read());

}
//test();
module.exports = EAN;
