const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});


function logout() {
    alert("You have been logged out.");  
    window.location.href = "../Wireframe.html"; 
}

/*----------------adding popup form -------------*/

function updateMessage() {
    const searchTerm = document.getElementById('searchInput').value;
    const messageDiv = document.getElementById('message');
    
    if (searchTerm.trim() === "") {
        messageDiv.textContent = "Type something to search...";
    } else {
        messageDiv.textContent = `Searching for: "${searchTerm}"`;
    }
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value;

    if (searchTerm.trim() === "") {
        alert("Please enter a search term.");
        return;
    }

    console.log('Performing search for:', searchTerm);
}

/*Dashboard*/

// Functionality for Edit and Delete buttons (can be customized as needed)

// Functionality for Edit and Delete buttons (can be customized as needed)

const editButtons = document.querySelectorAll('.edit-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');

editButtons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('Edit button clicked');
    });
});

deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this entry?')) {
            alert('Entry deleted');
        }
    });
});
