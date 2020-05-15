gdjs.Level1Code = {};
gdjs.Level1Code.GDCharacterObjects1= [];
gdjs.Level1Code.GDCharacterObjects2= [];
gdjs.Level1Code.GDCharacterObjects3= [];
gdjs.Level1Code.GDGroundObjects1= [];
gdjs.Level1Code.GDGroundObjects2= [];
gdjs.Level1Code.GDGroundObjects3= [];
gdjs.Level1Code.GDRoadRollerObjects1= [];
gdjs.Level1Code.GDRoadRollerObjects2= [];
gdjs.Level1Code.GDRoadRollerObjects3= [];
gdjs.Level1Code.GDLeftObjects1= [];
gdjs.Level1Code.GDLeftObjects2= [];
gdjs.Level1Code.GDLeftObjects3= [];
gdjs.Level1Code.GDRightObjects1= [];
gdjs.Level1Code.GDRightObjects2= [];
gdjs.Level1Code.GDRightObjects3= [];
gdjs.Level1Code.GDHelibomberObjects1= [];
gdjs.Level1Code.GDHelibomberObjects2= [];
gdjs.Level1Code.GDHelibomberObjects3= [];
gdjs.Level1Code.GDWallObjects1= [];
gdjs.Level1Code.GDWallObjects2= [];
gdjs.Level1Code.GDWallObjects3= [];
gdjs.Level1Code.GDMissileObjects1= [];
gdjs.Level1Code.GDMissileObjects2= [];
gdjs.Level1Code.GDMissileObjects3= [];
gdjs.Level1Code.GDFlippedMissileObjects1= [];
gdjs.Level1Code.GDFlippedMissileObjects2= [];
gdjs.Level1Code.GDFlippedMissileObjects3= [];
gdjs.Level1Code.GDTurretObjects1= [];
gdjs.Level1Code.GDTurretObjects2= [];
gdjs.Level1Code.GDTurretObjects3= [];
gdjs.Level1Code.GDTurretMissileObjects1= [];
gdjs.Level1Code.GDTurretMissileObjects2= [];
gdjs.Level1Code.GDTurretMissileObjects3= [];
gdjs.Level1Code.GDUndergroundObjects1= [];
gdjs.Level1Code.GDUndergroundObjects2= [];
gdjs.Level1Code.GDUndergroundObjects3= [];
gdjs.Level1Code.GDCaveBackObjects1= [];
gdjs.Level1Code.GDCaveBackObjects2= [];
gdjs.Level1Code.GDCaveBackObjects3= [];
gdjs.Level1Code.GDBombObjects1= [];
gdjs.Level1Code.GDBombObjects2= [];
gdjs.Level1Code.GDBombObjects3= [];
gdjs.Level1Code.GDScaffoldingObjects1= [];
gdjs.Level1Code.GDScaffoldingObjects2= [];
gdjs.Level1Code.GDScaffoldingObjects3= [];
gdjs.Level1Code.GDScaffoldingSupportObjects1= [];
gdjs.Level1Code.GDScaffoldingSupportObjects2= [];
gdjs.Level1Code.GDScaffoldingSupportObjects3= [];
gdjs.Level1Code.GDScaffoldingEdgeLeftObjects1= [];
gdjs.Level1Code.GDScaffoldingEdgeLeftObjects2= [];
gdjs.Level1Code.GDScaffoldingEdgeLeftObjects3= [];
gdjs.Level1Code.GDScaffoldingEdgeRightObjects1= [];
gdjs.Level1Code.GDScaffoldingEdgeRightObjects2= [];
gdjs.Level1Code.GDScaffoldingEdgeRightObjects3= [];
gdjs.Level1Code.GDSpikeObjects1= [];
gdjs.Level1Code.GDSpikeObjects2= [];
gdjs.Level1Code.GDSpikeObjects3= [];
gdjs.Level1Code.GDEndPointObjects1= [];
gdjs.Level1Code.GDEndPointObjects2= [];
gdjs.Level1Code.GDEndPointObjects3= [];
gdjs.Level1Code.GDHealthPickupObjects1= [];
gdjs.Level1Code.GDHealthPickupObjects2= [];
gdjs.Level1Code.GDHealthPickupObjects3= [];
gdjs.Level1Code.GDCeilingCannonObjects1= [];
gdjs.Level1Code.GDCeilingCannonObjects2= [];
gdjs.Level1Code.GDCeilingCannonObjects3= [];
gdjs.Level1Code.GDCannonShotObjects1= [];
gdjs.Level1Code.GDCannonShotObjects2= [];
gdjs.Level1Code.GDCannonShotObjects3= [];
gdjs.Level1Code.GDDebugMenuObjects1= [];
gdjs.Level1Code.GDDebugMenuObjects2= [];
gdjs.Level1Code.GDDebugMenuObjects3= [];
gdjs.Level1Code.GDPlayerscoreObjects1= [];
gdjs.Level1Code.GDPlayerscoreObjects2= [];
gdjs.Level1Code.GDPlayerscoreObjects3= [];
gdjs.Level1Code.GDExplosionObjects1= [];
gdjs.Level1Code.GDExplosionObjects2= [];
gdjs.Level1Code.GDExplosionObjects3= [];
gdjs.Level1Code.GDInstructionSignObjects1= [];
gdjs.Level1Code.GDInstructionSignObjects2= [];
gdjs.Level1Code.GDInstructionSignObjects3= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.condition3IsTrue_0 = {val:false};


gdjs.Level1Code.eventsList0x6bb384 = function(runtimeScene) {

{

/* Reuse gdjs.Level1Code.GDCharacterObjects1 */

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setAnimationName("Walk");
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x6bb384
gdjs.Level1Code.eventsList0x6bbc0c = function(runtimeScene) {

{

/* Reuse gdjs.Level1Code.GDCharacterObjects1 */

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setAnimationName("Idle");
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x6bbc0c
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRoadRollerObjects1Objects = Hashtable.newFrom({"RoadRoller": gdjs.Level1Code.GDRoadRollerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Level1Code.GDRightObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRoadRollerObjects1Objects = Hashtable.newFrom({"RoadRoller": gdjs.Level1Code.GDRoadRollerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Level1Code.GDLeftObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Level1Code.GDLeftObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Level1Code.GDRightObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level1Code.GDMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRoadRollerObjects1Objects = Hashtable.newFrom({"RoadRoller": gdjs.Level1Code.GDRoadRollerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRoadRollerObjects1Objects = Hashtable.newFrom({"RoadRoller": gdjs.Level1Code.GDRoadRollerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level1Code.GDFlippedMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRoadRollerObjects1Objects = Hashtable.newFrom({"RoadRoller": gdjs.Level1Code.GDRoadRollerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level1Code.GDHelibomberObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level1Code.GDHelibomberObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.Level1Code.GDBombObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBombObjects2Objects = Hashtable.newFrom({"Bomb": gdjs.Level1Code.GDBombObjects2});gdjs.Level1Code.eventsList0x7b39ac = function(runtimeScene) {

{

gdjs.Level1Code.GDHelibomberObjects2.createFrom(gdjs.Level1Code.GDHelibomberObjects1);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDHelibomberObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDHelibomberObjects2[i].getAnimationFrame() == 2 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDHelibomberObjects2[k] = gdjs.Level1Code.GDHelibomberObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDHelibomberObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDHelibomberObjects2 */
gdjs.Level1Code.GDBombObjects2.createFrom(gdjs.Level1Code.GDBombObjects1);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBombObjects2Objects, (( gdjs.Level1Code.GDHelibomberObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDHelibomberObjects2[0].getPointX("")) + 10, (( gdjs.Level1Code.GDHelibomberObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDHelibomberObjects2[0].getPointY("")) + 50, "");
}}

}


{

/* Reuse gdjs.Level1Code.GDHelibomberObjects1 */

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDHelibomberObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDHelibomberObjects1[i].hasAnimationEnded() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDHelibomberObjects1[k] = gdjs.Level1Code.GDHelibomberObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDHelibomberObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDHelibomberObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHelibomberObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHelibomberObjects1[i].setAnimationName("Flying");
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x7b39ac
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.Level1Code.GDBombObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.Level1Code.GDGroundObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Level1Code.GDExplosionObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.Level1Code.GDBombObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSpikeObjects1Objects = Hashtable.newFrom({"Spike": gdjs.Level1Code.GDSpikeObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Level1Code.GDExplosionObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.Level1Code.GDBombObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDScaffoldingObjects1Objects = Hashtable.newFrom({"Scaffolding": gdjs.Level1Code.GDScaffoldingObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Level1Code.GDExplosionObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.Level1Code.GDBombObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Level1Code.GDExplosionObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level1Code.GDHelibomberObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level1Code.GDMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level1Code.GDHelibomberObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level1Code.GDHelibomberObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level1Code.GDFlippedMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level1Code.GDHelibomberObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Level1Code.GDWallObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects = Hashtable.newFrom({"Helibomber": gdjs.Level1Code.GDHelibomberObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDUndergroundObjects1Objects = Hashtable.newFrom({"Underground": gdjs.Level1Code.GDUndergroundObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level1Code.GDMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level1Code.GDMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level1Code.GDFlippedMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level1Code.GDFlippedMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level1Code.GDMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level1Code.GDFlippedMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level1Code.GDMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.Level1Code.GDGroundObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level1Code.GDFlippedMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.Level1Code.GDGroundObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level1Code.GDMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Level1Code.GDWallObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level1Code.GDMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDUndergroundObjects1Objects = Hashtable.newFrom({"Underground": gdjs.Level1Code.GDUndergroundObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level1Code.GDFlippedMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Level1Code.GDWallObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level1Code.GDFlippedMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDUndergroundObjects1Objects = Hashtable.newFrom({"Underground": gdjs.Level1Code.GDUndergroundObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretObjects1Objects = Hashtable.newFrom({"Turret": gdjs.Level1Code.GDTurretObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretMissileObjects1Objects = Hashtable.newFrom({"TurretMissile": gdjs.Level1Code.GDTurretMissileObjects1});gdjs.Level1Code.eventsList0x801744 = function(runtimeScene) {

{

/* Reuse gdjs.Level1Code.GDTurretObjects1 */

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTurretObjects1[i].hasAnimationEnded() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTurretObjects1[k] = gdjs.Level1Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTurretObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.2, "Bullet Time");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDTurretObjects1 */
gdjs.Level1Code.GDTurretMissileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretMissileObjects1Objects, (( gdjs.Level1Code.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDTurretObjects1[0].getPointX("")) - 10, (( gdjs.Level1Code.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDTurretObjects1[0].getPointY("")) + 93, "");
}{for(var i = 0, len = gdjs.Level1Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTurretObjects1[i].setAnimationName("Firing");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Bullet Time");
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 10, 1);
}}

}


}; //End of gdjs.Level1Code.eventsList0x801744
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretObjects1Objects = Hashtable.newFrom({"Turret": gdjs.Level1Code.GDTurretObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level1Code.GDMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level1Code.GDMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretObjects1Objects = Hashtable.newFrom({"Turret": gdjs.Level1Code.GDTurretObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretObjects1Objects = Hashtable.newFrom({"Turret": gdjs.Level1Code.GDTurretObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level1Code.GDFlippedMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level1Code.GDFlippedMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretObjects1Objects = Hashtable.newFrom({"Turret": gdjs.Level1Code.GDTurretObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretObjects1Objects = Hashtable.newFrom({"Turret": gdjs.Level1Code.GDTurretObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretMissileObjects1Objects = Hashtable.newFrom({"TurretMissile": gdjs.Level1Code.GDTurretMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSpikeObjects1Objects = Hashtable.newFrom({"Spike": gdjs.Level1Code.GDSpikeObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHealthPickupObjects1Objects = Hashtable.newFrom({"HealthPickup": gdjs.Level1Code.GDHealthPickupObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEndPointObjects1Objects = Hashtable.newFrom({"EndPoint": gdjs.Level1Code.GDEndPointObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCeilingCannonObjects1Objects = Hashtable.newFrom({"CeilingCannon": gdjs.Level1Code.GDCeilingCannonObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCannonShotObjects1Objects = Hashtable.newFrom({"CannonShot": gdjs.Level1Code.GDCannonShotObjects1});gdjs.Level1Code.eventsList0x9450ec = function(runtimeScene) {

{

/* Reuse gdjs.Level1Code.GDCeilingCannonObjects1 */

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCeilingCannonObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCeilingCannonObjects1[i].hasAnimationEnded() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDCeilingCannonObjects1[k] = gdjs.Level1Code.GDCeilingCannonObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCeilingCannonObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCeilingCannonObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCeilingCannonObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCeilingCannonObjects1[i].setAnimationName("Idle");
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x9450ec
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCannonShotObjects1Objects = Hashtable.newFrom({"CannonShot": gdjs.Level1Code.GDCannonShotObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.Level1Code.GDGroundObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCannonShotObjects1Objects = Hashtable.newFrom({"CannonShot": gdjs.Level1Code.GDCannonShotObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCannonShotObjects1Objects = Hashtable.newFrom({"CannonShot": gdjs.Level1Code.GDCannonShotObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDScaffoldingObjects1Objects = Hashtable.newFrom({"Scaffolding": gdjs.Level1Code.GDScaffoldingObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCeilingCannonObjects1Objects = Hashtable.newFrom({"CeilingCannon": gdjs.Level1Code.GDCeilingCannonObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.Level1Code.GDMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCeilingCannonObjects1Objects = Hashtable.newFrom({"CeilingCannon": gdjs.Level1Code.GDCeilingCannonObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.Level1Code.GDFlippedMissileObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.Level1Code.GDCharacterObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCeilingCannonObjects1Objects = Hashtable.newFrom({"CeilingCannon": gdjs.Level1Code.GDCeilingCannonObjects1});gdjs.Level1Code.eventsList0x5b70b8 = function(runtimeScene) {

{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setAnimationName("Jump");
}
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList0x6bb384(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].flipX(true);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].flipX(false);
}
}}

}


{


{
gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level1Code.GDCharacterObjects1.length !== 0 ? gdjs.Level1Code.GDCharacterObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList0x6bbc0c(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Damage Time");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getVariableNumber(gdjs.Level1Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level1");
}}

}


{

gdjs.Level1Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDRoadRollerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDRoadRollerObjects1[i].getVariableString(gdjs.Level1Code.GDRoadRollerObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDRoadRollerObjects1[k] = gdjs.Level1Code.GDRoadRollerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDRoadRollerObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDRoadRollerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDRoadRollerObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDRoadRollerObjects1[i].flipX(true);
}
}}

}


{

gdjs.Level1Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDRoadRollerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDRoadRollerObjects1[i].getVariableString(gdjs.Level1Code.GDRoadRollerObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDRoadRollerObjects1[k] = gdjs.Level1Code.GDRoadRollerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDRoadRollerObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDRoadRollerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDRoadRollerObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDRoadRollerObjects1[i].flipX(false);
}
}}

}


{

gdjs.Level1Code.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));
gdjs.Level1Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRoadRollerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRightObjects1Objects, false, runtimeScene, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDRoadRollerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDRoadRollerObjects1[i].returnVariable(gdjs.Level1Code.GDRoadRollerObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.Level1Code.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));
gdjs.Level1Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRoadRollerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDRoadRollerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDRoadRollerObjects1[i].returnVariable(gdjs.Level1Code.GDRoadRollerObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.Level1Code.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDLeftObjects1Objects);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDLeftObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDLeftObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLeftObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.Level1Code.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRightObjects1Objects);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDRightObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDRightObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDRightObjects1[i].setOpacity(0);
}
}{}}

}


{

gdjs.Level1Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
gdjs.Level1Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRoadRollerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMissileObjects1 */
gdjs.Level1Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
/* Reuse gdjs.Level1Code.GDRoadRollerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDRoadRollerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level1Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(100);
}
}}

}


{

gdjs.Level1Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level1Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRoadRollerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFlippedMissileObjects1 */
gdjs.Level1Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
/* Reuse gdjs.Level1Code.GDRoadRollerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDRoadRollerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDRoadRollerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level1Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(100);
}
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDRoadRollerObjects1.createFrom(runtimeScene.getObjects("RoadRoller"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDRoadRollerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].returnVariable(gdjs.Level1Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects, 1200, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDHelibomberObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDHelibomberObjects1[i].getVariableString(gdjs.Level1Code.GDHelibomberObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDHelibomberObjects1[k] = gdjs.Level1Code.GDHelibomberObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDHelibomberObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDHelibomberObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHelibomberObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHelibomberObjects1[i].flipX(false);
}
}}

}


{

gdjs.Level1Code.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects, 300, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBombObjects1Objects) <= 1;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDHelibomberObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHelibomberObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level1Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHelibomberObjects1[i].setAnimationName("Drop Bomb");
}
}
{ //Subevents
gdjs.Level1Code.eventsList0x7b39ac(runtimeScene);} //End of subevents
}

}


{


{
gdjs.Level1Code.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
{for(var i = 0, len = gdjs.Level1Code.GDBombObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBombObjects1[i].addPolarForce(90, 400, 0);
}
}}

}


{

gdjs.Level1Code.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
gdjs.Level1Code.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBombObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDGroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBombObjects1 */
gdjs.Level1Code.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Level1Code.GDBombObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExplosionObjects1Objects, (( gdjs.Level1Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDBombObjects1[0].getPointX("")) + 5, (( gdjs.Level1Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDBombObjects1[0].getPointY("")) + 5, "");
}}

}


{

gdjs.Level1Code.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
gdjs.Level1Code.GDSpikeObjects1.createFrom(runtimeScene.getObjects("Spike"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBombObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSpikeObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBombObjects1 */
gdjs.Level1Code.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Level1Code.GDBombObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExplosionObjects1Objects, (( gdjs.Level1Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDBombObjects1[0].getPointX("")) + 5, (( gdjs.Level1Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDBombObjects1[0].getPointY("")) + 5, "");
}}

}


{

gdjs.Level1Code.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
gdjs.Level1Code.GDScaffoldingObjects1.createFrom(runtimeScene.getObjects("Scaffolding"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBombObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDScaffoldingObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBombObjects1 */
gdjs.Level1Code.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Level1Code.GDBombObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExplosionObjects1Objects, (( gdjs.Level1Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDBombObjects1[0].getPointX("")) + 5, (( gdjs.Level1Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDBombObjects1[0].getPointY("")) + 5, "");
}}

}


{

gdjs.Level1Code.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBombObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBombObjects1 */
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
gdjs.Level1Code.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Level1Code.GDBombObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDExplosionObjects1Objects, (( gdjs.Level1Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDBombObjects1[0].getPointX("")) + 5, (( gdjs.Level1Code.GDBombObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDBombObjects1[0].getPointY("")) + 5, "");
}{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].returnVariable(gdjs.Level1Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}}

}


{

gdjs.Level1Code.GDExplosionObjects1.createFrom(runtimeScene.getObjects("Explosion"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDExplosionObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDExplosionObjects1[i].hasAnimationEnded() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDExplosionObjects1[k] = gdjs.Level1Code.GDExplosionObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDExplosionObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDExplosionObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDExplosionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDHelibomberObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDHelibomberObjects1[i].getVariableString(gdjs.Level1Code.GDHelibomberObjects1[i].getVariables().getFromIndex(0)) == "Stop" ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDHelibomberObjects1[k] = gdjs.Level1Code.GDHelibomberObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDHelibomberObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDHelibomberObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHelibomberObjects1[i].setAnimationName("DropBomb");
}
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].returnVariable(gdjs.Level1Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}}

}


{

gdjs.Level1Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));
gdjs.Level1Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDHelibomberObjects1 */
/* Reuse gdjs.Level1Code.GDMissileObjects1 */
gdjs.Level1Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{for(var i = 0, len = gdjs.Level1Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHelibomberObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level1Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(300);
}
}}

}


{

gdjs.Level1Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level1Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFlippedMissileObjects1 */
/* Reuse gdjs.Level1Code.GDHelibomberObjects1 */
gdjs.Level1Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{for(var i = 0, len = gdjs.Level1Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHelibomberObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level1Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(300);
}
}}

}


{

gdjs.Level1Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));
gdjs.Level1Code.GDWallObjects1.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDHelibomberObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHelibomberObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDHelibomberObjects1.createFrom(runtimeScene.getObjects("Helibomber"));
gdjs.Level1Code.GDUndergroundObjects1.createFrom(runtimeScene.getObjects("Underground"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHelibomberObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDUndergroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDHelibomberObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDHelibomberObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHelibomberObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects) <= 3;
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDCharacterObjects1[i].isFlippedX()) ) {
        gdjs.Level1Code.condition2IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
/* Reuse gdjs.Level1Code.GDMissileObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects, (( gdjs.Level1Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDCharacterObjects1[0].getPointX("")) + 20, (( gdjs.Level1Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDCharacterObjects1[0].getPointY("")) + 25, "");
}{for(var i = 0, len = gdjs.Level1Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMissileObjects1[i].setZOrder(2);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 10, 1);
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].isFlippedX() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
gdjs.Level1Code.condition2IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects) <= 3;
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
/* Reuse gdjs.Level1Code.GDFlippedMissileObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects, (( gdjs.Level1Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDCharacterObjects1[0].getPointX("")) - 20, (( gdjs.Level1Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDCharacterObjects1[0].getPointY("")) + 25, "");
}{for(var i = 0, len = gdjs.Level1Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFlippedMissileObjects1[i].setZOrder(2);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 10, 1);
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setAnimationName("ShootStationary");
}
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setAnimationName("ShootWalk");
}
}}

}


{


{
gdjs.Level1Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
{for(var i = 0, len = gdjs.Level1Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMissileObjects1[i].addPolarForce(0, 550, 0);
}
}}

}


{


{
gdjs.Level1Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
{for(var i = 0, len = gdjs.Level1Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFlippedMissileObjects1[i].addPolarForce(180, 550, 0);
}
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects, 600, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMissileObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects, 600, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFlippedMissileObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));
gdjs.Level1Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDGroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMissileObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level1Code.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDGroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFlippedMissileObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
gdjs.Level1Code.GDWallObjects1.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMissileObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
gdjs.Level1Code.GDUndergroundObjects1.createFrom(runtimeScene.getObjects("Underground"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDUndergroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMissileObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level1Code.GDWallObjects1.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDWallObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFlippedMissileObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level1Code.GDUndergroundObjects1.createFrom(runtimeScene.getObjects("Underground"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDUndergroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFlippedMissileObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, 600, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDTurretObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTurretObjects1[i].setAnimationName("PreparingFire");
}
}
{ //Subevents
gdjs.Level1Code.eventsList0x801744(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


{
gdjs.Level1Code.GDTurretMissileObjects1.createFrom(runtimeScene.getObjects("TurretMissile"));
{for(var i = 0, len = gdjs.Level1Code.GDTurretMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTurretMissileObjects1[i].addPolarForce(180, 350, 0);
}
}}

}


{

gdjs.Level1Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
gdjs.Level1Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTurretObjects1[i].getOpacity() == 255 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDTurretObjects1[k] = gdjs.Level1Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTurretObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMissileObjects1 */
/* Reuse gdjs.Level1Code.GDTurretObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTurretObjects1[i].returnVariable(gdjs.Level1Code.GDTurretObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy Damage Time");
}{for(var i = 0, len = gdjs.Level1Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTurretObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
gdjs.Level1Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTurretObjects1[i].getOpacity() < 255 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDTurretObjects1[k] = gdjs.Level1Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTurretObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDMissileObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Enemy Damage Time");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTurretObjects1[i].getOpacity() < 255 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDTurretObjects1[k] = gdjs.Level1Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTurretObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDTurretObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTurretObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.Level1Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level1Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTurretObjects1[i].getOpacity() == 255 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDTurretObjects1[k] = gdjs.Level1Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTurretObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFlippedMissileObjects1 */
/* Reuse gdjs.Level1Code.GDTurretObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTurretObjects1[i].returnVariable(gdjs.Level1Code.GDTurretObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy Damage Time");
}{for(var i = 0, len = gdjs.Level1Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTurretObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.Level1Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
gdjs.Level1Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTurretObjects1[i].getOpacity() == 255 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDTurretObjects1[k] = gdjs.Level1Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTurretObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDFlippedMissileObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDTurretObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDTurretObjects1[i].getVariableNumber(gdjs.Level1Code.GDTurretObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDTurretObjects1[k] = gdjs.Level1Code.GDTurretObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDTurretObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
/* Reuse gdjs.Level1Code.GDTurretObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTurretObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level1Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(500);
}
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].returnVariable(gdjs.Level1Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDTurretMissileObjects1.createFrom(runtimeScene.getObjects("TurretMissile"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDTurretMissileObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].returnVariable(gdjs.Level1Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDSpikeObjects1.createFrom(runtimeScene.getObjects("Spike"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSpikeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
gdjs.Level1Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].returnVariable(gdjs.Level1Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level1Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).sub(15);
}
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDHealthPickupObjects1.createFrom(runtimeScene.getObjects("HealthPickup"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDHealthPickupObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getVariableNumber(gdjs.Level1Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)) < 3 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
/* Reuse gdjs.Level1Code.GDHealthPickupObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDHealthPickupObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHealthPickupObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].returnVariable(gdjs.Level1Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}}

}


{

gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDEndPointObjects1.createFrom(runtimeScene.getObjects("EndPoint"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEndPointObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", true);
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level1Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(750);
}
}}

}


{

gdjs.Level1Code.GDCeilingCannonObjects1.createFrom(runtimeScene.getObjects("CeilingCannon"));
gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCeilingCannonObjects1Objects, 600, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Shot Time");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCeilingCannonObjects1 */
gdjs.Level1Code.GDCannonShotObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCannonShotObjects1Objects, (( gdjs.Level1Code.GDCeilingCannonObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDCeilingCannonObjects1[0].getPointX("")) + 23, (( gdjs.Level1Code.GDCeilingCannonObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDCeilingCannonObjects1[0].getPointY("")) + 10, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Shot Time");
}{for(var i = 0, len = gdjs.Level1Code.GDCeilingCannonObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCeilingCannonObjects1[i].setAnimationName("Fire");
}
}
{ //Subevents
gdjs.Level1Code.eventsList0x9450ec(runtimeScene);} //End of subevents
}

}


{


{
gdjs.Level1Code.GDCannonShotObjects1.createFrom(runtimeScene.getObjects("CannonShot"));
{for(var i = 0, len = gdjs.Level1Code.GDCannonShotObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCannonShotObjects1[i].addPolarForce(90, 650, 0);
}
}}

}


{

gdjs.Level1Code.GDCannonShotObjects1.createFrom(runtimeScene.getObjects("CannonShot"));
gdjs.Level1Code.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCannonShotObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDGroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCannonShotObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCannonShotObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCannonShotObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDCannonShotObjects1.createFrom(runtimeScene.getObjects("CannonShot"));
{for(var i = 0, len = gdjs.Level1Code.GDCannonShotObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCannonShotObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDCannonShotObjects1.createFrom(runtimeScene.getObjects("CannonShot"));
gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCannonShotObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCannonShotObjects1 */
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].returnVariable(gdjs.Level1Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.Level1Code.GDCannonShotObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCannonShotObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDCannonShotObjects1.createFrom(runtimeScene.getObjects("CannonShot"));
gdjs.Level1Code.GDScaffoldingObjects1.createFrom(runtimeScene.getObjects("Scaffolding"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCannonShotObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDScaffoldingObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCannonShotObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCannonShotObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCannonShotObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDCeilingCannonObjects1.createFrom(runtimeScene.getObjects("CeilingCannon"));
gdjs.Level1Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCeilingCannonObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMissileObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCeilingCannonObjects1 */
/* Reuse gdjs.Level1Code.GDMissileObjects1 */
gdjs.Level1Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{for(var i = 0, len = gdjs.Level1Code.GDCeilingCannonObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCeilingCannonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level1Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(200);
}
}}

}


{

gdjs.Level1Code.GDCeilingCannonObjects1.createFrom(runtimeScene.getObjects("CeilingCannon"));
gdjs.Level1Code.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCeilingCannonObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFlippedMissileObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDCeilingCannonObjects1 */
gdjs.Level1Code.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
gdjs.Level1Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{for(var i = 0, len = gdjs.Level1Code.GDCeilingCannonObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCeilingCannonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMissileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerscoreObjects1[i].returnVariable(gdjs.Level1Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0)).add(200);
}
}}

}


{

gdjs.Level1Code.GDCeilingCannonObjects1.createFrom(runtimeScene.getObjects("CeilingCannon"));
gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCharacterObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCeilingCannonObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDCharacterObjects1[k] = gdjs.Level1Code.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDCharacterObjects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.Level1Code.GDCannonShotObjects1.createFrom(runtimeScene.getObjects("CannonShot"));
/* Reuse gdjs.Level1Code.GDCharacterObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].returnVariable(gdjs.Level1Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.Level1Code.GDCannonShotObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCannonShotObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDDebugMenuObjects1.createFrom(runtimeScene.getObjects("DebugMenu"));
{for(var i = 0, len = gdjs.Level1Code.GDDebugMenuObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDebugMenuObjects1[i].setPosition((( gdjs.Level1Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDCharacterObjects1[0].getPointX("")) - 75,(( gdjs.Level1Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDCharacterObjects1[0].getPointY("")) - 200);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.Level1Code.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCharacterObjects1[i].returnVariable(gdjs.Level1Code.GDCharacterObjects1[i].getVariables().getFromIndex(1)).add(996);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", true);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num3");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boss", true);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Tab");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.Level1Code.GDDebugMenuObjects1.createFrom(runtimeScene.getObjects("DebugMenu"));
{for(var i = 0, len = gdjs.Level1Code.GDDebugMenuObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDebugMenuObjects1[i].setPosition((( gdjs.Level1Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDCharacterObjects1[0].getPointX("")),(( gdjs.Level1Code.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDCharacterObjects1[0].getPointY("")) + 100000);
}
}}

}


{


{
gdjs.Level1Code.GDPlayerscoreObjects1.createFrom(runtimeScene.getObjects("Playerscore"));
{for(var i = 0, len = gdjs.Level1Code.GDPlayerscoreObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerscoreObjects1[i].setString("Score: " + (gdjs.RuntimeObject.getVariableString(gdjs.Level1Code.GDPlayerscoreObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


{


{
}

}


}; //End of gdjs.Level1Code.eventsList0x5b70b8


gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDCharacterObjects1.length = 0;
gdjs.Level1Code.GDCharacterObjects2.length = 0;
gdjs.Level1Code.GDCharacterObjects3.length = 0;
gdjs.Level1Code.GDGroundObjects1.length = 0;
gdjs.Level1Code.GDGroundObjects2.length = 0;
gdjs.Level1Code.GDGroundObjects3.length = 0;
gdjs.Level1Code.GDRoadRollerObjects1.length = 0;
gdjs.Level1Code.GDRoadRollerObjects2.length = 0;
gdjs.Level1Code.GDRoadRollerObjects3.length = 0;
gdjs.Level1Code.GDLeftObjects1.length = 0;
gdjs.Level1Code.GDLeftObjects2.length = 0;
gdjs.Level1Code.GDLeftObjects3.length = 0;
gdjs.Level1Code.GDRightObjects1.length = 0;
gdjs.Level1Code.GDRightObjects2.length = 0;
gdjs.Level1Code.GDRightObjects3.length = 0;
gdjs.Level1Code.GDHelibomberObjects1.length = 0;
gdjs.Level1Code.GDHelibomberObjects2.length = 0;
gdjs.Level1Code.GDHelibomberObjects3.length = 0;
gdjs.Level1Code.GDWallObjects1.length = 0;
gdjs.Level1Code.GDWallObjects2.length = 0;
gdjs.Level1Code.GDWallObjects3.length = 0;
gdjs.Level1Code.GDMissileObjects1.length = 0;
gdjs.Level1Code.GDMissileObjects2.length = 0;
gdjs.Level1Code.GDMissileObjects3.length = 0;
gdjs.Level1Code.GDFlippedMissileObjects1.length = 0;
gdjs.Level1Code.GDFlippedMissileObjects2.length = 0;
gdjs.Level1Code.GDFlippedMissileObjects3.length = 0;
gdjs.Level1Code.GDTurretObjects1.length = 0;
gdjs.Level1Code.GDTurretObjects2.length = 0;
gdjs.Level1Code.GDTurretObjects3.length = 0;
gdjs.Level1Code.GDTurretMissileObjects1.length = 0;
gdjs.Level1Code.GDTurretMissileObjects2.length = 0;
gdjs.Level1Code.GDTurretMissileObjects3.length = 0;
gdjs.Level1Code.GDUndergroundObjects1.length = 0;
gdjs.Level1Code.GDUndergroundObjects2.length = 0;
gdjs.Level1Code.GDUndergroundObjects3.length = 0;
gdjs.Level1Code.GDCaveBackObjects1.length = 0;
gdjs.Level1Code.GDCaveBackObjects2.length = 0;
gdjs.Level1Code.GDCaveBackObjects3.length = 0;
gdjs.Level1Code.GDBombObjects1.length = 0;
gdjs.Level1Code.GDBombObjects2.length = 0;
gdjs.Level1Code.GDBombObjects3.length = 0;
gdjs.Level1Code.GDScaffoldingObjects1.length = 0;
gdjs.Level1Code.GDScaffoldingObjects2.length = 0;
gdjs.Level1Code.GDScaffoldingObjects3.length = 0;
gdjs.Level1Code.GDScaffoldingSupportObjects1.length = 0;
gdjs.Level1Code.GDScaffoldingSupportObjects2.length = 0;
gdjs.Level1Code.GDScaffoldingSupportObjects3.length = 0;
gdjs.Level1Code.GDScaffoldingEdgeLeftObjects1.length = 0;
gdjs.Level1Code.GDScaffoldingEdgeLeftObjects2.length = 0;
gdjs.Level1Code.GDScaffoldingEdgeLeftObjects3.length = 0;
gdjs.Level1Code.GDScaffoldingEdgeRightObjects1.length = 0;
gdjs.Level1Code.GDScaffoldingEdgeRightObjects2.length = 0;
gdjs.Level1Code.GDScaffoldingEdgeRightObjects3.length = 0;
gdjs.Level1Code.GDSpikeObjects1.length = 0;
gdjs.Level1Code.GDSpikeObjects2.length = 0;
gdjs.Level1Code.GDSpikeObjects3.length = 0;
gdjs.Level1Code.GDEndPointObjects1.length = 0;
gdjs.Level1Code.GDEndPointObjects2.length = 0;
gdjs.Level1Code.GDEndPointObjects3.length = 0;
gdjs.Level1Code.GDHealthPickupObjects1.length = 0;
gdjs.Level1Code.GDHealthPickupObjects2.length = 0;
gdjs.Level1Code.GDHealthPickupObjects3.length = 0;
gdjs.Level1Code.GDCeilingCannonObjects1.length = 0;
gdjs.Level1Code.GDCeilingCannonObjects2.length = 0;
gdjs.Level1Code.GDCeilingCannonObjects3.length = 0;
gdjs.Level1Code.GDCannonShotObjects1.length = 0;
gdjs.Level1Code.GDCannonShotObjects2.length = 0;
gdjs.Level1Code.GDCannonShotObjects3.length = 0;
gdjs.Level1Code.GDDebugMenuObjects1.length = 0;
gdjs.Level1Code.GDDebugMenuObjects2.length = 0;
gdjs.Level1Code.GDDebugMenuObjects3.length = 0;
gdjs.Level1Code.GDPlayerscoreObjects1.length = 0;
gdjs.Level1Code.GDPlayerscoreObjects2.length = 0;
gdjs.Level1Code.GDPlayerscoreObjects3.length = 0;
gdjs.Level1Code.GDExplosionObjects1.length = 0;
gdjs.Level1Code.GDExplosionObjects2.length = 0;
gdjs.Level1Code.GDExplosionObjects3.length = 0;
gdjs.Level1Code.GDInstructionSignObjects1.length = 0;
gdjs.Level1Code.GDInstructionSignObjects2.length = 0;
gdjs.Level1Code.GDInstructionSignObjects3.length = 0;

gdjs.Level1Code.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
