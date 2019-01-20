// Book Class: Represents a Book
class Book{constructor(a,b,c){this.title=a,this.author=b,this.isbn=c;}}// UI Class: Handle UI Tasks
class UI{static displayBooks(){const a=Store.getBooks();a.forEach(a=>UI.addBookToList(a));}static addBookToList(a){const b=document.querySelector("#book-list"),c=document.createElement("tr");c.className="books-list__item",c.innerHTML=`
      <td>${a.title}</td>
      <td>${a.author}</td>
      <td>${a.isbn}</td>
      <td><a href="#" class="delete">Delete</a></td>
    `,b.appendChild(c);}static clearFields(){document.querySelector("#title-field").value="",document.querySelector("#author-field").value="",document.querySelector("#isbn-field").value="";}static showAlert(a,b){const c=document.createElement("div");c.className=`alert alert-${b}`,c.appendChild(document.createTextNode(a));const d=document.querySelector("#wrapper"),e=document.querySelector("#book-form");// Vanish in 3 seconds
d.insertBefore(c,e),setTimeout(()=>c.remove(),3e3);}static deleteBook(a){a.classList.contains("delete")&&a.parentElement.parentElement.remove();}}// Store Class: Handle Storage
class Store{static getBooks(){let a;return a=null===localStorage.getItem("books")?[]:JSON.parse(localStorage.getItem("books")),a}static addBook(a){const b=Store.getBooks();b.push(a),localStorage.setItem("books",JSON.stringify(b));}static removeBook(a){const b=Store.getBooks();b.forEach((c,d)=>{c.isbn===a&&b.splice(d,1);}),localStorage.setItem("books",JSON.stringify(b));}}// Event: Display Books
// Event: Add a Book
// Event: Remove a Book
document.addEventListener("DOMContentLoaded",UI.displayBooks),document.querySelector("#book-form").addEventListener("submit",a=>{a.preventDefault();// Get form values
const b=document.querySelector("#title-field").value,c=document.querySelector("#author-field").value,d=document.querySelector("#isbn-field").value;// Validate
if(""===b||""===c||""===d)UI.showAlert("Please fill in all fields","danger");else{// Instatiate book
const a=new Book(b,c,d);// Add Book to UI
// Add book to store
// Show success message
// Clear fields
UI.addBookToList(a),Store.addBook(a),UI.showAlert("Book Added","success"),UI.clearFields();}}),document.querySelector("#book-list").addEventListener("click",a=>{"Delete"===a.target.textContent&&(UI.deleteBook(a.target),Store.removeBook(a.target.parentElement.previousElementSibling.textContent),UI.showAlert("Book Removed","success"));});
//# sourceMappingURL=index.js.map
