
alert("Hello To Handmade Crafts Made by Professional People around the World");

prompt('Do you like Handmade crafts?');



var TypeOfCraft = prompt('Choose the type of the Craft you are intrested in Buying? 1-Textile crafts 2-Decorative Crafts 3-Fashion Crafts');
var wrongchoice = ""
if (TypeOfCraft === 'textile crafts') {
    document.write('<img src="https://i.pinimg.com/originals/9b/a6/ec/9ba6eca428b28d4a3b88e1ff6e1b9eab.jpg">')
    
} else if (TypeOfCraft === 'decorative crafts') {
    document.write('<img src="https://cdn.shopify.com/s/files/1/0047/4015/3437/products/image_ed37d48a-700f-4122-a5a6-340eb781ec3c_600x.jpg?v=1598633078"/>')
} else if (TypeOfCraft === 'fashion crafts'){
    document.write('<img src="https://cdn.shopify.com/s/files/1/1150/2764/files/Kalamkari_80a6be51-ee33-4c65-ba4f-fc272b62e017_1024x1024.jpg?v=1559559375"/>')
} else { alert("Could you Please choose one the mentioned") }


