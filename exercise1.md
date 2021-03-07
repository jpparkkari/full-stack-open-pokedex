# Exercise 1

For team of six I would suggest using [**Jenkins**](https://www.jenkins.io/) for *CI set up*, [**nose2**](https://nose2.io/) for *testing* and [**pylint**](https://www.pylint.org/) for *linting*. They are all free, open source, and widely used.

Jenkins needs own server, but it can be relatively lightweight.

Other options for CI could be [**CircleCI**](https://circleci.com/), [**TravisCI**](https://travis-ci.com/), [**Bamboo**](https://www.atlassian.com/software/bamboo), [**Gitlab CI**](https://docs.gitlab.com/ee/ci/) and of course [**GitHub Actions**](https://docs.github.com/en/actions). Github Actions and Gitlab CI basically require that you use the respected repository provider.

In case the team is using Windows, also [**Azure Pipelines**](https://azure.microsoft.com/en-us/services/devops/pipelines/) should be considered. I don't know if there are some benefits using GitHub as a repository with Azure, since both are owned by Microsoft. 

All of these should be able to be set up into cloud, which is the best option if the team is not in same premises.

Some other *linting tools* are [**Flake8**](https://flake8.pycqa.org/) and [**black**](https://pypi.org/project/black/). From these Flake8 is really viable option to pylint. Black might be bit too strict at this time. 
It's good for forcing consistent style for the whole team, but I wouldn't use it unless there are real problems with coding style within the team.

*Testing tools* options could be [**Robot Framework**](https://robotframework.org/) or [**Pytest**](https://pytest.org/). But I don't see real need for more complicated than **nose2**, especially for such a small team.

