function seerToMon(input){
     // fixed input erros
    if(input < 0 ){
        return 'Plese input a valid value';
    }
    let outputMon = input/40;
    // return value
    return outputMon;
}


function totalSales(shart ,pant, sheo ){
        // fixed input erros
        if( shart < 0 || pant < 0 || sheo < 0){
            return 'Plese input a valid value';
        }
        else{
            // shart price
        const shartPrice = 100 ;
        // pant price
        const pantPrice = 200 ;
        // Shoes Price
        const shoesprice = 500 ;
        // total Shart price
        let totalShartprice = shart * shartPrice; 
        // Total Pant Prices 
        let totalPantPrice = pant * pantPrice;
        // Total Shoes Prices
        let totalSheosPrice = sheo * shoesprice ;
        // Total price amogn shart pant shoes
        let totalPrice = totalShartprice + totalPantPrice + totalSheosPrice;
        // value return
        return totalPrice;
        }
        
}

function deliveryCost(items){
        // fixed input erros
    if(items < 0){
        return'Plese input a valid value'
    }
    // fast 100 shart delevery cost
    else if (items <= 100) {
        const first100ShartCost = items * 100;
        return first100ShartCost; 

    } 
    // second 100 shart delevery cost
    else if ( items <= 200 ) {
        const first100ShartCost = 100 * 100;
        const shartUpTo100 = items - 100;
        const second100ShartCost =  shartUpTo100 * 80;
        // under 200 shart delevery cost
        const totalDeleveryCost = first100ShartCost + second100ShartCost;
        return totalDeleveryCost;
    }
    else {
        // under 100 shart delevery cost
        const first100ShartCost = 100 * 100;
        // under 200 shart delevery cost
        const second100ShartCost =  100 * 80;
        const shartUpTo200       = items - 200;
        // up to 200 shart delevery cost
        const thardUpTo200Cost   = shartUpTo200 *50;
        // all avobe total shart prices
        const inTotalDeleveryCost = first100ShartCost + second100ShartCost + thardUpTo200Cost;
        return inTotalDeleveryCost;
    }
}

function perfectFriend(names){
        let perFriend = [];
    for( let i = 0; i < names.length;i++){

        if(names[i].length == 5){
            // add in array
            perFriend.push(names[i]);
            // return value
            return perFriend;
        }
     }
    //  return typeof names !='object';
    return "Don't find any itemes that length 5"
}
