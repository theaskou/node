const replCodeOutputDiv = document.getElementById("repl-code-output");
const replCodeInputInput = document.getElementById("repl-code-input");

replCodeInputInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        runReplInput();
    }
});

function runReplInput() {
    const replCode = replCodeInputInput.value;
    replCodeInputInput.value = "";
    addInput(replCode);

    fetch('/api/repl', {
        method: "POST",
        body: JSON.stringify({ replCode }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then(({ data }) => {
        if (data.error) {
            console.log(data.error);
        
        } else {
            addOutputAndResult(data.output, data.result);
        }
    });
}

function addInput() {
    const replCodeDiv = document.createElement('div');
    replCodeDiv.textContent = `> ${replCode}`;
    replCodeDiv.classList.add('repl-code-prompt');

    replCodeOutputDiv.appendChild(replCodeDiv);

    scrollToTheBottom();
}

function addOutputAndResult(output, result) {
    if (output) {
        const replCodeOutput = document.createElement('div');
        replCodeOutput = textContent = output;
        replCodeInputInput = classList.add('repl-code-output');

        replCodeOutput.appendChild(replResultDiv);
    }


}

function scrollToTheBottom() {
    replCodeOutputDiv.scrollTop = replCodeOutputDiv.scrollHeight;
}