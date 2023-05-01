const project = extend(OverdriveProjector, "boost-64", {
update(){
this.entity.health = Number.MAX_VALUE
}
});
project.update = true;
project.health = 900000000;