//Function to update the internal configuration.
//Function to update camera.

var Mode = "thrid" 

//Sets the value of Mode
function UpdateConfig(Key)
{
    if(Key == "b")
        Mode = "bird"
    if(Key == "t")
        Mode = "thrid"
    if(Key == "o")
        Mode = "Orbit"

    console.log(Mode) //debugging
}

function UpdateCamera(Camera, Postion, Angle)
{
    console.log(Postion)
    if(Mode == "bird")
    {
        Camera.position.x = Postion.x - 500 * Math.sin(Angle)
        Camera.position.z = Postion.z - 500 * Math.cos(Angle)
        Camera.position.y = Postion.y + 400

        Camera.lookAt(Postion.x, Postion.y, Postion.z)
    }
    else if(Mode == "thrid")
    {
        Camera.position.x = Postion.x - 160 * Math.sin(Angle)
        Camera.position.z = Postion.z - 160 * Math.cos(Angle)
        Camera.position.y = Postion.y + 35

        Camera.lookAt(Postion.x, Postion.y, Postion.z)
    }
    else
        return
}

export {UpdateCamera, UpdateConfig}