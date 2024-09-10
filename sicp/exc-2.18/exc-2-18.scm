(define (reverse2 list)
    (if (null? list)
        (car list)
        (cons (car (reverse2 (cdr list)) (list)))))


Excerpt From
Structure and Interpretation of Computer Programs, Second Edition
Harold Abelson, Gerald Jay Sussman, Julie Sussman
This material may be protected by copyright.