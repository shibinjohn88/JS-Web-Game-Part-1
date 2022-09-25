

//function to add new images to the screen
function newImage(src_path, left_position, bottom_position) {
    let element = document.createElement('img');
    element.src = src_path;
    element.style.position = 'fixed';
    element.style.left = left_position;
    element.style.bottom = bottom_position;
    document.body.append(element);
    
}

//function to add and remove items.
function newItem(src_path, left_position, bottom_position) {
    let element = document.createElement('img');
    element.src = src_path;
    element.style.position = 'fixed';
    element.style.left = left_position;
    element.style.bottom = bottom_position;
    document.body.append(element);
    
    //event listener to remove items when double clicked
    element.addEventListener('dblclick', function(){
        element.remove();
    })
}


//function to add background to screen

function screenBackground(src_path, left_position, bottom_position, width, height) {
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            newImage(src_path, (left_position + j * 100) + 'px', (bottom_position + i * 100) + 'px')
        }
    }
}



let grassHeight = window.innerHeight * 0.75;
let skyHeight = window.innerHeight - grassHeight;


screenBackground('assets/grass.png', 0, 0, window.innerWidth/100, grassHeight/100);
screenBackground('assets/sky.png', 0, grassHeight, window.innerWidth/100, skyHeight/100);


newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');
newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newItem('assets/sword.png', '500px', '405px');
newItem('assets/sheild.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');




