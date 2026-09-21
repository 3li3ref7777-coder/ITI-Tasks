// Task 1
function createCourse(courseName, courseDuration, courseOwner) {

    let course = {
          courseName: "  ",
          courseDuration: "  ",
          courseOwner: "  "
    };

    Object.assign(course, {
        courseName: courseName,
        courseDuration: courseDuration,
        courseOwner: courseOwner
    });

    console.log(course);
}

createCourse("Front End", "5 Weeks", "ITI"); 


// Task 2
let usersTabs = document.getElementById("usersTabs");
let postsContainer = document.getElementById("postsContainer");


fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {


        return response.json();
    })
    .then(function (users) {

        users.forEach(function (user) {

            let tab = document.createElement("button");

            tab.className = "user-tab";
            tab.innerText = user.name;

            tab.addEventListener("click", function () {

               
                document.querySelectorAll(".user-tab").forEach(function (button) {
                    button.classList.remove("active");
                });

                
                tab.classList.add("active");

            
                getPosts(user.id);
            });

            usersTabs.appendChild(tab);
        });

    })
    .catch(function (error) {

        usersTabs.innerHTML = "<p>Unable to load users.</p>";

        console.log(error);
    });



async function getPosts(userId) {

    postsContainer.innerHTML = "<p class='message'>Loading posts...</p>";

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?userId=" + userId
        );

     

        let posts = await response.json();

        postsContainer.innerHTML = "";

        posts.forEach(function (post) {

            let postDiv = document.createElement("div");

            postDiv.className = "post";

            postDiv.innerHTML = `
                <h3>${post.title}</h3>
            `;

            postsContainer.appendChild(postDiv);
        });

    } catch (error) {

        postsContainer.innerHTML =
            "<p class='message'>Unable to load posts.</p>";

        console.log(error);
    }
}