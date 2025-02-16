const rollNumber = "22F-3651"; 
const lastDigit = parseInt(rollNumber.slice(-1));
const accountNumber = "OMAIR-" + rollNumber.replace(/\D/g, ""); 
let balance = lastDigit * 1000; 
let transactionHistory = [];

document.getElementById("accountNumber").textContent = accountNumber;
document.getElementById("balance").textContent = balance;

const updateBalance = () => {
    balance = transactionHistory.reduce((sum, t) => sum + t, lastDigit * 1000);
    document.getElementById("balance").textContent = balance;
};

const addTransaction = (type, amount) => {
    transactionHistory.push(amount);
    const transactionList = document.getElementById("transactionList");
    const listItem = document.createElement("li");
    listItem.textContent = `${type}: PKR ${amount}`;
    transactionList.prepend(listItem);
    updateBalance();
};

const deposit = () => {
    let amount = parseInt(document.getElementById("amount").value);
    if (amount <= 0 || amount % parseInt(rollNumber.replace(/\D/g, "")) !== 0) {
        alert("Deposit amount must be a multiple of your roll number!");
        return;
    }
    addTransaction("Deposit", amount);
};

const withdraw = () => {
    let amount = parseInt(document.getElementById("amount").value);
    let maxWithdraw = balance * 0.8;
    
    if (amount <= 0 || amount > maxWithdraw) {
        alert(`Invalid withdrawal amount! You can withdraw up to PKR ${maxWithdraw}.`);
        return;
    }
    addTransaction("Withdrawal", -amount);
};

const downloadHistory = () => {
    let text = `OmairPay - Transaction History\nAccount No: ${accountNumber}\nBalance: PKR ${balance}\n\nTransactions:\n`;
    transactionHistory.forEach((t, i) => {
        text += `${i + 1}. ${t > 0 ? "Deposit" : "Withdrawal"}: PKR ${Math.abs(t)}\n`;
    });

    let blob = new Blob([text], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "transaction_history.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
