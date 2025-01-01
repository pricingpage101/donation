// Function to copy account number to clipboard
document.getElementById("copy-btn").addEventListener("click", function () {
  const accountNumber = "2032202001590";
  navigator.clipboard.writeText(accountNumber).then(() => {
    alert("Account number copied to clipboard!");
  }).catch((err) => {
    alert("Failed to copy account number.");
  });
});
