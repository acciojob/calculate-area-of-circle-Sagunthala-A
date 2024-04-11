 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
           // A = πr 2(area of circle)
			 if(radius > 0){
				 let pi = Math.PI;
				 let rSq = Math.pow(radius,2);
				 let area =(pi*rSq).toFixed(2);
				 
				 alert("The area of the circle with radius "+ radius+" is "+area)
			 }
}
calculateArea();
