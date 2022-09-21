// a transaction can be created with an amount of money and the date it's created
const Transaction = require("../lib/transaction");

describe("Transaction", () => {
	it("a deposit transaction object is created and the amount is checked", () => {
		var dep1 = new Transaction(100, 0);
		dep1.date = "9/21/2022";
		expect(dep1.deposit).toEqual(100);
		expect(dep1.date).toEqual("9/21/2022");
		done();
	});
});
