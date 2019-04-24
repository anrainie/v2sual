export default (input1, input2) => {
    return new Promise(async (res, rej) => {
        let result = false;
        try {
            const result1 = await input1;
            const result2 = await input1;

            res(result1 && result2);
        } catch (e) {
            res(result);
        }
    });
}