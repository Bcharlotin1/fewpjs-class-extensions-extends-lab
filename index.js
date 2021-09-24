// Your code here

class Polygon{
    constructor(array){
        this.array = array
    }

    get countSides(){
        return this.array.length 
    }

    get perimeter(){
        return this.array.reduce()
    }

}

class Triangle extends Polygon{
    get isValid(){
        if (Polygon.countSides === 3){

            let a = Polygon.countSides[0]
            let b = Polygon.countSides[1]
            let c = Polygon.countSides[2]

            if (a + b <= c || a + c <= b || b + c <= a) {
                return true;
            }else{
                return false;
            }
        }else{
            return false
        }
    }
}