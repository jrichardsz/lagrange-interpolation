import { divideByExpr, exprMultiply } from "./utils";

function generateTopExpression(xNums, iter) {
  return xNums
    .filter((_, index) => index !== iter)
    .map(it => `(x-${it})`)
    .join('*')
}

function generateBottomExpression(xNums, iter) {
  const control = xNums[iter];

  return xNums
    .filter((_, index) => index !== iter)
    .map(it => `(${control}-${it})`)
    .join('*')
}

function createBasisPolynom(xNums, iter) {
  return divideByExpr(
    generateTopExpression(xNums, iter), generateBottomExpression(xNums, iter)
  );
}

function createBasisPolynoms(xNums) {
  return xNums.map((it, index) => createBasisPolynom(xNums, index));
}

function interpolateByLagrange(polynoms, fnVals) {
  const expr = polynoms
    .map((it, index) => exprMultiply(it, fnVals[index]))
    .join('+');
  return `f(x)=${expr}`;
}

export { createBasisPolynoms, interpolateByLagrange };