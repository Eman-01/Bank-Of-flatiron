import React from "react";

const AddButton = ({ newTransaction, handleInputChange, addTransaction }) => {
  return (
    <div className="form">
      <input
        type="date"
        value={newTransaction.date || ""}
        onChange={(e) => handleInputChange("date", e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={newTransaction.description || ""}
        onChange={(e) => handleInputChange("description", e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={newTransaction.category || ""}
        onChange={(e) => handleInputChange("category", e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={newTransaction.amount || ""}
        onChange={(e) => handleInputChange("amount", e.target.value)}
      />
      <br />
      <button className="btn" onClick={addTransaction}>Add Transaction</button>
    </div>
  );
};

export default AddButton;
