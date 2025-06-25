function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const Teste = debounce((texto) => {
    console.log("Buscando por:", texto);
}, 1000);

Teste("a");
Teste("ab");
Teste("abc");