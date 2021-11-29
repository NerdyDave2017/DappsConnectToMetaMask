// window.addEventListener("DOMContentLoaded", (event) => {
//   toggleButton();
// });

const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", () => toggleButton());

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
    await ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x38",
          blockExplorerUrls: ["https://bscscan.com"],
          chainName: "BINANCE SMART CHAIN",
          iconUrls: "",
          nativeCurrency: {
            name: "BINANCE",
            symbol: "BNB",
            decimals: 18,
          },
          rpcUrls: ["https://bsc-dataseed.binance.org/"],
        },
      ],
    });
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
  } else {
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
  }
  window.userWalletAddress = accounts[0];
}

// {
//   chainId: string;
//   blockExplorerUrls?: string[];
//   chainName?: string;
//   iconUrls?: string[];
//   nativeCurrency?: {
//     name: string;
//     symbol: string;
//     decimals: number;
//   };
//   rpcUrls?: string[];
// }
