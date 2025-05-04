"use client";
import {
  useAuthModal,
  useLogout,
  useSignerStatus,
  useSmartAccountClient,
  useUser,
} from "@account-kit/react";
import { encodeFunctionData, parseEther } from "viem";
import { sampleTokenAbi } from "@/types/abi";
import { useSendUserOperation } from "@/hooks/useSendUserOperation";

export default function Home() {
  const user = useUser();
  const { openAuthModal } = useAuthModal();
  const signerStatus = useSignerStatus();
  const { logout } = useLogout();

  const { client } = useSmartAccountClient({});
  const { sendUserOperation, isSendingUserOperation, error } = useSendUserOperation(client);
  console.error(error)

  const receiver = "0x13EF008B76FAf830623c514D82A78878DB770440"
  const value = "100"

  const callData = encodeFunctionData({
    abi: sampleTokenAbi,
    functionName: 'mint',
    args: [receiver, parseEther(value)]
  })

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4 justify-center text-center">
      {signerStatus.isInitializing ? (
        <>Loading...</>
      ) : user ? (
        <div className="flex flex-col gap-2 p-2">
          <p className="text-xl font-bold">Success!</p>
          Logged in as {user.email ?? "anon"}.
          <button className="btn btn-primary mt-6" onClick={() => logout()}>
            Log out
          </button>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={openAuthModal}>
          Login
        </button>
      )}

      {/* SendUserOperation */}
      <button
        onClick={() =>
          sendUserOperation({
            uo: {
              target: process.env.NEXT_PUBLIC_SAMPLE_TOKEN_ADDR! as `0x${string}`,
              data: callData as `0x${string}`,
              value: BigInt(0),
            }
          })
        }
        disabled={isSendingUserOperation}
      >
        {isSendingUserOperation ? "Sending..." : "Send UserOperation"}
      </button>
    </main>
  );
}
