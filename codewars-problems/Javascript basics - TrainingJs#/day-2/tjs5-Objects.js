function animal(obj){
  let name = obj.name
  let legs = obj.legs
  let color = obj.color
  return `This ${color} ${name} has ${legs} legs.`;
}

let dog = {name:"dog",legs:4,color:"white"}
animal(dog)