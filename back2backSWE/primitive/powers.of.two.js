const powerOfTwo = (input) => {
    // can confinm this if there is exactly one bit turned on the binary
    // bitwise & is checking if both bits are one
    // subtrating the value because it will equal zero if only one bit is turned on
    return !!input && (input & (input - 1)) == 0;
};
