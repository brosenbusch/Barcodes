const BookFactory = require("./BookFactory.js");
const Sort = require("./Sort.js");
const Random = require("./Random.js");

const Client = function(){
    let list = [];
    let bf = new BookFactory();
    for(let a = 0; a < 1000; a++){
        let r = Random().discreteRangeIn(1900,2017);
        list.unshift(bf.createBook(r));
    }
}
