//A function to get the last key pressed.
//Registering the call back function.

var Last_Key_Pressed

function Keyboard_init()
{
    document.addEventListener("keydown", onDocumentKeyDown, false);
}


function onDocumentKeyDown(event)
{
    var keyCode = event.which;
    var Key;

    if (keyCode == 87) 
        Key = "w" 
    else if (keyCode == 83)
        Key = "s" 
    else if (keyCode == 65)
        Key = "a"
    else if (keyCode == 68)
        Key = "d"

    Last_Key_Pressed = Key
    console.log(Key)
};

function Get_Last_KeyPress ()
{
    var ans = Last_Key_Pressed
    Last_Key_Pressed = null
    return ans
}

export {Get_Last_KeyPress, Keyboard_init}