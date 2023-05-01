const shield = extend(ForceProjector,"shield", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});
shield.phaseRadiusBoost = 512;
shield.phaseUseTime = 256;
shield.radius = 512;
shield.size = 1;
shield.health = 900000000;
shield.itemCapacity = 256;