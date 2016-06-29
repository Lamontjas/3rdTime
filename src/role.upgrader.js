var roleUpgrader = {

    run: function (creep)
    {
        var newCreep = Game.rooms.E38N3.lookForAtArea(LOOK_CREEPS,43,37,45,39,true);

       if (creep.memory.upgrading==true && creep.carry.energy==0)
       {
           creep.memory.upgrading = false;
           if (creep.memory.source== -1)
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
        if (creep.memory.upgrading ==false && creep.carry.energy == creep.carryCapacity)
        {
            creep.memory.upgrading = true;
            creep.memory.source=-1;
        }

        if(creep.memory.upgrading){
            if(creep.upgradeController(creep.room.controller)==ERR_NOT_IN_RANGE)
            {
                creep.moveTo(creep.room.controller);

            }

        }
        else {
            var sources = creep.room.find(FIND_SOURCES);


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
module.exports = roleUpgrader;