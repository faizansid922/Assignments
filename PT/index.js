// fill in javascript code here
// table {
//   font-family: Arial, Helvetica, sans-serif;
//   border-collapse: collapse;
//   width: 60%;
//   margin: auto;
//   margin-top: 50px;
//   text-align: center;
// }

// table td,
// table th {
//   margin-top: 15px;
//   border: 1px solid #ddd;
//   padding: 8px;
//   text-align: center;
//   background-color:#0468aa;
// }

const myForm = document.querySelector("form");
const inpName = document.getElementById("name")
const inpDocID = document.getElementById("docID");
const departSelect = document.getElementById("dept");
const inpExp = document.getElementById("exp");
const inpEmail = document.getElementById("email");
const inpMobile = document.getElementById("mbl");
let tbody = document.querySelector("tbody");

let AllTask = [];
myForm.addEventListener("submit",function(e)
{
    e.preventDefault()
    let Data = 
    {
        input0 : inpName.value,
        input1 : inpDocID.value,
        select : departSelect.value,
        input2 : inpExp.value,
        input3 : inpEmail.value,
        input4 : inpMobile.value,
        
    }
    
    AllTask.push(Data)
    
    tbody.innerHTML="";
    AllTask.map((ele)=>
    {
        const tr = document.createElement("tr");
        const td0 = document.createElement("td");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        console.log(ele.input);
        td0.innerText = ele.input0;
        td1.innerText = ele.input1;
        td2.innerText = ele.select;
        td3.innerText = ele.input2;
        td4.innerText = ele.input3;
        td5.innerText = ele.input4;
        tr.append(td0,td1,td2,td3,td4,td5);
        tbody.append(tr);

    })
})




