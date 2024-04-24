---
title: Offshore Wind Energy Site Selection
Description: Offshore Wind Energy Site Selection
Date: '2024-04-23'
image:
    path: /blog-imgs/OSWE_1.jpg
    width: 800
    height: 600
    alt: cover
---

# Citation

Song, Z., Chapman, P., Tao, J., Chang, P., Gao, H., Liu, H., … Zhang, Z. (2024). Mapping the Unheard: Analyzing Tradeoffs Between Fisheries and Offshore Wind Farms Using Multicriteria Decision Analysis. Annals of the American Association of Geographers, 114(3), 536–554. [https://doi.org/10.1080/24694452.2023.2285371](https://doi.org/10.1080/24694452.2023.2285371)

# Abstract
Identifying offshore wind energy sites involves analyzing multiple variables, such as wind speed, proximity to the coastline, and sociocultural factors. This complex decision-making process often involves many stakeholders, resulting in conflicting data and goals. Decision analysis that promotes collaboration, transparency, understanding, and sustainability is key. This study presents a unique model of human–environment interaction that reconciles different perspectives and visualizes the balance between fisheries and wind power. Using three multicriteria decision models (weighted aggregated sum product assessment [WASPAS], technique for order of preference by similarity to ideal solution [TOPSIS], and analytical hierarchy process [AHP]), we analyze the decision mix for wind farm selection and assess the impacts on fisheries using historical data. Our approach was applied to an upwelling system in California, generating ten tailored decision scenarios for different stakeholder groups. The results showed that adaptation scores for specific call areas in northern California decreased when the weight of fishery factors increased, and there was a tendency for high-scoring areas to shift southward as fishery parameters increased. The results of the sensitivity analysis showed that the first-order sensitivity scores of WASPAS were better correlated with the weights compared to TOPSIS, whereas the second-order sensitivity scores were generally lower, indicating a reduced interdependence of our model.

# Research Question

1. Are there overlaps or conflicts between expected fishing efforts, bycatch, protected species, and human activities such as offshore energy development, and can management decisions mitigate them?
2. Can we find spatial solutions for balancing the trade-offs between Energy Commission goals and the sustainability of fisheries and conservation of ecosystems?

# Multi-Criteria Modeling Algos
Multicriteria decision analysis (MCDA) is a mathematical decision-making framework that combines many decision criteria to meet one or several objectives that support decision-making (Shao et al. Citation2020).

## WASPAS
Given a set of ***m*** alternatives, denoted as $A_1, A_2, A_3, … , A_m$, and a set of ***n*** decision criteria, denoted as $C_1, C_2, C_3, … , C_n$, it is assumed that a decision-maker has to determine the weight value ***$\omega_{ij}$*** (for ***i=1,2,3,...,m*** and ***j=1,2,3,...,n***) of each alternative in terms of each criterion (Fishburn Citation1967).

For each row of dataset ***$X$*** with ***$x_j$***, values are defined, along with the criteria weight matrix ***$W$*** (the weight of the relative performance of the decision criteria). 
### WSM
$$
Q_{i}^{WSM} = \Sigma_{j=1}^{n}\omega_{ij}*x_j\\
\textbf{where, }\omega_{ij}\textbf{ is the weight for the }j{th}\textbf{ criterion for the }i{th}\textbf{ alternative}\\
x_j\textbf{ is the data value of the }j{th};\\
\textbf{and, }Q_{i}^{WSM}\textbf{ is the WSM score for the }i{th}\textbf{ decision alternative.}
$$

## WPM

$$
Q_{i}^{WPM} = \Pi_{j=1}^{n}x_j^{\omega_{ij}}\\
\textbf{where, }\omega_{ij}\textbf{ is the weight for the }j{th}\textbf{ criterion for the }i{th}\textbf{ alternative}\\
x_j\textbf{ is the data value of the }j{th};\\
\textbf{and, }Q_{i}^{WPM}\textbf{ is the WPM score for the }i{th}\textbf{ decision alternative.}
$$

## WASPAS
$$
Q_{i}^{WASPAS} = \lambda\Sigma_{j=1}^{n}\omega_{ij}*x_j + (1-\lambda)\Pi_{j=1}^{n}x_j^{\omega_{ij}}\\
\textbf{where, }\omega_{ij}\textbf{ is the weight for the }j{th}\textbf{ criterion for the }i{th}\textbf{ alternative}\\
x_j\textbf{ is the data value of the }j{th};\\
\textbf{and, }Q_{i}^{WASPAS}\textbf{ is the WASPAS score for the }i{th}\textbf{ decision alternative.}
$$

### AHP
$$