---
title: Codes de présentation
type: help
---
<!--more-->

## Introduction
- Ci-après les codes de présentation utilisables pour présenter les informations dans une page.
- Le principe est d'encadrer ce code par des caractères spéciaux 
- `{ {<` pour marquer le début (_à noter qu'en réalité il n'y a pas d'espace entre les 2 accolades, un blanc a été ajouté pour éviter son interprétation par le serveur_)
- `>}}` pour marquer la fin
- Des paramètres nommés ou positionnels préciseront les données de présentation 
```html
{ {< code paramètre1="" paramètre2="" >}}
```
- ou paramètres positionnels
```html
{ {< code paramètre1 paramètre2 >}}
```
- Si le code embarque plusieurs objets la fin du code sera fermé `/code`
```html
{ {< code >}}
...
{ {< /code >}}
```

## cartes
Pour présenter des éléments à l'intérieur du code sous forme de cartes (voir `pdf` plus loin)
```html
{ {< cartes >}}
...pdf
{ {< /cartes >}}
```
## colonnes et colonne
- Le code `colonnes` permet de diviser la page en **16 colonnes**
- Il faudra indiquer ensuite pour chaque `colonne` le nombre de subdivisions dans la langue de Shakespeare (**one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen**)
```html
{ {< colonnes >}}
{ {< colonne "four" >}}
...la colonne occupe 4/16 de la largeur totale
{ {< /colonne >}}
{ {% colonne "twelve" %}}
...la colonne occupe 12/16 de la largeur totale
et contiendra du texte **markdown** car entourée du caractère %
{ {< /colonne >}}
{ {< /colonnes >}}
```
{{< colonnes >}}
{{< colonne "four" >}}
{{< image image="/site/logo-comite-foires.jpg" taille="petite" >}}
{{< /colonne >}}
{{% colonne "twelve" %}}
Le Code de la Propriété Intellectuelle et, plus généralement, les traités et accords internationaux comportant des dispositions relatives à la **protection des droits d'auteurs**, interdisent, quel que soit le procédé utilisé, intégralement ou partiellement, la représentation, la reproduction, pour un usage autre que privé ou la modification sans l’autorisation expresse de l’auteur.
{{< /colonne >}}
{{< /colonnes >}}

## diaporama et diapo
- Pour présenter un diaporama d'images dont il faudra préciser la **taille** (**mini petite moyenne grande**)
- Chaque diapo pourra avoir un **titre** et un **lien**
```html
{ {< diaporama taille="mini" >}}
{ {< diapo titre="2006" image="/foire/affiches/2006.jpg" >}}
{ {< diapo titre="2019" image="/foire/affiches/2019.jpg"
lien="http://www.ipernity.com/doc/hartmann/album/1229184">}}
{ {< /diaporama >}}
```
{{< diaporama taille="mini" >}}
{{< diapo titre="2006" image="/foire/affiches/2006.jpg" >}}
{{< diapo titre="2015" image="/foire/affiches/2015.jpg" lien="https://drive.google.com/drive/folders/1GFChXzLQKaY4M9lawzlmM-JUaf-xVLv0?usp=sharing" >}}
{{< diapo titre="2016" image="/foire/affiches/2016.jpg" lien="https://drive.google.com/drive/folders/1C-L1FOJ-0laJgIjcSe-eIogu_AUFgGHg?usp=sharing" >}}
{{< diapo titre="2017" image="/foire/affiches/2017.jpg" lien="http://www.ipernity.com/doc/hartmann/album/974818" >}}
{{< diapo titre="2018" image="/foire/affiches/2018.jpg" lien="http://www.ipernity.com/doc/hartmann/album/1055172" >}}
{{< diapo titre="2019" image="/foire/affiches/2019.jpg" lien="http://www.ipernity.com/doc/hartmann/album/1229184" >}}
{{< diapo titre="2020" image="/foire/affiches/2020.jpg" >}}
{{< /diaporama >}}

## image
- Affichage d'une image (encadrée) avec un éventuellement un **titre**, **taille**, **lien** 
- Pour **centrer** l'image, il faudra la placer dans une **colonne**
```html
{ {< colonnes >}}
{ {< colonne "ten" >}}
{ {< image image="/exposant/2019/Plan du parc exposition.jpg" taille="grande" 
lien="/exposant/2019/Plan du parc exposition.pdf" titre="Plan du site" >}}
{ {< /colonne >}}
{ {< /colonnes >}}
```
{{< colonnes >}}
{{< colonne "height" >}}
{{< image image="/exposant/2019/Plan du parc exposition.jpg" taille="mini" lien="/exposant/2019/Plan du parc exposition.pdf" titre="Plan du site" >}}
{{< /colonne >}}
{{< /colonnes >}}

## liste et item
- Pour présenter une liste d'items.
- Chaque **item** pourra utiliser une **icône** comme marqueur de liste
- La bibliothèque d'icônes est ici https://fomantic-ui.com/elements/icon.html
```html
{ {< liste >}}
{ {< item icone="marker" 
texte="Comité des Foires Porte Chalon 79400 Saint-Maixent l'École"
lien="https://goo.gl/maps/Rb1W1BKu6sMeVV9P9">}}
{ {< item icone="mail" 
texte="contact@foire-expo-st-maixent.com" 
lien="mailto:contact@foire-expo-st-maixent.com">}}
{ {< item icone="phone" texte="05 49 05 76 25">}}
{ {< /liste >}}
```
{{< liste >}}
{{< item icone="marker" texte="Comité des Foires Porte Chalon 79400 Saint-Maixent l'École" lien="https://goo.gl/maps/Rb1W1BKu6sMeVV9P9">}}
{{< item icone="mail" texte="contact@foire-expo-st-maixent.com" lien="mailto:contact@foire-expo-st-maixent.com">}}
{{< item icone="phone" texte="05 49 05 76 25">}}
{{< /liste >}}

## message
Pour afficher un message de type info **success warning error**
```php
{ {% message warning %}}
Texte du message
{ {% /message %}}
```
Type de _message_ : 

{{% message info %}}
 Texte du message de type **info**
{{% /message %}}

{{% message success %}}
Texte du message de type **success**
{{% /message %}}

{{% message warning %}}
Texte du message de type **warning**
{{% /message %}}

{{% message error %}}
Texte du message de type **error**
{{% /message %}}

{{% message %}}
Texte du message sans préciser le type
{{% /message %}}

# pdf
- Pour proposer le téléchargement d'un document PDF.
- Devra être associé à `cartes`
```html
{ {< cartes >}}
{ {< pdf pdf="/exposant/2019/Inscription viticulteur complet.pdf" titre="Vous êtes Viticulteur" >}}
{ {< pdf pdf="/exposant/2019/Inscription air libre foire complet.pdf" titre="Activités en air libre" >}}
{ {< /cartes >}}
```
{{< cartes >}}
{{< pdf pdf="/exposant/2019/Inscription viticulteur complet.pdf" titre="Vous êtes Viticulteur" >}}
{{< pdf pdf="/exposant/2019/Inscription air libre foire complet.pdf" titre="Activités en air libre" >}}
{{< /cartes >}}
