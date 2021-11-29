// window.addEventListener("DOMContentLoaded", (event) => {
//   toggleButton();
// });

const loginButton = document.getElementById("loginButton");
window.userWalletAddress = null;
const toggleButton = () => {
  if (!window.ethereum) {
    alert("MetaMask is not installed!");
  }

  loginWithMetaMask();
};

async function loginWithMetaMask() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
}
