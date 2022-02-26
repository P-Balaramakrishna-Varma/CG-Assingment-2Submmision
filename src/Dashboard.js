//Data need
var No_of_Hits = 0
var No_of_Tressure = 0
var Score  //No_of_Hist + no_treasure boxes
var time
var Health = 20 //syncronize with health in class


//Initializing neeedd
var Hits
var Tressure
var Sc
var clock
var hlt
var time_start

function IncreaseHits() {
   No_of_Hits += 1 
}

function IncreaseTressure() {
   No_of_Tressure += 1 
}

function DecreaseHealth(){
    Health -= 1
}


function UpdateDashboard()
{
    Score = No_of_Hits + No_of_Tressure
    var curtime = new Date()
    time = curtime.getTime()/1000 - time_start.getTime()/1000
    time = Math.floor(time) 

    Hits.innerHTML = No_of_Hits
    Tressure.innerHTML = No_of_Tressure
    Sc.innerHTML = Score 
    hlt.innerHTML = Health
    clock.innerHTML = time
}

function Init()
{
    Hits = document.getElementById("Hits")
    Tressure = document.getElementById("tressure")
    Sc = document.getElementById("score")
    hlt = document.getElementById("Health")
    clock = document.getElementById("time")
    time_start = new Date()
}

export {Init ,UpdateDashboard, No_of_Hits, No_of_Tressure, Health, IncreaseHits, IncreaseTressure, DecreaseHealth}