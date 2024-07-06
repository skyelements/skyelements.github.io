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

                title.innerText = "Your API key is";
                description.innerText = `${API_KEY}`;
                button.innerText = "Close";
                // [To-Do] Add a Copy button for users to copy their API key
            }
            catch {
                title.innerText = "Error";
                description.innerText = "There was an error getting your API key";
                button.innerText = "OK";
            }

            break;

        case 'removeGoogle':
            localStorage.removeItem("GOOGLE_API_KEY");

            title.innerText = "";
            description.innerText = "You have removed your API key";
            button.innerText = "Close";

            break;

        case 'remove':
            localStorage.clear();

            title.innerText = "";
            description.innerText = "You have removed all existing API keys";
            button.innerText = "Close";

            break;
    }

    dialog.setAttribute('open', '');
}

// Copy Sodium GitHub clone command to clipboard
function copySodiumClone() {
    navigator.clipboard.writeText("git clone https://github.com/yewshanooi/sodium.git");
}
