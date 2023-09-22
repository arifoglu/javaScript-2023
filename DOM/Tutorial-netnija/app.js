//////// acces DOM

// var titles = document.getElementsByClassName("title");

// console.log(Array.isArray(titles)); // false
// console.log(Array.isArray(Array.from(titles)))// true


//  Array.from(titles).forEach(function(item){
//      console.log(item);
//  });


///////////       queryselector method

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);
// 
// const books = document.querySelector('#book-list li .name');
// console.log(books);
// 
// const booksAll = document.querySelectorAll('#book-list li .name');
// console.log(booksAll);
// console.log(booksAll[0]);
// 
// Array.prototype.forEach.call(booksAll , function( book ){
//     console.log(book);
// })


/////////////        change HTML

///  var books = document.querySelectorAll("#book-list li .name");
///  // console.log(books);
///  
///  Array.prototype.forEach.call(books ,function( book ){
///      book.textContent += "(book title)";
///  
///  });
///  
///  const bookList = document.querySelector("#book-list");
///  bookList.innerHTML = "<h2>books and more </h2>";
///  bookList.innerHTML += "<p>books and more </p>";

////////////            HTML nodes

// const banner = document.querySelector("#page-banner");
// console.log(banner.nodeName);         // DIV
// console.log(banner.hasChildNodes()); //  true


/////////////  (parentElement= parentNode)

/// const bookList = document.querySelector("#book-list");
///  console.log(bookList);                // <div id="book-list">
///  console.log(bookList.parentNode)     //  <div id="wrapper">
///  console.log(bookList.parentElement) //   <div id="wrapper">
///  console.log(bookList.parentElement.parentElement)               //<body>
///  console.log(bookList.parentElement.parentElement.parentElement) //<html>
///  console.log(bookList.childNodes) //[ #text, h2.title, #text, ul, #text ]
///  console.log(bookList.children)     // { 0: h2.title, 1: ul, length: 2 }
///  console.log(bookList.children[0]); // <h2 class="title"></h2>
///  console.log(bookList.nextElementSibling); // <form id="add-book">

///  bookList.previousElementSibling.querySelector("p").innerHTML += "<br> for everyone"


//////////////         events

///  const btns = document.querySelectorAll("#book-list .delete");
///  console.log(btns);   //[ span.delete, span.delete, span.delete, span.delete ]
///  console.log(Array.isArray(btns)); // false
///  
///  Array.from(btns).forEach(function(btn){
///      btn.addEventListener("click",function(e){
///          const li = e.target.parentElement;
///          console.log(li);
///  
///          li.parentNode.removeChild(li);
///  
///      });
///  });
///            e.preventDefault
///  const  link = document.querySelector("#page-banner a");
///  
///  link.addEventListener("click",function(e){
///      e.preventDefault();
///  })

////////////        delete element

  const list = document.querySelector("#book-list ul");
  console.log(list); // <ul>
  
  list.addEventListener("click",function(e){
      if(e.target.className == "delete"){
          const li = e.target.parentElement;
          list.removeChild(li);
      }
  });

/////////////         add books 

const addForm = document.forms["add-book"];
console.log(addForm) ;

addForm.addEventListener("submit",function(e){
    e.preventDefault();
    const value = addForm.querySelector("input").value;
    console.log(value);

    ///             create element
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");
    ///              add textContent
    bookName.textContent = value;
    deleteBtn.textContent ="delete";
    

     ///             append document
     li.appendChild(bookName);     
     li.appendChild(deleteBtn);     
     list.appendChild(li);

    
    ///               add class
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    ///                hide books
    const hideBox = document.querySelector("#hide");
   
    hideBox.addEventListener("change",function(e){
        if(hideBox.checked){
            list.style.display ="none";
        }else{
            list.style.display ="block";
        }
    })

});
    
    ///               filter  list ( search an item)

    const searchBar = document.forms["search-books"].querySelector("input");
    searchBar.addEventListener("keyup",function(e){
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName("li");

        Array.from(books).forEach(function( book ){
            const title = book.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term) != -1){
                book.style.display = "block";
            }else{
                book.style.display = "none"
            }
        })
    })

    //////////                tab content

    const tabs = document.querySelector('.tabs');
    //console.log(tabs);  // <ul class="tabs"></ul>
    const panels = document.querySelectorAll('.panel');
    //console.log(panels); // NodeList [ div#about.panel.active, div#contact.panel ]
    tabs.addEventListener('click', (e) => {
      if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach((panel) => {
          if(panel == targetPanel){
            panel.classList.add('active');
          }else{
            panel.classList.remove('active');
          }
        });
      }
    });