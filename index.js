

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



newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');
newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newItem('assets/sword.png', '500px', '405px');
newItem('assets/sheild.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');




