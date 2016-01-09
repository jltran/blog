---
title: "Biology: Phylogeny Reconstruction - Molecular Clock"
posted: 2014-09-03
post: true
stub: Biology
layout: post.hbs
image: "sunlight.jpg"
---

####Use of Relaxed Molecular Clocks in the Reconstruction of Divergence Patterns

Word Count: 3270

ABSTRACT  
The molecular clock is often assumed to be true when used to estimate divergence times and ancestral area reconstruction in biogeography. However, the intricacies and assumptions made in these models are seldom explored and often empirically taken to be true. This paper aims to highlight the background of the molecular clock in biogeography and how it is used in programs such as DIVA. The molecular clock assumes a constant rate across different branches of the phylogeny, an assumption that often does not hold. We can test this hypothesis by using the relative rate test and likelihood ratio test. If the molecular clock does not hold true, a relaxed molecular clock can be used in which the rates of neighbor lineages are assumed to be related. How these lineages are related depends on the model used. The molecular clock can be used in conjunction with area-reconstruction methods to provide more insight in reconstructing divergence patterns.  

Keywords  
Molecular clock; Relaxed phylogenies; DIVA; Lagrange; Rates of evolution; Divergence  

INTRODUCTION  

The molecular clock hypothesizes that rates of nucleotide substitution occur at constant rates. If valid, it allows us find the time at which two lineages split along the tree of life. This value is known as the divergence time and is particularly useful in biogeography because "By calculating the temporal setting for a given divergence event, one can determine the geological and environmental context for that event and consequently gain a better understanding of speciation and dispersal mechanisms" (Yoder 2000). Divergence times of species can be critical in biogeography because they often coincide with dispersal or vicariance events, which are crucial in the reconstruction of past events that lead to the diversity that we see today.  

Traditionally, the molecular clock has used molecular data, rather than morphological data. Unfortunately, it has been shown that the molecular clock does not hold for most genes. (Hedges 1996) More recent efforts have allowed researches to relax the molecular clock through the assumption that related lineages have similar rates. (Thorne 1998; Huelsenbeck 2000) Although these relaxed clock models have made incredible strides forward in allowing us to infer divergence times, they still occasionally conflict with fossil data, implying that the procedure is still imperfect. Through development of better models of molecular evolution, we can improve estimates of divergence times.  

MATERIALS AND METHODS

Molecular clock models are essentially phylogenetic trees where branch lengths are estimates of time. These trees are generated using matrices of character or molecular data which possess some phylogenetic signal that can give us information about the evolutionary history of the taxa. Although the different factors that influence evolution are not altogether clear, the signal can still be used to determine evolutionary history in the same way that the fossil record gives us clues about the past even if the species is extinct. By determining the differences and similarities of different taxa, we can determine the relative rate of evolution of a taxa which allows for estimation of divergence times. That is, under standard phylogenetic theory, the branch length is equal to the rate of nucleotide substitution times the time between divergence and the tip or the next divergence event. Since B=rt, where B is the branch length, r is the rate of substitution and t is the time difference, the time can be found since B and r are known. (Drummond 2001)

The molecular clock meant that the time of divergence of species with a poor or nonexistant fossil record could be estimated. The assumption that the rates are constant across branches makes the computationally intensive maximum likelihood method of inference parametrically simpler. The rate of evolution could be inferred from the data. However, as more sequences became available, it was clear that the molecular clock assumption did not hold true for most data sets (Hedges 1996). The choice of model in phylogenetics is critical because the use of an inappropriate model can lead to over- or underestimation of parameters, which may result in incorrect topologies.  As a result, people have developed methods to test for clock-like behavior in data sets. Many methods have been developed to determine whether the data set is clock-like or not.

Testing the Molecular Clock

Many different methods have been developed to test whether molecular clock holds true for any given data set. Only when evolution ticks at a constant rate across lineages does the molecular clock assumption hold. Early methods developed, forced data sets to behave clock-like by pruning taxa that do not behave clock-like (Li 1987). However, the drawback to removing taxa made the result less robust. In general, phylogenetic trees inherently “ignore” data because there are many extinct species not represented because of either the incompleteness of the fossil record or the lack of a living species to sequence. Removing taxa further enhances this effect and although it usually won't lead to a false signal, the resulting phylogenetic tree won't be as informative.

The molecular clock is through the relative rate test (Wu 1985). Under the molecular clock hypothesis, we would expect the branch length for two sister taxa to be equidistant from their most common ancestor. If we assume this is true then it would also mean that the branch length between the two sister taxa and the outgroup should also be equal. The difference can be run off a chi-squared test with the expectation that it should be zero to determine whether the molecular clock holds.

Another way to test the molecular clock hypothesis would be to run a likelihood ratio test (Felsenstein 1981). Because the molecular clock is a nested model: where the molecular clock is a more specific model of a general tree with different rates on all branches, we can use the molecular clock hypothesis as our null hypothesis. If the conditions are not met, then the data set does not fit the molecular clock hypothesis. The number of branch lengths for the “different-rates” unrooted model is (2n-3) and the number of branch lengths for a rooted molecular clock model is (n-1). The difference in the number of parameters is then equal to (n-2), also known as the degrees of freedom. A chi-squared test can then be run on the two different models. Twice the difference in the difference in log likelihood, or the likelihood ratio is compared to a p-value of 0.05. If the likelihood ratio is greater than the p-value, then the null hypothesis is rejected. If the molecular clock hypothesis does not fit the data significantly better than the alternative different-rates hypothesis, then the molecular clock model is rejected. Another way of looking at this is that the addition of more parameters significantly improves the likelihood of the data.

Factors Effecting Rate of Nucleotide Change

Different factors affect the rate of evolution and these factors can be important in determining divergence times and can influence our choice of models. The fact that certain lineages do not behave clock-like point to the fact that rates of evolution change over time. Research in this area shows that the rate of nucleotide substitution depends on many different factors. However, it still isn't clear what all of these factors are. If we were to find all these factors, then theoretically we should be able to determine the rate of evolution for every branch on the tree. One of these factors seem to be body size: there is a negative correlation between body size and the rate of nucleotide substitution. (Martin 1993) That is, the larger the taxon, the lower its rate of nucleotide substitution. However, the exact cause of this is often difficult to gauge because certain variables are often confounded such as "generation time, life span, age at first reprduction, intrinsic rate of population increase, population size, and weight-specific metabolic rate". Martin hypothesizes that the data can explained by differences in generation time. However, they also note that generation time could not be the only factor influencing change in rates because similarly sized taxa from different lineages do not have similar substitution rates. For instance “shark mtDNAs is 5-7 times slower than in primates or ungulates despite broadly similar ranges of generation times for the three groups”. This discrepancy can be lessened by taking metabolic rate into account. The higher the metabolic rate, the more replications there are and the higher chance there is for a mutation. A more recent study by showed that there is a similar effect in plants. In particular, the life history of a plant is related to the rate of evolution. As a result, it seems as if the rate change over time is not random but a result of underlying process. (Smith 2008)

RESULTS

Relaxed Phylogenies

The development of relaxed phylogenies allowed the use of the molecular clock even when the molecular clock assumption of equal rates of substitution across lineages is not true. These relaxed clock models are based on the assumption of autocorrelation between related branches: the rate of change of a descendent branch is related to the rate of change in the ancestral branch. How exactly these rates are related is still unclear, but the models used in constructing relaxed phylogenies makes different assumptions on how this rate changes.
One of the first papers on this topic proposed a model in which the rate of evolution changes by a log-normal distribution. (Thorne 1998) This means that the log of the rate on a descendent branch has a normal distribution with a mean equal to the log of the rate on the ancestral branch. The ancestral branch has a variance of the time difference between the midpoint of the ancestral and descendent branches times an autocorrelation constant, which meant that the rate of substitution on the descendent branch is related to the rate on the ancestral branch. The rate of the root branch is sampled from a prior distribution. This allows for a relationship between the rates of the branches that enables the estimation of divergence times without the assumption of a strict molecular clock. Because the model ran on a Bayesian model, a Yule process was used as a prior. The simulation for the prior was allowed to run until the number of taxa equals the number of taxa in the data. The Yule birth process only includes a birth rate and not a death rate so it would be expected that the time would be underestimated. The average time was estimated from the data by finding the root depth with a molecular clock assumption. The resulting root-depth of the posterior (4.98 r.t.u.) is actually lower than the root-depth estimated from the data (6 r.t.u.) meaning the estimation on the molecular clock was approximate but still not close to the expected value.  In support for their method, the authors used an rbcL sequence to reconstruct a phylogeny of higher plants.

The strict molecular clock is a nested model within the Thorne relaxed clock model:  in the strict molecular clock model, the autocorrelation constant equals zero so that there is no variation between rates, or the rates on all branches are the same. Later papers improved on this method by using a Dirchelet prior which allowed the rate to increase as it approached the tips of the tree, which resulted in a better approximation of the root-depth. (Kishino 2003)  This model was ran on a tree with known topology and known divergence times to try to reconstruct the proper tree and divergence. The model was tested by running the simulation with constraints on node times and without constraints on node times with violations on proper priors included in order to test the robustness of the model. In was found that in the most simplistic case of the simulation without time constraints that “although the credibility intervals generally capture the true node times, the credibility intervals are much wider than is desirable”. Furthermore, the simulation tests on violations of the prior shows that the results often converge on the correct tree and divergence but that the results are far from perfect. With a true tree with a autocorrelation constant of 0, the estimated posterior found a autocorrelation constant of 0.18.  Generally, the true topology is much easier to find than the rates of evolution and subsequently the divergence times.

One last model used described a compound Poisson process of rate variation. (Huelsenbeck 2000) As with most other phylogenetic reconstruction models, this method used a Poisson process to model change in nucleotides on along a branch. However, an independent Poisson process is superimposed onto the tree and changes the substitution rates along the branch. A Poisson arrival process is used to determine when a substitution change will occur and the rate of substitution at that time is multiplied by a gamma-distributed random variable Unlike the Thorne-Kishino method, the compound Poisson process can introduce rates at any point on the tree rather than just at divergence points. In many ways, the two methods are very similar. The Bayesian method of inference was used in both to generate the trees. The key difference between the Thorne-Kishino model and the Huelsenbeck model is that the former assumes a continuous rate of change while the latter assumes a discrete process of change in rate. (Figure 1) This discrepancy recapitulates Darwin's phyletic gradualism versus Eldredge and Gould’s punctuated equilibrium.

Overall, there are many methods proposed for relaxing the molecular clock, all of which approach the correct divergence times but all of which do not perfectly obtain the right answer. Other models have been developed that further improve on these models  methods of phylogenetic reconstruction of divergence times. However, until the forces driving molecular evolution are elucidated, these methods are necessarily imperfect. Further explorations in this area including the development of a better understand of why the molecular clock holds true, especially in cases where it should not, can help advance the field of molecular dating and reconstruction of divergence patterns.

Diva

Methods for estimation of divergence patterns have been used since the late 1990s (Ronquist 1997) but it wasn't until recently that relaxed molecular clocks have been used in conjunction with DIVA (Knapp 2005). Despite the popularity of methods such as DIVA, there have been found to be some drawbacks in its inferences including “inability to distinguish between contiguous range expansions and across-barrier dispersals, a low probability of invoking extinctions, incorrect constraints set on the maximum number of areas by the user, and analysing the ingroup taxa without sister groups”. (Kodandaramaiah 2010) The result is that area reconstruction happens easily in simple cases where vicariance is the main factor driving divergence but the signal becomes convoluted when events become more complicated. The use of the molecular clock can help alleviate some of these cases by comparing the dates of divergence with known variance events such as the splitting of continents. In some cases, if the divergence event happened after, then the divergence must have resulted from dispersal.

CONCLUSION

The estimation of divergence times has long been an interest to biologists since divergence times can provide insight into the background under which speciation occurred. Since its inception by in 1965, the molecular clock has been used to estimate divergent times in the many different fields of biology. (Zuckerland 1965) Although advances in the field have shown that the molecular clock may not hold for all genes, the development of relaxed phylogenies has allowed us to predict the divergence times by assuming an autocorrelation of rates among branches. While in isolation, divergence times are not very insightful, they can be used to improve analysis of reconstruction of divergence events and help differentiate between dispersal and vicariance.




REFERENCES
Buerki, S., Forest, F., Alvarez, N., Nylander, J. A. A., Arrigo, N. and Sanmartín, I. (2011),  An evaluation of new parsimony-based versus parametric inference methods in biogeography: a case study using the globally distributed plant family Sapindaceae. Journal of Biogeography, 38: 531–550.

Clark, J. R., Ree, R. H., Alfaro, M. E., King, M. G., Wagner, W. L. and Roalson, E. H. (2008). A comparative study in ancestral range reconstruction methods: retracing the uncertain histories of insular lineages. Systematic Biology. 57(5): 693-707.

Cook, L. G. and Crisp, M. D. (2005), Directional asymmetry of long-distance dispersal and colonization could mislead reconstructions of biogeography. Journal of Biogeography, 32: 741–754.

Donoghue, Michael J.; Moore, Brian R. (2003). Toward an Integrative Historical
	Biogeography. Integrative and Comparative Biology 43(2), 261-270.

Drovetski, S. V. (2003), Plio-Pleistocene climatic oscilations, Holarctic biogeography and speciation in an avian subfamily. Journal of Biogeography, 30: 1173–1181.

Drummond, A.J., Ho, S.Y.W., Phillips, M.J. & Rambaut, A. (2005) Relaxed phylogenetics and dating with confidence. PloS Biology 4 (5), e88.

Felsenstein, J. (1981) Evolutionary trees from DNA sequences: a maximum likelihood approach. Journal of Molecular Evolution, 17, 368–376.
Huelsenbeck, J. P., Larget, B., Swofford, D. L. 2000. A compound Poisson process for relaxing the molecular clock. Genetics 154: 1879-1892.

Knapp M, Stöckler K, Havell D, Delsuc F, Sebastiani F, et al. (2005) Relaxed Molecular Clock Provides Evidence for Long-Distance Dispersal of Nothofagus (Southern Beech). PLoS Biol 3(1): e14.

Kodandaramaiah, U. (2010), Use of dispersal–vicariance analysis in biogeography – a critique. Journal of Biogeography, 37: 3–11.

Kishino, H., Thorne, J.L. & Bruno, W.J. (2001) Performance of a divergence time estimation method under a probabilistic model of rate evolution. Molecular Biology and Evolution, 18, 352–361.

Martin, A.P. & Palumbi, S.R. (1993) Body size, metabolic rate, generation time and the molecular clock. Proceedings of the National Academy of Sciences of the USA, 90, 4087–4091.

Rosen, Donn Eric (1979). Fishes from the uplands and intermontane basins of Guatemala: revisionary studies and comparative geography."Bulletin of the American Museum of Natural History 162, 269-375.

Ronquist, F. (1997) Dispersal–vicariance analysis: a new approach to the quantification of historical biogeography. Systematic Biology, 46, 195–203.

Sanderson, M. J. 1997. A nonparametric approach to estimationg divergence times in the absence of rate constancy. Mol. Biol. Evol. 14:1218-1232.

Smith, S. A., Donoghue, M. J. 2008. Rates of Molecular Evolution are Linked to Life History in Flowering Plants. Science 322: 86-89.

Thorne, J.L., Kishino H., and Painter I. S. 1998. Estimating the rate of evolution of the rate of molecular evolution. Mol. Biol. Evol. 15:1647-1657.

Wu, C.-I. & Li, W.-H. (1985) Evidence for higher rates of nucleotide substitution in rodents than in man. Proceedings of the National Academy of Sciences of the USA, 82, 1741–1745.

Yoder A.D., and Yang Z. 2000. Estimation of primate speciation dates using local molecular clocks. Mol. Biol. Evol. 17:1081-1090.

Zuckerkandl, E. and Pauling, L.B. (1965). "Evolutionary divergence and convergence in proteins". In Bryson, V.and Vogel, H.J. (editors). Evolving Genes and Proteins. Academic Press, New York. pp. 97–166.
