---
title: "Min-Heap Efficiency"
posted: 2014-03-22
post: false
stub: Biology
layout: post.hbs
image: "alpine.jpg"
---
![](http://upload.wikimedia.org/wikipedia/commons/6/69/Min-heap.png)

Heaps are one of my favorite data structures because it's such an innovative solution to a common problem: easily finding the maximum or minimum value of a list. For those who have not had the pleasure, a heap is a "tree"-like structure with each node having at most 2 children and all children must be less (or more for max-heap). The thing that I had forgotten was that creating the heap was O(n/2) because you only have to "check" half the nodes (the ones with children) and perform the following operation on them.

<pre>
``` python
  def heapify(self):
    for x in reversed(xrange(1, (len(self.arr))/2)):
      self.sink(x)

  def sink(self, k):
    while 2*k <= len(self.arr) - 1:
      j = 2*k
      if j < (len(self.arr) - 1) and self.arr[j]>=self.arr[j+1]:
        j = j+1
      if self.arr[k] <= self.arr[j]: break
      self.exch(j, k)
      k = j

```
</pre>
