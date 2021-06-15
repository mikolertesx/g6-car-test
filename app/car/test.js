const Car = require("./car.js");

const FordSubaru = new Car({
	color: "Blue",
	model: "Subaru",
	year: 2008,
	price: 850_000,
	kmPerLt: 22.3,
	tank: 80,
	company: "Ford",
});

test("Car is the correct starting price.", () => {
	expect(FordSubaru.price).toBe(850_000);
});

test("Car is made by Ford", () => {
	expect(FordSubaru.company).toBe("Ford");
});

test("car color to equal red", () => {
	expect(FordSubaru.color).toBe("Blue");
});

test("car current gas to equal zero", () => {
	expect(FordSubaru.currentGas()).toBe(0);
});

test("adding gas to car", () => {
	expect(FordSubaru.availableGasSpace()).toBeGreaterThanOrEqual(0);
	FordSubaru.addGas(80);
	expect(FordSubaru.currentGas()).toBeLessThanOrEqual(FordSubaru.tank);
});

test("car km per lt to equal", () => {
	expect(FordSubaru.kmPerLt).toBe(22.3);
});

test("move car 5,000 kms", () => {
	const kmBefore = FordSubaru.kms;
	FordSubaru.move(5000);
	expect(FordSubaru.currentGas()).toBeLessThanOrEqual(FordSubaru.tank);
	expect(FordSubaru.currentGas()).toBe(0);
	expect(FordSubaru.kms).toBeGreaterThan(kmBefore);
});

test("move car 5 kms", () => {
	const kmBefore = FordSubaru.kms;
	FordSubaru.move(5);
	expect(FordSubaru.kms).toBe(kmBefore);
});

test("car current sale price is lower", () => {
	expect(FordSubaru.currentValue).toBeLessThan(850_000);
});
