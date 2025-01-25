/* gunoniyok mane ekta songkha ke vangle jotogula songkha ber hobe 1 soho.jemon
10 er vajok holo 10= 1*10
                   =2*5   toh gunoniyok hocche 1,2,5,10
*/

function divisors(num) {
  var divisors = [];
  var i;
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      divisors.push(
        i
      ); /*push method hocche array er seshe new item add korar jonno,length change korar jonno,new length er jonno*/
    }
  }
  return divisors;
}
console.log(divisors(12));
console.log(divisors(15));
