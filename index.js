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

// Navbar Search button
async function submitButton() {
    alert('You have clicked on the Search button!');
};
