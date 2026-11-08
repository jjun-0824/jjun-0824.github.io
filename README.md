# jjun-0824.github.io

Personal homepage of **Ijun Jang (장이준)**: https://jjun-0824.github.io

```
index.html            homepage
css/site.css          homepage styles
images/profile.jpg    profile photo
cv/en.html, ko.html   English / Korean CV (web version)
cv/*.pdf              PDF versions of the CVs
scripts/build_cv_pdf.js
```

## Updating the CV PDFs

Edit `cv/en.html` or `cv/ko.html`, then regenerate the PDFs (needs Node + Playwright):

```bash
node scripts/build_cv_pdf.js
```
