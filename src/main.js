var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer')
module.exports.loop = function () {
    //clear memory

    for (let names in Memory.creeps) {
        if (Game.creeps[names] == undefined) {
            delete Memory.creeps[names];
        }
    }

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if (creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }

    }


    // var newCreep = Game.rooms.E38N3.lookForAtArea(LOOK_CREEPS,43,37,45,39,true);
    // console.log(newCreep.length);


    var minimumHarvesters = 3;
    var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
    var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
    var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
    var numberOfRepirers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');


    if ((numberOfHarvesters < minimumHarvesters)) {
        if (Game.spawns.Spawn1.room.energyAvailable >= 500) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined, {
                role: 'harvester',
                source: 0
            })
        }
        else if (Game.spawns.Spawn1.room.energyAvailable >= 450) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined, {
                role: 'harvester',
                source: 0
            })
        }
        else if (Game.spawns.Spawn1.room.energyAvailable >= 400) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined, {
                role: 'harvester',
                source: 0
            })
        }
        else {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'harvester', source: 0})
        }
    }
    if (numberOfUpgraders < 4) {
        if (Game.spawns.Spawn1.room.energyAvailable >= 450) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {
                role: 'upgrader',
                upgrading: false,
                source: 1
            })
        }
        else if (Game.spawns.Spawn1.room.energyAvailable >= 400) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE, MOVE, MOVE], undefined, {
                role: 'upgrader',
                upgrading: false,
                source: 1
            })
        }
        else if (Game.spawns.Spawn1.room.energyAvailable >= 350) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {
                role: 'upgrader',
                upgrading: false,
                source: 1
            })
        }

        else {
            Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE, MOVE, MOVE], undefined, {
                role: 'upgrader',
                upgrading: false,
                source: 1
            })
        }
    }
    if (numberOfBuilders < 4) {
        if (Game.spawns.Spawn1.room.energyAvailable >= 450) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {
                role: 'builder',
                building: false,
                source: 1
            })
        }
        else if (Game.spawns.Spawn1.room.energyAvailable >= 400) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined, {
                role: 'builder',
                building: false,
                source: 1
            })
        }
        else if (Game.spawns.Spawn1.room.energyAvailable >= 350) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {
                role: 'builder',
                building: false,
                source: 1
            })
        }
        else {
            Game.spawns.Spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {
                role: 'builder',
                building: false,
                source: 1
            })
        }
    }
    if (numberOfRepirers<1)
    {
        Game.spawns.Spawn1.createCreep([WORK,MOVE,CARRY], undefined, {role:'repairer'});
    }

};

