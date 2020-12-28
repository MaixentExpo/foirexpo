---
title: Gestion des pages
type: help
---
<!--more-->
## Structure d'une page

La 1ère partie de la page est constituée de méta-données :

```yaml
---
title: Vous voulez exposer # le titre de la page
date: 2020-08-10 		# respecter bien le format des dates AAAA-MM-JJ
draft: false 			# état brouillon (true ou false)
publishDate: 2020-10-20 # date de publication (date à partir de laquelle est sera visible sur le site)
expiryDate: 2021-01-25  # date d'expiration (date à partir de laquelle la page ne sera plus visible
tags: # étiquettes pour classer la page et ainsi la retrouver sur le site
- exposant
- vin
- news # etiquette particulière pour mettre le lien sur le sommaire
categories: # catégories pour donner à la page un comportement particulier
- links # page qui sera présentée par un lien sur le sommaire
cover: /exposant/cover.png # image de couverture de la page dans sa carte
---
```
_À noter que les méta-données sont encadrées par 3 tirets_ `---`
