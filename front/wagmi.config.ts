import dotenv from 'dotenv';
import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { sepolia } from 'wagmi/chains'

dotenv.config();

export default defineConfig({
    out: 'types/abi.ts',
    contracts: [],
    plugins: [
        etherscan({
            apiKey: process.env.ETHERSCAN_API_KEY!,
            chainId: sepolia.id,
            contracts: [
                {
                    name: 'SampleToken',
                    address: {
                        [sepolia.id]: process.env.SAMPLE_TOKEN_ADDR! as `0x${string}`,
                    },
                },
            ],
        }),
        react(),
    ],
})