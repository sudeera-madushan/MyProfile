export class OrderDetail{
    constructor(itemCode,name,price,qty,total) {
        this._itemCode=itemCode;
        this._name=name;
        this._price=price;
        this._qty=qty;
        this._total=total;
    }


    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }
}