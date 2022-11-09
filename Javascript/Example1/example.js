let grade = prompt("Please enter your grade ");

let textInfo = (grade >= 90 && grade <= 100) ? "AA":
            (grade >= 85 && grade < 90) ? "BA":
            (grade >= 80 && grade < 85) ? "BB":
            (grade >= 75 && grade < 80) ? "CB":
            (grade >= 70 && grade < 75) ? "CC":
            (grade >= 65 && grade < 70) ? "DC":
            (grade >= 60 && grade < 65) ? "DD":
            (grade >= 50 && grade < 60) ? "FD": 
            (grade >= 0 && grade < 50) ?  "FF" : 
            "Please enter a number between 0-100";

console.log(textInfo);
info.innerHTML = `Your grade is ${textInfo}`;