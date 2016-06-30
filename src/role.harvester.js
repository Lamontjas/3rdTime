var roleHarvester = {
    //test
    /** @param {Creep} creep **/
    run: function (creep) {


        var creepsAtA = Game.rooms.E38N3.lookForAtArea(LOOK_CREEPS, 43, 37, 45, 39, true);
        var creepsAtB = Game.rooms.E38N3.lookForAtArea(LOOK_CREEPS, 44, 23, 46, 25, true);

        if (creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);

            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);

            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                }
            });


            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
            else {
                var container = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure)=> {
                        return (structure.structureType == STRUCTURE_CONTAINER) && structure.store[RESOURCE_ENERGY] < structure.storeCapacity
                    }
                });

                if (container.length > 0) {
                    if (creep.transfer(container[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container[0]);
                    }
                }

            }
        }
    }
};

module.exports = roleHarvester;