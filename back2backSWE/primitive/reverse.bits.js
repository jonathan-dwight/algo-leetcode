const reverseBits = (input) => {
    // binary is always base 2;
    // 11 base 10 = 1011 base 2 // reverse is 1101;

    // input.toString(2) - will create binary
    // intergers are stored in 8 bit representation

    // check last digit of input
    // 0 = false 1 = true

    // want to shift input tot he right
    // what to shift output to the left

    let output = 0;

    while (input !== 0) {
        output = output << 1;
        if ((input & 1) == 1) {
            // oring out means one or the other is one or zero
            // xor means that you are looking for exactly one
            output = output | 1;
        }
        input = input >> 1;
    }
    return output;
};
