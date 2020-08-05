let arrproduct=[]

const submitproduct=(e)=>{
    e.preventDefault()
    var ID=Date.now()
    var nama=document.getElementById('nameInput').value
    var price=document.getElementById('priceInput').value
    var kategori=document.getElementById('categoryInput').value
    var stok=document.getElementById('stockInput').value
    var obj={ID,nama,price,kategori,stok}
    arrproduct.push(obj)
    inputproduct()
}
const inputproduct=()=>{
    
    var output=arrproduct.map((val,index)=>{
        return (
            `<tr>
                <td>${val.ID}</td>
                <td>${val.kategori}</td>
                <td>${val.nama}</td>
                <td>${val.price}</td>
                <td>${val.stok}</td>
            </tr>`
        )
    })
    console.log(output)
    document.getElementById('render').innerHTML=output.join('')
}
function funFilterName() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("keyword");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
          cell = tr[i].getElementsByTagName("td")[j];
          if (cell) {
            if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
              break;
            } 
          }
        }
    }
}