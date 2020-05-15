gdjs.Level2Code = {};
gdjs.Level2Code.GDCharacterObjects1= [];
gdjs.Level2Code.GDCharacterObjects2= [];
gdjs.Level2Code.GDCharacterObjects3= [];
gdjs.Level2Code.GDGroundObjects1= [];
gdjs.Level2Code.GDGroundObjects2= [];
gdjs.Level2Code.GDGroundObjects3= [];
gdjs.Level2Code.GDRoadRollerObjects1= [];
gdjs.Level2Code.GDRoadRollerObjects2= [];
gdjs.Level2Code.GDRoadRollerObjects3= [];
gdjs.Level2Code.GDLeftObjects1= [];
gdjs.Level2Code.GDLeftObjects2= [];
gdjs.Level2Code.GDLeftObjects3= [];
gdjs.Level2Code.GDRightObjects1= [];
gdjs.Level2Code.GDRightObjects2= [];
gdjs.Level2Code.GDRightObjects3= [];
gdjs.Level2Code.GDHelibomberObjects1= [];
gdjs.Level2Code.GDHelibomberObjects2= [];
gdjs.Level2Code.GDHelibomberObjects3= [];
gdjs.Level2Code.GDWallObjects1= [];
gdjs.Level2Code.GDWallObjects2= [];
gdjs.Level2Code.GDWallObjects3= [];
gdjs.Level2Code.GDMissileObjects1= [];
gdjs.Level2Code.GDMissileObjects2= [];
gdjs.Level2Code.GDMissileObjects3= [];
gdjs.Level2Code.GDFlippedMissileObjects1= [];
gdjs.Level2Code.GDFlippedMissileObjects2= [];
gdjs.Level2Code.GDFlippedMissileObjects3= [];
gdjs.Level2Code.GDTurretObjects1= [];
gdjs.Level2Code.GDTurretObjects2= [];
gdjs.Level2Code.GDTurretObjects3= [];
gdjs.Level2Code.GDTurretMissileObjects1= [];
gdjs.Level2Code.GDTurretMissileObjects2= [];
gdjs.Level2Code.GDTurretMissileObjects3= [];
gdjs.Level2Code.GDUndergroundObjects1= [];
gdjs.Level2Code.GDUndergroundObjects2= [];
gdjs.Level2Code.GDUndergroundObjects3= [];
gdjs.Level2Code.GDCaveBackObjects1= [];
gdjs.Level2Code.GDCaveBackObjects2= [];
gdjs.Level2Code.GDCaveBackObjects3= [];
gdjs.Level2Code.GDBombObjects1= [];
gdjs.Level2Code.GDBombObjects2= [];
gdjs.Level2Code.GDBombObjects3= [];
gdjs.Level2Code.GDScaffoldingObjects1= [];
gdjs.Level2Code.GDScaffoldingObjects2= [];
gdjs.Level2Code.GDScaffoldingObjects3= [];
gdjs.Level2Code.GDScaffoldingSupportObjects1= [];
gdjs.Level2Code.GDScaffoldingSupportObjects2= [];
gdjs.Level2Code.GDScaffoldingSupportObjects3= [];
gdjs.Level2Code.GDScaffoldingEdgeLeftObjects1= [];
gdjs.Level2Code.GDScaffoldingEdgeLeftObjects2= [];
gdjs.Level2Code.GDScaffoldingEdgeLeftObjects3= [];
gdjs.Level2Code.GDScaffoldingEdgeRightObjects1= [];
gdjs.Level2Code.GDScaffoldingEdgeRightObjects2= [];
gdjs.Level2Code.GDScaffoldingEdgeRightObjects3= [];
gdjs.Level2Code.GDSpikeObjects1= [];
gdjs.Level2Code.GDSpikeObjects2= [];
gdjs.Level2Code.GDSpikeObjects3= [];
gdjs.Level2Code.GDEndPointObjects1= [];
gdjs.Level2Code.GDEndPointObjects2= [];
gdjs.Level2Code.GDEndPointObjects3= [];
gdjs.Level2Code.GDHealthPickupObjects1= [];
gdjs.Level2Code.GDHealthPickupObjects2= [];
gdjs.Level2Code.GDHealthPickupObjects3= [];
gdjs.Level2Code.GDCeilingCannonObjects1= [];
gdjs.Level2Code.GDCeilingCannonObjects2= [];
gdjs.Level2Code.GDCeilingCannonObjects3= [];
gdjs.Level2Code.GDCannonShotObjects1= [];
gdjs.Level2Code.GDCannonShotObjects2= [];
gdjs.Level2Code.GDCannonShotObjects3= [];
gdjs.Level2Code.GDDebugMenuObjects1= [];
gdjs.Level2Code.GDDebugMenuObjects2= [];
gdjs.Level2Code.GDDebugMenuObjects3= [];
gdjs.Level2Code.GDPlayerscoreObjects1= [];
gdjs.Level2Code.GDPlayerscoreObjects2= [];
gdjs.Level2Code.GDPlayerscoreObjects3= [];
gdjs.Level2Code.GDExplosionObjects1= [];
gdjs.Level2Code.GDExplosionObjects2= [];
gdjs.Level2Code.GDExplosionObjects3= [];
gdjs.Level2Code.GDMetalFloorObjects1= [];
gdjs.Level2Code.GDMetalFloorObjects2= [];
gdjs.Level2Code.GDMetalFloorObjects3= [];
gdjs.Level2Code.GDMetalBackgroundObjects1= [];
gdjs.Level2Code.GDMetalBackgroundObjects2= [];
gdjs.Level2Code.GDMetalBackgroundObjects3= [];

gdjs.Level2Code.conditionTrue_0 = {val:false};
gdjs.Level2Code.condition0IsTrue_0 = {val:false};
gdjs.Level2Code.condition1IsTrue_0 = {val:false};
gdjs.Level2Code.condition2IsTrue_0 = {val:false};
gdjs.Level2Code.condition3IsTrue_0 = {val:false};


gdjs.Level2Code.eventsList0x86f484 = function(runtimeScene) {

{

/* Reuse gdjs.Level2Code.GDCharacterObjects1 */

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setAnimationName("Walk");
}
}}

}


}; //End of gdjs.Level2Code.eventsList0x86f484
gdjs.Level2Code.eventsList0x8cb434 = function(runtimeScene) {

{

/* Reuse gdjs.Level2Code.GDCharacterObjects1 */

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setAnimationName("Idle");
}
}}

}


}; //End of gdjs.Level2Code.eventsList0x8cb434
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRoadRollerObjects1Objects = Hashtable.newFrom({"RoadRoller": gdjs.Level2Code.GDRoadRollerObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Level2Code.GDRightObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRoadRollerObjects1Objects = Hashtable.newFrom({"RoadRoller": gdjs.Level2Code.GDRoadRollerObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Level2Code.GDLeftObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Level2Code.GDLeftObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Level2Code.GDRightObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level2Code.GDMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRoadRollerObjects1Objects = Hashtable.newFrom({"RoadRoller": gdjs.Level2Code.GDRoadRollerObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRoadRollerObjects1Objects = Hashtable.newFrom({"RoadRoller": gdjs.Level2Code.GDRoadRollerObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level2Code.GDFlippedMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRoadRollerObjects1Objects = Hashtable.newFrom({"RoadRoller": gdjs.Level2Code.GDRoadRollerObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level2Code.GDMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.Level2Code.GDGroundObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.Level2Code.GDBombObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Level2Code.GDExplosionObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.Level2Code.GDBombObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.Level2Code.GDGroundObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Level2Code.GDExplosionObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.Level2Code.GDBombObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMetalFloorObjects1Objects = Hashtable.newFrom({"MetalFloor": gdjs.Level2Code.GDMetalFloorObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Level2Code.GDExplosionObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.Level2Code.GDBombObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDScaffoldingObjects1Objects = Hashtable.newFrom({"Scaffolding": gdjs.Level2Code.GDScaffoldingObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Level2Code.GDExplosionObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level2Code.GDHelibomberObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level2Code.GDHelibomberObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.Level2Code.GDBombObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDBombObjects2Objects = Hashtable.newFrom({"Bomb": gdjs.Level2Code.GDBombObjects2});gdjs.Level2Code.eventsList0x7e0504 = function(runtimeScene) {

{

gdjs.Level2Code.GDHelibomberObjects2.createFrom(gdjs.Level2Code.GDHelibomberObjects1);


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDHelibomberObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDHelibomberObjects2[i].getAnimationFrame() == 2 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDHelibomberObjects2[k] = gdjs.Level2Code.GDHelibomberObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDHelibomberObjects2.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDHelibomberObjects2 */
gdjs.Level2Code.GDBombObjects2.createFrom(gdjs.Level2Code.GDBombObjects1);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDBombObjects2Objects, (( gdjs.Level2Code.GDHelibomberObjects2.length === 0 ) ? 0 :gdjs.Level2Code.GDHelibomberObjects2[0].getPointX("")) + 10, (( gdjs.Level2Code.GDHelibomberObjects2.length === 0 ) ? 0 :gdjs.Level2Code.GDHelibomberObjects2[0].getPointY("")) + 50, "");
}}

}


{

/* Reuse gdjs.Level2Code.GDHelibomberObjects1 */

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDHelibomberObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDHelibomberObjects1[i].hasAnimationEnded() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDHelibomberObjects1[k] = gdjs.Level2Code.GDHelibomberObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDHelibomberObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDHelibomberObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDHelibomberObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.Level2Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDHelibomberObjects1[i].setAnimationName("Flying");
}
}}

}


}; //End of gdjs.Level2Code.eventsList0x7e0504
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level2Code.GDHelibomberObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level2Code.GDMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level2Code.GDHelibomberObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level2Code.GDHelibomberObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level2Code.GDFlippedMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level2Code.GDHelibomberObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Level2Code.GDWallObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level2Code.GDHelibomberObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDUndergroundObjects1Objects = Hashtable.newFrom({"Underground": gdjs.Level2Code.GDUndergroundObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level2Code.GDMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level2Code.GDMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level2Code.GDFlippedMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level2Code.GDFlippedMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level2Code.GDMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level2Code.GDFlippedMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level2Code.GDFlippedMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.Level2Code.GDGroundObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level2Code.GDMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Level2Code.GDWallObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level2Code.GDMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDUndergroundObjects1Objects = Hashtable.newFrom({"Underground": gdjs.Level2Code.GDUndergroundObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level2Code.GDFlippedMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Level2Code.GDWallObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level2Code.GDFlippedMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDUndergroundObjects1Objects = Hashtable.newFrom({"Underground": gdjs.Level2Code.GDUndergroundObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretObjects1Objects = Hashtable.newFrom({"Turret": gdjs.Level2Code.GDTurretObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretMissileObjects1Objects = Hashtable.newFrom({"TurretMissile": gdjs.Level2Code.GDTurretMissileObjects1});gdjs.Level2Code.eventsList0x9a8834 = function(runtimeScene) {

{

/* Reuse gdjs.Level2Code.GDTurretObjects1 */

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDTurretObjects1[i].hasAnimationEnded() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDTurretObjects1[k] = gdjs.Level2Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDTurretObjects1.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.2, "Bullet Time");
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDTurretObjects1 */
gdjs.Level2Code.GDTurretMissileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretMissileObjects1Objects, (( gdjs.Level2Code.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDTurretObjects1[0].getPointX("")) - 10, (( gdjs.Level2Code.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDTurretObjects1[0].getPointY("")) + 93, "");
}{for(var i = 0, len = gdjs.Level2Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDTurretObjects1[i].setAnimationName("Firing");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Bullet Time");
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 10, 1);
}}

}


}; //End of gdjs.Level2Code.eventsList0x9a8834
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretObjects1Objects = Hashtable.newFrom({"Turret": gdjs.Level2Code.GDTurretObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level2Code.GDMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level2Code.GDMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretObjects1Objects = Hashtable.newFrom({"Turret": gdjs.Level2Code.GDTurretObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretObjects1Objects = Hashtable.newFrom({"Turret": gdjs.Level2Code.GDTurretObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level2Code.GDFlippedMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level2Code.GDFlippedMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretObjects1Objects = Hashtable.newFrom({"Turret": gdjs.Level2Code.GDTurretObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretObjects1Objects = Hashtable.newFrom({"Turret": gdjs.Level2Code.GDTurretObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretMissileObjects1Objects = Hashtable.newFrom({"TurretMissile": gdjs.Level2Code.GDTurretMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDSpikeObjects1Objects = Hashtable.newFrom({"Spike": gdjs.Level2Code.GDSpikeObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDEndPointObjects1Objects = Hashtable.newFrom({"EndPoint": gdjs.Level2Code.GDEndPointObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHealthPickupObjects1Objects = Hashtable.newFrom({"HealthPickup": gdjs.Level2Code.GDHealthPickupObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level2Code.GDMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMetalFloorObjects1Objects = Hashtable.newFrom({"MetalFloor": gdjs.Level2Code.GDMetalFloorObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level2Code.GDFlippedMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMetalFloorObjects1Objects = Hashtable.newFrom({"MetalFloor": gdjs.Level2Code.GDMetalFloorObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCeilingCannonObjects1Objects = Hashtable.newFrom({"CeilingCannon": gdjs.Level2Code.GDCeilingCannonObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCannonShotObjects1Objects = Hashtable.newFrom({"CannonShot": gdjs.Level2Code.GDCannonShotObjects1});gdjs.Level2Code.eventsList0x9ccc5c = function(runtimeScene) {

{

/* Reuse gdjs.Level2Code.GDCeilingCannonObjects1 */

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCeilingCannonObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCeilingCannonObjects1[i].hasAnimationEnded() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDCeilingCannonObjects1[k] = gdjs.Level2Code.GDCeilingCannonObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCeilingCannonObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCeilingCannonObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCeilingCannonObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCeilingCannonObjects1[i].setAnimationName("Idle");
}
}}

}


}; //End of gdjs.Level2Code.eventsList0x9ccc5c
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCannonShotObjects1Objects = Hashtable.newFrom({"CannonShot": gdjs.Level2Code.GDCannonShotObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCeilingCannonObjects1Objects = Hashtable.newFrom({"CeilingCannon": gdjs.Level2Code.GDCeilingCannonObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCeilingCannonObjects1Objects = Hashtable.newFrom({"CeilingCannon": gdjs.Level2Code.GDCeilingCannonObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level2Code.GDMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCeilingCannonObjects1Objects = Hashtable.newFrom({"CeilingCannon": gdjs.Level2Code.GDCeilingCannonObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level2Code.GDFlippedMissileObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCannonShotObjects1Objects = Hashtable.newFrom({"CannonShot": gdjs.Level2Code.GDCannonShotObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMetalFloorObjects1Objects = Hashtable.newFrom({"MetalFloor": gdjs.Level2Code.GDMetalFloorObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCannonShotObjects1Objects = Hashtable.newFrom({"CannonShot": gdjs.Level2Code.GDCannonShotObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.Level2Code.GDGroundObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level2Code.GDCharacterObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDEndPointObjects1Objects = Hashtable.newFrom({"EndPoint": gdjs.Level2Code.GDEndPointObjects1});gdjs.Level2Code.eventsList0x5b70b8 = function(runtimeScene) {

{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setAnimationName("Jump");
}
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level2Code.eventsList0x86f484(runtimeScene);} //End of subevents
}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].flipX(true);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].flipX(false);
}
}}

}


{


{
gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level2Code.GDCharacterObjects1.length !== 0 ? gdjs.Level2Code.GDCharacterObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level2Code.eventsList0x8cb434(runtimeScene);} //End of subevents
}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Damage Time");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getVariableNumber(gdjs.Level2Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level2");
}}

}


{

gdjs.Level2Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDRoadRollerObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDRoadRollerObjects1[i].getVariableString(gdjs.Level2Code.GDRoadRollerObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDRoadRollerObjects1[k] = gdjs.Level2Code.GDRoadRollerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDRoadRollerObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDRoadRollerObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDRoadRollerObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.Level2Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDRoadRollerObjects1[i].flipX(true);
}
}}

}


{

gdjs.Level2Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDRoadRollerObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDRoadRollerObjects1[i].getVariableString(gdjs.Level2Code.GDRoadRollerObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDRoadRollerObjects1[k] = gdjs.Level2Code.GDRoadRollerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDRoadRollerObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDRoadRollerObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDRoadRollerObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.Level2Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDRoadRollerObjects1[i].flipX(false);
}
}}

}


{

gdjs.Level2Code.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));
gdjs.Level2Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRoadRollerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRightObjects1Objects, false, runtimeScene, true);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDRoadRollerObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDRoadRollerObjects1[i].returnVariable(gdjs.Level2Code.GDRoadRollerObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.Level2Code.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));
gdjs.Level2Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRoadRollerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDRoadRollerObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDRoadRollerObjects1[i].returnVariable(gdjs.Level2Code.GDRoadRollerObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.Level2Code.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDLeftObjects1Objects);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDLeftObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDLeftObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDLeftObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.Level2Code.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRightObjects1Objects);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDRightObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDRightObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDRightObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.Level2Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
gdjs.Level2Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRoadRollerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDMissileObjects1 */
gdjs.Level2Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
/* Reuse gdjs.Level2Code.GDRoadRollerObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDRoadRollerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level2Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(100);
}
}}

}


{

gdjs.Level2Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level2Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRoadRollerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDFlippedMissileObjects1 */
gdjs.Level2Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
/* Reuse gdjs.Level2Code.GDRoadRollerObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDRoadRollerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level2Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(100);
}
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDRoadRollerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].returnVariable(gdjs.Level2Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}}

}


{

gdjs.Level2Code.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));
gdjs.Level2Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDGroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDMissileObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDBombObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDBombObjects1 */
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
gdjs.Level2Code.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Level2Code.GDBombObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDExplosionObjects1Objects, (( gdjs.Level2Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDBombObjects1[0].getPointX("")) + 5, (( gdjs.Level2Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDBombObjects1[0].getPointY("")) + 5, "");
}{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].returnVariable(gdjs.Level2Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}}

}


{


{
gdjs.Level2Code.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
{for(var i = 0, len = gdjs.Level2Code.GDBombObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDBombObjects1[i].addPolarForce(90, 400, 0);
}
}}

}


{

gdjs.Level2Code.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
gdjs.Level2Code.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDBombObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDGroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDBombObjects1 */
gdjs.Level2Code.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Level2Code.GDBombObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDExplosionObjects1Objects, (( gdjs.Level2Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDBombObjects1[0].getPointX("")) + 5, (( gdjs.Level2Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDBombObjects1[0].getPointY("")) + 5, "");
}}

}


{

gdjs.Level2Code.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
gdjs.Level2Code.GDMetalFloorObjects1.createFrom(runtimeScene.getObjects("MetalFloor"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDBombObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMetalFloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDBombObjects1 */
gdjs.Level2Code.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Level2Code.GDBombObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDExplosionObjects1Objects, (( gdjs.Level2Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDBombObjects1[0].getPointX("")) + 5, (( gdjs.Level2Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDBombObjects1[0].getPointY("")) + 5, "");
}}

}


{

gdjs.Level2Code.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
gdjs.Level2Code.GDScaffoldingObjects1.createFrom(runtimeScene.getObjects("Scaffolding"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDBombObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDScaffoldingObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDBombObjects1 */
gdjs.Level2Code.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Level2Code.GDBombObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDExplosionObjects1Objects, (( gdjs.Level2Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDBombObjects1[0].getPointX("")) + 5, (( gdjs.Level2Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDBombObjects1[0].getPointY("")) + 5, "");
}}

}


{


{
}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects, 500, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDHelibomberObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDHelibomberObjects1[i].getVariableString(gdjs.Level2Code.GDHelibomberObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDHelibomberObjects1[k] = gdjs.Level2Code.GDHelibomberObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDHelibomberObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDHelibomberObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDHelibomberObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.Level2Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDHelibomberObjects1[i].flipX(false);
}
}}

}


{


{
}

}


{

gdjs.Level2Code.GDExplosionObjects1.createFrom(runtimeScene.getObjects("Explosion"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDExplosionObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDExplosionObjects1[i].hasAnimationEnded() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDExplosionObjects1[k] = gdjs.Level2Code.GDExplosionObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDExplosionObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDExplosionObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDExplosionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects, 300, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDBombObjects1Objects) <= 1;
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDHelibomberObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDHelibomberObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level2Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDHelibomberObjects1[i].setAnimationName("Drop Bomb");
}
}
{ //Subevents
gdjs.Level2Code.eventsList0x7e0504(runtimeScene);} //End of subevents
}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].returnVariable(gdjs.Level2Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}}

}


{

gdjs.Level2Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));
gdjs.Level2Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDHelibomberObjects1 */
/* Reuse gdjs.Level2Code.GDMissileObjects1 */
gdjs.Level2Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{for(var i = 0, len = gdjs.Level2Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDHelibomberObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level2Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(300);
}
}}

}


{

gdjs.Level2Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level2Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDFlippedMissileObjects1 */
/* Reuse gdjs.Level2Code.GDHelibomberObjects1 */
gdjs.Level2Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{for(var i = 0, len = gdjs.Level2Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDHelibomberObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level2Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(300);
}
}}

}


{

gdjs.Level2Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));
gdjs.Level2Code.GDWallObjects1.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDWallObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDHelibomberObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDHelibomberObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));
gdjs.Level2Code.GDUndergroundObjects1.createFrom(runtimeScene.getObjects("Underground"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHelibomberObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDUndergroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDHelibomberObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDHelibomberObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects) <= 3;
}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDCharacterObjects1[i].isFlippedX()) ) {
        gdjs.Level2Code.condition2IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
/* Reuse gdjs.Level2Code.GDMissileObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects, (( gdjs.Level2Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDCharacterObjects1[0].getPointX("")) + 20, (( gdjs.Level2Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDCharacterObjects1[0].getPointY("")) + 25, "");
}{for(var i = 0, len = gdjs.Level2Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDMissileObjects1[i].setZOrder(2);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 10, 1);
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].isFlippedX() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
gdjs.Level2Code.condition2IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects) <= 3;
}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
/* Reuse gdjs.Level2Code.GDFlippedMissileObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects, (( gdjs.Level2Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDCharacterObjects1[0].getPointX("")) - 20, (( gdjs.Level2Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDCharacterObjects1[0].getPointY("")) + 25, "");
}{for(var i = 0, len = gdjs.Level2Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFlippedMissileObjects1[i].setZOrder(2);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 10, 1);
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setAnimationName("ShootStationary");
}
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setAnimationName("ShootWalk");
}
}}

}


{


{
gdjs.Level2Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
{for(var i = 0, len = gdjs.Level2Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDMissileObjects1[i].addPolarForce(0, 550, 0);
}
}}

}


{


{
gdjs.Level2Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
{for(var i = 0, len = gdjs.Level2Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFlippedMissileObjects1[i].addPolarForce(180, 550, 0);
}
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects, 600, true);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDMissileObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects, 600, true);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDFlippedMissileObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level2Code.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDGroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDFlippedMissileObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
gdjs.Level2Code.GDWallObjects1.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDWallObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDMissileObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
gdjs.Level2Code.GDUndergroundObjects1.createFrom(runtimeScene.getObjects("Underground"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDUndergroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDMissileObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level2Code.GDWallObjects1.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDWallObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDFlippedMissileObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level2Code.GDUndergroundObjects1.createFrom(runtimeScene.getObjects("Underground"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDUndergroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDFlippedMissileObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, 500, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDTurretObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDTurretObjects1[i].setAnimationName("PreparingFire");
}
}
{ //Subevents
gdjs.Level2Code.eventsList0x9a8834(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


{
gdjs.Level2Code.GDTurretMissileObjects1.createFrom(runtimeScene.getObjects("TurretMissile"));
{for(var i = 0, len = gdjs.Level2Code.GDTurretMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDTurretMissileObjects1[i].addPolarForce(180, 350, 0);
}
}}

}


{

gdjs.Level2Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
gdjs.Level2Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDTurretObjects1[i].getOpacity() == 255 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDTurretObjects1[k] = gdjs.Level2Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDTurretObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDMissileObjects1 */
/* Reuse gdjs.Level2Code.GDTurretObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDTurretObjects1[i].returnVariable(gdjs.Level2Code.GDTurretObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy Damage Time");
}{for(var i = 0, len = gdjs.Level2Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDTurretObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.Level2Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
gdjs.Level2Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDTurretObjects1[i].getOpacity() < 255 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDTurretObjects1[k] = gdjs.Level2Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDTurretObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDMissileObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Enemy Damage Time");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDTurretObjects1[i].getOpacity() < 255 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDTurretObjects1[k] = gdjs.Level2Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDTurretObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDTurretObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDTurretObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.Level2Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level2Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDTurretObjects1[i].getOpacity() == 255 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDTurretObjects1[k] = gdjs.Level2Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDTurretObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDFlippedMissileObjects1 */
/* Reuse gdjs.Level2Code.GDTurretObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDTurretObjects1[i].returnVariable(gdjs.Level2Code.GDTurretObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy Damage Time");
}{for(var i = 0, len = gdjs.Level2Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDTurretObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.Level2Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level2Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDTurretObjects1[i].getOpacity() == 255 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDTurretObjects1[k] = gdjs.Level2Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDTurretObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDFlippedMissileObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDTurretObjects1[i].getVariableNumber(gdjs.Level2Code.GDTurretObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDTurretObjects1[k] = gdjs.Level2Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDTurretObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
/* Reuse gdjs.Level2Code.GDTurretObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDTurretObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level2Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(500);
}
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].returnVariable(gdjs.Level2Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDTurretMissileObjects1.createFrom(runtimeScene.getObjects("TurretMissile"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDTurretMissileObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].returnVariable(gdjs.Level2Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDSpikeObjects1.createFrom(runtimeScene.getObjects("Spike"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDSpikeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
gdjs.Level2Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].returnVariable(gdjs.Level2Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level2Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).sub(15);
}
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDEndPointObjects1.createFrom(runtimeScene.getObjects("EndPoint"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDEndPointObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level2Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(750);
}
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDHealthPickupObjects1.createFrom(runtimeScene.getObjects("HealthPickup"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDHealthPickupObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getVariableNumber(gdjs.Level2Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)) < 3 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
/* Reuse gdjs.Level2Code.GDHealthPickupObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].returnVariable(gdjs.Level2Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDHealthPickupObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDHealthPickupObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDMetalFloorObjects1.createFrom(runtimeScene.getObjects("MetalFloor"));
gdjs.Level2Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMetalFloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDMissileObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level2Code.GDMetalFloorObjects1.createFrom(runtimeScene.getObjects("MetalFloor"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMetalFloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDFlippedMissileObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDCeilingCannonObjects1.createFrom(runtimeScene.getObjects("CeilingCannon"));
gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCeilingCannonObjects1Objects, 800, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Shot Time");
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCeilingCannonObjects1 */
gdjs.Level2Code.GDCannonShotObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCannonShotObjects1Objects, (( gdjs.Level2Code.GDCeilingCannonObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDCeilingCannonObjects1[0].getPointX("")) + 23, (( gdjs.Level2Code.GDCeilingCannonObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDCeilingCannonObjects1[0].getPointY("")) + 10, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Shot Time");
}{for(var i = 0, len = gdjs.Level2Code.GDCeilingCannonObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCeilingCannonObjects1[i].setAnimationName("Fire");
}
}
{ //Subevents
gdjs.Level2Code.eventsList0x9ccc5c(runtimeScene);} //End of subevents
}

}


{


{
gdjs.Level2Code.GDCannonShotObjects1.createFrom(runtimeScene.getObjects("CannonShot"));
{for(var i = 0, len = gdjs.Level2Code.GDCannonShotObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCannonShotObjects1[i].addPolarForce(90, 650, 0);
}
}}

}


{

gdjs.Level2Code.GDCannonShotObjects1.createFrom(runtimeScene.getObjects("CannonShot"));
gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCannonShotObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCannonShotObjects1 */
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].returnVariable(gdjs.Level2Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.Level2Code.GDCannonShotObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCannonShotObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDCeilingCannonObjects1.createFrom(runtimeScene.getObjects("CeilingCannon"));
gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCeilingCannonObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDCharacterObjects1[k] = gdjs.Level2Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
gdjs.Level2Code.GDCannonShotObjects1.createFrom(runtimeScene.getObjects("CannonShot"));
/* Reuse gdjs.Level2Code.GDCharacterObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].returnVariable(gdjs.Level2Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.Level2Code.GDCannonShotObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCannonShotObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDCeilingCannonObjects1.createFrom(runtimeScene.getObjects("CeilingCannon"));
gdjs.Level2Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCeilingCannonObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMissileObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCeilingCannonObjects1 */
/* Reuse gdjs.Level2Code.GDMissileObjects1 */
gdjs.Level2Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{for(var i = 0, len = gdjs.Level2Code.GDCeilingCannonObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCeilingCannonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level2Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(200);
}
}}

}


{

gdjs.Level2Code.GDCeilingCannonObjects1.createFrom(runtimeScene.getObjects("CeilingCannon"));
gdjs.Level2Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCeilingCannonObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDFlippedMissileObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCeilingCannonObjects1 */
gdjs.Level2Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
gdjs.Level2Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{for(var i = 0, len = gdjs.Level2Code.GDCeilingCannonObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCeilingCannonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level2Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(200);
}
}}

}


{

gdjs.Level2Code.GDCannonShotObjects1.createFrom(runtimeScene.getObjects("CannonShot"));
gdjs.Level2Code.GDMetalFloorObjects1.createFrom(runtimeScene.getObjects("MetalFloor"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCannonShotObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDMetalFloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCannonShotObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCannonShotObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCannonShotObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDCannonShotObjects1.createFrom(runtimeScene.getObjects("CannonShot"));
gdjs.Level2Code.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCannonShotObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDGroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDCannonShotObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDCannonShotObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCannonShotObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDEndPointObjects1.createFrom(runtimeScene.getObjects("EndPoint"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDCharacterObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDEndPointObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boss", true);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num3");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boss", true);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.Level2Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDCharacterObjects1[i].returnVariable(gdjs.Level2Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).add(999);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Tab");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDDebugMenuObjects1.createFrom(runtimeScene.getObjects("DebugMenu"));
{for(var i = 0, len = gdjs.Level2Code.GDDebugMenuObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDebugMenuObjects1[i].setPosition((( gdjs.Level2Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDCharacterObjects1[0].getPointX("")),(( gdjs.Level2Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDCharacterObjects1[0].getPointY("")) + 100000);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level2Code.GDDebugMenuObjects1.createFrom(runtimeScene.getObjects("DebugMenu"));
{for(var i = 0, len = gdjs.Level2Code.GDDebugMenuObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDDebugMenuObjects1[i].setPosition((( gdjs.Level2Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDCharacterObjects1[0].getPointX("")) - 75,(( gdjs.Level2Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDCharacterObjects1[0].getPointY("")) - 200);
}
}}

}


{


{
gdjs.Level2Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{for(var i = 0, len = gdjs.Level2Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerscoreObjects1[i].setString("Score: " + (gdjs.RuntimeObject.getVariableString(gdjs.Level2Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


{


{
}

}


}; //End of gdjs.Level2Code.eventsList0x5b70b8


gdjs.Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2Code.GDCharacterObjects1.length = 0;
gdjs.Level2Code.GDCharacterObjects2.length = 0;
gdjs.Level2Code.GDCharacterObjects3.length = 0;
gdjs.Level2Code.GDGroundObjects1.length = 0;
gdjs.Level2Code.GDGroundObjects2.length = 0;
gdjs.Level2Code.GDGroundObjects3.length = 0;
gdjs.Level2Code.GDRoadRollerObjects1.length = 0;
gdjs.Level2Code.GDRoadRollerObjects2.length = 0;
gdjs.Level2Code.GDRoadRollerObjects3.length = 0;
gdjs.Level2Code.GDLeftObjects1.length = 0;
gdjs.Level2Code.GDLeftObjects2.length = 0;
gdjs.Level2Code.GDLeftObjects3.length = 0;
gdjs.Level2Code.GDRightObjects1.length = 0;
gdjs.Level2Code.GDRightObjects2.length = 0;
gdjs.Level2Code.GDRightObjects3.length = 0;
gdjs.Level2Code.GDHelibomberObjects1.length = 0;
gdjs.Level2Code.GDHelibomberObjects2.length = 0;
gdjs.Level2Code.GDHelibomberObjects3.length = 0;
gdjs.Level2Code.GDWallObjects1.length = 0;
gdjs.Level2Code.GDWallObjects2.length = 0;
gdjs.Level2Code.GDWallObjects3.length = 0;
gdjs.Level2Code.GDMissileObjects1.length = 0;
gdjs.Level2Code.GDMissileObjects2.length = 0;
gdjs.Level2Code.GDMissileObjects3.length = 0;
gdjs.Level2Code.GDFlippedMissileObjects1.length = 0;
gdjs.Level2Code.GDFlippedMissileObjects2.length = 0;
gdjs.Level2Code.GDFlippedMissileObjects3.length = 0;
gdjs.Level2Code.GDTurretObjects1.length = 0;
gdjs.Level2Code.GDTurretObjects2.length = 0;
gdjs.Level2Code.GDTurretObjects3.length = 0;
gdjs.Level2Code.GDTurretMissileObjects1.length = 0;
gdjs.Level2Code.GDTurretMissileObjects2.length = 0;
gdjs.Level2Code.GDTurretMissileObjects3.length = 0;
gdjs.Level2Code.GDUndergroundObjects1.length = 0;
gdjs.Level2Code.GDUndergroundObjects2.length = 0;
gdjs.Level2Code.GDUndergroundObjects3.length = 0;
gdjs.Level2Code.GDCaveBackObjects1.length = 0;
gdjs.Level2Code.GDCaveBackObjects2.length = 0;
gdjs.Level2Code.GDCaveBackObjects3.length = 0;
gdjs.Level2Code.GDBombObjects1.length = 0;
gdjs.Level2Code.GDBombObjects2.length = 0;
gdjs.Level2Code.GDBombObjects3.length = 0;
gdjs.Level2Code.GDScaffoldingObjects1.length = 0;
gdjs.Level2Code.GDScaffoldingObjects2.length = 0;
gdjs.Level2Code.GDScaffoldingObjects3.length = 0;
gdjs.Level2Code.GDScaffoldingSupportObjects1.length = 0;
gdjs.Level2Code.GDScaffoldingSupportObjects2.length = 0;
gdjs.Level2Code.GDScaffoldingSupportObjects3.length = 0;
gdjs.Level2Code.GDScaffoldingEdgeLeftObjects1.length = 0;
gdjs.Level2Code.GDScaffoldingEdgeLeftObjects2.length = 0;
gdjs.Level2Code.GDScaffoldingEdgeLeftObjects3.length = 0;
gdjs.Level2Code.GDScaffoldingEdgeRightObjects1.length = 0;
gdjs.Level2Code.GDScaffoldingEdgeRightObjects2.length = 0;
gdjs.Level2Code.GDScaffoldingEdgeRightObjects3.length = 0;
gdjs.Level2Code.GDSpikeObjects1.length = 0;
gdjs.Level2Code.GDSpikeObjects2.length = 0;
gdjs.Level2Code.GDSpikeObjects3.length = 0;
gdjs.Level2Code.GDEndPointObjects1.length = 0;
gdjs.Level2Code.GDEndPointObjects2.length = 0;
gdjs.Level2Code.GDEndPointObjects3.length = 0;
gdjs.Level2Code.GDHealthPickupObjects1.length = 0;
gdjs.Level2Code.GDHealthPickupObjects2.length = 0;
gdjs.Level2Code.GDHealthPickupObjects3.length = 0;
gdjs.Level2Code.GDCeilingCannonObjects1.length = 0;
gdjs.Level2Code.GDCeilingCannonObjects2.length = 0;
gdjs.Level2Code.GDCeilingCannonObjects3.length = 0;
gdjs.Level2Code.GDCannonShotObjects1.length = 0;
gdjs.Level2Code.GDCannonShotObjects2.length = 0;
gdjs.Level2Code.GDCannonShotObjects3.length = 0;
gdjs.Level2Code.GDDebugMenuObjects1.length = 0;
gdjs.Level2Code.GDDebugMenuObjects2.length = 0;
gdjs.Level2Code.GDDebugMenuObjects3.length = 0;
gdjs.Level2Code.GDPlayerscoreObjects1.length = 0;
gdjs.Level2Code.GDPlayerscoreObjects2.length = 0;
gdjs.Level2Code.GDPlayerscoreObjects3.length = 0;
gdjs.Level2Code.GDExplosionObjects1.length = 0;
gdjs.Level2Code.GDExplosionObjects2.length = 0;
gdjs.Level2Code.GDExplosionObjects3.length = 0;
gdjs.Level2Code.GDMetalFloorObjects1.length = 0;
gdjs.Level2Code.GDMetalFloorObjects2.length = 0;
gdjs.Level2Code.GDMetalFloorObjects3.length = 0;
gdjs.Level2Code.GDMetalBackgroundObjects1.length = 0;
gdjs.Level2Code.GDMetalBackgroundObjects2.length = 0;
gdjs.Level2Code.GDMetalBackgroundObjects3.length = 0;

gdjs.Level2Code.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['Level2Code'] = gdjs.Level2Code;
