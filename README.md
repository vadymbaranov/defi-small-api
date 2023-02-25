# defi-small-api

Technologies, frameworks and libraries used:
- Node,
- Express.js
- TypeScripts,
- web3.js,
- node-cron.

To use this repo locally you need to:
    - Fork the repo
    - Download the repo with git clone
    - Navigate to the folder you cloned the repo to
    - Make sure you have Node v14 installed and active
    - Run `npm install` or `npm i` in your terminal through VS Code or any other terminal, just make sure you are currently in the repo folder
    - Run `npx ts-node src/server.ts` to start the server
    - Run `npm start` - the project will start in dev mode with nodemon watching any changes

By default server starts at `port = 5000` but you can change this behaviour and enter your port of choice in `src/server.ts` at line 7 in variable `PORT`.

After server starts you will see two messages in console. First one is: `Server is running on http://localhost:5000(by default)`. This is to verify that server started correctly.
Second one is: `Latest Ethereum Block is {number}`. And this is to verify that you are connected to Ethereum network.

This server application has one GET endpoint at `/coins/balance/:address`.

Use `Postman` (you will need desktop application as this project runs only locally) navigate to a new query tab. Set the request type to `GET` and server address at `http://localhost:5000/coins/balance/{wallet_address}`.

Under `{wallet_address}` you need to provide a valid Ethereum network wallet address.

There are two wallet addresses provided for test purposes.

First one is the one provided with the test task: `0xA145ac099E3d2e9781C9c848249E2e6b256b030D`.
Second one is the whale address from Etherscan.io:
`0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8`.

Both of them can be found in `src/config/config.ts` file along with other `web3.js` configuration settings. Additionally in `src/config` folder you can find two JSON files.
`coins-list-unsorted.json` - is the coin list obtained from coingecko address provided in test task description.
`ERC20-coins.json` - is the filtered with the help of `getERC20Tokens.ts` function located in `src/helpers` to only Ethereum tokens, coin list from the main list. Additionally this file contains manually added missing smart-contracts in order to retrieve all balances from the wallet provided in test task (referred to as First wallet above).

Please be advised that running the function located in `getERC20Tokens.ts` will overwrite the `ERC20-coins.json` file which will lead to the manual data deletion.

