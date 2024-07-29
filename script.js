function validarAge(age) {
    if (typeof age !== 'number' || age < 0) {
        throw "the age have to be a positive number";
    } if (age < 18) {
        throw "you're under age and can't have access to this content";
    }
    console.log("access gained! welcome!!");
}

try {
    validarAge(15);

} catch(erro) {
    console.error("theres an error:", erro);
}
