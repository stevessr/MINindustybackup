const power=extend(PowerSource,"powerS", {
update(){
this.health = Number.MAX_VALUE
}
});
power.update = true;
power.health = 900000000;