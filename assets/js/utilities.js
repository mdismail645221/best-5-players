// Get Element input field value 

function getElementByinputFieldValue (inputValue){
    const perPlayerInputField = document.getElementById(inputValue);
    const perPlayerInputString = perPlayerInputField.value;
    const perPlayerInputNumber = parseFloat(perPlayerInputString);
    return perPlayerInputNumber
}
// Get Element inner Text  value 

function getElementByInnerText(innerTextValue){
    const text = document.getElementById(innerTextValue);
    const textString = text.innerText;
    const textNumber = parseFloat(textString);
    return textNumber
}

// Set the Element Value 
function setElementByTotalValue (elementId, value){
    const playerExpenseTotalMoney = document.getElementById(elementId);
    playerExpenseTotalMoney.innerText = value;
}