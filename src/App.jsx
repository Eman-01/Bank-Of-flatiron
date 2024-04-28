import React, { useState } from 'react';
import TransactionList from './components/TransactionList';
import SearchBar from './components/SearchBar';
import AddButton from './components/Addbutton';
import './App.css'
const App = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-09-23', description: 'Groceries', category: 'Food', amount: 50 },
    { id: 2, date: '2024-10-24', description: 'Gas', category: 'Fuel', amount: 30 },
    { id: 3, date: '2024-11-25', description: 'Dinner', category: 'Food', amount: 40 }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTransaction, setNewTransaction] = useState({});

  const handleSearch = term => {
    setSearchTerm(term);
  };

  const addTransaction = () => {
    const newId = transactions.length + 1;
    setTransactions([...transactions, { id: newId, ...newTransaction }]);
    setNewTransaction({});
  };

  const handleInputChange = (key, value) => {
    setNewTransaction({ ...newTransaction, [key]: value });
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className='header'>The Royal Bank Of Flatiron</h1>
      <SearchBar handleSearch={handleSearch} />
       <AddButton
        newTransaction={newTransaction}
        handleInputChange={handleInputChange}
        addTransaction={addTransaction}
      />
      <TransactionList transactions={filteredTransactions} />
     
    </div>
  );
};

export default App;