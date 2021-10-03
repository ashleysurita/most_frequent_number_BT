function mostFrequentNumberBT(root) {
 let hash = {}
 let highest
 
 const queue = [root]
 while(queue.length) {
  const curr = queue.shift()
  
  if(!hash[curr.value]) {
    hash[curr.value] = 0
  }
   
   hash[curr.value]++
   if(hash[curr.value] > hash[highest]) {
     highest = curr.value
   }
   
   if(curr.left) queue.push(curr.left)
   if(curr.right) queue.push(curr.right)   
 }
 
  return highest   
}
