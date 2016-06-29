var roleBuilder = {

    run: function (creep)
    {

        var newCreep = Game.rooms.E38N3.lookForAtArea(LOOK_CREEPS,43,37,45,39,true);
        if (creep.memory.building && creep.carry.energy==0)
        {
            creep.memory.building=false;
            if(Creep.memory.source!=0||creep.memory.source!=1)
            {
                if (newCreep.length>=4)
                {
                    creep.memory.source=1;
                }
                else
                {
                    creep.memory.source=0;
                }
            }
        }
        if (creep.memory.building ==false&& creep.carry.energy==creep.carryCapacity)
        {
            creep.memory.building=true;
            creep.memory.source=-1;
        }

        if (creep.memory.building==true)
        {
            var targets = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            if(targets!=null) {
                if (creep.build(targets) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets);
                }
            }

        }
        else
        {
            var source = creep.room.find(FIND_SOURCES);
            if (creep.memory.source==0) {
                if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE ) {
                    creep.moveTo(sources[0]);
                }
            }
            else if (creep.memory.source==1)
            {
                if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE ) {
                    creep.moveTo(sources[1]);
                }
            }
        }
    }



};
module.exports = roleBuilder;