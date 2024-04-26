---
title: Offshore Wind Energy Site Selection
Description: Offshore Wind Energy Site Selection
Date: 2024-04-23
category:
  - GIS
  - Visualization
tag:
  - Offshore Wind Energy
  - Multi-Criteria
image: 
  path: /blog-imgs/OSWE_1.jpg
  width: 800
  height: 500
  alt: cover
---

# Citation

Song, Z., Chapman, P., Tao, J., Chang, P., Gao, H., Liu, H., … Zhang, Z. (2024). Mapping the Unheard: Analyzing Tradeoffs Between Fisheries and Offshore Wind Farms Using Multicriteria Decision Analysis. Annals of the American Association of Geographers, 114(3), 536–554. [https://doi.org/10.1080/24694452.2023.2285371](https://doi.org/10.1080/24694452.2023.2285371)

# Abstract
Identifying offshore wind energy sites involves analyzing multiple variables, such as wind speed, proximity to the coastline, and sociocultural factors. This complex decision-making process often involves many stakeholders, resulting in conflicting data and goals. Decision analysis that promotes collaboration, transparency, understanding, and sustainability is key. This study presents a unique model of human–environment interaction that reconciles different perspectives and visualizes the balance between fisheries and wind power. Using three multicriteria decision models (weighted aggregated sum product assessment [`WASPAS`], technique for order of preference by similarity to ideal solution [`TOPSIS`], and analytical hierarchy process [`AHP`]), we analyze the decision mix for wind farm selection and assess the impacts on fisheries using historical data. Our approach was applied to an upwelling system in California, generating ten tailored decision scenarios for different stakeholder groups. The results showed that adaptation scores for specific call areas in northern California decreased when the weight of fishery factors increased, and there was a tendency for high-scoring areas to shift southward as fishery parameters increased. The results of the sensitivity analysis showed that the first-order sensitivity scores of `WASPAS` were better correlated with the weights compared to TOPSIS, whereas the second-order sensitivity scores were generally lower, indicating a reduced interdependence of our model.

# Research Question

1. ***Are there overlaps or conflicts between expected fishing efforts, bycatch, protected species, and human activities such as offshore energy development, and can management decisions mitigate them?***
   
2. ***Can we find spatial solutions for balancing the trade-offs between Energy Commission goals and the sustainability of fisheries and conservation of ecosystems?***

# Multi-Criteria Modeling Algos
`Multicriteria decision analysis (MCDA)` is a mathematical decision-making framework that combines many decision criteria to meet one or several objectives that support decision-making _(Shao et al. 2020)_.

## Weighted Aggregated Sum Product Assessment (WASPAS)
Given a set of ***m*** alternatives, denoted as $A_1, A_2, A_3, … , A_m$, and a set of ***n*** decision criteria, denoted as $C_1, C_2, C_3, … , C_n$, it is assumed that a decision-maker has to determine the weight value ***$\omega_{ij}$*** (for ***i=1,2,3,...,m*** and ***j=1,2,3,...,n***) of each alternative in terms of each criterion _(Fishburn 1967)_.

For each row of dataset ***$X$*** with ***$x_j$***, values are defined, along with the criteria weight matrix ***$W$*** (the weight of the relative performance of the decision criteria). 
### Weighted Sum Method (`WSM`)
$$
Q_{i}^{WSM} = \sum_{j=1}^{n}\omega_{ij}*x_j\\

$$

### Weighted Product Method (`WPM`)

$$
{
Q_{i}^{WPM} = \prod_{j=1}^{n}x_j^{\omega_{ij}}\\
}


$$

### Weighted Aggregated Sum Product Assessment (`WASPAS`)
$$
{
Q_{i}^{WASPAS} = \lambda\sum_{j=1}^{n}\omega_{ij}*x_j + (1-\lambda)\prod_{j=1}^{n}x_j^{\omega_{ij}}\\
}
\\
\textbf{where, }\\
\omega_{ij}\textbf{ is the weight for the }j{th}\textbf{ criterion for the }i{th}\textbf{ alternative}\\
x_j\textbf{ is the data value of the }j{th};\\
\textbf{and, }Q_{i}^{XXX}\textbf{ is the score for the }i{th}\textbf{ decision alternative using algorithm } XXX
$$

## Analytic Hierarchy Process (`AHP`)
`AHP` has been applied in different fields, such as planning, selecting the best alternative, and resource allocations _(Vaidya and Kumar 2006; Chaouachi, Felix Covrig, and Ardelean 2017; Mahdy and Bahaj 2018; Wu et al. 2018)_. `AHP` involves breaking down a decision problem into a hierarchy of criteria and alternatives. The hierarchy consists of a goal at the top, followed by a set of criteria that contribute to the achievement of the goal. These criteria are further divided into subcriteria, forming a hierarchical structure. Once the hierarchy is established, pairwise comparisons are made between the elements of each level _(Saaty 1977)_. In the `AHP` analysis, users construct a pairwise weighting matrix, wherein each element signifies the relative importance of one criterion compared to another during the decision-making process. The weighting vector is the feature vector of the matrix corresponding with the maximum nonzero feature value.

### Construct Pairwise Weight Matrix $A$
$$
\begin{matrix}
         & A_1 & A_2 & ... & A_n \\
    A_1  &  1  & \frac{\omega_1}{\omega_2} & ... & \frac{\omega_1}{\omega_n} \\
    A_2  & \frac{\omega_2}{\omega_1} & 1 & ... & \frac{\omega_2}{\omega_n}\\
    ...  & & & ...\\
    A_n  & \frac{\omega_n}{\omega_1} & ... & ... & 1
\end{matrix}
$$
### Calculate Max-Eigen Vector $\omega_{ME}$
$$
    A * \omega_{ME} = \lambda_{max} * \omega_{ME}\\
    \omega_{AHP} = \frac{\omega_{ME}}{\|\omega_{ME}\|}
$$
### Consistency Check
| N | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| -------- | ------- | ------- |------- |------- |------- |------- |------- |------- |------- |
| RI  | 0 | 0 | 0.52 | 0.89 | 1.12 | 1.24 | 1.36 | 1.41 | 1.49 |
$$
    CI = \frac{\lambda - n}{n - 1}\\
    CR = \frac{CI}{RI}
$$

## The Technique for Order of Preference by Similarity to Ideal Solution (`TOPSIS`)
`TOPSIS` is an `MCDM` method used to evaluate and rank alternatives based on their proximity to an ideal solution _(Uzun et al. 2021)_. The procedure of `TOPSIS` application in this study includes the following steps.

### Construct the Normalized Matrix
Let matrix $X$ represent the initial data sample matrix. The matrix $Z$ represents the normalized data matrix.

$$
X=
\begin{matrix*}
    x_{11} & x_{12} & ... & x_{1m} \\
    x_{21} & x_{22} & ... & x_{2m} \\
    ...\\
    x_{n1} & x_{n2} & ... & x_{nm}
\end{matrix*}
\\
z_{ij} = \frac{x_{ij}}{\sqrt{\sum_{i=1}^{n}x_{ij}^2}}
\\
Z=
\begin{matrix*}
    z_{11} & z_{12} & ... & z_{1m} \\
    z_{21} & z_{22} & ... & z_{2m} \\
    ...\\
    z_{n1} & z_{n2} & ... & z_{nm}
\end{matrix*}
$$

### Identify positive and negative ideal solutions (`PIS` and `NIS`)
Among all the samples, pick the best and the worst scenario for each feature to form the best and the worst case vectors. Here, $V^+$ (the output vector of `PIS`) and $V^−$ (the output vector of `NIS`) are identified, where $v_{ij} = \omega_{j}z_{ij}; i=1,… ,m; j=1,… ,n; \sum_{j=1}^{n}\omega_j = 1$.

 The `PIS` maximizes the benefit criteria and minimizes the cost criteria, whereas the `NIS` maximizes the cost criteria and minimizes the benefit criteria.
 
$$
V^+ = (v_1^+, v_2^+, v_3^+, ..., v_n^+) = [[max_{i}v_{ij}]]\\
V^- = (v_1^-, v_2^-, v_3^-, ..., v_n^-) = [[min_{i}v_{ij}]]
$$

### Calculate the Relative Euclidean Distance to `PIS` and `NIS`
$$
    D_i^+ = \sqrt{\sum_{j=1}^{m}(v_j^+ - v_{ij})^2} = \sqrt{\sum_{j=1}^{m}(v_j^+ - \omega_jz_{ij})^2}\\
    D_i^- = \sqrt{\sum_{j=1}^{m}(v_j^- - v_{ij})^2} = \sqrt{\sum_{j=1}^{m}(v_j^- - \omega_jz_{ij})^2}\\
    C_i = \frac{D_i^-}{D_i^+ + D_i^-}, 0\le C_i \le 1
$$

# Methodology
## Study Area
![Study Area](/blog-imgs/FinalWEAs.png)

On 18 August 2016, the federal Bureau of Ocean Energy Management (BOEM) published a Request for Interest in California Offshore Wind in response to an unsolicited lease request. Two years later, BOEM published a Call for Information and Nominations from companies interested in commercial wind energy leases within the proposed areas of central and northern California (BOEM 2018). In addition, BOEM sought public input on the potential for wind energy development in the Call Areas. On 25 May 2021, the Departments of the Interior and Defense and the State of California announced their agreement to advance areas for wind energy development offshore the northern and central coasts of California, enabling a path forward for the Humboldt Call Area and areas within and adjacent to the Morro Bay Call Area. BOEM published the Morro Bay East and West Extensions—Call for Information and Nominations in the Federal Register, which initiated a forty-five1-day public comment period. BOEM accepted industry nominations and public comments until 13 September 2021. The coastal fishing region in the Pacific California area was divided into 615 equal segments, each approximately 550 km2. This specific area dimension was derived from the average of three proposed call areas from 2018 (BOEM 2018). Consequently, each polygon can symbolize a prospective call area.

[Timeline](https://time.graphics/line/902787)

This study aims to evaluate the adaptability of established offshore wind energy areas by considering multiple geophysical, environmental, and fishery management factors. More than 8,000 random weight combinations were generated and processed using the WASPAS as the primary weighting algorithm. This approach facilitated the calculation of score rankings for the three designated call areas under diverse weight combinations. Subsequently, the scores corresponding to the polygons within these call areas were organized in descending order. An analysis of the weight combinations leading to higher scores on the corresponding polygons was then undertaken. This evaluation helped identify which parameters were more skewed and hence which stakeholder groups were more prominently represented by such weight combinations. The intent was to infer the degree to which the interests of all parties are incorporated in the decision-making process concerning the given call areas. The outcomes of this section are further elucidated in the results section.

## Datasets
The following factors have been considered for modeling the trade-offs between fisheries and offshore wind energy development to ensure the running efficiency and legality of the site selection and construction: 
1.  wind speed at a 90m height, 
2.  distance to shorelines, 
3.  the distances to military bases, 
4.  natural protected area locations 
___(Fetanat and Khorasaninejad 2015; Mekonnen and Gorsevski 2015; Chaouachi, Felix Covrig, and Ardelean 2017; Mahdy and Bahaj 2018; Y. Wu et al. 2016; B. Wu et al. 2018; X. Zhang et al. 2018)___. 

This project was developed based on the National Science Foundation–funded Convergence Accelerator Networked Blue Economy project, where our team has conducted sixteen interviews with fishery managers, policymakers, and scientists regarding sustainable fishery management strategies. Many interview participants have pointed out the concerns regarding the impacts of building offshore wind energy on marine ecosystems and fishery production. In addition to the previously mentioned variables, we included fishery landing statistics data collected from 2019 to 2021 in the decision-making model ___(California Department of Fish and Wildlife 2022)___. We collected annual average offshore wind speed for the Pacific Coast (California, Oregon, and Washington) at a 90-m height from the National Renewable Energy Laboratory ___(AWS Truepower/NREL 2011)___ and the shoreline and military bases map from public databases released by the National Transportation Atlas Databases 2014 ___(NTAD2014)___ and U.S. Geological Survey.

# Results
## For Research Question 1

By generating multiple (more than 8,000) random weight combinations, we did a mixed qualitative–quantitative study of multiple regions, including existing call areas. We found among all weight combinations as input, a higher focus on nonfishery criteria (e.g., wind speed, etc.) is highly positively correlated with a higher suitability score for the existing northern California call area near Eureka. To be quantitative, to position the Eureka call area in the top 5 percent of the suitability score, the weighting strategy required scaling the nonfisheries weight sum to approximately three times the sum of the fisheries weights.

![Result for Research Question 1](/blog-imgs//Results_1.jpg)

![Result for Research Question 1](/blog-imgs//Results_1_2.jpg)

## For Research Question 2

The proposed study categorizes the seven evaluation criteria into two distinct classifications. Category 1 (C1) encompasses parameters such as wind speed at a 90-m height, distance from the shoreline, proximity to military installations, and distance from marine nature reserves. These parameters primarily cater to the interests of energy planning authorities that aim to enhance the operational efficiency of wind turbines and curtail costs associated with construction and operation. Category 2 (C2) incorporates parameters like fishing statistics from 2019 to 2021 that are predominantly of concern to corporate executives and research scholars. The primary objective of this research is to model and visualize the trade-offs between fisheries and offshore wind farms to assist the decision-making process in constructing a new offshore wind site. Table 3 demonstrates a simulated weight matrix for the MCDM model. The study constructed five distinct sets (L1–L5) with a total of ten alternative strategies (L1_a–L5_b), each to showcase an array of decision-making strategies. Each set embodies unique weight ratios, which signify diverse weight allocations for the two types of parameters, with each alternative within the set demonstrating distinct weight distribution among parameters within the same category. To provide an illustrative example, decision alternatives L1_a and L4_b possess divergent weight allocations. L1_a attributes 90 percent and 10 percent weights to categories C1 and C2, respectively, maintaining a uniform weight distribution within the corresponding parameter groups. Conversely, L4_b assigns 60 percent and 40 percent weights to categories C1 and C2, respectively, with weight distributions of (7:7:3:3) within the parameters of C1 and (1:2:3) within the parameters of C2.
![Weight Table](/blog-imgs//WeightsTable.png)
![Result for Research Question 2](/blog-imgs//Results_2.jpg)

# Discussion
In this section, the previously mentioned methods and conclusions are validated and evaluated mainly using sensitivity analysis ___(Simanaviciene and Ustinovichius 2010)___.

To illustrate how different criteria affect decision model outputs, we conducted a sensitivity analysis of all `MCDM` models using an open-sourced Python Library SALib ___(Herman and Usher 2017; Iwanaga, Usher, and Herman 2022)___. The `AHP` method is particularly suited to capturing user inputs and converting them into combinations of weights; we executed a statistical evaluation of the outcomes from both first- and second-order `sensitivity analyses`. These analyses were derived using two `MCDA` algorithmic models, namely the `WASPAS` and `TOPSIS`. In sensitivity analysis, the first-order sensitivity index ***(`S1` value)*** quantifies the impact of an individual criterion on the ultimate outcome, taking both the data and the model into account. As such, the `S1` value in an MCDA model generally displays a strong positive correlation with its corresponding weight value. The correlation between the `S1` values and their respective weight values under the `WASPAS` and `TOPSIS` models is illustrated in the following figure. The graphical representations indicate that both `S1` values maintain a roughly linear positive correlation with weight values. The `WASPAS` method, however, offers a superior linear fit between `S1` values and weights as compared to the `TOPSIS` method. This implies that the influence of a single criterion overall is more diffused in the `TOPSIS` model.

![S1 Scores](/blog-imgs//S1_Score.png)

In `sensitivity analysis`, although the first-order sensitivity index (`S1`) quantifies the impact of individual criteria on the outcome, the second-order sensitivity index (`S2`) gauges the combined influence of pairs of criteria. To visualize these `S2` values for the two employed algorithms, we construct two upper triangular matrices, as illustrated by the heat map in the following Figure. Notably, all `S2` values are less than ***$10^{–3}$***, suggesting negligible interdependence between criteria. The homogeneity of these values further underscores the absence of data redundancy and criterion interdependence in our selection and regression processes. In the future, more indicators, including sea water temperature, sea floor depth, and habitat movement data, could be combined into this proposed `MCDM` model to achieve compatibility for different groups of stakeholders. The flexibility and portability of this application make it adaptable to other geographic regions.

![S2 Scores](/blog-imgs//S2_Score.png)

# Conlcusion
In this study, we implemented a Web-based spatial decision support framework, which integrated three types of `MCDA` models (`WASPAS`, `AHP`, and `TOPSIS`), and various indicators important in making decisions on offshore wind energy site selection and fishery landing statistics ___(California Department of Fish and Wildlife 2022)___ to enable a more efficient spatial decision-making process. There are three major advantages of this `MCDM`. First, this proposed framework enables multivariate spatial data analytics by which multiple types of data sets can be combined into a single spatial decision-making platform. Second, conflicting decision goals are common issues in offshore wind energy plant site selection. In this article, besides the multicriteria baseline decision model (`WSM`), two types of `MCDM` models (`AHP` and `TOPSIS`) were adopted, where indirect decision criteria can be combined to meet several objectives and aid in complex decision-making problems. Third, this application supports collaborative decision-making by developing an interactive user interface in that users can assign weights for different criteria to reach a common goal in energy and fishery management. This tool provides a communication bridge between decision-makers and practitioners in the fishery and wind energy fields to help them develop more sustainable management strategies.

# Authors Info
Zhenlei Song
ZHENLEI SONG is a Graduate Research Assistant in the Department of Geography, Texas A&M University, College Station, TX 77843. E-mail: songzl@tamu.edu. His research interests include geospatial modeling for decision-making support and geospatial cyberinfrastructure.

Piers Chapman
PIERS CHAPMAN is Professor Emeritus in the Department of Oceanography, Texas A&M University, College Station, TX 77843. E-mail: piers.chapman@tamu.edu. His research interests include nutrient cycling in coastal areas, the oceanography of upwelling and other low-oxygen regions, and marine oil pollution.

Jian Tao
JIAN TAO is Assistant Professor in the School of Performance, Visualization, and Fine Arts, Texas A&M University, College Station, TX 77843. E-mail: jtao@tamu.edu. He is affiliated with the Texas A&M Institute of Data Science, the Department of Electrical & Computer Engineering, the Department of Nuclear Engineering, and the Department of Multidisciplinary Engineering Technology at Texas A&M University. His research interests include computational physics, high-performance computing, parallel programming, numerical algorithms, computational framework, data analytics, machine learning, and workflow management.

Ping Chang
PING CHANG is Professor in the Department of Oceanography, Texas A&M University, College Station, TX 77843. E-mail: ping@tamu.edu. His research interests include climate dynamics and climate prediction, as well as global and regional climate modeling.

Huilin Gao
HUILIN GAO is Professor in the Department of Civil & Environmental Engineering, Texas A&M University, College Station, TX 77843. E-mail: hgao@tamu.edu. Her research interests include hydrometeorology, hydroclimatology, hydrological modeling, satellite remote sensing, climate change, and water resources management.

Honggao Liu
HONGGAO LIU is Executive Director of High-Performance Research Computing, Texas A&M University, College Station, TX 77843. E-mail: honggao@tamu.edu. He is also affiliated with the Department of Geography as graduate faculty. His research interests include chemical engineering, computational fluid dynamics, high-performance computing, numerical simulation and modeling, computational and data sciences, artificial intelligence and machine learning, and cyberinfrastructure.

Christian Brannstrom
CHRISTIAN BRANNSTROM is Professor in the Department of Geography, Texas A&M University, College Station, TX 77843. E-mail: cbrannst@geog.tamu.edu. His research interests include social and political aspects of renewable energy and unconventional fossil fuels in Texas.

Zhe Zhang
ZHE ZHANG is Assistant Professor in the Department of Geography and the Department of Electrical and Computer Engineering, Texas A&M University, College Station, TX 77843. E-mail: zhezhang@tamu.edu. Her research interests include GIScience and within it, a focus on cyberinfrastructure, knowledge-driven spatial decision-making, spatial uncertainty modeling, human-centered geospatial artificial intelligence, and social sensing.

# References
1. AWS Truepower/NREL. 2011. “Annual average offshore wind speed (m/s) at a 90m height, Pacific Coast U.S.” (C) Copyright 2022 Data Basin. February 24, 2011. https://databasin.org/datasets/6481496a7b0241569855485ebb26ae33/. 
2. BOEM. 2018. “Request for Interest in California Offshore Wind | Bureau of Ocean Energy Management.” 2018. https://www.boem.gov/Request-for-Interest-in-California-Offshore-Wind. 
3. California Department of Fish and Wildlife. 2022. “Final California Commercial Landings.” Data set. https://wildlife.ca.gov/Fishing/Commercial/Landings#260042586-2019. 
4. California Energy Commission. 2019. “Offshore Renewable Energy,” 2019. Accessed December 20, 2022. https://www.energy.ca.gov/programs-and-topics/topics/renewable-energy/offshore-renewable-energy. 
5. Chaouachi, Aymen, Catalin Felix Covrig, and Mircea Ardelean. 2017. “Multi-criteria selection of offshore wind farms: Case study for the Baltic States.” Energy Policy 103 (April): 179–92. https://doi.org/10.1016/j.enpol.2017.01.018. 
6. Dwyer, Joseph, and David Bidwell. 2019. “Chains of trust: Energy justice, public engagement, and the first offshore wind farm in the United States.” Energy Research &Amp; Social Science 47 (January): 166–76. https://doi.org/10.1016/j.erss.2018.08.019. 
7. Ferguson, Michael D., Darrick Evensen, Lauren A. Ferguson, David Bidwell, Jeremy Firestone, Tasha L. Dooley, and Clayton R. Mitchell. 2021. “Uncharted waters: Exploring coastal recreation impacts, coping behaviors, and attitudes towards offshore wind energy development in the United States.” Energy Research &Amp; Social Science 75 (May): 102029. https://doi.org/10.1016/j.erss.2021.102029. 
8. Fetanat, Abdolvahhab, and Ehsan Khorasaninejad. 2015. “A novel hybrid MCDM approach for offshore wind farm site selection: A case study of Iran.” Ocean &Amp; Coastal Management 109 (June): 17–28. https://doi.org/10.1016/j.ocecoaman.2015.02.005. 
9. Fishburn, Peter C. 1967. “Letter to the Editor—Additive Utilities with Incomplete Product Sets: Application to Priorities and Assignments.” Operations Research 15 (3): 537–42. https://doi.org/10.1287/opre.15.3.537. 
10. Garner, Keith, and Daniel Maroon. 2022. “California Energy Commission Releases Milestone Offshore Wind Energy Report and Sets Maximum Feasible Capacity and Megawatt Planning Goals for 2030 and 2045.” Real Estate, Land Use & Environmental Law Blog, August 15, 2022. https://www.realestatelanduseandenvironmentallaw.com/california-energy-commission-releases-milestone-offshore-wind-energy-report-sets-maximum-feasible-capacity-and-megawatt-planning-goals-for-2030-and-2045.html. 
11. Gonyo, Sarah Ball, Chloe S. Fleming, Amy Freitag, and Theresa L. Goedeke. 2021. “Resident perceptions of local offshore wind energy development: Modeling efforts to improve participatory processes.” Energy Policy 149 (February): 112068. https://doi.org/10.1016/j.enpol.2020.112068. 
12. Grassi, Stefano, Ndaona Chokani, and Reza S. Abhari. 2012. “Large scale technical and economical assessment of wind energy potential with a GIS tool: Case study Iowa.” Energy Policy 45 (June): 73–85. https://doi.org/10.1016/j.enpol.2012.01.061. 
13. Haggett, Claire, Talya Ten Brink, Aaron Russell, Michael Roach, Jeremy Firestone, Tracey Dalton, and Bonnie McCay. 2020. “Offshore Wind Projects and Fisheries: Conflict and Engagement in the United Kingdom and the United States.” Oceanography 33 (4): 38–47. https://doi.org/10.5670/oceanog.2020.404. 
14. Herman, Jon, and Will Usher. 2017. “SALib: An open-source Python library for Sensitivity Analysis.” The Journal of Open Source Software 2 (9): 97. https://doi.org/10.21105/joss.00097. 
15. House, The White. 2022. “FACT SHEET: Biden-Harris Administration Announces New Actions to Expand U.S. Offshore Wind Energy.” The White House, September 15, 2022. https://www.whitehouse.gov/briefing-room/statements-releases/2022/09/15/fact-sheet-biden-harris-administration-announces-new-actions-to-expand-u-s-offshore-wind-energy/. 
16. Iwanaga, Takuya, William Usher, and Jonathan Herman. 2022. “Toward SALib 2.0: Advancing the accessibility and interpretability of global sensitivity analyses.” Socio-Environmental Systems Modelling 4 (May): 18155. https://doi.org/10.18174/sesmo.18155. 
17. Mahdy, Mostafa, and AbuBakr S. Bahaj. 2018. “Multi criteria decision analysis for offshore wind energy potential in Egypt.” Renewable Energy 118 (April): 278–89. https://doi.org/10.1016/j.renene.2017.11.021. 
18. Mekonnen, Addisu D., and Pece V. Gorsevski. 2015. “A web-based participatory GIS (PGIS) for offshore wind farm suitability within Lake Erie, Ohio.” Renewable and Sustainable Energy Reviews 41 (January): 162–77. https://doi.org/10.1016/j.rser.2014.08.030. 
19. Mooney, Aran, Mathias Andersson, and Jenni Stanley. 2020. “Acoustic Impacts of Offshore Wind Energy on Fishery Resources: An Evolving Source and Varied Effects Across a Wind Farm’s Lifetime.” Oceanography 33 (4): 82–95. https://doi.org/10.5670/oceanog.2020.408. 
20. Patel, Meera, Manisha Vashi, and Bhasker Bhatt. 2017. “SMART-Multi-criteria decisionmaking technique for use in planning activities.” Proceedings of New Horizons in Civil Engineering (NHCE-2017). 
21. Russell, Aaron, Samantha Bingaman, and Hannah-Marie Garcia. 2021. “Threading a moving needle: The spatial dimensions characterizing US offshore wind policy drivers.” Energy Policy 157 (October): 112516. https://doi.org/10.1016/j.enpol.2021.112516. 
22. Saaty, Thomas L. 1977. “A scaling method for priorities in hierarchical structures.” Journal of Mathematical Psychology 15 (3): 234–81. https://doi.org/10.1016/0022-2496(77)90033-5. 
23. Saaty, Thomas L. 1988. “What is the Analytic Hierarchy Process?” Mathematical Models for Decision Support, 109–21. https://doi.org/10.1007/978-3-642-83555-1_5. 
24. Saltelli, Andrea, Stefano Tarantola, Francesca Campolongo, and Marco Ratto. 2004. “Sensitivity Analysis in Practice: A Guide to Assessing Scientific Models.” Halsted Press eBooks, March. 
25. Sánchez-Lozano, J.M., M.S. García-Cascales, and M.T. Lamata. 2016. “GIS-based onshore wind farm site selection using Fuzzy Multi-Criteria Decision Making methods. Evaluating the case of Southeastern Spain.” Applied Energy 171 (June): 86–102. https://doi.org/10.1016/j.apenergy.2016.03.030. 
26. Shao, Meng, Zhixin Han, Jinwei Sun, Chengsi Xiao, Shulei Zhang, and Yuanxu Zhao. 2020. “A review of multi-criteria decision making applications for renewable energy site selection.” Renewable Energy 157 (September): 377–403. https://doi.org/10.1016/j.renene.2020.04.137. 
27. Simanaviciene, Ruta, and Leonas Ustinovichius. 2010. “Sensitivity Analysis for Multiple Criteria Decision Making Methods: TOPSIS and SAW.” Procedia - Social and Behavioral Sciences 2 (6): 7743–44. https://doi.org/10.1016/j.sbspro.2010.05.207. 
28. Tegou, Leda-Ioanna, Heracles Polatidis, and Dias A. Haralambopoulos. 2010. “Environmental management framework for wind farm siting: Methodology and case study.” Journal of Environmental Management 91 (11): 2134–47. https://doi.org/10.1016/j.jenvman.2010.05.010. 
29. Thakkar, Jitesh J. 2021. “Weighted Aggregated Sum Product Assessment (WASPAS).” In Studies in Systems, Decision and Control, 253–79. Springer International Publishing. https://doi.org/10.1007/978-981-33-4745-8_15. 
30. Thomsen, Frank, Karin Lüdemann, Rudolf Kafemann, and Werner Piper. 2006. “Effects of offshore wind farm noise on marine mammals and fish.” Biola, Hamburg, Germany on Behalf of COWRIE Ltd 62 (July): 1–62. 
31. Triantaphyllou, Evangelos. 2000. “Multi-Criteria Decision Making Methods.” Applied Optimization, 5–21. https://doi.org/10.1007/978-1-4757-3157-6_2. 
32. Triantaphyllou, Evangelos, and Stuart H. Mann. 1989. “An examination of the effectiveness of multi-dimensional decision-making methods: A decision-making paradox.” Decision Support Systems 5 (3): 303–12. https://doi.org/10.1016/0167-9236(89)90037-7. 
33. Uzun, Berna, Mustapha Taiwo, Aizhan Syidanova, and Dilber Uzun Ozsahin. 2021. “The Technique For Order of Preference by Similarity to Ideal Solution (TOPSIS).” Application of Multi-Criteria Decision Analysis in Environmental and Civil Engineering, 25–30. https://doi.org/10.1007/978-3-030-64765-0_4. 
34. Vaidya, Omkarprasad S., and Sushil Kumar. 2006. “Analytic hierarchy process: An overview of applications.” European Journal of Operational Research 169 (1): 1–29. https://doi.org/10.1016/j.ejor.2004.04.028. 
35. Wahlberg, M, and H Westerberg. 2005. “Hearing in fish and their reactions to sounds from offshore wind farms.” Marine Ecology Progress Series 288: 295–309. https://doi.org/10.3354/meps288295. 
36. Wu, Bing, Tsz Leung Yip, Lei Xie, and Yang Wang. 2018. “A fuzzy-MADM based approach for site selection of offshore wind farm in busy waterways in China.” Ocean Engineering 168 (November): 121–32. https://doi.org/10.1016/j.oceaneng.2018.08.065. 
37. Wu, Yunna, Jinying Zhang, Jianping Yuan, Shuai Geng, and Haobo Zhang. 2016. “Study of decision framework of offshore wind power station site selection based on ELECTRE-III under intuitionistic fuzzy environment: A case of China.” Energy Conversion and Management 113 (April): 66–81. https://doi.org/10.1016/j.enconman.2016.01.020. 
38. Zavadskas, Edmundas Kazimieras, Zenonas Turskis, Jurgita Antucheviciene, and Algimantas Zakarevičius. 2012. “Optimization of Weighted Aggregated Sum Product Assessment.” Elektronika Ir Elektrotechnika 122 (6). https://doi.org/10.5755/j01.eee.122.6.1810. 
39. Zhang, Xue-yang, Xiao-kang Wang, Su-min Yu, Jian-qiang Wang, and Tie-li Wang. 2018. “Location selection of offshore wind power station by consensus decision framework using picture fuzzy modelling.” Journal of Cleaner Production 202 (November): 980–92. https://doi.org/10.1016/j.jclepro.2018.08.172. 
40. Zhang, Zhe, Hao Hu, Dandong Yin, Shakil Kashem, Ruopu Li, Heng Cai, Dylan Perkins, and Shaowen Wang. 2018. “A cyberGIS-enabled multi-criteria spatial decision support system: A case study on flood emergency management.” International Journal of Digital Earth 12 (11): 1364–81. https://doi.org/10.1080/17538947.2018.1543363. 
41. Zilinskas, Antanas. 2001. “Review of Making Hard Decisions with Decision Tools.” Interfaces 31: 127–29.