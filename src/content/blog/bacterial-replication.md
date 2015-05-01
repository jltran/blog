---
title: "Finding Bacterial Origin of Replication"
posted: 2013-11-17
post: true
layout: post.hbs
image: "boat.jpg"
image-alt: "this is a boat"
---
The oriC (origin of replication) regions of double-stranded genomes serve the vital purpose of initiating replication in many of earth's living organisms. Finding these regions have often been computationally difficult because most genomes express this region differently - that is the oriC sequence of one species often bears little resemblance to the oriC region of another species. One common characteristic of oriC regions is that they often have many duplicated motifs in a short range. These motifs (DnaA boxes) serve as regulators of replication. As a result, we may be able to find the oriC of any species by looking for densities of of these "frequent words".
For large genomes, however, this process can be computationally expensive with bacterial genomes ranging from 139 thousand base pairs (kbp) to 13,000 kbp (http://en.wikipedia.org/wiki/Bacterial_genome_size). As a result, it is imperative to use another technique to identify regions likely to be oriC regions and run our frequent words algorithm on those regions and G-C Skew serves this process nicely. G-C 
skew is the differential in the bases guanine and cytosine at different points in the genome caused by deamination of cytosine into thymine. Deamination happens naturally and occurs most frequently during replication when a strand is left "hanging" for extended periods of time. As a result, the leading strand often spends less time open to deamination resulting in a positive G-C skew in the leading strand and a negative G-C skew in the lagging strand. The shift in descending skew to ascending skew happens at oriC, making it a good indicator of where replication starts. Since this technique depends on drastic changes over the entire genome, it becomes less useful in organism with multiple origins of replication. In this project, we will identify the oriC and DnaA locations of Salmonella enterica. 
The skew is identified by measuring the skew at each base pair with the minimum skew representing a possible oriC. The following graph visualizes this process:

The bases that have minimum skew are 3764856 and 3764858. In this project, we will be using 3764857, the average of the two numbers as the center of our search and extending our search area 500 bases in either direction resulting in a 1000 base search area. 

<pre>
CGTATTACACCACCGGTCACTACAGCATCTTTATAAAAGTGATGTGCAAATCAATTGACGCGCTTCAGCACGTACTTATCAACAAGATCCAAACAATTGATGAAATTCAGTCCACTGAGACACTGATCGTCTTGCAGAACCCGATCATGCGCACCATCAAGCCATGATCGGCTTTTTTAATCCCACATTTTTCCACAGGTAGATCCCAGCTCGTTCACAGAGTACAATGCAGCCTCTTTACCTGAGCGAGCGATCAATGGCAGACATTACTCTTATCAGCGGCAGCACCCTGGGCGGCGCCGAATACGTCGCGGAACATCTGGCGGAAAAGCTGGAAGCTGCCGGTTTTTCAACCGAAACGGTGCACGGTCCGTTATTAGAGGATCTGTCAACTTCCGGGATCTGGCTGATAATCAGCTCAACGCACGGCGCCGGAGACATTCCGGACAACCTGACCCCTTTCTATGAAGACCTTCAGACGCAGAAACCCGATCTTTCCGCGGTACGTTTCGGCGCAATTGGCATTGGCAGTCGAGAATACGACACGTTTTGCGGCGCGATTGAGAAAATAGAAGCGGAACTGAAAGGCGCTGGCGCAAAACAGGTTGGGGAAACACTGAAGATCAACATCCTTGAACATGAGATTCCGGAAGATCCAGCGGAGATTTGGCTCGGATCCTGGATTAATTTACTCAAATAAGTGTAAAGATCGTGCGATCTATTGTGGATAAATATGGTGAAAAGCTTGGATCAACCGGTAGTTATCCAAAGAATAACCTTTGTTCACTTTTTGAGTTGTGTATAAGTACCCGTTTTGATCCCAGCTTATACGGGCCACGATCACCGATCATTCACAGCTAGTGATCCTTTCCAACGCATTGATCTTTATTACAGGATCCGGGTTATCCACAGCCTGGTGCGATCCTAATAAGAGATCACAATAGAACAGATCTCTAAATAAAAAGATCTTCTTTTTAATAGCCCGGATCCCGGGGCTTTC
</pre>

In previous research on oriC in e-coli, identified regions had lengths of 9 and 13. The 13-length region represents the DNA unwinding element with high A-T content allowing for easier separation during replication and 9-length regions representing conserved regulation regions of oriC often with multiple repeats. This procedure looks for these regions with 1 or 2 allowed mismatches as well as the reverse complement of these regions. 

A (13, 1) search - 13-length region with one mismatch found:

AGCTGGGATCAAC
GTTGATCCCAGCT
TACTTATCCACAA
TTGTGGATAAGTA

with the last two most likely representing the DNA unwinding element with it's increased A-T content and a total of 4 near-matches (with at most 1 mismatched base).

A (9, 1) search yielded:

TGTGGATAA
TTATCCACA

with a total of 6 matches. A (9, 2) search yielded 18 matches which is less statistically likely than the (9, 1) result.

As a result, our hypothesis is that TACTTATCCACAA and TTGTGGATAAGTA represents that DNA unwinding elements of the genome and TGTGGATAA and TTATCCACA represents the DnaA regulator elements of oriC:

<pre>
CGTATTACACCACCGGTCACTACAGCATCTTTATAAAAGTGATGTGCAAATCAATTGACGCGCTTCAGCACGTACTTATCAACAAGATCCAAACAATTGATGAAATTCAGTCCACTGAGACACTGATCGTCTTGCAGAACCCGATCATGCGCACCATCAAGCCATGATCGGCTTTTTTAATCCCACATTTTTCCACAGGTAGATCCCAGCTCGTTCACAGAGTACAATGCAGCCTCTTTACCTGAGCGAGCGATCAATGGCAGACATTACTCTTATCAGCGGCAGCACCCTGGGCGGCGCCGAATACGTCGCGGAACATCTGGCGGAAAAGCTGGAAGCTGCCGGTTTTTCAACCGAAACGGTGCACGGTCCGTTATTAGAGGATCTGTCAACTTCCGGGATCTGGCTGATAATCAGCTCAACGCACGGCGCCGGAGACATTCCGGACAACCTGACCCCTTTCTATGAAGACCTTCAGACGCAGAAACCCGATCTTTCCGCGGTACGTTTCGGCGCAATTGGCATTGGCAGTCGAGAATACGACACGTTTTGCGGCGCGATTGAGAAAATAGAAGCGGAACTGAAAGGCGCTGGCGCAAAACAGGTTGGGGAAACACTGAAGATCAACATCCTTGAACATGAGATTCCGGAAGATCCAGCGGAGATTTGGCTCGGATCCTGGATTAATTTACTCAAATAAGTGTAAAGATCGTGCGATCTATTGTGGATAAATATGGTGAAAAGCTTGGATCAACCGGTAGTTATCCAAAGAATAACCTTTGTTCACTTTTTGAGTTGTGTATAAGTACCCGTTTTGATCCCAGCTTATACGGGCCACGATCACCGATCATTCACAGCTAGTGATCCTTTCCAACGCATTGATCTTTATTACAGGATCCGGGTTATCCACAGCCTGGTGCGATCCTAATAAGAGATCACAATAGAACAGATCTCTAAATAAAAAGATCTTCTTTTTAATAGCCCGGATCCCGGGGCTTTC
</pre>

