// Cat Fact command toast
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

async function saveAPIKey() {
    let apiKey = document.getElementById('APIKeyInput').value;
        localStorage.setItem("GOOGLE_API_KEY", apiKey);

    alert('You have saved your API key!');
};

async function getAPIKey() {
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
        // localStorage.clear();

    alert('You have removed your API key!');
};