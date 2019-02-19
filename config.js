var api = 'http://superblockchain.con-ip.com:35223';
var donationAddress = "btndEaft61oABpYFBZzLohYBEPSRduV3bMa2LX9mEjcmJJjFwFBVD7TPBg45aTQyYjHxfG9DHvCmXfLLMN8ubiJ46GrxcXS5s5";
var blockTargetInterval = 120; // enter the block interval in seconds
var coinUnits = 1000000;  // enter in the amount of atomic units in 1 coin, eg. 1000000 shells = 1 BTNX
var totalSupply =  100000000000000; // enter the total supply in atomic units
var symbol = 'BTNX'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "btnx": [
  ["superblockchain.con-ip.com/btnx", "https://superblockchain.con-ip.com:8888"],
  ["pool.bitnovex.com", "http://pool.bitnovex.com:8133"],

 ]
};

var networkStat2 = {
  "btnx": [
  ["superblockchain.con-ip.com/btnx", "https://superblockchain.con-ip.com:8888"],
	["pool.bitnovex.com", "http://pool.bitnovex.com:8133"]
 ]
};
