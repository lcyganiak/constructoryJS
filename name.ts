interface Names {
    fullName: string,
}


class Names implements Names {
    constructor(name: string, secName: string, nextName: string) {
        this.fullName = name + ' ' + nextName + ' ' + secName
    }
    get getfullName() {
        return this.fullName
    }
}


function add(a: number, b: number): number {
    return a + b
}

add(2, 5)