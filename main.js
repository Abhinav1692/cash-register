const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-msg");
const notes = document.querySelectorAll(".no-of-notes"); //notes  ..will return an 
//array containing no of notes for each possible category of notes

const possibleNotes = [2000, 500, 100, 20, 10, 5, 1];






checkButton.addEventListener("click", function validateBillCash() {

    errorMessage.style.display = "none";
    if (billAmount.value > 0) {

        if (cashGiven.value - billAmount.value > 0) {
            const amountToReturn = cashGiven.value - billAmount.value;
                returnChange(amountToReturn);
        }
        else {
            console.log(cashGiven.value - billAmount.value);
            showMessage("Cash given should be greater than or equal to bill amount.");
        }
    } else {

        showMessage("Invalid bill amount");
    }



});


function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}

// proceesing---(Greedy approach)

function returnChange(amountToReturn) {

    for (let i = 0; i < possibleNotes.length; i++) {
        var noOfNotes = 0;
        if (possibleNotes[i] <= amountToReturn) {
            noOfNotes = Math.trunc(amountToReturn / possibleNotes[i]);
            notes[i].innerText = noOfNotes;
            amountToReturn = amountToReturn % possibleNotes[i];
        } else {
            notes[i].innerText = noOfNotes;
        }


    }
}
