import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
 
const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "YOUR_CONTRACT_ADDRESS"
);
 
export default instance;