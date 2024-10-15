function threeDimensionalArray() {
  const inventory = [
    [
      ["MacBook", 10],
      ["Surface", 12],
      ["Chromebook", 15],
    ],
    [
      ["iPhone", 20],
      ["Samsung", 30],
      ["LG", 25],
    ],
    [
      ["iPad", 5],
      ["Android", 15],
      ["Kindle", 10],
    ],
  ];

  console.log("Quantity of MacBooks:", inventory[0][0][1]);

  console.log("Quanty of Ipads:", inventory[2][0][1]);

  console.log("Quantity of Androids:", inventory[2][1][1]);
}
