//Color options, red, blue, yellow, green, black, brown, purple, gray, white, pink. Only the major color counts (like for pokemon)
//Gen refers to region, not like fire red is gen 3. Numbers are just easier to type.

//games to check for trainer customization. XY, Sun Moon, USUM, Let's Go, BDSP, SwrdShld, Scarlet Vio, Arceus, GO, Masters EX

const hatOptions = [];

 function hatChoose () {
    fetch('https://raw.githubusercontent.com/EvansKelly92/Muffin-Logic/main/trainerOutfit.json')
    
    .then((response) => response.json())

    .then((data) =>{ 
       /* for (var x = 0; x < data.style.length; x++){
            const node = document.createElement("li");
            const textnode = document.createTextNode(data.style[x].name);
            node.appendChild(textnode);
            document.getElementById("show").appendChild(node);
        } */

        var x = Math.floor(Math.random() * data.style.length);

        const node = document.createElement("li");
        const textnode = document.createTextNode(data.style[x].name);
        node.appendChild(textnode);
        document.getElementById("show").appendChild(node);

        console.log(data.style[0].name)});
 }
