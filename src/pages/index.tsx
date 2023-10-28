import Wordle from "./games/wordle";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);

  return (
    <main className="flex flex-1">
      <div className="flex flex-col justify-center items-center">
        {isConnected && (
          <div className="h2 text-center">Your address: {userAddress}</div>
        )}
      </div>
      <Wordle wordsData={""} />
    </main>
  );
}
