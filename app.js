var dateOfBirth = document.querySelector("#date-of-birth");
var luckNumber = document.querySelector("#luck-number");
var checkButton = document.querySelector("#check-button");
var output = document.querySelector(".message");
var log = console.log;





function sumOfBirthday(born) {

    var sum = 0;

    for (var postion = 0; postion < born.length; postion++) {
        sum = sum + Number(born.charAt(postion));



    }
    return sum;



}

function birthdayButtonHandler() {

    var born = dateOfBirth.value;
    var born = born.replaceAll("-", "");
    var total = sumOfBirthday(born);

    if (born !== '' && luckNumber.value !== '') {
        if (Number(luckNumber.value) > 0) {
            if (total % Number(luckNumber.value) === 0) {

                output.innerText = "Your Birth Date is lucky ๐๐งจโจ๐๐";

            } else {
                output.innerText = "Sorry your Birth Date is not lucky๐๐๐ข";
            }
        } else {

            output.innerText = "Please provide the positive value of lucky  no.";
        }

    } else{
        output.innerText = "Please input some value";
    }




}
checkButton.addEventListener('click', birthdayButtonHandler)