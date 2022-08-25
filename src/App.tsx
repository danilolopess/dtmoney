import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/globals";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransacionModal() {
    setIsNewTransactionModalOpen(true);
  }
  
  function handleCloseNewTransacionModal() {
    setIsNewTransactionModalOpen(false);

  }
  return (
    <>
      <Header 
      onOpenNewTransactioModal={handleOpenNewTransacionModal} 
       />
      <Dashboard />
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransacionModal}
      />
      <GlobalStyle />
    </>
  );
}
