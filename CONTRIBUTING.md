# Contributing to DoorGo

## Git Workflow

![GIt-Workflow-Diagram](https://user-images.githubusercontent.com/19491358/192397626-4435f01b-9b95-4245-a8a5-c85e2aa924b8.png)
(source: http://www.davidgw.com/git-workflow-model/)

## Steps

1. Fork the owner's repo (upstream)

   The original(owner) repo should include 2 branches: main(master), dev

   - main(master) branch for production
   - dev branch for development

2. `git clone` your forked(origin) repo to local

3. `git remote add upstream <repo-url>`

4. `git checkout -b` a new feature branch

5. Update the code and `git commit`

6. `git pull upstream dev`

7.  `git push` the modified code

8. Create pull request on GitHub, origin/feature -> upstream/dev

9. Code review on GitHub

10. Merge pull request on GitHub

## Example

### Manage project with git:

<img width="955" alt="git commands" src="https://user-images.githubusercontent.com/19491358/192397718-609813ed-a304-468e-9aec-07c969cbf1bb.png">

### Create pull request on GitHub:
<img width="1268" alt="create pull request" src="https://user-images.githubusercontent.com/19491358/192397755-705c1937-e019-4c76-b317-0e7d3eaff5b4.png">

### Code review on GitHub:
<img width="1982" alt="code review" src="https://user-images.githubusercontent.com/19491358/192397896-437a5c2c-008f-4188-baf3-cdc462158f2e.png">

### Merge pull request on GitHub:
<img width="1982" alt="merge pull request" src="https://user-images.githubusercontent.com/19491358/192397983-06d336c3-5c86-463f-9662-d0819eba6d3c.png">
