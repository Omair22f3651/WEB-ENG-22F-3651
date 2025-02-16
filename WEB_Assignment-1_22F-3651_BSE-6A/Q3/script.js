document.getElementById("transformForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let inputString = document.getElementById("inputString").value;
    let rollNumber = document.getElementById("rollNumber").value;
    let manualSkip = document.getElementById("manualSkip").value;

    let skipInterval = manualSkip ? parseInt(manualSkip) :
        rollNumber.split("")
                  .map(Number)
                  .filter(num => !isNaN(num))
                  .reduce((sum, num) => sum + num, 0);

    let transformedString = transformString(inputString, skipInterval);
    displayResult(inputString, transformedString, skipInterval);
});

const transformString = (str, skipInterval) => {
    if (skipInterval >= str.length) return str;

    let reversed = str.split("").reverse();
    let result = [...str]; 

    let index = 0;
    reversed.forEach((char, i) => {
        if (str[i] !== " " && (index + 1) % skipInterval !== 0) {
            while (result[i] === " ") i++; 
            result[i] = char;
        }
        index++;
    });

    return result.join("");
};

const displayResult = (original, transformed, skipInterval) => {
    let resultList = document.getElementById("resultList");
    let listItem = document.createElement("li");
    listItem.innerHTML = `<strong>Original:</strong> ${original} <br> 
                          <strong>Transformed:</strong> ${transformed} <br>
                          <strong>Skip Interval:</strong> ${skipInterval}`;
    resultList.prepend(listItem);
};
