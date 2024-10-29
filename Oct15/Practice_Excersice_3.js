function threeDimensionalArray() {
  const inventory = [
    [
      ["MacBook", 10],
      ["Surface", 12],
      ["Chromebook", 15],
      ["Dell XPS", 8],
      ["Lenovo ThinkPad", 14],
    ],
    [
      ["iPhone", 20],
      ["Samsung", 30],
      ["LG", 25],
      ["Google Pixel", 18],
      ["OnePlus", 22],
    ],
    [
      ["iPad", 5],
      ["Android", 15],
      ["Kindle", 10],
      ["Samsung Galaxy Tab", 12],
      ["Microsoft Surface Go", 7],
    ],
    [
      ["AirPods", 40],
      ["Galaxy Buds", 35],
      ["Jabra Elite", 28],
    ],
  ];
  console.log(inventory);

  console.log("Quantity of MacBooks:", inventory[0][0][1]);

  console.log("Quanty of Ipads:", inventory[2][0][1]);

  console.log("Quantity of Androids:", inventory[2][1][1]);
}
