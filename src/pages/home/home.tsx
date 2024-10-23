import { dAppContext } from '@/Context/dappContext';
import { useSailsCalls } from '@/app/hooks';
import CardSubasta from '@/components/Card/CardSubasta';
import Sidebar from '@/components/Sidebar/Sidebar';
import { Header } from "@/components/layout";
import { useAccount } from '@gear-js/react-hooks';
import { useContext, useEffect, useState } from 'react';
import "./examples.css";

function Home() {
    const sails = useSailsCalls();
    const [ofertas, setOfertas] = useState(["Card1","Card 2","Card 3"])
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
            <div className='w-full sm:flex box-border '>
                <Sidebar></Sidebar>
                <div className='p-2 flex flex-col text-center mt-5 justify-center lg:ml-80 sm:ml-60 sm:mr-20  w-full md:w-4/5  '>
                    {
                        ofertas.length > 0 ? ofertas.map(element=><CardSubasta></CardSubasta>): <h1 className='w-full bg-blue-400'>lista vacia</h1>
                    }
                </div>
            </div>
        </>
    );
}

export { Home };
            /*<div className='examples-container'>
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
            </div>*/

