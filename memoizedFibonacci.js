var memoizedFibonacci = {
    fibonacci : function(n) {
        if (n in this.memo) {
            return this.memo[n];
        }
        if (n === 0) {
            this.memo[0] = 0;
            return 0;
        }
        if (n === 1) {
            this.memo[1] = 1;
            return 1;
        }
        else {
            this.memo[n-1] = this.fibonacci(n-1);
            this.memo[n-2] = this.fibonacci(n-2);
            return this.fibonacci(n - 1) +
                this.fibonacci(n - 2);
        }
    },
    memo : {}
};

var fibonacci = {
    fibonacci : function(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        else {
            return  this.fibonacci(n - 1) +
                    this.fibonacci(n - 2);
        }
    }
};