# StyleRemover-for-ViolentMonkey
Script for ViolentMonkey extension (https://violentmonkey.github.io/).
Possibly works with little to no changes with similar extensions i.e. tampermonkey, greasemonkey etc.

# Possible use cases
- You could want remove specific classNames on websites for debug purposes. You can of course use debug tool, but on some cases this may be faster and more effective tool. 
- Could also be used to bypass some poorly implemented paywalls.
- Sometimes there is some issues on websites, this script could be used to temporary fix those issues.

# Usage
1. Install ViolentMonkey
2. Set new script on ViolentMonkey
3. Copy this script (StyleRemover.js)
4. Set up classNames inside the script that you want to be removed from the site(s).
5. OPTIONAL: Set-up @match parameter if you dont want to run script globally on all sites you visit (https://violentmonkey.github.io/api/matching/)
