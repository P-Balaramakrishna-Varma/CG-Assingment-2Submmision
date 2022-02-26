import {MakeCannon_Player} from './Cannons.js'
class Enemy_Ship
{
    constructor(Object) 
    {
       Object.scale.set(8, 8, 8)
       this.Object = Object 
    }
    move(Player_Ship)
    {
        this.Object.lookAt(Player_Ship.Object.position)
        this.Object.rotation.y -= Math.PI/2
        //console.log(this.Object.rotation)

        var t = 1
        var PlayerPos = Player_Ship.Object.position
        var EnemyPos = this.Object.position
        var d = Math.sqrt((PlayerPos.x - EnemyPos.x) ** 2 + (PlayerPos.z - EnemyPos.z) ** 2)

        this.Object.position.x = (t * PlayerPos.x + (d-t) * EnemyPos.x) / d
        this.Object.position.z = (t * PlayerPos.z + (d-t) * EnemyPos.z) / d
        //console.log(this.Object.position.x)
    }
}

class Player_Ship
{
    //Called only once created at the origin
    constructor(Object)
    {
       Object.rotation.y = Math.PI
       Object.scale.set(0.1, 0.1, 0.1)
       this.Object = Object
    }
    move(Key, scene)
    {
        const Radius = 4
        //science 2 last page of classowrk
        if(Key == "w")
        {
            this.Object.position.z = this.Object.position.z - 4 * Math.cos(this.Object.rotation.y - Math.PI)
            this.Object.position.x = this.Object.position.x - 4 * Math.sin(this.Object.rotation.y - Math.PI)
        }
        if(Key == "s")
        {
            this.Object.position.z = this.Object.position.z + 4 * Math.cos(this.Object.rotation.y - Math.PI)
            this.Object.position.x = this.Object.position.x + 4 * Math.sin(this.Object.rotation.y - Math.PI)
        }
        if(Key == "a")
            this.Object.rotation.y += 0.1
        if(Key == "d")
            this.Object.rotation.y -= 0.1
        if(Key == "space")    
            MakeCannon_Player(this, scene)
    }

}

class Tressure_Box
{
    constructor(object)
    {
        object.scale.set(0.2, 0.2, 0.2)
        this.Object = object
        this.Alive = true
    }
}

class ModelMatrix
{
    constructor(p_x, p_y, p_z, r_y, scale)
    {
        this.p_x = p_x
        this.p_y = p_y
        this.p_z = p_z

        this.r_y = r_y

        this.scale = scale
    }
    Populate(Sence_Object)
    {
        Sence_Object.position.x = this.p_x
        Sence_Object.position.y = this.p_y
        Sence_Object.position.z = this.p_z

        Sence_Object.rotation.y = this.r_y
        
        Sence_Object.scale.set(this.scale, this.scale, this.scale)
    }
}

export{Enemy_Ship, Player_Ship, Tressure_Box, ModelMatrix}