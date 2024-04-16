“Ben Bitdiddle has invented a test
to determine whether the interpreter he is faced with is using
applicative-order evaluation or normal-order evaluation.  He defines the
following two procedures:

`
(define (p) (p))
`
`
(define (test x y) 
  (if (= x 0) 
      0 
      y))
`

Then he evaluates the expression
`
(test 0 (p))
`

What behavior will Ben observe with an interpreter that uses applicative-order
evaluation?  What behavior will he observe with an interpreter that uses
normal-order evaluation?  Explain your answer.  (Assume that the evaluation
rule for the special form if is the same whether the interpreter is
using normal or applicative order: The predicate expression is evaluated first,
and the result determines whether to evaluate the consequent or the alternative
expression.)

#### Answer

With interpreter that uses applicative-order evaluation we will have error.
Interpreter will start evaluating test substituting parameters with given arguments (x = 0, y = p). It can successfully substitute x with 0, but when it comes to y interpreter will face a problem, because p its a procedure and as return value has itself - p, so evaluation will end up in infinite loop.
With normal-order evaluation everything will work fine. This type of evaluation also called lazy, so interpreter compute values when they needed and substitute them also if needed. So we have 0 given for x, so interpreter will substitute x with 0 when reaches if statement and because this if statement will evaluate to true, program will return 0 and y is no longer needed, so interpreter will not compute which value y holds. Program will run successfully. 