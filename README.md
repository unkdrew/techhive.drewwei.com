[![Netlify Status](https://api.netlify.com/api/v1/badges/a55c8f7f-edb7-474b-a634-b3f1abf9ea56/deploy-status)](https://app.netlify.com/sites/dreezys-tech-hive/deploys)

### 1. Environment Setup
* Install [Homebrew](https://docs.brew.sh/Installation).
* Install `nvm`
  * Visit: https://github.com/nvm-sh/nvm
* Install `node` and `npm`
  * Run command: `nvm install --lts`
  * Run command: `npm install -g npm@latest`
  * Verify version of the installed `node` and `npm`
    * Run command: `node --version` (Version should be greater than or equal to `v18.9.1`.)
    * Run command: `npm --version` (Version should be greater than or equal to `9.6.5`.)
  * Specify the version of `node` to be used by Netlify.
    * Update file `.node-version`.
* Install Git.
  * If you use a Mac, you can skip this. Apple ships their own fork of `git`.
* Install Gatsby CLI.
  * Run command: `npm install -g gatsby-cli`
* Install Netlify CLI.
  * Run command: `npm install -g netlify-cli`
* Install Docker.
  * Visit [docker.com](https://www.docker.com/) to download a desktop client for Mac.

### 2. Recommended Development Tools
* Terminal: [iTerm2](https://www.iterm2.com/)
* Shell: [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh)

### 3. Local Development
#### 3.1 Check package health
* Upgrade `node` and `npm`.
  * Run commands:
    * `nvm install --lts`
    * `npm install -g npm@latest`
* Check if there are dependencies not declared in `package.json`.
  * This checks if there are dependencies that are available on your machine but not declared in this package's dependency closure, e.g. dependencies that were installed via `npm install` without specifying the `--save` flag.
  * Run command: `npm prune`
* Check if there are upgradable global dependencies.
  * Run command: `npm outdated -g --depth=0`
  * To update all global dependencies:
    * Run command: `npm update -g`
* Check if there are upgradable project dependencies.
  * Use `npm-check-updates`:
    * `npm i -g npm-check-updates`
    * `ncu -u`
    * `npm install`

#### 3.2 To run the website locally on your machine
* `cd` into the root directory of the website project.
* Run command: `npm install && netlify dev`

#### 3.3 How to test Netlify build/deploy locally
* For the first time:
  * Run command:
  ```
    docker pull netlify/build
    mkdir netlify_builds
    cd netlify_builds
    git clone https://github.com/netlify/build-image
    cd build-image
    ./test-tools/start-image.sh </path/to/your/repository>
    /opt/build-bin/build npm run build
  ```
* For later attempts:
  * Run command:
  ```
  ./test-tools/start-image.sh </path/to/your/repository>
  /opt/build-bin/build npm run build
  ```

### 4. Publish to Production
Netlify is configured to trigger a deployment once a commit is pushed to GitHub.

* Run command: `git push`
