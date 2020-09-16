# annotate-client-build

This is used to store and update just the build directory of [annotate-client](https://github.com/internetarchive/annotate-client) in order to deploy on the web server.

## How To Deploy

1. Get the [annotate-client](https://github.com/internetarchive/annotate-client) source code. You should be on the **iarchive** branch.
`git clone git@github.com:internetarchive/annotate-client.git`

2. Check that these dependencies are installed: `node npm gulp yarn tox`

3. Double check that you don't have `build` listed in your global `.gitignore` file in your home directory.

4. Run `npm install`

5. Build by running `./scripts/build-app OATH_CLIENT_ID`

6. Copy the `build` directory from **annotate-client** into the root of **annotate-client-build** repo, copying over what was there previously: `cp -fRp build ../annotate-client-build/`

7. `git commit` then `git push`

8. Test it at: https://archive.org/services/context/pdf/viewer/web/viewer.html?file=pdfs/report.pdf

9. Modify Source. `GOTO 5`

