
var TypeOfCraft = prompt('Choose the type of the Craft you are intrested in Buying?','1-Textile Crafts','2-Decorative Crafts','3-Fashion Crafts')
var ChoosingOutOfChoices = "Could You Please Choose One of the Mentioned Types"
if (TypeOfCraft == 'Textile Craft') {
    document.write('img src="https://i.pinimg.com/originals/9b/a6/ec/9ba6eca428b28d4a3b88e1ff6e1b9eab.jpg"','img src="https://cdn.shopify.com/s/files/1/1150/2764/files/Kalamkari_80a6be51-ee33-4c65-ba4f-fc272b62e017_1024x1024.jpg?v=1559559375"')
    
} else if (TypeOfCraft == "Decorative Craft") {
    document.write('img src="https://cdn.shopify.com/s/files/1/0047/4015/3437/products/image_ed37d48a-700f-4122-a5a6-340eb781ec3c_600x.jpg?v=1598633078','img src="https://images-na.ssl-images-amazon.com/images/I/61GqyeMAK6L._AC_SL1001_.jpg"')
} else if (TypeOfCraft == "Fashion Crafts"){
    document.write('img src="https://namawomen.ae/wp-content/uploads/2018/11/bidwa-1.jpg"')
} else{ document.write('<h1>'+ChoosingOutOfChoices+'</h2')}