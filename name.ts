interface Names {
    fullName: string,
    xd: number
}


class Names {
    constructor(name: string, secName: string, nextName: string) {
        this.fullName = name + ' ' + nextName + ' ' + secName
        this.xd = 2
    }
    get getfullName() {
        return this.fullName
    }
}


function add(a: number, b: number): any {
    return a + b
}

add(2, 5)