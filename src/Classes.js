
class Enemy_Ship
{
    constructor(Object) 
    {
        
    }
}

class Player_Ship
{
    //Called only once created at the origin
    constructor(Object)
    {
       Object.rotation.y = Math.PI
       this.Object = Object
    }
    move(Key)
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
        
    }
}

class Tressure_Box
{
    constructor(object)
    {

    }
}

class ModelMatrix
{
    constructor(params)
    {

    }
    Populate(Sence_Object)
    {
    }
}

export{Enemy_Ship, Player_Ship, Tressure_Box, ModelMatrix}