import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SampleToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const sampleTokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const sampleTokenAddress = {
  11155111: '0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const sampleTokenConfig = {
  address: sampleTokenAddress,
  abi: sampleTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sampleTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useReadSampleToken = /*#__PURE__*/ createUseReadContract({
  abi: sampleTokenAbi,
  address: sampleTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useReadSampleTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: sampleTokenAbi,
  address: sampleTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useReadSampleTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: sampleTokenAbi,
  address: sampleTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useReadSampleTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: sampleTokenAbi,
  address: sampleTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useReadSampleTokenName = /*#__PURE__*/ createUseReadContract({
  abi: sampleTokenAbi,
  address: sampleTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useReadSampleTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: sampleTokenAbi,
  address: sampleTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useReadSampleTokenTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: sampleTokenAbi,
    address: sampleTokenAddress,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sampleTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useWriteSampleToken = /*#__PURE__*/ createUseWriteContract({
  abi: sampleTokenAbi,
  address: sampleTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useWriteSampleTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: sampleTokenAbi,
  address: sampleTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useWriteSampleTokenBurn = /*#__PURE__*/ createUseWriteContract({
  abi: sampleTokenAbi,
  address: sampleTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useWriteSampleTokenMint = /*#__PURE__*/ createUseWriteContract({
  abi: sampleTokenAbi,
  address: sampleTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useWriteSampleTokenTransfer = /*#__PURE__*/ createUseWriteContract(
  {
    abi: sampleTokenAbi,
    address: sampleTokenAddress,
    functionName: 'transfer',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useWriteSampleTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: sampleTokenAbi,
    address: sampleTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sampleTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useSimulateSampleToken = /*#__PURE__*/ createUseSimulateContract({
  abi: sampleTokenAbi,
  address: sampleTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useSimulateSampleTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: sampleTokenAbi,
    address: sampleTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useSimulateSampleTokenBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: sampleTokenAbi,
    address: sampleTokenAddress,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useSimulateSampleTokenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: sampleTokenAbi,
    address: sampleTokenAddress,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useSimulateSampleTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: sampleTokenAbi,
    address: sampleTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link sampleTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useSimulateSampleTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: sampleTokenAbi,
    address: sampleTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link sampleTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useWatchSampleTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: sampleTokenAbi,
    address: sampleTokenAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link sampleTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useWatchSampleTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: sampleTokenAbi,
    address: sampleTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link sampleTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x537b1B023FB9cc45c3a34C9B9E9D9E33B1B3325B)
 */
export const useWatchSampleTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: sampleTokenAbi,
    address: sampleTokenAddress,
    eventName: 'Transfer',
  })
