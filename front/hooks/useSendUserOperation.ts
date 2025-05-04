"use client";

import { useState } from "react";
import type { Chain, Client, Transport } from "viem";
import {
    buildUserOperation,
    type SendUserOperationParameters,
    SmartContractAccount,
    BaseSmartAccountClient,
    GetEntryPointFromAccount,
    resolveProperties,
    deepHexlify,
    SendUserOperationResult,
    UserOperationRequest,
} from "@aa-sdk/core";
import { UseSmartAccountClientResult } from "@account-kit/react";
import { SupportedAccounts } from "@account-kit/core";

export function useSendUserOperation<
    TAccount extends SupportedAccounts = SupportedAccounts,
    TEntryPointVersion extends GetEntryPointFromAccount<TAccount> = GetEntryPointFromAccount<TAccount>
>(

    client: UseSmartAccountClientResult["client"] | undefined

) {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const sendUserOperation = async (args: SendUserOperationParameters<TAccount>): Promise<SendUserOperationResult<TEntryPointVersion>> => {
        if (!client) {
            throw new Error("client must be defined");
        }
        const { uo, context, overrides, account = client.account } = args

        setIsPending(true);

        const uoStruct = await buildUserOperation(client, {
            uo,
            account,
            context,
            overrides
        })

        const entryPoint = account.getEntryPoint();

        if (!isBaseSmartAccountClient(client)) {
            throw new Error("client isn't smartAccountClient")
        }

        if (!client.chain) {
            throw new Error("chain must be defined");
        }

        const request = await client.middleware.signUserOperation(uoStruct, {
            account,
            context,
            overrides,
            client,
        }).then(resolveProperties)
            .then(deepHexlify) as UserOperationRequest<TEntryPointVersion>;

        const hash = await client.request({
            method: "eth_sendUserOperation",
            params: [request, entryPoint.address],
        })

        const txnHash = await client
            .waitForUserOperationTransaction({ hash })
            .then((txnHash) => {
                setIsPending(false);
                return txnHash
            })
            .catch((e) => {
                setIsPending(false);
                setError(e)
                throw new Error(`Failed to find User Operation: ${e.message}`);
            });

        return {
            hash: txnHash,
            request
        };
    }


    return {
        sendUserOperation,
        isSendingUserOperation: isPending,
        error,
    };
}

export function isBaseSmartAccountClient<
    TTransport extends Transport = Transport,
    TChain extends Chain | undefined = Chain | undefined,
    TAccount extends SmartContractAccount | undefined =
    | SmartContractAccount
    | undefined
>(
    client: Client<TTransport, TChain, TAccount>
): client is BaseSmartAccountClient<TTransport, TChain, TAccount> {
    return client && "middleware" in client;
}
