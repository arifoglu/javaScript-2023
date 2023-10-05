window.onload = function(){

    const fishFarm = [ 
        { 
            fishType: "Salmon",
            price: 15.70,
            entryDate: new Date(2021, 0, 1),    // 01.01.2021
            durationInDays: 30,
            itemWeightInGrams: 145,
            originCountry: "Norway", 
            season: "Winter", 
            stockVolumeInKg: 6500,
            saleLocations: ["ZH", "GE", "BE", "VD"],
        },
        { 
            fishType: "Seatrout",
            price: 7.90,
            entryDate: new Date(2021, 11, 12),    // 12.12.2021
            durationInDays: 20,
            itemWeightInGrams: 460,
            originCountry: "Japan", 
            season: "Winter", 
            stockVolumeInKg: 1600,
            saleLocations: ["GL", "GR", "BE", "VS"],
        },
        { 
            fishType: "Sailfish",
            price: 5.20,
            entryDate: new Date(2021, 3, 19),    
            durationInDays: 15,
            itemWeightInGrams: 240,
            originCountry: "United Kingdom", 
            season: "Spring", 
            stockVolumeInKg: 500,
            saleLocations: ["ZH", "SH", "BL", "SO"],
        },
        { 
            fishType: "Red Drum",
            price: 3.10,
            entryDate: new Date(2021, 5, 15),   
            durationInDays: 18,
            itemWeightInGrams: 300,
            originCountry: "Poland", 
            season: "Summer", 
            stockVolumeInKg: 15500,
            saleLocations: ["FR", "GE", "NE", "TI"],
        },
        { 
            fishType: "Pompano",
            price: 10,
            entryDate: new Date(2021, 8, 17),    
            durationInDays: 20,
            itemWeightInGrams: 645,
            originCountry: "France", 
            season: "Autumn", 
            stockVolumeInKg: 1500,
            saleLocations: ["ZH", "GE", "BE", "VD"],
        },
        { 
            fishType: "Bluefish", 
            price: 13.70,
            entryDate: new Date(2021, 10, 11),  
            durationInDays: 5,
            itemWeightInGrams: 845,
            originCountry: "Italy", 
            season: "Winter", 
            stockVolumeInKg: 200,
            saleLocations: ["NW", "OW", "UR", "LU"],
        },
        { 
            fishType: "Mackerel",
            price: 8.90,
            entryDate: new Date(2021, 6, 18),    
            durationInDays: 16,
            itemWeightInGrams: 150,
            originCountry: "GREECE", 
            season: "Summer", 
            stockVolumeInKg: 8100,
            saleLocations: ["AG", "BL", "BE", "VD", "TG"],
        },
        { 
            fishType: "Perch",
            price: 11.90,
            entryDate: new Date(2021, 10, 1),  
            durationInDays: 30,
            itemWeightInGrams: 222,
            originCountry: "Egypt", 
            season: "Summer", 
            stockVolumeInKg: 9500,
            saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
        },
        { 
            fishType: "Mullet",
            price: 4.80,
            entryDate: new Date(2021, 2, 14),   
            durationInDays: 30,
            itemWeightInGrams: 333,
            originCountry: "Vietnam", 
            season: "Summer", 
            stockVolumeInKg: 600,
            saleLocations: ["ZH", "GE", "BE", "VD"],
        },
        { 
            fishType: "Tuna",
            price: 19.50,
            entryDate: new Date(2021, 0, 1),    
            durationInDays: 30,
            itemWeightInGrams: 250,
            originCountry: "Spain", 
            season: "Winter", 
            stockVolumeInKg: 2300,
            saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
        },  
    ];
    
let fishListShow = document.getElementById("fishList");
let fishListHide = document.getElementById("fishListHide");
// console.log(fishListShow);
// console.log(fishListHide);

fishListShow.onclick =()=>{
    document.querySelector("div#container > div#right").style.display = "block"
} ;
fishListHide.onclick =()=>{
    document.querySelector("div#container > div#right").style.display = "none"
} ;
    // we will find total kilogram of the stock
    let total = 0;
    const stokList = fishFarm.map((kilo)=> kilo.stockVolumeInKg);
    //console.log(stokList); 
    
    stokList.map((values)=> total += values)
    //console.log(total);
    
    let btn1 = document.querySelector("#stock");
    //console.log(btn1);
    btn1.onclick = ()=>{
        document.querySelector("#stockShow").innerHTML = total + " kg ";
    };
    btn1.onmouseout = ()=>{
        document.querySelector("#stockShow").innerHTML = "";
    }
    
    //////// ???????????
    // we will find durable
    const durable = fishFarm.filter((date)=> date.durationInDays > 15  ) 
                            .map((fish)=> fish.fishType + " " + fish.durationInDays + "day durable" + "<br>")   
    //console.log(durable);
    
    let btn2 = document.querySelector("#durability");
    //console.log(btn1);
    btn2.onclick = ()=>{
        document.querySelector("#durabilityShow").innerHTML = durable.join("");
    };
    btn2.onmouseout = ()=>{
        document.querySelector("#durabilityShow").innerHTML = "";
    };
    
    //
    // we will find price reasonable 
    const reasonablePrice = fishFarm.filter((prices)=> prices.price > 9 && prices.price<12)
                                   .map((fish)=> fish.fishType + "<br>");    
    //console.log(reasonablePrice);
    
    let btn3 = document.querySelector("#price");
    //console.log(btn1);
    btn3.onclick = ()=>{
        document.querySelector("#reasonableShow").innerHTML = reasonablePrice.join("");
    };
    btn3.onmouseout = ()=>{
        document.querySelector("#reasonableShow").innerHTML = " ";
    };
    
    //
    // we will find fish that can be eaten in winter in Vaud
    const winterfishVaud =fishFarm.filter((fish)=> fish.saleLocations = "VD" && fish.season == "Winter")
                                  .map((fish)=> fish.fishType + "<br>")
    
    //console.log(winterfishVaud);
    
    let btn4 = document.querySelector("#winter");
    //console.log(btn4);
    btn4.onclick = ()=>{
        document.querySelector("#winterFishShow").innerHTML = winterfishVaud.join("");
    };
    btn4.onmouseout = ()=>{
        document.querySelector("#winterFishShow").innerHTML = "";
    };

    //
    // we will find fish that can be eaten in summer in Zurich
    const summerFishZurich = fishFarm.filter((fish)=> fish.saleLocations = "ZH" && fish.season == "Summer")
                                     .map((fish)=> fish.fishType + "<br>");   
    //console.log(summerFishZurich);
    
    let btn5 = document.querySelector("#summer");
    //console.log(btn5);
    btn5.onclick = ()=>{
        document.querySelector("#summerFishShow").innerHTML = summerFishZurich.join("");
    };
    btn5.onmouseout = ()=>{
        document.querySelector("#summerFishShow").innerHTML = " ";
    };

    //
    // we will find fish origin
    
    const fishOrigin = fishFarm.filter((fish)=> fish.originCountry && fish.fishType)
                               .map((fish)=> fish.fishType + " from " + fish.originCountry + "<br>")
    ;
  

    // console.log(fishOrigin);

    let btn6 = document.querySelector("#origin");
    //console.log(btn6);
    btn6.onclick = ()=>{
        document.querySelector("#fishOrigin").innerHTML = fishOrigin.join("");
    };
    btn6.onmouseout = ()=>{
        document.querySelector("#fishOrigin").innerHTML = " ";
    };

}