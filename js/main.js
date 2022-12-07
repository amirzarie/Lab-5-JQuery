// $('#homes tbody').on('click','button', function(){
//     $(this).closest('tr').fadeOut(1000, function(){
//         console.log(removedHomes.push(this))
//         $(this).remove();
//     })
// })

// const newHomes = [
//     {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
//     {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
//     {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
//     {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
//   ];


// $('#addHome').on('click', function(event){
//     if(!newHomes.length) return;
//     let randomNum = Math.floor(Math.random() * newHomes.length )
    
//     let tempHome = newHomes[randomNum]
//     console.log(tempHome);

//     newHomes.splice(randomNum, 1)

//     let newRow = `<tr>
//                 <td>${tempHome.address} </td>
//                 <td>${tempHome.sf} </td> 
//                 <td>${tempHome.bedrooms} </td>
//                 <td>${tempHome.baths} </td>  
//                 <td>${tempHome.price} </td>
//                 <td><button class="btn btn-xs btn-danger">Remove</button></td>
//                 </tr>`
    
//     console.log(newRow)

//     $("#homes tbody").append(newRow);
    
//     if(!newHomes.length) $('#addHome').attr('disabled', true)
// })


// let removedHomes = [];


// $('#restore').on('click', function(e){
//     removedHomes.forEach((h,i) => {
//     let tempRestore =  `<tr>
//      ${removedHomes[i].innerHTML}
//     </tr>`
//     $("#homes tbody").append(tempRestore);
// })
// removedHomes = []

// console.log(removedHomes == true);
// if(removedHomes)$('#restore').attr('disabled', true)
// })