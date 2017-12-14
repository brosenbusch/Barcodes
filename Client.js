const BookFactory = require("./BookFactory.js");
const Sort = require("./Sort.js");
const Random = require("./Random.js");
const IsbnEanAdapter = require("./IsbnEanAdapter.js");


let list = [];
let bf = new BookFactory();
for(let a = 0; a < 1000; a++){
  let r = Random().discreteRangeIn(1900,2017);
  if(r < 2007){
      list.unshift(new IsbnEanAdapter(bf.createBook(r)));
  }
  else{
      list.unshift(bf.createBook(r));
  }
}
let numbers = [];
for(let b = 0; b < list.length; b++){
  numbers.unshift(Number(list[b].code));
}
Sort.insertion(numbers);
