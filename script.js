//creating the header part using div
var row1=document.createElement("div");
row1.setAttribute("class","row1");
row1.innerHTML="P O K E M O N A P I";

document.body.append(row1);

//using bootstrap method container->row->column
var container=document.createElement("div");
container.setAttribute("class","container");

var row=document.createElement("div");
row.setAttribute("class","row");

container.append(row);
// const flag=false;
// creating async function and fetching the data from API using async and await and stored in result.
async function foo(page){
  if(page>=1)
  {
    row.innerHTML = " ";
  }
    var res=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page-1)*20}`);
    var result=await res.json();
    console.log(result);

// using try and catch block
try{
    for(var i=0;i<result.results.length;i++)
    {
    var res1=await fetch(result.results[i].url);
    var res2=await res1.json();
    console.log("res2",res2);

    //using map method getting only name from ability and storing in ability variable
    const ability=res2.abilities.map((ele)=>ele.ability.name);
    // using bootstrap cards to display the values.
     row.innerHTML+=`<div class="col-md-4">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src=${res2.sprites.front_default}>   
      <h5 class="card-title">Name: ${result.results[i].name}</h5>
      <h5 class="card-title">Ability: ${ability.join(",")}</h5>
      <h5 class="card-title">Moves :${res2.moves[0].move.name}</h5>
      <h5 class="card-title">Weight :${res2.weight}</h5>
    </div>
  </div>
  </div>`
    // appending everything to container
    document.body.append(container);
    }
}
// using catch block to get the error
catch(error){
    console.log(error);
}

} 

//creating pagination using button
var button=document.createElement("div");
button.setAttribute("class","button");

var button1=document.createElement("button");
button1.setAttribute("class","button1");
button1.innerHTML="1";
button1.addEventListener('click',function (){one(1)});

var button2=document.createElement("button");
button2.setAttribute("class","button2");
button2.innerHTML="2";
button2.addEventListener("click",function (){one(2)});

var button3=document.createElement("button");
button3.setAttribute("class","button3");
button3.innerHTML="3";
button3.addEventListener("click",function (){one(3)});

var button4=document.createElement("button");
button4.setAttribute("class","button4");
button4.innerHTML="4";
button4.addEventListener("click",function (){one(4)});

button.append(button1,button2,button3,button4);

container.append(button);

//calling the function after the button is clicked
function one(n)
{
  foo(n);
}

