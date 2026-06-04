const form = document.getElementById("userForm");
const usersList = document.getElementById("users");

const API_URL = "http://localhost:3000/users";

// Load Users
async function loadUsers() {

    try {

        const response = await fetch(API_URL);

        const users = await response.json();

        usersList.innerHTML = "";

        users.forEach((user) => {

            const li = document.createElement("li");

            li.innerHTML = `
                ${user.name} - ${user.email} - ${user.phone}
                <button
                    class="delete-btn"
                    onclick="deleteUser(${user.id})"
                >
                    Delete
                </button>
            `;

            usersList.appendChild(li);
        });

    } catch (error) {

        console.log(error);
    }
}

// Add User
form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    try {

        await fetch(API_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(user)
        });

        form.reset();

        loadUsers();

    } catch (error) {
        console.log(error);
    }
});

// Delete User
async function deleteUser(id) {

    try {

        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        loadUsers();

    } catch (error) {
        console.log(error);
    }
}

// Initial Load
loadUsers();