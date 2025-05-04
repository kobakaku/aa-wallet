// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {Test} from "forge-std/Test.sol";
import {IEntryPoint, PackedUserOperation} from "account-abstraction/core/BasePaymaster.sol";
import {SIG_VALIDATION_SUCCESS} from "account-abstraction/core/Helpers.sol";
import {Paymaster} from "../src/Paymaster.sol";

contract PaymasterTest is Test {
    Paymaster paymaster;
    address entryPoint = address(0x123);

    function setUp() public {
        paymaster = new Paymaster(IEntryPoint(entryPoint));
    }

    function test_validatePaymasterUserOp() public {
        PackedUserOperation memory userOp;
        bytes32 userOpHash = bytes32(0);
        uint256 maxCost = 1000;

        // validatePaymasterUserOpを呼び出す
        (bytes memory context, uint256 validationData) = paymaster.validatePaymasterUserOp(userOp, userOpHash, maxCost);

        // SIG_VALIDATION_SUCCESSが返されることを確認
        assertEq(validationData, SIG_VALIDATION_SUCCESS);
        assertEq(context.length, 0); // contextは空であることを確認
    }
}
