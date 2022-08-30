const getKeyTerms = () => {
    return document.body.innerText;
}

document.getElementById("button-key-terms").addEventListener("click", () => {

    // console.log(chrome)
    // console.log(chrome.scripting)

    // chrome.scripting.executeScript(
    //     {
    //         // tabId: getTabId(),
    //         func: getKeyTerms
    //     },
    //     (result) => {
    //         console.log(result);
    //     }
    // )

    // console.log(getKeyTerms());

    document.getElementById('output-key-terms').innerText = getKeyTerms();
    
});