function countAnimals(animals,count){
  //coding here...
 return count.map(animal =>
    (animals.match(new RegExp(animal, "g")) || []).length
  ); 
}