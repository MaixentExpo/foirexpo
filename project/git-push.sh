# PUSH PRODUCTION

hugo -d /volshare/foirep --cleanDestinationDir

# Création d'un repository sur github
# https://github.com/MaixentExpo/foirexpo
# Déclarer SSH and GPG keys sur Personnal settings de pbillerot
# Inviter pbillerot en tant que mamager du projet
# debian
# /volshare/src
# git clone https://github.com/MaixentExpo/foirexpo.git
# git remote set-url origin git@github.com:MaixentExpo/foirexpo.git
# beedule
# /volshare
# git clone /volshare/src/foirexpo.git

git status
git add .
git commit -m "ok boumer"
git pull
git push origin master
