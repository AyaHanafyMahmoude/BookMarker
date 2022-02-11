var booknameinput = document.getElementById("siteName");
var bookurlinput = document.getElementById("siteUrl");
var arryofbooks;
if (localStorage.getItem("allbooks") == null) {
    arryofbooks = [];
} else {
    arryofbooks = JSON.parse(localStorage.getItem("allbooks"));
    displaybooks();
}

function submitbooknames() {
    
   var resultvalidation= validation(booknameinput.value);
   var resulturlvalidate=urlvalidation(bookurlinput.value);
  
   if (resultvalidation&& resulturlvalidate) {
    document.getElementById("so").innerHTML="";
    document.getElementById("mo").innerHTML="";

    var books = {
        name: booknameinput.value,
        url: bookurlinput.value,
    }
    arryofbooks.push(books);
    localStorage.setItem("allbooks", JSON.stringify(arryofbooks));
    displaybooks();
   }else{
    var tt="";
    tt+=` <div class="bord">
    you should put name
</div>`
var tr=""+` <div class="bord">
 use link like "http://www.name.com"
</div>`
       if(!resulturlvalidate&&!resultvalidation){
        document.getElementById("so").innerHTML=tr;
        document.getElementById("mo").innerHTML=tt;
       }else if(!resultvalidation){
        document.getElementById("mo").innerHTML=tt;
       }else{
        document.getElementById("so").innerHTML=tr;
       

       }
     
     
      
   }
   

}
function displaybooks() {
    var container = "";
    for (var i = 0; i < arryofbooks.length; i++) {
        container += `<div class=" mt-4">
        <div class="container">
            <div class="row gradient-color d-flex align-content-center pt-3 pb-3">
                <div class="col-md-3">
                    <p class=" fw-bold text-capitalize text-start">${arryofbooks[i].name}</p>
                </div>
                <div class="col-md-4">
                <a class="text-decoration-none text-white" href="${arryofbooks[i].url}"> <button class="btn btn-primary"  >visite</button></a>
                    <button class="  btn btn-danger ms-2" onclick="deletbook(${i})">Delete</button>
                </div>
               
            </div>
        </div>
    </div>`

    }
    document.getElementById("div-container").innerHTML = container;
}
function deletbook(index){
   
 arryofbooks.splice(index,1) ;
 localStorage.setItem("allbooks", JSON.stringify(arryofbooks));
 displaybooks(); 

}
function validation(values){
if( values!=""){
    return true;

}else{
    return false;
}

}
function urlvalidation(values){
    var x=/^(http){1}(s)?(:)\/{2}(w){3}\..+\.[a-z]{2,3}$/;
    if(x.test(values)){
        return true;

    }else{
        return false;
    }
}
   
    
   
       
    
 

   
