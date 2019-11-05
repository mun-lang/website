```mun
fn main() {
    let result = fibonacci(nth());

    // Comments: Mun natively supports bool, float, and int
    let is_true = true;
    let var: float = 0.5;
}

// The order of function definitions doesn't matter
fn fibonacci(n:int):int {
    // If-else statements are also expressions
    let fib = if n <= 1 {
        n
    } else {
        fibonacci(n-1) + fibonacci(n-2)
    }

    // Mun allows implicit returns
    fib
}

fn nth(): int {
   // Mun allows explicit returns
   return 5;
}
```
