const calculateHypo = (perp, base) => {
  let perpSquare = Math.pow(perp, 2);
  let baseSquare = Math.pow(base, 2);

  return Math.sqrt(perpSquare + baseSquare);
};

console.log(calculateHypo(3, 4));
