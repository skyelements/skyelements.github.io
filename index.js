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