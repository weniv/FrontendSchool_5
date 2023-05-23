class TextManager {
    constructor() {
        this.value = { data: "hello lions!" }
    }

    getValue() {
        return this.value.data
    }

    setValue(newValue) {
        this.value = newValue
    }
}