// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {BasePaymaster, IEntryPoint, PackedUserOperation} from "account-abstraction/core/BasePaymaster.sol";
import {SIG_VALIDATION_SUCCESS} from "account-abstraction/core/Helpers.sol";

contract Paymaster is BasePaymaster {
    constructor(IEntryPoint _entryPoint) BasePaymaster(_entryPoint) {}

    /// @inheritdoc BasePaymaster
    function _validatePaymasterUserOp(PackedUserOperation calldata _userOp, bytes32 _userOpHash, uint256 _maxCost)
        internal
        pure
        override
        returns (bytes memory context, uint256 validationData)
    {
        (_userOp, _userOpHash, _maxCost); // unused value
        return ("", SIG_VALIDATION_SUCCESS);
    }
}
