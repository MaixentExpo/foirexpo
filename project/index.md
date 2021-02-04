# PROJET FOIREXPO ST-MAIXENT

https://gohugo.io/

## Installation de Hugo
- https://gohugo.io/getting-started/installing/#fetch-from-github
```
git clone https://github.com/gohugoio/hugo.git
cd hugo
go install
```


## Aide sur Markdown
- https://guides.github.com/features/mastering-markdown/
- https://www.webfx.com/tools/emoji-cheat-sheet/
- https://www.markdownguide.org/basic-syntax/

## Fichiers personnaisés

theme/dreamexpo  :smile: 
- /data
  - fr.toml (date format french)
- /i18n
  - fr.toml (mot in french)
- /layouts
  - index.html définit main et js
  - /categories
    - terms.html (liste des catégories)
  - /_default
    - baseof.html
    - list.html la page principale avec _header et summary
    - single.html (template article)
    - summary.html (template carte article)
  - /partials
    - header.html (template carte de navigation)
    - nav.html (ligne de navigation home)
  - /posts
    - section.html (liste des archives)
  - /tags
    - terms.html (liste des tags)


