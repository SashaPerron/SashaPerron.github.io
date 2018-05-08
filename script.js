// JavaScript File

var image = document.getElementById("redLight");
var wolfDog = document.getElementById("wolfDog");
var bearUp = document.getElementById("bearUp");
var winningAnimal = document.getElementById("winningAnimal");
winningAnimal.style.display = 'none';


//assign random number
    var number = Math.random() * 150;
    var number1 = Math.random() * 150;
    var raceStarted = false;

function turnGreen()
{
    image.src ="http://www.clker.com/cliparts/3/8/1/d/13940141271385061948232px-green_light_icon.svg-md.png";
}

//Starts race and fires skaters at random intervals
function startRace()
{
    raceStarted = true;

    setTimeout(function () {
        var newNumber = ((Math.random() * 150)+5) + number;
        var newNumber1 = ((Math.random() * 150)+5) + number1;
        
        wolfDog.style.marginLeft = newNumber + 'px';
                
        bearUp.style.marginLeft = newNumber1 + 'px';
        
        number = newNumber;
        number1 = newNumber1;
        
        
        
                var wolfDistance = wolfDog.style.marginLeft.slice(0, -4);
                var bearDistance = bearUp.style.marginLeft.slice(0, -4);

      
        
           //Displays winner of race
               var width = screen.width;
        
        if (wolfDistance >= width - 100)
        {

        	wolfDog.style.display = 'none';
        	bearUp.style.display = 'none';
            winningAnimal.style.display = 'list-item';
            
        }
        
     
        else if (bearDistance >= width - 200)
        {           
            document.getElementById("winningAnimal").src  = "http://pngimg.com/uploads/bear/bear_PNG23463.png";
            wolfDog.style.display = 'none';
        	bearUp.style.display = 'none';
            winningAnimal.style.display = 'list-item';                
        }
        
        
        else
        {
            startRace();
        }       
    }, 750)       
}


//Puts players back to start line for new race
function reset()
{
    image.src = "http://www.clker.com/cliparts/Q/P/0/f/1/p/glossy-red-icon-angle-md.png";
    winningAnimal.style.display = 'none';
    wolfDog.style.display = 'initial';
        	bearUp.style.display = 'initial';
    wolfDog.style.marginLeft = 0;
    bearUp.style.marginLeft = 0;
    wolfDistance = 0;
    bearDistance = 0;
    newNumber = 0;
    newNumber1 = 0;
    number = 0;
    number1 = 0;
}