---
title: "Biology: Genome Assembly"
posted: 2015-12-13
post: true
stub: Biology
layout: post.hbs
image: "whitetown.jpg"
---

Cost of genome assembly has drastically decreased over the past decade as a result of advances in technology. One of the key innovations is an algorithmic one. Sequencing large segments of genome is prohibitively expensive but if we could take shorter overlapping sequences or *reads* of dna and reconstruct them, then we can automate more of the sequencing process.

![Cost of genome assembly over time](http://www.genome.gov/images/content/cost_per_megabase_oct2015.jpg).

Here we present one such algorithm where reads are deconstructed into a graph where a read (for example ACGCTCA) is represented as a edge between nodes ACGCTC --> CGCTCA. Then we traverse the graph using DFS to produce a possible reconstruction of the genome (note: there may be more than one plausible reconstruction)

<pre>
#Read in data
def read_adjacency_graph(input_file):
    data = []
    with open(input_file, 'r') as infile:
        to_data = ''
        for ln in infile:
            if ln[0] == '>':
                data.append(to_data)
                to_data = ''
            else:
                to_data += ln.strip()
        data.append(to_data)
    return data

def split_strand_into_kmers(strand, k):
    res = []
    for i in xrange(len(strand) - k + 1):
        res.append(strand[i: i+k])
    return res

def format_adjacency_graph_from_kmers(read_file):
    data = {}
    for kmer in read_file:
        kmer = kmer.strip()
        if kmer[1:] not in data.get(kmer[:-1], []):
            data[kmer[:-1]] = data.get(kmer[:-1], []) + [kmer[1:]]
    return data

def findStart(adjacency_graph):
    #Traverse through keys twice ... this can be expensive ... to find start
    reverse_index = {}
    #Construct reverse index (counts number of indegrees)
    for key in adjacency_graph.keys():
        for item in adjacency_graph[key]:
            reverse_index[item] = reverse_index.get(item, 0) + 1
    for key in adjacency_graph.keys():
        if len(adjacency_graph.get(key, [])) > reverse_index.get(key, 0):
            return key
    return -1

def findEulerianPath(adjacency_graph, start):
    stack = [start]
    res = []

    while(stack):
        if stack[-1] in adjacency_graph.keys() and adjacency_graph[stack[-1]] != []:
            stack.append(adjacency_graph[stack[-1]].pop())
        else:
            res = [stack.pop()] + res

    return res

def concatKmers(path):
    res = path.pop(0)
    for kmer in path:
        res += kmer[-1]
    return res

def toOutputFile(to_output, output_file):
    #clear output file
    f2 = open(output_file, 'w+')
    f2.seek(0)
    f2.truncate()
    f2.write(to_output)

#Weaves all functions into sequence
def main():
    read_file = read_adjacency_graph('sample_data.txt')
    data = [split_strand_into_kmers(strand, 6) for strand in read_file]
    data = reduce(lambda a, b: a + b, data)
    adj = format_adjacency_graph_from_kmers(data)
    start = findStart(adj)
    path = findEulerianPath(adj, start)
    path = concatKmers(path)
    toOutputFile(path, 'output.txt')

main()
</pre>
