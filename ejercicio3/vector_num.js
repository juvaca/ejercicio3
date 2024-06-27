function validarVector(vector) {
    for (let i = 1; i < vector.length; i++) {
        if (vector[i] < vector[i - 1]) {
            return false;
        }
    }
    return true;
}
