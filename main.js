const balance = document.getElementById("balance");
const deposits = document.getElementById("deposits");
const expenses = document.getElementById("expenses");
const btnDeposits = document.getElementById("btnDeposits");
const btnHistory = document.getElementById("btnHistory");
const addBudgetSection = document.getElementById("addBudgetSection");
const expensesSection = document.getElementById("expensesSection");
const historySection = document.getElementById("historySection");
const inputAddBudget = document.getElementById("inputAddBudget");
const btnAddBudget = document.getElementById("btnAddBudget");
const inputExpenseBudget = document.getElementById("inputExpenseBudget");
const inputExpenseConcept = document.getElementById("inputExpenseConcept");
const btnAddExpense = document.getElementById("btnAddExpense");
const btnsSection = document.getElementById("btnsSection");
const formDeposits = document.getElementById("formDeposits");
const formExpenses = document.getElementById("formExpenses");
const warning = document.getElementById("warning");

btnsSection.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "btnDeposits":
      if (addBudgetSection.classList.contains("d-none")) {
        addBudgetSection.classList.remove("d-none");
      } else {
        addBudgetSection.classList.add("d-none");
      }
      break;
    case "btnExpense":
      if (expensesSection.classList.contains("d-none")) {
        expensesSection.classList.remove("d-none");
      } else {
        expensesSection.classList.add("d-none");
      }
      break;
    case "btnHistory":
      if (historySection.classList.contains("d-none")) {
        historySection.classList.remove("d-none");
      } else {
        historySection.classList.add("d-none");
      }
      break;
  }
});
formExpenses.addEventListener("submit", (e) => {
    e.preventDefault();
    addBudget("expense")
})
formDeposits.addEventListener("submit", (e) => {
  e.preventDefault();
  addBudget("deposit");
});

const addBudget = (operation) => {
  let amount;
  let total = (Number(balance.innerText))
  if (operation == "deposit") {
    amount = Number(inputAddBudget.value);
    total += amount;
    warning.innerText = total
    balance.innerText = total;
    deposits.innerText = Number(deposits.innerText) + amount;
    historySection.innerHTML += `
        <div class="history-item">
            <p class="history-item-concept d-flex justify-content-around">
                Deposito <span class="history-item-budget">$${total}</span>
            </p>
        </div>
        `;
        
  } else if (operation == "expense") {
    console.log('entrre')
    let concept = inputExpenseConcept.value;
    amount = Number(inputExpenseBudget.value);
    total -= amount
    warning.innerText = total
    balance.innerHTML = total;
    expenses.innerText = Number(expenses.innerText) + amount;
    historySection.innerHTML += `
    <div class="history-item">
        <p class="history-item-concept d-flex justify-content-around">
            ${concept} <span class="history-item-budget">$${amount}</span>
        </p>
    </div>
    `;
    
  }
  inputAddBudget.value = ""
  inputExpenseBudget.value = ""
  inputExpenseConcept.value = ""
};
