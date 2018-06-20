class Item {
    public id: number;
    public updatedAt: number;
    public createdAt: number;
    constructor(data: Partial<Item>) {
        Object.assign(this, data);
    }
    write(): void {
        console.log(this.id);
    }
}

const item = new Item({
    id: 0, 
    write: ()=> {}
});
