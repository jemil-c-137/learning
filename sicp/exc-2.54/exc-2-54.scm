(define (equal? a b)
    ((cond ((eq? (eq? ((null? a) true)) (eq? ((null? b) true))) true)
        (eq? (car a) (car b) (equal (cdr a) (cdr b))
        )
        (else false))))