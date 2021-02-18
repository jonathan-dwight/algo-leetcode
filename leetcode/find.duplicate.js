var findDuplicate = function (nums) {
    let tortoise = nums[0];
    let hare = nums[0];

    while (true) {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];

        if (tortoise === hare) {
            break;
        }
    }

    let ptr1 = nums[0];
    let ptr2 = tortoise;

    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }

    return ptr1;
};
