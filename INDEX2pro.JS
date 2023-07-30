var selectedRow=null;

document.querySelector("#stuform").addEventListener("submit",(e) =>{
   

    e.preventDefault();
    
   
const productname=document.querySelector("#productname").value;
const productprice=document.querySelector("#productprice").value;
const productcategory=document.querySelector("#productcategory").value;
const productcondition=document.querySelector("#productcondition").value;

// if (productname.value=="" ||productprice==""||productcategory==""||productcondition=="")
if(productname=="" || productname[0].toUpperCase()!= productname[0] || productname[0]==('0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9') ||
productprice==""||productprice<100||productcategory==""||productcondition=="")  
{
   return validationForm();
} 
else{
if (selectedRow == null){
const list=document.querySelector(".student-list");
const row=document.createElement("tr");
row.innerHTML=`
<td>${productname}</td>
<td>${productprice}</td>
<td>${productcategory}</td>
<td>${productcondition}</td>
<td> <button id="update"  onClick="updateTask(this)" title="Update"><i class="fa fa-pencil"></i></button>
   <button id="delete" onClick="deleteTask(this)" title="Delete" style ="color:rgb(248, 0, 0)";><i class="fa fa-trash"></i></button></td>
`;
list.appendChild(row);
selectedRow = null;
}
else{
selectedRow.children[0].textContent=productname;
selectedRow.children[1].textContent=productprice;
selectedRow.children[2].textContent=productcategory;
selectedRow.children[3].textContent=productcondition;
selectedRow = null;
}
clearFields();
}
});



function validationForm()
        {
                var box1=document.getElementById("productname");
        if ((box1.value=="" || box1.value[0].toUpperCase()!= box1.value[0]) || box1.value[0]==('0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'))
        {
            p1=document.getElementById("p1").innerHTML=`This Name Is Not Valid </br> Example: Mi 9T`
            box1.focus();
            box1.style.border="solid 5px pink";
    
            return false;
    
        }
    
        var box2=document.getElementById("productprice");
        if ((box2.value==""||box2.value<100 ))
        {
            p2=document.getElementById("p2").innerHTML=`This Price Is Not Valid
            </br>
            Example: 1000`
            box2.focus();
            box2.style.border="solid 5px pink";
    
    
            return false;
    
        }
            

            var box3 = document.getElementById("productcategory");
        if ((box3.value=="" ))
        {
            p3=document.getElementById("p3").innerHTML=`You Should Select Any Value`;
            box3.focus();
            box3.style.border="solid 5px pink";
            return false;
    
        }

        var box4=document.getElementById("productcondition");
        if ((box4.value=="" ))
        {
            p4=document.getElementById("p4").innerHTML=`You Should Select Any Value`;
            box4.focus();
            box4.style.border="solid 5px pink";
            return false;
    
        }
        }



//CLEAR ALL FIELDS
function clearFields(){
document.querySelector("#productname").value="";
document.querySelector("#productprice").value="";
document.querySelector("#productcategory").value="";
document.querySelector("#productcondition").value="";
selectedRow = null;
}



//delete
                    let deleteTask=(e) =>
                    {
                        e.parentElement.parentElement.remove();
                    };

//update

let updateTask=(e) =>
{
    var addpro=document.getElementById("Add-Product");
                
                        selectedRow=e.parentElement.parentElement;
                        productname.value= selectedRow.children[0].innerHTML;
                        productprice.value= selectedRow.children[1].innerHTML;
                        productcategory.value= selectedRow.children[2].innerHTML;
                        productcondition.value= selectedRow.children[3].innerHTML;
                    
                //selectedRow.remove();
                 
};
