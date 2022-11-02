let contr=document.createElement('div');
contr.classList.add("container");
contr.style.backgroundColor = "skyblue";
let row=document.createElement('div');
row.classList.add("row","mt-3");
contr.append(row);

(async function test(){
    try{
        const response=await fetch("https://restcountries.com/v2/all");
        if (response.status !==200) throw new Error("Something went wrong");
        const data= await response.json();
        console.log(data);
        for (let i=0; i<data.length; i++){
            row.innerHTML+= `
            <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card border text-white mb-3" style="max-width:18rem;">
            <div class="card border text-center bg-dark h4" id="Name">${data[i].name}</div>
            <div class="card-body bg-dark text-center"><img src="${data[i].flag}" class="card-img-top" id="flag" alt="Country_Flag" 
            <div class="text-center p-3">
            <p id="capital" style="color:white;">Capital: ${data[i].capital}</p>
            <p id="Region" style="color:white;">Region: ${data[i].region}</p>
            <p id="country codes">Country code: ${data[i].alpha3Code}</p>
            <div class="border  border-light btn btn-primary action" onclick="weather(${data[i].capital})" id="Weather"> Click for weather </div>
            </div>
            </div>
            </div>
            </div>`;
            document.body.append(contr);
        };
    }catch (err){
        console.log(err.message)
    }
})();


function weather(test){
    fetch("https://api.openweathermap.org/data/3.0/weather?q=6dca03ca394187a065bdf74860c91a3e" + "Afghanistan" + "6dca03ca394187a065bdf74860c91a3e")
    .then(function(val){
        if (val.status === 200) return val.json();
        else throw new Error("something went wrong");

    }).then(function(data2){
        console.log(data2.main);
    }).catch(function(err){
        console.log(err.message);
    });
};