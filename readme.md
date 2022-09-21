We have two classes, a transaction class and an account class. A transaction cannot be created without belonging to a parent account.

Each instance of the transaction class has an attribute for the day of the transaction, the amount deposited, the amount withdrawn

Each instance of the account class is a ledger with an attribute tracking the overall balance, and storing all the transactions

Tests

Transaction class

1. A transaction can be created and a deposit amount checked
2. One undefined argument (deposit or withdrawal amount) is fine
3. Two undefined arguments throws helpful error message

Account class

1. initially, there should be an account, with balance 0
2. after an deposit of 100, there should be 100 in the account
3. after one transaction i can print a statement and it shows the date of the transaction, the money moving and balance
4. i can withdraw 50 and it should show a balance of 50
5. after 2 transactions i can print a statement showing both transactions and balances
6.
