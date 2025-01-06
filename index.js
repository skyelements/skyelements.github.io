// Cat Fact & Dog Fact commands
async function getCatFact() {
    const Fact = await fetch('https://catfact.ninja/fact')
        .then(res => res.json());

    const dialog = document.querySelector('md-dialog');

    const title = dialog.querySelector('.dialog-title');
    const description = dialog.querySelector('.dialog-description');
    const button = dialog.querySelector('.dialog-button');

        title.innerText = "Cat Fact";
        description.innerText = Fact.fact;
        button.innerText = "Close";

    return dialog.setAttribute('open', '');
};

async function getDogFact() {
    const Fact = await fetch('https://dogapi.dog/api/v2/facts')
        .then(res => res.json());

    const dialog = document.querySelector('md-dialog');

    const title = dialog.querySelector('.dialog-title');
    const description = dialog.querySelector('.dialog-description');
    const button = dialog.querySelector('.dialog-button');

        title.innerText = "Dog Fact";
        description.innerText = Fact.data[0].attributes.body;
        button.innerText = "Close";

    return dialog.setAttribute('open', '');
}


// Add, View, Remove & Clear API keys
async function manageAPIKeys(param) {
    const dialog = document.querySelector('md-dialog');
        const title = dialog.querySelector('.dialog-title');
        const description = dialog.querySelector('.dialog-description');
        const button = dialog.querySelector('.dialog-button');

    switch(param) {
        case 'add':
            let apiKey = document.getElementById('APIKeyInput').value;
                encodedApiKey = encodeURIComponent(apiKey);

            if (apiKey === '') {
                title.innerText = "Error";
                description.innerText = "Please enter an API key";
                button.innerText = "OK";

                break;
            }

            // Clears the input field before displaying result
            document.getElementById('APIKeyInput').value = '';

            localStorage.setItem("GOOGLE_API_KEY", encodedApiKey);

            title.innerText = "";
            description.innerText = "You have saved your API key";
            button.innerText = "Close";

            break;

        case 'view':
            try {
                const API_KEY = localStorage.getItem("GOOGLE_API_KEY");

                if (API_KEY === null) {
                    title.innerText = "Error";
                    description.innerText = "You do not have an API key saved";
                    button.innerText = "OK";

                    break;
                }
                else {
                    title.innerText = "Your API key is";
                    description.innerText = `${API_KEY}`;
                    button.innerText = "Copy";
    
                    // Event Listener to check whether button is clicked
                    dialog.addEventListener('close', GetButtonClick);
    
                    function GetButtonClick() {
                        const buttonIsClicked = dialog.returnValue === 'dialogButton';
    
                        if (buttonIsClicked) {
                            navigator.clipboard.writeText(API_KEY);
                        }
    
                        dialog.removeEventListener('close', GetButtonClick);
                    }
                }

            }
            catch {
                title.innerText = "Error";
                description.innerText = "There was an error getting your API key";
                button.innerText = "OK";
            }

            break;

        case 'removeGoogle':
            const API_KEY = localStorage.getItem("GOOGLE_API_KEY");

            if (API_KEY === null) {
                title.innerText = "Error";
                description.innerText = "You do not have an API key saved";
                button.innerText = "OK";

                break;
            }
            else {
                localStorage.removeItem("GOOGLE_API_KEY");

                title.innerText = "";
                description.innerText = "You have removed your API key";
                button.innerText = "Close";
            }

            break;

        case 'remove':
            // Since currently theres only one API key, "localStorage.clear();" is not used
            localStorage.removeItem("GOOGLE_API_KEY");

            title.innerText = "";
            description.innerText = "You have removed all existing API keys";
            button.innerText = "Close";

            break;
    }

    dialog.setAttribute('open', '');
}

// Copy Sodium GitHub clone command to clipboard
async function sodiumCloneLink() {
    const dialog = document.querySelector('md-dialog');

    const title = dialog.querySelector('.dialog-title');
    const description = dialog.querySelector('.dialog-description');
    const button = dialog.querySelector('.dialog-button');

        title.innerText = "Link";
        description.innerText = "Copied to clipboard";
        button.innerText = "Close";

    return navigator.clipboard.writeText("git clone https://github.com/yewshanooi/sodium.git").then(() => { dialog.setAttribute('open', '') });
}

// Sign in to SkyElements
function signIn() {
    let userEmail = document.getElementById('inputEmail').value;
    let userPassword = document.getElementById('inputPassword').value;

    if (userEmail === '') {
        window.alert("Error: Please enter an email");
        return;
    }

    if (userPassword === '') {
        window.alert("Error: Please enter a password");
        return;
    }

    const USER_EMAIL = localStorage.getItem("USER_EMAIL");
    const USER_PASSWORD = localStorage.getItem("USER_PASSWORD");

    if (USER_EMAIL != userEmail) {
        window.alert("Error: Invalid email");
        return;
    }

    if (USER_PASSWORD != userPassword) {
        window.alert("Error: Invalid password");
        return;
    }

    location.replace("index.html");
    localStorage.setItem("authenticated", "true");

    window.alert(`Welcome ${USER_EMAIL} to SkyElements!`);
}

// Sign up with SkyElements
function signUp() {
    let userEmail = document.getElementById('inputEmail').value;
    let userPassword = document.getElementById('inputPassword').value;

    if (userEmail === '') {
        window.alert("Error: Please enter an email");
        return;
    }

    if (userPassword === '') {
        window.alert("Error: Please enter a password");
        return;
    }

    localStorage.setItem("USER_EMAIL", userEmail);
    localStorage.setItem("USER_PASSWORD", userPassword);

    location.replace("index.html");
    localStorage.setItem("authenticated", "true");
}

// Sign out of SkyElements
function signOut() {
    location.replace("index.html");
    localStorage.setItem("authenticated", "false");

    window.alert(`Successfully logged out!`);
}