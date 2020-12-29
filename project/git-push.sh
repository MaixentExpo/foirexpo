# PUSH PRODUCTION

hugo -d /volshare/foirep --cleanDestinationDir

# git init
# git add .
# git commit -m "version initiale"
# git init --bare /volshare/src/foirexpo.git
# git remote add volshare /volshare/src/foirexpo.git
# git push volshare master
# git branch --set-upstream-to=volshare/master master

git status
git add .
git commit -m "ok boumer"
git pull
git push volshare master
