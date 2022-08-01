export const validatePhone = (val) => {
    const remove = val
        .replace(/\D/g, "")
        .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);

    const mask = remove
        .slice(1, 5)
        .filter((item) => item !== "")
        .join("-");
    return mask;
};