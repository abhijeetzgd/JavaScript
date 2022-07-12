let shape = 'rectangle',r=10,l=10,b=5,pi=3.14;

switch(shape){

    case 'circle':
        console.log(`Area of cicle =${pi*r*r}`);
        break;

    case 'rectangle':
        console.log(`Area of rectangle =${l*b}`);
        break;

    case 'square':
        console.log(`Area of square =${l*b}`);
        break;
    
    default:
        console.log(`enter correct choice`);
    
    }
