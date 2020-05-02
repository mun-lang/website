```mun
struct Args {
    n: i32,
}

fn main() {
    let result = fibonacci(nth());

    // Comments: Mun natively supports bool, f32, f64, i8, u8, u128, i128, usize, isize, etc.
    let is_true = true;
    let var = 0.5;
}

// The order of function definitions doesn't matter
fn fibonacci(foo: Args) -> i32 {
    let n = foo.n;
    if n <= 1 {
        n
    } else {
        fibonacci(Args { n: n - 1, }) + fibonacci(Args { n: n - 2, })
    }
}


fn nth() -> Args {
    // Mun allows explicit returns
    Args { n: 7 }
}
```
