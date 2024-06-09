
var currentItem=JSON.parse(localStorage.getItem("currentItem"));
 displayData(currentItem)
   function displayData(currentItem){
     var pic=document.createElement("img")
     pic.setAttribute("src",currentItem.image);
 var name=document.createElement("h4");
 name.innerText=currentItem.name;
 var qty=document.createElement("div");
 qty.innerText=currentItem.qty+ currentItem.metric;
 var sym=document.createElement("div");
 sym.setAttribute("id","sym")
 sym.innerHTML="<i class='fa-solid fa-circle-info'></i>";
 var combo=document.createElement("div");
 combo.setAttribute("id","comb")
 combo.append(qty,sym);
 var price=document.createElement("p");
 price.innerText="₹"+currentItem.currentPrice;
 var stprice=document.createElement("p");
 if(currentItem.oldPrice!=undefined)
 {
  stprice.innerText="₹"+currentItem.oldPrice;
 }
 else{
  stprice.innerText="";
 }
 
 var btn=document.createElement("button");
//  btn.setAttribute('id','addToCartButton');
btn.addEventListener('click',function(){
  addCurrentItemToCartFunction();
})
 btn.innerHTML="<i class='fa fa-cart-plus'></i><span> ADD</span>";
 
 var sub=document.createElement("div");
 sub.setAttribute("id","sub")
 sub.append(price,stprice);
 var fs=document.querySelector("#fs");
 fs.append(name,combo,sub,btn)
 var first=document.querySelector("#first").append(pic);
 var dsc=document.createElement("h5")
 dsc.setAttribute("id","ds")
 dsc.innerText="Description";
 dsc.style.cursor="pointer";
 dsc.addEventListener("click",dscFunction)
  
 var ben=document.createElement("h5")
 ben.innerText="Benefits";
 ben.setAttribute("id","bn")
 ben.style.cursor="pointer";
 ben.addEventListener("click",function(){
  benFunction()
 })
 var info=document.createElement("h5")
 info.innerText="Info";
 info.setAttribute("id","inf")
 info.style.cursor="pointer";
 info.addEventListener("click",function(){
  infoFunction()
 })
 var sc=document.querySelector("#sc");
 sc.append(dsc,ben,info);
 var th=document.querySelector("#th");
 
var second=document.querySelector("#second").append(fs,sc,th);
   
  }
  function dscFunction()
  {
    th.innerText=currentItem.name;
    document.querySelector("#ds").style.color="black";
    document.querySelector("#bn").style.color="grey";
    document.querySelector("#inf").style.color="grey";
    document.querySelector("#ds").style.u="green";
    document.querySelector("#bn").style.u="none";
    document.querySelector("#inf").style.u="none";
   
  }
  function benFunction()
  {
    
    th.innerText=currentItem.benefits;
    document.querySelector("#ds").style.color="grey";
    document.querySelector("#bn").style.color="black";
    document.querySelector("#inf").style.color="grey";
    document.querySelector("#ds").style.u="none";
    document.querySelector("#bn").style.u="green";
    document.querySelector("#inf").style.u="none";
  }
  function infoFunction()
  {
    th.innerText=currentItem.info;
    document.querySelector("#ds").style.color="grey";
    document.querySelector("#bn").style.color="grey";
    document.querySelector("#inf").style.color="black";
    document.querySelector("#ds").style.u="none";
    document.querySelector("#bn").style.u="none";
    document.querySelector("#inf").style.u="green";
  }

function addCurrentItemToCartFunction() {
  var currentItem = JSON.parse(localStorage.getItem('currentItem'));
  cart = JSON.parse(localStorage.getItem('cart')) || [];
    alreadyAdded = false;
    index = undefined;
    cart.forEach(function (elem,ind) {
        if(elem.id==currentItem.id) {
            alreadyAdded = true;
            index = ind;
        }
    });
    if(alreadyAdded) {
        cart[index].count++;
    }
    else {
        currentItem.count = 1;
        cart.push(currentItem);
    }
    localStorage.setItem('cart',JSON.stringify(cart));
}