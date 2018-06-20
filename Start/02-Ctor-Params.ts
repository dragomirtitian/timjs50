class Item {
    
    public id: number;
    public updatedAt: number;
    public createdAt: number;

    constructor(
        id: number,
        updatedAt: number,
        createdAt: number,
    ) {
        this.id = id; 
        this.updatedAt = updatedAt; 
        this.createdAt = createdAt; 
    }
    write(): void {
        console.log(this.id);
    }
}

const item = new Item(1, 1, 1);
