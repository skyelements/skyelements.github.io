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