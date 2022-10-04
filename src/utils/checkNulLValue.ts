function hasNullValue(text: string) {
    const validate = (text: string) => {
        const regex = new RegExp("^(\w+\S+)$");
        return regex.test(text);
    }
    
    if(
        text.length == 0 || 
        text == '' ||
        validate(text)
    ) {
        return false;
    }

    return true;
}

export {hasNullValue};