```mun
struct Args {
    n: int,
}

fn main() {
    let result = fibonacci(nth());

    // Comments: Mun natively supports bool, float, and int
    let is_true = true;
    let var: float = 0.5;
}

// The order of function definitions doesn't matter
fn fibonacci(foo: Args):int {
    let n = foo.n;
    if n <= 1 {
        n
    } else {
        fibonacci(Args { n: n - 1, }) + fibonacci(Args { n: n - 2, })
    }
}


fn nth(): Args {
    // Mun allows explicit returns
    Args { n: 7 }
}

```
