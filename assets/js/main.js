document.getElementById("upper-case").addEventListener("click", function() {
    let wordsToUpper = document.querySelector('textarea').value.toUpperCase().split(' ');
    document.querySelector('textarea').value = wordsToUpper.join(' ');
});

document.getElementById("lower-case").addEventListener("click", function() {
    let wordsToLower = document.querySelector('textarea').value.toLowerCase().split(' ');
    document.querySelector('textarea').value = wordsToLower.join(' ');
});


function properCase(wordsToProper) {
    return wordsToProper.toLowerCase().replace(/^(.)|\s(.)/g,
        function(proper) { return proper.toUpperCase(); }
    );
}

document.getElementById("proper-case").addEventListener("click", function() {
    let wordsToProper = document.querySelector("textarea");
    wordsToProper.value = properCase(wordsToProper.value);
});


function sentenceCase(wordsToSentence) {
    return wordsToSentence.toLowerCase().replace(/^(.)|\.(\s)*(.)/g,
        function(sentence) { return sentence.toUpperCase(); }
    );
}

document.getElementById("sentence-case").addEventListener("click", function() {
    let wordsToSentence = document.querySelector("textarea");
    wordsToSentence.value = sentenceCase(wordsToSentence.value);
});


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function() {
    let text = document.getElementById("textarea").value;
    let filename = "text.txt"
    download(filename, text);
});