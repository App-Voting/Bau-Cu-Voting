const Web3 = require('web3')
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();
const abiToken = require('../artifacts/contracts/TBPToken.sol/TBPToken.json');
const abi = require('../artifacts/contracts/TheBestPhotographyVoting.sol/TheBestPhotography.json');

// for producting
const privateKeys = [
    process.env.ACCOUNT
]
let provider = new HDWalletProvider(
    privateKeys,
    `https://klaytn-baobab.blockpi.network/v1/rpc/public`,
    0,
    1
);
const web3 = new Web3(provider);

async function mint() {
    try {
        const contract = new web3.eth.Contract(
            abiToken.abi,
            "0x20fe7C3d1b76761E4A9D9ad244443c8985291645",
        )
        const tx = await contract.methods.mint("0x1916123a45D86719f66A274039bFe5Ef38d85625", "999999999999999999999999999");
        await tx.estimateGas({
            from: "0xdEa238c24790b99BA33F48E4516307D4FFa1Cf1a"
        });
        await tx.send({
            from: '0xdEa238c24790b99BA33F48E4516307D4FFa1Cf1a'
        })
    } catch (e) {
        console.log(e);
    }
}

async function checkBlance() {
    try {
        const contract = new web3.eth.Contract(
            abiToken.abi,
            "0x20fe7C3d1b76761E4A9D9ad244443c8985291645",
        )
        const tx = await contract.methods.balanceOf("0xdEa238c24790b99BA33F48E4516307D4FFa1Cf1a").call();
        console.log(tx);
    } catch (e) {
        console.log(e);
    }
}

async function getStatus() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0x1916123a45D86719f66A274039bFe5Ef38d85625",
        )
        const tx = await contract.methods.imageId("1").call();
        console.log(tx);
    } catch (e) {
        console.log(e);
    }
}

async function approve() {
    try {
        const contract = new web3.eth.Contract(
            abiToken.abi,
            "0x20fe7C3d1b76761E4A9D9ad244443c8985291645",
        )
        const tx = await contract.methods.approve("0x1916123a45D86719f66A274039bFe5Ef38d85625", "999999999999999999999999999999");
        await tx.estimateGas({
            from: "0xdEa238c24790b99BA33F48E4516307D4FFa1Cf1a",
        });
        await tx.send({
            from: '0xdEa238c24790b99BA33F48E4516307D4FFa1Cf1a'
        })
    } catch (e) {
        console.log(e);
    }
}


async function updateTimeVoting() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0x1916123a45D86719f66A274039bFe5Ef38d85625",
        )
        const tx = await contract.methods.updateTimeVoting("", "");
        await tx.estimateGas({
            from: "0xdEa238c24790b99BA33F48E4516307D4FFa1Cf1a",
        });
        await tx.send({
            from: '0xdEa238c24790b99BA33F48E4516307D4FFa1Cf1a'
        })
    } catch (e) {
        console.log(e);
    }
}

async function vote() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0x1916123a45D86719f66A274039bFe5Ef38d85625",
        )
        const tx = await contract.methods.vote("100000000000000000", "2");
        await tx.estimateGas({
            from: "0xdEa238c24790b99BA33F48E4516307D4FFa1Cf1a",
        });
        await tx.send({
            from: '0xdEa238c24790b99BA33F48E4516307D4FFa1Cf1a'
        })
    } catch (e) {
        console.log(e);
    }
}

async function withdraw() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0x1916123a45D86719f66A274039bFe5Ef38d85625",
        )
        const tx = await contract.methods.withdraw();
        await tx.estimateGas({
            from: "0xdEa238c24790b99BA33F48E4516307D4FFa1Cf1a",
        });
        await tx.send({
            from: '0xdEa238c24790b99BA33F48E4516307D4FFa1Cf1a'
        })
    } catch (e) {
        console.log(e);
    }
}

// mint()
checkBlance()
// approve()
// vote()
// updateTimeVoting()
// withdraw()
// getStatus()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })