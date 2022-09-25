// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
   cats.push(name)
}

function destructivelyPrependCat(name){
  cats.unshift(name)
}

function  destructivelyRemoveLastCat(){
  cats.pop()
}

function destructivelyRemoveFirstCat(){
  cats.shift()
}

function appendCat(name){
  const newLastCats = [...cats, name]
  return newLastCats
}

function prependCat(name){
  const newFirstCats = [name, ...cats]
  return newFirstCats
}

function removeFirstCat () {
  return cats.slice(1);
}

function removeLastCat(){
  return cats.slice(0, cats.length - 1)
}



/*
function removeLastCat(){
  cats.slice(-1)
}
*/