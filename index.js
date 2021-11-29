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
  if (window.userWalletAddress) {
    loginButton.innerText = "Logout of MetaMask";
  }
};

async function loginWithMetaMask() {
  let accounts;
  if (window.ethereum.chainId !== "0x38") {
    accounts = await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x38" }],
    });
  } else {
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
  }
  windows.userWalletAddress = accounts[0];
}
