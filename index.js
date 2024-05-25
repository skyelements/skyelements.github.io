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
async function addAPIKey() {
    let apiKey = document.getElementById('APIKeyInput').value;

    if (apiKey === '') {
        alert('Error: Please enter an API key.')
        return;
    }

    localStorage.setItem("GOOGLE_API_KEY", apiKey);
    alert('You have saved your API key!');
    
    window.location.reload();
};

async function viewAPIKey() {
    try {
        const API_KEY = localStorage.getItem("GOOGLE_API_KEY");
        alert(`Your API key is: ${API_KEY}`);
    }
    catch {
        alert('Error: There was an error getting your API key.')
    }
};

async function removeAPIKey() {
    localStorage.removeItem("GOOGLE_API_KEY");
    alert('You have removed your API key!');

    window.location.reload();
};

async function removeAllAPIKeys() {
    localStorage.clear();
    alert('You have removed all existing API keys!');

    window.location.reload();
};
