import { dAppContext } from '@/Context/dappContext';
import { useSailsCalls } from '@/app/hooks';
import {
    NormalButtons,
    SignlessButtons,
    VoucherButtons,
} from '@/components/ExampleComponents';
import { Header } from "@/components/layout";
import { Button } from '@/components/ui/button';
import { useAccount } from '@gear-js/react-hooks';
import { useContext, useEffect, useState } from 'react';
import "./examples.css";

function Home() {
    const sails = useSailsCalls();
    const { account } = useAccount();
    const { 
        currentVoucherId,
        setCurrentVoucherId,
        setSignlessAccount
    } = useContext(dAppContext);
    const { isAccountReady } = useAccount();

    const [pageSignlessMode, setPageSignlessMode] = useState(false);
    const [voucherModeInPolkadotAccount, setVoucherModeInPolkadotAccount] = useState(false);
    const [contractState, setContractState] = useState("");

    useEffect(() => {
        if (!account) {
            setPageSignlessMode(true);
        } else {
            setPageSignlessMode(false);
        }
        if (setCurrentVoucherId) setCurrentVoucherId(null);
    }, [account, setCurrentVoucherId]);

    return (
        <>
            <Header isAccountVisible={isAccountReady} />
            <div className='examples-container'>
                <div className='examples'>
                    <div className='information'>
                        <p>
                            signless mode: {pageSignlessMode ? "Activated" : "Disabled"}
                        </p>
                        <p>
                            voucher active: {currentVoucherId ? "true" : "false"}
                        </p>
                        <p style={{ maxWidth: "300px" }}>
                            state: {contractState}
                        </p>
                    </div>
                    <Button onClick={async () => {
                        if (!sails) {
                            console.log('No está lista el account o sails');
                            return;
                        }

                        const response = await sails.query('QueryService/LastCaller');
                        setContractState("Last who called: " + JSON.stringify(response));
                    }}>
                        Read State
                    </Button>
                    <Button onClick={() => {
                        if (setCurrentVoucherId) setCurrentVoucherId(null);
                        if (setSignlessAccount) setSignlessAccount(null);
                        setPageSignlessMode(!pageSignlessMode);
                    }}>
                        Toggle Signless Mode
                    </Button>
                    {
                        !pageSignlessMode && (
                            <Button onClick={() => {
                                setVoucherModeInPolkadotAccount(!voucherModeInPolkadotAccount);
                            }}>
                                Toggle Voucher Mode
                            </Button>
                        )
                    }

                    {
                        !pageSignlessMode && !voucherModeInPolkadotAccount && (
                            <NormalButtons />
                        )
                    }

                    {
                        pageSignlessMode && <SignlessButtons />
                    }

                    {
                        !pageSignlessMode && voucherModeInPolkadotAccount && (
                            <VoucherButtons />
                        )
                    }
                </div>
            </div>
        </>
    );
}

export { Home };

