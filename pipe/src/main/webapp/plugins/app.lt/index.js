export default (input1, input2) => {
    return new Promise((res, rej) => {
        try {
            const i = parseFloat(input1);
            const j = parseFloat(input2);

            res(i < j);
        } catch (e) {
            rej(e);
        }
    });
}