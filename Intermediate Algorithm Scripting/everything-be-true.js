function truthCheck(collection, pre) {
  console.log(Boolean(collection[0][pre]))
  return collection.every(object => object [pre]);
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
