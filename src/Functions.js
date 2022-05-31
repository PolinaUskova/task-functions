export function higherThan(num) {
    return function (value) {
        return value > num;
    };
}

export function hasSubstring(substr) {
    return function (value) {
        return value.includes(substr);
    };
}

export function multiply(num) {
    return function (num1) {
        return num * num1;
    };
}
