

alert("Hello To Handmade Crafts Made by Professional People around the World");

prompt('Do you like Handmade crafts?','yes/no');

var typeOfCraft = prompt('Choose the type of the Craft you are intrested in Buying? 1-Textile crafts 2-Decorative Crafts 3-Fashion Crafts');

function craftChoice (typeOfCraft){

while (typeOfCraft !== 'textile crafts' && typeOfCraft !== 'decorative crafts' && typeOfCraft !== 'fashion crafts'){
    typeOfCraft = prompt('Could you please choose the type of the Craft you are intrested in Buying? 1-Textile crafts 2-Decorative Crafts 3-Fashion Crafts');
}}
craftChoice (typeOfCraft)

var image = '';

var craftNumber = prompt('Choose number of the images for craft type you choosed');

function imageNum (craftNumber){
for (var num = 1; num <= craftNumber ; num ++ ) {
    if (typeOfCraft === 'textile crafts'){
        image = image +'<img src="images/textile.jpg"/>';
        
    } else if (typeOfCraft === 'decorative crafts') {
        image = image +'<img src="images/decorative.jpg"/>';
        
    } else if (typeOfCraft === 'fashion crafts'){
        image = image +'<img src="images/fashion.jpg"/>';
        
}

}
document.write(image);
}


imageNum (craftNumber)