//Color options, red, blue, yellow, green, black, brown, purple, gray, white, pink. Only the major color counts (like for pokemon)
//Gen refers to region, not like fire red is gen 3. Numbers are just easier to type.

//games to check for trainer customization. XY, Sun Moon, USUM, Let's Go, BDSP, SwrdShld, Scarlet Vio, Arceus, GO, Masters EX

const hatOptions = [];

 function hatChoose () {
    fetch('trainerOutfit.json')
    
    .then((response) => response.json())

    .then((json) => console.log(json));
 }
