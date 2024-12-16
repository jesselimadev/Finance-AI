"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { ArrowDownUpIcon } from "lucide-react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar transação
        <ArrowDownUpIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
