const dog={
    race:"srd",
    setRace: function(race) {
        this.race = race
    },
    getRace: function(){
        return console.log(dog.race)
    }
}
dog.setRace("ASDF")
console.log(dog.race)
dog.getRace()