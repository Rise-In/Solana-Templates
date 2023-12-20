import { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const AppBar: FC = () => {
    return (
        <div className="flex w-full justify-end">
            <WalletMultiButton />
        </div>
    );
};
