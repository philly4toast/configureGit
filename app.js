let animals = { 
  dog: 'Dede', 
  cat: 'KitKat',
  get pooch() {
    if (this.dog){
      return this.dog
    }
  }
}

console.log(animals.pooch)



const dreamGarage = (make, model, engineType) => {
  return {
    make,
    model,
    engineType
  }
}

let car1 = dreamGarage('Tesla', 'Cyber Truck', 'Electric')
