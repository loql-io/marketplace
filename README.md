# Loql Marketplace

This repo should be included as a dependancy in the shops repos.

Shop repos:

```bash
https://github.com/loql-io/berko-sports
https://github.com/loql-io/petals
https://github.com/loql-io/hamlins
https://github.com/loql-io/creative-collective
https://github.com/loql-io/loql-ly
```

### To run locally
```bash
yarn install
```
```bash
yarn dev
```
Assumptions:
You have a .env file with correct values see each shop repo for an example.

### Bump all repos above to a particular version

Usage:

### Step 1:
[Create release and publish a new version](https://github.com/loql-io/marketplace/releases/new)

### Step 2:
```bash
yarn bumpall <version>      without "v" eg. 0.0.2
```

This will automatically bump all the shop repos to a specified version and then kick off a deployment.

Assumptions:
- Shop repos have been all cloned and in the same folder as this repo.
- Repo names have not been modified

Tips:
You might need to enable the bumpall script to execute
```bash
chmod +x bumpall.sh
```
