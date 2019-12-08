

class item {
    constructor(id, name, price, image ){
        this.id=id;
        this.name=name
        this.price=price;
        this.image=image; 

    }

    
    show() {
     { 
        let temp = "";
        temp += "<p>ID: " + this.id + "</p>";
        temp += "<p>Name: " + this.name + "</p>";
        temp += "<p>Price: " + this.price + "</p>";
        temp += "<img src=" + this.image + " />";
        return temp;
     }   

    }
}

export default item;

