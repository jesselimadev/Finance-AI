"use client";

import { Button } from "@/app/_components/ui/button";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import React, { useState } from "react";
import { PencilIcon } from "lucide-react";
import { transaction } from "@prisma/client";
import {} from "zod";

interface EditTransactionButtonProps {
  transaction: transaction;
}

// React.FC -> Especifica explicitamente o tipo do componente
const EditTransactionButton = ({ transaction }: EditTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foregroud"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>

      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
        }}
        transactionId={transaction.id}
      />
    </>
  );
};

export default EditTransactionButton;
