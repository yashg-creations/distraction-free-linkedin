console.log("Running Distraction Free Linkedin Extension");

const removeDistractingPosts = () => {
    let relevantSpans = Array.from(document.getElementsByTagName('span')).filter(span => span.innerText == "Promoted" || span.innerText == "Suggested");

    for (elem of relevantSpans) {
        while (elem.className.search('artdeco-card') == -1) {
            elem = elem.parentElement;
        }

        if (elem) {
            console.log('Removed' + elem);
            elem.remove();
        }
    }
}

setInterval(removeDistractingPosts, 2);
