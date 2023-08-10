"use client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

interface IMetamaskAuthContext {
  address: string;
  setAddress: (address: string) => void;
  provider: any;
  setProvider: (provider: any) => void;
  signer: any;
  setSigner: (signer: any) => void;
  chainId: number;
  setChainId: (chainId: number) => void;
  network: string;
  setNetwork: (network: string) => void;
  connected: boolean;
  setConnected: (connected: boolean) => void;
  connect: () => void;
  disconnect: () => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const MetamaskAuthContext = createContext<IMetamaskAuthContext>({
  address: "",
  setAddress: () => {},
  provider: null,
  setProvider: () => {},
  signer: null,
  setSigner: () => {},
  chainId: 0,
  setChainId: () => {},
  network: "",
  setNetwork: () => {},
  connected: false,
  setConnected: () => {},
  connect: () => {},
  disconnect: () => {},
  isLoading: true,
  setIsLoading: () => {}
});

export const MetamaskAuthProvider: React.FC<PropsWithChildren<{}>> = ({
  children
}) => {
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState<any>(null);
  const [signer, setSigner] = useState<any>(null);
  const [chainId, setChainId] = useState(0);
  const [network, setNetwork] = useState("");
  const [connected, setConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const connect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        setAddress(accounts[0]);
        setProvider(new ethers.BrowserProvider(window.ethereum));
        setSigner(new ethers.BrowserProvider(window.ethereum).getSigner());
        setChainId(window.ethereum.chainId);
        setNetwork(window.ethereum.networkVersion);
        setConnected(true);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.error("Metamask not installed");
      setIsLoading(false);
    }
  };

  const disconnect = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }]
      });
      setConnected(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      connect();
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length === 0) {
          setAddress("");
          setProvider(null);
          setSigner(null);
          setChainId(0);
          setNetwork("");
          setConnected(false);
        } else {
          setAddress(accounts[0]);
          setProvider(new ethers.BrowserProvider(window.ethereum));
          setSigner(new ethers.BrowserProvider(window.ethereum).getSigner());
          setChainId(window.ethereum.chainId);
          setNetwork(window.ethereum.networkVersion);
          setConnected(true);
        }
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <MetamaskAuthContext.Provider
      value={{
        address,
        setAddress,
        provider,
        setProvider,
        signer,
        setSigner,
        chainId,
        setChainId,
        network,
        setNetwork,
        connected,
        setConnected,
        connect,
        disconnect,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </MetamaskAuthContext.Provider>
  );
};

// define window ethereum
declare global {
  interface Window {
    ethereum: any;
  }
}

export const useMetamaskAuth = () => {
  return useContext(MetamaskAuthContext);
};

// HOC
// if loading metamask auth
// show loading... text
// if not loading and no metamask auth,
// redirect to home

export const withMetamaskAuth = (Component: React.FC) => {
  return function HOC() {
    const { isLoading, connected } = useMetamaskAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !connected) {
        router.push("/");
      }
    }, [isLoading, connected, router]);

    if (isLoading) {
      return (
        <div className="p-12 flex gap-4 w-full justify-center items-center">
          <p className="text-primary">Connecting To MetaMask</p>;
          <Spinner />
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />
        </div>
      );
    }

    if (!connected) {
      return <p className="text-primary">Redirecting...</p>;
    }

    return <Component />;
  };
};
