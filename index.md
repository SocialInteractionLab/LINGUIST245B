## Course number

LINGUIST 245B / SYMSYS 195L

## Instructor

|  |  |
|--|--|
| Name: | Robert Hawkins |
| Contact: | rdhawkins@stanford.edu |
| Office: | 460-113 |

Please book a time [here](https://app.usemotion.com/meet/robert-hawkins/meetings?d=30) if you would like to meet!

## TAs

|  |  |
|--|--|
| Name: | [Bran Papineau](https://branpap.com/) |
| Contact: | branpap@stanford.edu |
| Office hours: | 1-2pm Monday/Wednesday |

|  |  |
|--|--|
| Name: | [Jinyoung Jo](https://jinyoungjo.com/) |
| Contact: | jinyoungjo@stanford.edu |
| Office hours: | [book a meeting here](https://jinyoungjo.youcanbook.me) |

## Course description

Linguistic theories make empirical claims. What data can we draw on to rigorously evaluate these claims? This course takes up one powerful source of empirical evidence, providing a hands-on introduction to the design, implementation, and analysis of psycholinguistic experiments. A particular focus is placed on careful reasoning about our linking hypotheses, the often-implicit assumptions connecting abstract theories to concrete, measurable behavior.

You will conduct a complete replication of a published psycholinguistics experiment. Through this project, students will gain experience with the full experimental workflow: designing and programming interactive web experiments, recruiting participants online via Prolific, analyzing and visualizing data in R, managing projects with git/GitHub, and pre-registering studies on the Open Science Framework.

## Learning goals

After taking this course, students should know how to:

* Articulate explicit linking hypotheses between theoretical predictions and empirical response patterns, recognizing how different measures provide distinct windows into mental processes.
* Critically evaluate methodological choices in psycholinguistics research, including dependent measures (response times, self-paced reading, acceptability judgments), sample size justification, measurement validity, and potential confounds or design limitations.
* Conduct a complete replication of a psycholinguistics study, incorporating open science practices including pre-registration, version control, and reproducible analysis pipelines.
* Analyze psycholinguistic data using appropriate statistical models (including mixed-effects regression) and create effective data visualizations.
* Interpret statistical results in light of power, generalizability, and measurement concerns, drawing appropriate theoretical conclusions.
* Communicate experimental findings through multiple modalities—oral presentations, written replication reports, and reproducible code—following standards for transparency and rigor.

## Assessment

* 50% weekly project milestones
* 25% presentations (proposal and project)
* 25% in-class participation and reading responses

## Prerequisites

1. LINGUIST 245A (Introduction to Psycholinguistics).
2. Basic familiarity with R. If you have never used R, install [R](https://www.r-project.org/) and [RStudio](https://www.rstudio.com/) and complete the "Introduction to R" on [datacamp](https://www.datacamp.com/home). We'll use it for data analysis and visualization.
3. Basic familiarity with navigating the command line. Complete at least the first two tutorials of [this UNIX tutorial](http://www.ee.surrey.ac.uk/Teaching/Unix/) if you have never used the command line.
4. Basic familiarity with javascript/HTML/CSS. If you have never used these, complete [this javascript tutorial](https://www.codecademy.com/learn/introduction-to-javascript) and [this HTML tutorial](https://www.codecademy.com/learn/learn-html). You may also find [this CSS tutorial](https://www.codecademy.com/learn/learn-css) useful.
5. We'll use [git](https://git-scm.com/) & [GitHub](https://github.com/) to store collected data, analysis scripts, and basic documentation. Make sure they're installed on your system.
6. We'll use the [Open Science Framework](https://osf.io/) to pre-register your experiments. Sign up for an account if you don't already have one.

If you feel overwhelmed by any of these except (1), don't worry. It will take work, but by the end of the quarter you'll have acquired all of these tools to at least a basic working level. [This website](https://sebschu.com/web-based-experiments/) contains lots of useful information about tool setup.

## Readings

We'll be making use of original papers, blog posts / online articles, as well as the following textbooks:

1. Frank, M.C., Braginsky, M., Cachia, J., Coles, N., Hardwicke, T., Hawkins, R., Mathur, M., and Williams, R. (2025). [Experimentology: An Open Science Approach to Experimental Psychology Methods](https://experimentology.io/). MIT Press.
2. Gelman, A., & Hill, J. (2007). [Data analysis using regression and multilevel/hierarchical models](https://canvas.stanford.edu/files/15066456/download?download_frd=1). Cambridge University Press.
3. Winter, B. (2020). [Statistics for Linguists: An Introduction Using R](https://bodowinter.com/books.html). Routledge.
4. Gerstenberg, T. (2025). [Statistical Methods for Behavioral and Social Sciences](https://psych252.github.io/psych252book/index.html).

## Course format

*Readings & discussion*: Brief 1-2 paragraph responses for readings will be collected in advance to facilitate class discussion (due on Canvas by midnight the night before).

*Project*: Each student will complete a replication of a previously published experiment. Assessment will be based on lightning project proposal presentations (5 minutes), final project presentations (last week of class), and a final replication report. Undergraduates are welcome to work in groups, with instructor permission.

## Schedule

The course will meet Tuesdays and Thursdays from 4:30-5:50pm in Building 20, Rm 21B.

| Week | 🗣️ Tuesday | 💻 Thursday |
|------|------------|-------------|
| 1 | **Mar 31**<br>Course planning. What does it mean to test a theory?<br>✍️ None. | **Apr 2** *(on Zoom)*<br>Implement a response time study.<br>✍️ [Bott & Noveck (2004)](https://canvas.stanford.edu/files/15066454/download?download_frd=1)<br>✍️ Chapters 1, 8, & 9 of [Experimentology](https://experimentology.io). |
| 2 | **Apr 7**<br>Linking hypotheses. Types of psycholinguistic data.<br>✍️ Pick one: [Tanenhaus (2004)](https://canvas.stanford.edu/files/15066452/download?download_frd=1), [Breheny et al. (2006)](https://canvas.stanford.edu/files/15066463/download?download_frd=1), or [Sun & Breheny (2020)](https://canvas.stanford.edu/files/15066462/download?download_frd=1) | **Apr 9**<br>Implement a self-paced reading time study.<br>✍️ Submit working version. |
| 3 | **Apr 14**<br>What is open science? What is pre-registration?<br>✍️ [Wilson et al. (2017)](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005510)<br>✍️ Chapters 3 and 11 of [Experimentology](https://experimentology.io). | **Apr 16**<br>Version control and data management.<br>✍️ Chapter 13, Appendix B of [Experimentology](https://experimentology.io) |
| 4 | **Apr 21**<br>Lightning presentations. | **Apr 23**<br>Deployment using GitHub Pages + Datapipe.<br>✍️ [Rodd (2024)](https://www.sciencedirect.com/science/article/pii/S0749596X23000712) |
| 5 | **Apr 28**<br>Power and sample size justification.<br>✍️ [Button et al. (2013)](https://www.sfu.ca/~lmgonigl/materials-qm/papers/button-2013-365.pdf)<br>✍️ [Lakens (2022)](https://online.ucpress.edu/collabra/article/8/1/33267/120491/Sample-Size-Justification)<br>✍️ Chapters 10 and 12 of [Experimentology](https://experimentology.io) | **Apr 30**<br>Run a power analysis in R. Use Quarto for reproducible reports.<br>✍️ Submit template with power analysis. |
| 6 | **May 5**<br>Exploratory data analysis. How to make good figures.<br>✍️ [Franconeri et al. (2021)](https://friendly.github.io/6135/papers/Franconeri-etal-2021-WhatWorks.pdf)<br>✍️ Chapter 15 of [Experimentology](https://experimentology.io) | **May 7**<br>Experiment workshop.<br>✍️ Chapters 2–5 of [Gerstenberg (2025)](https://psych252.github.io/psych252book/index.html) |
| 7 | **May 12**<br>Basics of statistical estimation and inference. Linear regression.<br>✍️ Chapters 5, 6, and 7.1 of [Experimentology](https://experimentology.io)<br>[optional] Chapters 1, 2, and 5 of [Statistical Rethinking](https://xcelab.net/rm/)<br>[optional] [Calin-Jageman & Cumming (2019)](https://www.tandfonline.com/doi/full/10.1080/00031305.2018.1518266) | **May 14**<br>Run a linear regression with `lm`.<br>✍️ Chapters 10–13 of [Gerstenberg (2025)](https://psych252.github.io/psych252book/index.html) |
| 8 | **May 19**<br>Handling random effects at the item-level and subject-level.<br>✍️ [Yarkoni (2022)](https://mzettersten.github.io/assets/pdf/ManyBabies_BBS_commentary.pdf)<br>✍️ Chapters 14 of [Winter (2020)](https://bodowinter.com/books.html)<br>[optional] [Barr et al. (2013)](https://davebraun.net/dissertation/experiments/analysis/exp2/scripts/exploratory/randomEffects/barr_et_al_2013.pdf) | **May 21**<br>Run a mixed-effects regression with `lmer`.<br>✍️ Chapters 17–20 of [Gerstenberg (2025)](https://psych252.github.io/psych252book/index.html) |
| 9 | **May 26**<br>Data analysis workshop.<br>✍️ None. | **May 28**<br>Data analysis workshop.<br>✍️ None. |
| 10 | **Jun 2**<br>Final presentations. | **Jun 4**<br>Final presentations. |

## Project timeline

| Week | Action |
|------|--------|
| 1 | Pick a paper to replicate, submit your choice via Canvas. |
| 2 | Book a 15 minute meeting to discuss your project with your point person. |
| 3 | Create a GitHub repo for your experiment, initialize jsPsych, add your stimuli. |
| 4 | Submit a link to initial prototype of experiment to your point person for feedback. |
| 5 | Complete methods and analysis pre-registration, incorporate feedback on experiment. |
| 6 | Run Pilot A (in class). Submit a working link to your experiment for Pilot B. |
| 7 | Finalize experiment for full sample. Get instructor permission to run. |
| 8 | Submit updated report with analysis pipeline. Run final sample on Prolific. |
| 9 | Push anonymized data to repo. Update replication report with statistical results. |
| 10 | Push final report to repository. |
