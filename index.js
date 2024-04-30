// Command toast for catfact
async function getCatFact() {
    const Fact = await fetch('https://catfact.ninja/fact')
        .then(res => res.json());

        var wordCount = Fact.fact.split(" ").length;  

    var element = document.getElementById("myToast");
    var myToast = new bootstrap.Toast(element, { autohide: false });
        element.querySelector('.me-strong').innerText = "Cat Fact";
        element.querySelector('.me-small').innerText = wordCount + " words";
        element.querySelector('.toast-body').innerText = Fact.fact;
        myToast.show();
};

async function getDogFact() {
    const Fact = await fetch('https://dogapi.dog/api/v2/facts')
        .then(res => res.json());

        var wordCount = Fact.data[0].attributes.body.split(" ").length;  

    var element = document.getElementById("myToast");
    var myToast = new bootstrap.Toast(element, { autohide: false });
        element.querySelector('.me-strong').innerText = "Dog Fact";
        element.querySelector('.me-small').innerText = wordCount + " words";
        element.querySelector('.toast-body').innerText = Fact.data[0].attributes.body;
        myToast.show();
}

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