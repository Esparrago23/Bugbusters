import { HStack } from "@chakra-ui/react";
import { useAccount } from "@gear-js/react-hooks";
import { Button } from "@gear-js/ui";
import { useState } from "react";
import { AccountButton } from "../account-button";
import { AccountsModal } from "../accounts-modal";
import { Balance } from "../balance";
const MultiWallet = () => {
  const { account, isAccountReady } = useAccount();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false)
    
  }

  return (
    <HStack>
      <Balance />
      {isAccountReady &&
        (account ? (
          <AccountButton name={account.meta.name} address={account.address} onClick={openModal}/>
        ) : (
          <Button text="Login" color="lightGreen" onClick={openModal} />
        ))}

      {isModalOpen && <AccountsModal close={closeModal} />}
    </HStack>
  );
};

export { MultiWallet };

