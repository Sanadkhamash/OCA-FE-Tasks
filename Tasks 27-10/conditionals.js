/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  let x,y;
    if(x>y){
        console.log(x);
    }
    else if(x<y){
        console.log(y);
    }

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  let x,y,z;
  (x*y*z)<0 ? console.log(`The sign is -`) : console.log(`The sign is +`);


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
let arr = [0,-1,4];
function sortData(arr){
    let counter = 0;
    let n =arr.length
    for(i=0;i<n;i++){
    if(arr[i]>arr[i+1]){
        counter++;
    }
    }
    if(!(counter == n-1)){
        for( j=0;j<n;j++){
            for( let i =0; i<n-j;i++){
                if(arr[i]<arr[i+1]){
                    temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                }
            }
        }
    }
}
alert(sortData(arr))



 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  function largest(a,b,c,d,e){
      let arg = [a,b,c,d,e];
      let largest = a;
      for(let i of arg){
            if(i>largest){
                largest =i;
            }
        }
        return largest;
    }

    console.log(largest(-5, -2, -6, 0, -1 ));

 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
function HelloWorld(x, y) {
    if (x >= y) console.log(`Hello World!`);
    else console.log(`Good Bye!`);
  }
 /******* End Your Code ********* */



