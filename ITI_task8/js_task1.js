// task_1
let childWindow;
let timer;

let x = 0;
let y = 0;

let direction = "right";

function openChild() {

    
    if (childWindow && !childWindow.closed) {
        childWindow.focus();
        return;
    }

    childWindow = window.open(
        "",
        "ChildWindow",
        "width=300,height=200,left=0,top=0"
    );

    childWindow.document.write(`
        <html>
        <head>
            <title>Flying Child</title>
        </head>

        <body>
            <h2>Flying Child Window</h2>
            <p>This window moves around the screen.</p>
        </body>
        </html>
    `);

    childWindow.document.close();

    x = 0;
    y = 0;
    direction = "right";

    timer = setInterval(moveChild, 20);
}


function moveChild() {

    if (!childWindow || childWindow.closed) {
        clearInterval(timer);
        return;
    }

    childWindow.resizeTo(300, 200);

    let maxX = screen.availWidth - 300;
    let maxY = screen.availHeight - 200;

    if (direction == "right") {

        x += 5;

        if (x >= maxX) {
            x = maxX;
            direction = "down";
        }

    }
    else if (direction == "down") {

        y += 5;

        if (y >= maxY) {
            y = maxY;
            direction = "left";
        }

    }
    else if (direction == "left") {

        x -= 5;

        if (x <= 0) {
            x = 0;
            direction = "up";
        }

    }
    else if (direction == "up") {

        y -= 5;

        if (y <= 0) {
            y = 0;
            direction = "right";
        }
    }

    childWindow.moveTo(x, y);
}


function stopChild() {

    
    clearInterval(timer);

    
    if (childWindow && !childWindow.closed) {
        childWindow.focus();
    }
}



// task_2
let typingWindow;

function openTypingWindow() {

    typingWindow = window.open(
        "",
        "TypingWindow",
        "width=500,height=300"
    );

    let message = "Welcome to my website!";

    typingWindow.document.write(`
        <html>
        <head>
            <title>Typing Message</title>

            <style>
                body {
                    text-align: center;
                    font-family: Arial;
                    margin-top: 100px;
                }

                #message {
                    font-size: 30px;
                }
            </style>
        </head>

        <body>

            

            <div id="message"></div>

        </body>
        </html>
    `);

    typingWindow.document.close();

    let index = 0;

    let typing = setInterval(function () {

        if (index < message.length) {

            typingWindow.document.getElementById("message").innerHTML
                += message[index];

            index++;

        } else {

            clearInterval(typing);

        }

    }, 100);

    
    setTimeout(function () {

        if (typingWindow && !typingWindow.closed) {
            typingWindow.close();
        }

    }, 5000);
}


// task 3 
function openAdWindow() {

    let adWindow = window.open(
        "",
        "Advertisement",
        "width=400,height=400"
    );

    adWindow.document.write(`
        <html>

        <head>
            <title>Advertisement</title>

            <style>

                body {
                    font-family: Arial;
                    margin: 0;
                    padding: 20px;
                    background-color: #f5f5f5;
                }

                .ad {
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                    text-align: center;
                }

                h1 {
                    color: red;
                }

                p {
                    font-size: 18px;
                    line-height: 1.8;
                }

            </style>

        </head>

        <body>

            <div class="ad">

                <h1>Special Advertisement</h1>

                <h2>🔥 Big Sale 🔥</h2>

                <p>
                    Welcome to our special advertisement.
                </p>

                <p>
                    Get amazing products at very special prices.
                </p>

                <p>
                    Don't miss this great opportunity!
                </p>

                <p>
                    We have many products available for you.
                </p>

                <p>
                    Visit our store and enjoy our special offers.
                </p>

                <p>
                    New products are added every day.
                </p>

                <p>
                    Limited time offer!
                </p>

                <p>
                    Thank you for visiting our advertisement.
                </p>

                <h2>Buy Now!</h2>

            </div>

        </body>

        </html>
    `);

    adWindow.document.close();
}