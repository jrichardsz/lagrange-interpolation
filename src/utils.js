import math from "mathjs";

function toFn(expr) {
  return math
    .parse(expr)
    .compile()
    .eval();
}

function exprMultiply(expr, fnVal) {
  return `${expr}*${fnVal}`
}

function divideByExpr(exprTop, exprBottom) {
  return `(${exprTop})/(${exprBottom})`;
}

export { toFn, exprMultiply, divideByExpr }