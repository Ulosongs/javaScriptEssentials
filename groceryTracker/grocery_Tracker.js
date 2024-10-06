let groceryItems;
let sum = 0;

function totalAmount(){
    groceryItems = document.getElementsByClassName("groceryItem");

    for (i = 0; i < groceryItems.length; i++)
    {
        sum += parseFloat(groceryItems[i].value);
        console.log(sum);
    }

    document.getElementById("result").innerHTML = `The total amount is: $${sum}`;
}