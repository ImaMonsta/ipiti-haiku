sed -i "s/\/\/ 👾/release:'$1',environment:'production',tags: {git_commit: '$1'}/g" src/index.js
