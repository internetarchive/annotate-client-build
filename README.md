# annotate-client-build

This is used to store and update just the build directory of [annotate-client](https://github.com/internetarchive/annotate-client) in order to deploy on the web server.

All Pull Requests should go to that other repo *first*, unless it's an update to this README. Any PRs on this repo should include a link back to that other repo's PR or commit, and also please describe what changes you made. Updates to this code should, in most cases, simply be a copy of the `build` directory from **annotate-client** following the steps below.


## Prior to Building

You'll need to obtain an OAuth Client ID registered with the "h" service. Read the Hypothesis API document on [Authorization](https://h.readthedocs.io/en/latest/api/authorization/) to find out how to get one.

(Or if on the Wayback Team, ask @carlg)


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


## More Info

To **annotate** the PDF using the Default Viewer, add `annotate=yes` like so:
https://archive.org/services/context/pdf/viewer/web/viewer.html?annotate=yes&file=pdfs/report.pdf

