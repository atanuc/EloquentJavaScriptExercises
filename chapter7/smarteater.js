function SmartPlantEater() {
  this.energy = 50;
  this.direction = "e";
}
SmartPlantEater.prototype.do = function(view) {
  var space = view.find(" ");
  if (this.energy > 150 && space)
    return {type: "reproduce", direction: space};
  var plants = view.findAll("*");
  if (plants.length > 1)
    return {type: "eat", direction: randomElement(plants)};
  if (view.look(this.direction) != " " && space)
    this.direction = space;
  return {type: "move", direction: this.direction};
};