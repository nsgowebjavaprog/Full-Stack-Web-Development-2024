function BellBoy (name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function(){
        alert("May I take your suitcase?");
        pickUpSuitcase();
        this.moveSuitcase();
    }
}