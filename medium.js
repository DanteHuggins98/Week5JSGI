//Medium
var sharePizza = cutPizzaSlices(8);
    function cutPizzaSlices(a){
        return function sharePizza(b){
            return `Each person gets ${a / b} slices of pizza.`
        }
    }