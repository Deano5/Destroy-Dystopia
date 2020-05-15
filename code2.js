gdjs.BossCode = {};
gdjs.BossCode.GDCharacterObjects1= [];
gdjs.BossCode.GDCharacterObjects2= [];
gdjs.BossCode.GDGroundObjects1= [];
gdjs.BossCode.GDGroundObjects2= [];
gdjs.BossCode.GDRoadRollerObjects1= [];
gdjs.BossCode.GDRoadRollerObjects2= [];
gdjs.BossCode.GDLeftObjects1= [];
gdjs.BossCode.GDLeftObjects2= [];
gdjs.BossCode.GDRightObjects1= [];
gdjs.BossCode.GDRightObjects2= [];
gdjs.BossCode.GDHelibomberObjects1= [];
gdjs.BossCode.GDHelibomberObjects2= [];
gdjs.BossCode.GDWallObjects1= [];
gdjs.BossCode.GDWallObjects2= [];
gdjs.BossCode.GDMissileObjects1= [];
gdjs.BossCode.GDMissileObjects2= [];
gdjs.BossCode.GDFlippedMissileObjects1= [];
gdjs.BossCode.GDFlippedMissileObjects2= [];
gdjs.BossCode.GDTurretObjects1= [];
gdjs.BossCode.GDTurretObjects2= [];
gdjs.BossCode.GDTurretMissileObjects1= [];
gdjs.BossCode.GDTurretMissileObjects2= [];
gdjs.BossCode.GDUndergroundObjects1= [];
gdjs.BossCode.GDUndergroundObjects2= [];
gdjs.BossCode.GDCaveBackObjects1= [];
gdjs.BossCode.GDCaveBackObjects2= [];
gdjs.BossCode.GDBombObjects1= [];
gdjs.BossCode.GDBombObjects2= [];
gdjs.BossCode.GDScaffoldingObjects1= [];
gdjs.BossCode.GDScaffoldingObjects2= [];
gdjs.BossCode.GDScaffoldingSupportObjects1= [];
gdjs.BossCode.GDScaffoldingSupportObjects2= [];
gdjs.BossCode.GDScaffoldingEdgeLeftObjects1= [];
gdjs.BossCode.GDScaffoldingEdgeLeftObjects2= [];
gdjs.BossCode.GDScaffoldingEdgeRightObjects1= [];
gdjs.BossCode.GDScaffoldingEdgeRightObjects2= [];
gdjs.BossCode.GDSpikeObjects1= [];
gdjs.BossCode.GDSpikeObjects2= [];
gdjs.BossCode.GDEndPointObjects1= [];
gdjs.BossCode.GDEndPointObjects2= [];
gdjs.BossCode.GDHealthPickupObjects1= [];
gdjs.BossCode.GDHealthPickupObjects2= [];
gdjs.BossCode.GDCeilingCannonObjects1= [];
gdjs.BossCode.GDCeilingCannonObjects2= [];
gdjs.BossCode.GDCannonShotObjects1= [];
gdjs.BossCode.GDCannonShotObjects2= [];
gdjs.BossCode.GDDebugMenuObjects1= [];
gdjs.BossCode.GDDebugMenuObjects2= [];
gdjs.BossCode.GDPlayerscoreObjects1= [];
gdjs.BossCode.GDPlayerscoreObjects2= [];
gdjs.BossCode.GDExplosionObjects1= [];
gdjs.BossCode.GDExplosionObjects2= [];
gdjs.BossCode.GDBossCoreObjects1= [];
gdjs.BossCode.GDBossCoreObjects2= [];
gdjs.BossCode.GDBottomCannonObjects1= [];
gdjs.BossCode.GDBottomCannonObjects2= [];
gdjs.BossCode.GDTopCannonObjects1= [];
gdjs.BossCode.GDTopCannonObjects2= [];
gdjs.BossCode.GDForcefieldObjects1= [];
gdjs.BossCode.GDForcefieldObjects2= [];
gdjs.BossCode.GDForcefieldShotObjects1= [];
gdjs.BossCode.GDForcefieldShotObjects2= [];
gdjs.BossCode.GDEnergyShotBObjects1= [];
gdjs.BossCode.GDEnergyShotBObjects2= [];
gdjs.BossCode.GDEnergyShotTObjects1= [];
gdjs.BossCode.GDEnergyShotTObjects2= [];
gdjs.BossCode.GDInvisibleWallObjects1= [];
gdjs.BossCode.GDInvisibleWallObjects2= [];

gdjs.BossCode.conditionTrue_0 = {val:false};
gdjs.BossCode.condition0IsTrue_0 = {val:false};
gdjs.BossCode.condition1IsTrue_0 = {val:false};
gdjs.BossCode.condition2IsTrue_0 = {val:false};
gdjs.BossCode.condition3IsTrue_0 = {val:false};


gdjs.BossCode.eventsList0x86f484 = function(runtimeScene) {

{

/* Reuse gdjs.BossCode.GDCharacterObjects1 */

gdjs.BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}if (gdjs.BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].setAnimationName("Walk");
}
}}

}


}; //End of gdjs.BossCode.eventsList0x86f484
gdjs.BossCode.eventsList0x7ff65c = function(runtimeScene) {

{

/* Reuse gdjs.BossCode.GDCharacterObjects1 */

gdjs.BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.BossCode.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}if (gdjs.BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].setAnimationName("Idle");
}
}}

}


}; //End of gdjs.BossCode.eventsList0x7ff65c
gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.BossCode.GDMissileObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.BossCode.GDMissileObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.BossCode.GDFlippedMissileObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.BossCode.GDFlippedMissileObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.BossCode.GDCharacterObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.BossCode.GDMissileObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.BossCode.GDCharacterObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDFlippedMissileObjects1Objects = Hashtable.newFrom({"FlippedMissile": gdjs.BossCode.GDFlippedMissileObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDEnergyShotBObjects1Objects = Hashtable.newFrom({"EnergyShotB": gdjs.BossCode.GDEnergyShotBObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDEnergyShotTObjects1Objects = Hashtable.newFrom({"EnergyShotT": gdjs.BossCode.GDEnergyShotTObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDEnergyShotTObjects1Objects = Hashtable.newFrom({"EnergyShotT": gdjs.BossCode.GDEnergyShotTObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.BossCode.GDGroundObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDBottomCannonObjects1Objects = Hashtable.newFrom({"BottomCannon": gdjs.BossCode.GDBottomCannonObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.BossCode.GDMissileObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDTopCannonObjects1Objects = Hashtable.newFrom({"TopCannon": gdjs.BossCode.GDTopCannonObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.BossCode.GDMissileObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDForcefieldShotObjects1Objects = Hashtable.newFrom({"ForcefieldShot": gdjs.BossCode.GDForcefieldShotObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.BossCode.GDMissileObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDForcefieldObjects1Objects = Hashtable.newFrom({"Forcefield": gdjs.BossCode.GDForcefieldObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.BossCode.GDMissileObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDForcefieldShotObjects1Objects = Hashtable.newFrom({"ForcefieldShot": gdjs.BossCode.GDForcefieldShotObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects = Hashtable.newFrom({"Missile": gdjs.BossCode.GDMissileObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDBossCoreObjects1Objects = Hashtable.newFrom({"BossCore": gdjs.BossCode.GDBossCoreObjects1});gdjs.BossCode.eventsList0x9d16cc = function(runtimeScene) {

{

/* Reuse gdjs.BossCode.GDBossCoreObjects1 */

gdjs.BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDBossCoreObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDBossCoreObjects1[i].hasAnimationEnded() ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDBossCoreObjects1[k] = gdjs.BossCode.GDBossCoreObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDBossCoreObjects1.length = k;}if (gdjs.BossCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.BossCode.eventsList0x9d16cc
gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.BossCode.GDCharacterObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDEnergyShotBObjects1Objects = Hashtable.newFrom({"EnergyShotB": gdjs.BossCode.GDEnergyShotBObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.BossCode.GDCharacterObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDEnergyShotTObjects1Objects = Hashtable.newFrom({"EnergyShotT": gdjs.BossCode.GDEnergyShotTObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.BossCode.GDCharacterObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDForcefieldShotObjects1Objects = Hashtable.newFrom({"ForcefieldShot": gdjs.BossCode.GDForcefieldShotObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.BossCode.GDCharacterObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDHealthPickupObjects1Objects = Hashtable.newFrom({"HealthPickup": gdjs.BossCode.GDHealthPickupObjects1});gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDInvisibleWallObjects1Objects = Hashtable.newFrom({"InvisibleWall": gdjs.BossCode.GDInvisibleWallObjects1});gdjs.BossCode.eventsList0x5b70b8 = function(runtimeScene) {

{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDCharacterObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}if (gdjs.BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].setAnimationName("Jump");
}
}}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDCharacterObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}if (gdjs.BossCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BossCode.eventsList0x86f484(runtimeScene);} //End of subevents
}

}


{


gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.BossCode.condition0IsTrue_0.val) {
gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].flipX(true);
}
}}

}


{


gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.BossCode.condition0IsTrue_0.val) {
gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].flipX(false);
}
}}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDCharacterObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}if (gdjs.BossCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BossCode.eventsList0x7ff65c(runtimeScene);} //End of subevents
}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.BossCode.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}if (gdjs.BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].setAnimationName("Idle");
}
}}

}


{


gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Damage Time");
}if (gdjs.BossCode.condition0IsTrue_0.val) {
gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDCharacterObjects1[i].getVariableNumber(gdjs.BossCode.GDCharacterObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}if (gdjs.BossCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Boss");
}}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.BossCode.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
gdjs.BossCode.condition2IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
gdjs.BossCode.condition1IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects) <= 3;
}if ( gdjs.BossCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.BossCode.GDCharacterObjects1[i].isFlippedX()) ) {
        gdjs.BossCode.condition2IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}}
}
if (gdjs.BossCode.condition2IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDCharacterObjects1 */
/* Reuse gdjs.BossCode.GDMissileObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects, (( gdjs.BossCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDCharacterObjects1[0].getPointX("")) + 20, (( gdjs.BossCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDCharacterObjects1[0].getPointY("")) + 25, "");
}{for(var i = 0, len = gdjs.BossCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMissileObjects1[i].setZOrder(2);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 10, 1);
}}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.BossCode.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
gdjs.BossCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDCharacterObjects1[i].isFlippedX() ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
gdjs.BossCode.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if ( gdjs.BossCode.condition1IsTrue_0.val ) {
{
gdjs.BossCode.condition2IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDFlippedMissileObjects1Objects) <= 3;
}}
}
if (gdjs.BossCode.condition2IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDCharacterObjects1 */
/* Reuse gdjs.BossCode.GDFlippedMissileObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDFlippedMissileObjects1Objects, (( gdjs.BossCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDCharacterObjects1[0].getPointX("")) - 20, (( gdjs.BossCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDCharacterObjects1[0].getPointY("")) + 25, "");
}{for(var i = 0, len = gdjs.BossCode.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDFlippedMissileObjects1[i].setZOrder(2);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 10, 1);
}}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.BossCode.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
gdjs.BossCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].setAnimationName("ShootStationary");
}
}}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDCharacterObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
gdjs.BossCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].setAnimationName("ShootWalk");
}
}}

}


{


{
gdjs.BossCode.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
{for(var i = 0, len = gdjs.BossCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMissileObjects1[i].addPolarForce(0, 550, 0);
}
}}

}


{


{
gdjs.BossCode.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));
{for(var i = 0, len = gdjs.BossCode.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDFlippedMissileObjects1[i].addPolarForce(180, 550, 0);
}
}}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.BossCode.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDCharacterObjects1Objects, gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects, 600, true);
}if (gdjs.BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDMissileObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.BossCode.GDFlippedMissileObjects1.createFrom(runtimeScene.getObjects("FlippedMissile"));

gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDCharacterObjects1Objects, gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDFlippedMissileObjects1Objects, 600, true);
}if (gdjs.BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDFlippedMissileObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDFlippedMissileObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDFlippedMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.BossCode.GDBottomCannonObjects1.createFrom(runtimeScene.getObjects("BottomCannon"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.5, "Energy Shot B");
}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDBottomCannonObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDBottomCannonObjects1[i].getVariableString(gdjs.BossCode.GDBottomCannonObjects1[i].getVariables().getFromIndex(0)) == "Active" ) {
        gdjs.BossCode.condition1IsTrue_0.val = true;
        gdjs.BossCode.GDBottomCannonObjects1[k] = gdjs.BossCode.GDBottomCannonObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDBottomCannonObjects1.length = k;}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDBottomCannonObjects1 */
gdjs.BossCode.GDEnergyShotBObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDEnergyShotBObjects1Objects, (( gdjs.BossCode.GDBottomCannonObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDBottomCannonObjects1[0].getPointX("")), (( gdjs.BossCode.GDBottomCannonObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDBottomCannonObjects1[0].getPointY("")) + 130, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Energy Shot B");
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 10, 1);
}}

}


{


{
gdjs.BossCode.GDEnergyShotBObjects1.createFrom(runtimeScene.getObjects("EnergyShotB"));
{for(var i = 0, len = gdjs.BossCode.GDEnergyShotBObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDEnergyShotBObjects1[i].addPolarForce(180, 420, 0);
}
}}

}


{

gdjs.BossCode.GDTopCannonObjects1.createFrom(runtimeScene.getObjects("TopCannon"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.5, "Energy Shot T");
}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDTopCannonObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDTopCannonObjects1[i].getVariableString(gdjs.BossCode.GDTopCannonObjects1[i].getVariables().getFromIndex(0)) == "Active" ) {
        gdjs.BossCode.condition1IsTrue_0.val = true;
        gdjs.BossCode.GDTopCannonObjects1[k] = gdjs.BossCode.GDTopCannonObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDTopCannonObjects1.length = k;}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDTopCannonObjects1 */
gdjs.BossCode.GDEnergyShotTObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDEnergyShotTObjects1Objects, (( gdjs.BossCode.GDTopCannonObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDTopCannonObjects1[0].getPointX("")), (( gdjs.BossCode.GDTopCannonObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDTopCannonObjects1[0].getPointY("")) + 150, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Energy Shot T");
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 10, 1);
}}

}


{


{
gdjs.BossCode.GDEnergyShotTObjects1.createFrom(runtimeScene.getObjects("EnergyShotT"));
{for(var i = 0, len = gdjs.BossCode.GDEnergyShotTObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDEnergyShotTObjects1[i].addPolarForce(135, 400, 0);
}
}}

}


{

gdjs.BossCode.GDEnergyShotTObjects1.createFrom(runtimeScene.getObjects("EnergyShotT"));
gdjs.BossCode.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));

gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDEnergyShotTObjects1Objects, gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDGroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDEnergyShotTObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDEnergyShotTObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDEnergyShotTObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.BossCode.GDBottomCannonObjects1.createFrom(runtimeScene.getObjects("BottomCannon"));
gdjs.BossCode.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDBottomCannonObjects1Objects, gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects, false, runtimeScene, false);
}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDBottomCannonObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDBottomCannonObjects1[i].getOpacity() == 255 ) {
        gdjs.BossCode.condition1IsTrue_0.val = true;
        gdjs.BossCode.GDBottomCannonObjects1[k] = gdjs.BossCode.GDBottomCannonObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDBottomCannonObjects1.length = k;}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDBottomCannonObjects1 */
/* Reuse gdjs.BossCode.GDMissileObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDBottomCannonObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBottomCannonObjects1[i].returnVariable(gdjs.BossCode.GDBottomCannonObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.BossCode.GDBottomCannonObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBottomCannonObjects1[i].setOpacity(150);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time B");
}{for(var i = 0, len = gdjs.BossCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "Damage Time B");
}if (gdjs.BossCode.condition0IsTrue_0.val) {
gdjs.BossCode.GDBottomCannonObjects1.createFrom(runtimeScene.getObjects("BottomCannon"));
{for(var i = 0, len = gdjs.BossCode.GDBottomCannonObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBottomCannonObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.BossCode.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));
gdjs.BossCode.GDTopCannonObjects1.createFrom(runtimeScene.getObjects("TopCannon"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDTopCannonObjects1Objects, gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects, false, runtimeScene, false);
}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDTopCannonObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDTopCannonObjects1[i].getOpacity() == 255 ) {
        gdjs.BossCode.condition1IsTrue_0.val = true;
        gdjs.BossCode.GDTopCannonObjects1[k] = gdjs.BossCode.GDTopCannonObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDTopCannonObjects1.length = k;}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDMissileObjects1 */
/* Reuse gdjs.BossCode.GDTopCannonObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDTopCannonObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTopCannonObjects1[i].returnVariable(gdjs.BossCode.GDTopCannonObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.BossCode.GDTopCannonObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTopCannonObjects1[i].setOpacity(150);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time T");
}{for(var i = 0, len = gdjs.BossCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "Damage Time T");
}if (gdjs.BossCode.condition0IsTrue_0.val) {
gdjs.BossCode.GDBottomCannonObjects1.createFrom(runtimeScene.getObjects("BottomCannon"));
{for(var i = 0, len = gdjs.BossCode.GDBottomCannonObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBottomCannonObjects1[i].setOpacity(255);
}
}}

}


{


gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "FieldShot");
}if (gdjs.BossCode.condition0IsTrue_0.val) {
gdjs.BossCode.GDForcefieldObjects1.createFrom(runtimeScene.getObjects("Forcefield"));
gdjs.BossCode.GDForcefieldShotObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDForcefieldShotObjects1Objects, (( gdjs.BossCode.GDForcefieldObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDForcefieldObjects1[0].getPointX("")), (( gdjs.BossCode.GDForcefieldObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDForcefieldObjects1[0].getPointY("")) + 40, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FieldShot");
}}

}


{


{
gdjs.BossCode.GDForcefieldShotObjects1.createFrom(runtimeScene.getObjects("ForcefieldShot"));
{for(var i = 0, len = gdjs.BossCode.GDForcefieldShotObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDForcefieldShotObjects1[i].addPolarForce(180, 300, 0);
}
}}

}


{

gdjs.BossCode.GDForcefieldObjects1.createFrom(runtimeScene.getObjects("Forcefield"));
gdjs.BossCode.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects, gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDForcefieldObjects1Objects, false, runtimeScene, false);
}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDForcefieldObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDForcefieldObjects1[i].getOpacity() == 255 ) {
        gdjs.BossCode.condition1IsTrue_0.val = true;
        gdjs.BossCode.GDForcefieldObjects1[k] = gdjs.BossCode.GDForcefieldObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDForcefieldObjects1.length = k;}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDForcefieldObjects1 */
/* Reuse gdjs.BossCode.GDMissileObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDForcefieldObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDForcefieldObjects1[i].returnVariable(gdjs.BossCode.GDForcefieldObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.BossCode.GDForcefieldObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDForcefieldObjects1[i].setOpacity(150);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time F");
}{for(var i = 0, len = gdjs.BossCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Damage Time F");
}if (gdjs.BossCode.condition0IsTrue_0.val) {
gdjs.BossCode.GDForcefieldObjects1.createFrom(runtimeScene.getObjects("Forcefield"));
{for(var i = 0, len = gdjs.BossCode.GDForcefieldObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDForcefieldObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.BossCode.GDForcefieldObjects1.createFrom(runtimeScene.getObjects("Forcefield"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDForcefieldObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDForcefieldObjects1[i].getVariableNumber(gdjs.BossCode.GDForcefieldObjects1[i].getVariables().getFromIndex(0)) <= 6 ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDForcefieldObjects1[k] = gdjs.BossCode.GDForcefieldObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDForcefieldObjects1.length = k;}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDForcefieldObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDForcefieldObjects1[i].getVariableNumber(gdjs.BossCode.GDForcefieldObjects1[i].getVariables().getFromIndex(0)) > 3 ) {
        gdjs.BossCode.condition1IsTrue_0.val = true;
        gdjs.BossCode.GDForcefieldObjects1[k] = gdjs.BossCode.GDForcefieldObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDForcefieldObjects1.length = k;}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDForcefieldObjects1 */
gdjs.BossCode.GDForcefieldShotObjects1.createFrom(runtimeScene.getObjects("ForcefieldShot"));
{for(var i = 0, len = gdjs.BossCode.GDForcefieldObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDForcefieldObjects1[i].setAnimationName("Damaged");
}
}{for(var i = 0, len = gdjs.BossCode.GDForcefieldShotObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDForcefieldShotObjects1[i].setAnimationName("Damaged");
}
}}

}


{

gdjs.BossCode.GDForcefieldObjects1.createFrom(runtimeScene.getObjects("Forcefield"));

gdjs.BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDForcefieldObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDForcefieldObjects1[i].getVariableNumber(gdjs.BossCode.GDForcefieldObjects1[i].getVariables().getFromIndex(0)) <= 3 ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDForcefieldObjects1[k] = gdjs.BossCode.GDForcefieldObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDForcefieldObjects1.length = k;}if (gdjs.BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDForcefieldObjects1 */
gdjs.BossCode.GDForcefieldShotObjects1.createFrom(runtimeScene.getObjects("ForcefieldShot"));
{for(var i = 0, len = gdjs.BossCode.GDForcefieldObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDForcefieldObjects1[i].setAnimationName("Critical");
}
}{for(var i = 0, len = gdjs.BossCode.GDForcefieldShotObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDForcefieldShotObjects1[i].setAnimationName("Critical");
}
}}

}


{

gdjs.BossCode.GDForcefieldObjects1.createFrom(runtimeScene.getObjects("Forcefield"));

gdjs.BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDForcefieldObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDForcefieldObjects1[i].getVariableNumber(gdjs.BossCode.GDForcefieldObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDForcefieldObjects1[k] = gdjs.BossCode.GDForcefieldObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDForcefieldObjects1.length = k;}if (gdjs.BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDForcefieldObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDForcefieldObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDForcefieldObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "FieldShot");
}}

}


{

gdjs.BossCode.GDForcefieldShotObjects1.createFrom(runtimeScene.getObjects("ForcefieldShot"));
gdjs.BossCode.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects, gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDForcefieldShotObjects1Objects, false, runtimeScene, false);
}if (gdjs.BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDMissileObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.BossCode.GDBossCoreObjects1.createFrom(runtimeScene.getObjects("BossCore"));
gdjs.BossCode.GDMissileObjects1.createFrom(runtimeScene.getObjects("Missile"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDMissileObjects1Objects, gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDBossCoreObjects1Objects, false, runtimeScene, false);
}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDBossCoreObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDBossCoreObjects1[i].getOpacity() == 255 ) {
        gdjs.BossCode.condition1IsTrue_0.val = true;
        gdjs.BossCode.GDBossCoreObjects1[k] = gdjs.BossCode.GDBossCoreObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDBossCoreObjects1.length = k;}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDBossCoreObjects1 */
/* Reuse gdjs.BossCode.GDMissileObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDBossCoreObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBossCoreObjects1[i].returnVariable(gdjs.BossCode.GDBossCoreObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.BossCode.GDBossCoreObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBossCoreObjects1[i].setOpacity(150);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time C");
}{for(var i = 0, len = gdjs.BossCode.GDMissileObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMissileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Damage Time C");
}if (gdjs.BossCode.condition0IsTrue_0.val) {
gdjs.BossCode.GDBossCoreObjects1.createFrom(runtimeScene.getObjects("BossCore"));
{for(var i = 0, len = gdjs.BossCode.GDBossCoreObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBossCoreObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.BossCode.GDBossCoreObjects1.createFrom(runtimeScene.getObjects("BossCore"));

gdjs.BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDBossCoreObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDBossCoreObjects1[i].getVariableNumber(gdjs.BossCode.GDBossCoreObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.BossCode.condition0IsTrue_0.val = true;
        gdjs.BossCode.GDBossCoreObjects1[k] = gdjs.BossCode.GDBossCoreObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDBossCoreObjects1.length = k;}if (gdjs.BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDBossCoreObjects1 */
gdjs.BossCode.GDBottomCannonObjects1.createFrom(runtimeScene.getObjects("BottomCannon"));
gdjs.BossCode.GDEnergyShotBObjects1.createFrom(runtimeScene.getObjects("EnergyShotB"));
gdjs.BossCode.GDEnergyShotTObjects1.createFrom(runtimeScene.getObjects("EnergyShotT"));
gdjs.BossCode.GDTopCannonObjects1.createFrom(runtimeScene.getObjects("TopCannon"));
{for(var i = 0, len = gdjs.BossCode.GDBossCoreObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBossCoreObjects1[i].setAnimationName("Defeated");
}
}{for(var i = 0, len = gdjs.BossCode.GDBottomCannonObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBottomCannonObjects1[i].returnVariable(gdjs.BossCode.GDBottomCannonObjects1[i].getVariables().getFromIndex(0)).setString("Cooldown");
}
}{for(var i = 0, len = gdjs.BossCode.GDTopCannonObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTopCannonObjects1[i].returnVariable(gdjs.BossCode.GDTopCannonObjects1[i].getVariables().getFromIndex(0)).setString("Cooldown");
}
}{for(var i = 0, len = gdjs.BossCode.GDEnergyShotBObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDEnergyShotBObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.BossCode.GDEnergyShotTObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDEnergyShotTObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.BossCode.eventsList0x9d16cc(runtimeScene);} //End of subevents
}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.BossCode.GDEnergyShotBObjects1.createFrom(runtimeScene.getObjects("EnergyShotB"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDCharacterObjects1Objects, gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDEnergyShotBObjects1Objects, false, runtimeScene, false);
}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.BossCode.condition1IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].returnVariable(gdjs.BossCode.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.BossCode.GDEnergyShotTObjects1.createFrom(runtimeScene.getObjects("EnergyShotT"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDCharacterObjects1Objects, gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDEnergyShotTObjects1Objects, false, runtimeScene, false);
}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.BossCode.condition1IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].returnVariable(gdjs.BossCode.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.BossCode.GDForcefieldShotObjects1.createFrom(runtimeScene.getObjects("ForcefieldShot"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDCharacterObjects1Objects, gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDForcefieldShotObjects1Objects, false, runtimeScene, false);
}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDCharacterObjects1[i].getOpacity() == 255 ) {
        gdjs.BossCode.condition1IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].returnVariable(gdjs.BossCode.GDCharacterObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].setOpacity(50);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage Time");
}}

}


{

gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.BossCode.GDHealthPickupObjects1.createFrom(runtimeScene.getObjects("HealthPickup"));

gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDCharacterObjects1Objects, gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDHealthPickupObjects1Objects, false, runtimeScene, false);
}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BossCode.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDCharacterObjects1[i].getVariableNumber(gdjs.BossCode.GDCharacterObjects1[i].getVariables().getFromIndex(1)) < 3 ) {
        gdjs.BossCode.condition1IsTrue_0.val = true;
        gdjs.BossCode.GDCharacterObjects1[k] = gdjs.BossCode.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCharacterObjects1.length = k;}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDCharacterObjects1 */
/* Reuse gdjs.BossCode.GDHealthPickupObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].returnVariable(gdjs.BossCode.GDCharacterObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}{for(var i = 0, len = gdjs.BossCode.GDHealthPickupObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDHealthPickupObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.BossCode.GDInvisibleWallObjects1.createFrom(runtimeScene.getObjects("InvisibleWall"));

gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BossCode.mapOfGDgdjs_46BossCode_46GDInvisibleWallObjects1Objects);
}if (gdjs.BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BossCode.GDInvisibleWallObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDInvisibleWallObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDInvisibleWallObjects1[i].hide();
}
}}

}


{


gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
gdjs.BossCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", true);
}}

}


{


gdjs.BossCode.condition0IsTrue_0.val = false;
gdjs.BossCode.condition1IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}if ( gdjs.BossCode.condition0IsTrue_0.val ) {
{
gdjs.BossCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}}
if (gdjs.BossCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


{


gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if (gdjs.BossCode.condition0IsTrue_0.val) {
gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
{for(var i = 0, len = gdjs.BossCode.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCharacterObjects1[i].returnVariable(gdjs.BossCode.GDCharacterObjects1[i].getVariables().getFromIndex(1)).add(996);
}
}}

}


{


gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Tab");
}if (gdjs.BossCode.condition0IsTrue_0.val) {
gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.BossCode.GDDebugMenuObjects1.createFrom(runtimeScene.getObjects("DebugMenu"));
{for(var i = 0, len = gdjs.BossCode.GDDebugMenuObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDDebugMenuObjects1[i].setPosition((( gdjs.BossCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDCharacterObjects1[0].getPointX("")),(( gdjs.BossCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDCharacterObjects1[0].getPointY("")) + 1000);
}
}}

}


{


gdjs.BossCode.condition0IsTrue_0.val = false;
{
gdjs.BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}if (gdjs.BossCode.condition0IsTrue_0.val) {
gdjs.BossCode.GDCharacterObjects1.createFrom(runtimeScene.getObjects("Character"));
gdjs.BossCode.GDDebugMenuObjects1.createFrom(runtimeScene.getObjects("DebugMenu"));
{for(var i = 0, len = gdjs.BossCode.GDDebugMenuObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDDebugMenuObjects1[i].setPosition((( gdjs.BossCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDCharacterObjects1[0].getPointX("")) - 75,(( gdjs.BossCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDCharacterObjects1[0].getPointY("")) - 200);
}
}}

}


{


{
}

}


}; //End of gdjs.BossCode.eventsList0x5b70b8


gdjs.BossCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BossCode.GDCharacterObjects1.length = 0;
gdjs.BossCode.GDCharacterObjects2.length = 0;
gdjs.BossCode.GDGroundObjects1.length = 0;
gdjs.BossCode.GDGroundObjects2.length = 0;
gdjs.BossCode.GDRoadRollerObjects1.length = 0;
gdjs.BossCode.GDRoadRollerObjects2.length = 0;
gdjs.BossCode.GDLeftObjects1.length = 0;
gdjs.BossCode.GDLeftObjects2.length = 0;
gdjs.BossCode.GDRightObjects1.length = 0;
gdjs.BossCode.GDRightObjects2.length = 0;
gdjs.BossCode.GDHelibomberObjects1.length = 0;
gdjs.BossCode.GDHelibomberObjects2.length = 0;
gdjs.BossCode.GDWallObjects1.length = 0;
gdjs.BossCode.GDWallObjects2.length = 0;
gdjs.BossCode.GDMissileObjects1.length = 0;
gdjs.BossCode.GDMissileObjects2.length = 0;
gdjs.BossCode.GDFlippedMissileObjects1.length = 0;
gdjs.BossCode.GDFlippedMissileObjects2.length = 0;
gdjs.BossCode.GDTurretObjects1.length = 0;
gdjs.BossCode.GDTurretObjects2.length = 0;
gdjs.BossCode.GDTurretMissileObjects1.length = 0;
gdjs.BossCode.GDTurretMissileObjects2.length = 0;
gdjs.BossCode.GDUndergroundObjects1.length = 0;
gdjs.BossCode.GDUndergroundObjects2.length = 0;
gdjs.BossCode.GDCaveBackObjects1.length = 0;
gdjs.BossCode.GDCaveBackObjects2.length = 0;
gdjs.BossCode.GDBombObjects1.length = 0;
gdjs.BossCode.GDBombObjects2.length = 0;
gdjs.BossCode.GDScaffoldingObjects1.length = 0;
gdjs.BossCode.GDScaffoldingObjects2.length = 0;
gdjs.BossCode.GDScaffoldingSupportObjects1.length = 0;
gdjs.BossCode.GDScaffoldingSupportObjects2.length = 0;
gdjs.BossCode.GDScaffoldingEdgeLeftObjects1.length = 0;
gdjs.BossCode.GDScaffoldingEdgeLeftObjects2.length = 0;
gdjs.BossCode.GDScaffoldingEdgeRightObjects1.length = 0;
gdjs.BossCode.GDScaffoldingEdgeRightObjects2.length = 0;
gdjs.BossCode.GDSpikeObjects1.length = 0;
gdjs.BossCode.GDSpikeObjects2.length = 0;
gdjs.BossCode.GDEndPointObjects1.length = 0;
gdjs.BossCode.GDEndPointObjects2.length = 0;
gdjs.BossCode.GDHealthPickupObjects1.length = 0;
gdjs.BossCode.GDHealthPickupObjects2.length = 0;
gdjs.BossCode.GDCeilingCannonObjects1.length = 0;
gdjs.BossCode.GDCeilingCannonObjects2.length = 0;
gdjs.BossCode.GDCannonShotObjects1.length = 0;
gdjs.BossCode.GDCannonShotObjects2.length = 0;
gdjs.BossCode.GDDebugMenuObjects1.length = 0;
gdjs.BossCode.GDDebugMenuObjects2.length = 0;
gdjs.BossCode.GDPlayerscoreObjects1.length = 0;
gdjs.BossCode.GDPlayerscoreObjects2.length = 0;
gdjs.BossCode.GDExplosionObjects1.length = 0;
gdjs.BossCode.GDExplosionObjects2.length = 0;
gdjs.BossCode.GDBossCoreObjects1.length = 0;
gdjs.BossCode.GDBossCoreObjects2.length = 0;
gdjs.BossCode.GDBottomCannonObjects1.length = 0;
gdjs.BossCode.GDBottomCannonObjects2.length = 0;
gdjs.BossCode.GDTopCannonObjects1.length = 0;
gdjs.BossCode.GDTopCannonObjects2.length = 0;
gdjs.BossCode.GDForcefieldObjects1.length = 0;
gdjs.BossCode.GDForcefieldObjects2.length = 0;
gdjs.BossCode.GDForcefieldShotObjects1.length = 0;
gdjs.BossCode.GDForcefieldShotObjects2.length = 0;
gdjs.BossCode.GDEnergyShotBObjects1.length = 0;
gdjs.BossCode.GDEnergyShotBObjects2.length = 0;
gdjs.BossCode.GDEnergyShotTObjects1.length = 0;
gdjs.BossCode.GDEnergyShotTObjects2.length = 0;
gdjs.BossCode.GDInvisibleWallObjects1.length = 0;
gdjs.BossCode.GDInvisibleWallObjects2.length = 0;

gdjs.BossCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['BossCode'] = gdjs.BossCode;
