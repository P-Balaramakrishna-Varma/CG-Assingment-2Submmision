import * as Modules_loded from "./CreateModels";


function UpdatePostion_Boat(Player_Ship)
{
    for(var i = 0; i < Modules_loded.Enemy_Ships.length; i++)
    {
        Modules_loded.Enemy_Ships[i].move(Player_Ship)
    }
}

export {UpdatePostion_Boat}