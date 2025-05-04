// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {Script, console} from "forge-std/Script.sol";
import {EntryPoint} from "account-abstraction/core/EntryPoint.sol";
import {IEntryPoint} from "account-abstraction/interfaces/IEntryPoint.sol";
import {SimpleAccountFactory} from "account-abstraction/accounts/SimpleAccountFactory.sol";
import {Paymaster} from "../src/Paymaster.sol";
import {SampleToken} from "../src/SampleToken.sol";

contract Deploy is Script {
    function run() public {
        uint256 privateKey = vm.envUint("PRIVATE_KEY");
        vm.addr(privateKey);
        console.log("Signer address:", vm.addr(privateKey));
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        EntryPoint entryPoint = new EntryPoint();
        SimpleAccountFactory simpleAccountFactory = new SimpleAccountFactory(IEntryPoint(entryPoint));
        Paymaster payMaster = new Paymaster(IEntryPoint(entryPoint));

        console.log("Deployed EntryPoint Contract: ", address(entryPoint));
        console.log("Deployed SimpleAccountFactory Contract: ", address(simpleAccountFactory));
        console.log("Deployed Paymaster Contract: ", address(payMaster));

        SampleToken sampleToken = new SampleToken();
        console.log("Sample Token Contract: ", address(sampleToken));

        vm.stopBroadcast();
    }
}
