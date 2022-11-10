
 

const person=[
    {
        name:"jerry",height:176.5,weight:67.6,
    },
    {
        name:"merry",height:166.5,weight:64.6,
    },
    {
        name:"berry",height:155.5,weight:71.6,
    },

];
console.log(person);
console.log((person)[0].name);
console.log((person)[0]["height"]);

let tempStr ="<ul>";

for(let i=0;i<person.length;i++){
    let name =person[i].name;
    let bmi=getBMI(person[i]["height"],person[i]["weight"]);

    console.log(`${name} BMI:${bmi}`);
    tempStr+=`<li>${name} BMI:${bmi}</li>`
}

tempStr+="</ul>";
document.write(tempStr)




const getBMI3=(height, weight,point=2)=>(weight/(height/100)**2).toFixed(point);


const getBMI2=(height, weight,point=2)=>{
    let bmi=weight/(height/100)**2;
    if(isNaN(bmi)){
        return "參數錯誤";
}
}

function getBMI(height, weight,point=2){
    let bmi=weight/(height/100)**2;
    if(isNaN(bmi)){
        return "參數錯誤";
    }

    return bmi.toFixed(point);

}
console.log(getBMI3("176",66));