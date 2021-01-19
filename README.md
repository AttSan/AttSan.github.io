# Portfolio Template
## Make your own!
1. Fork this repository or use the Template button.
2. Update `_config.yml` to contain your information.
    1. Change `url` to be what your Github Pages will be (the name of the repository)
    2. Make sure it has the /
3. Go to the repository settings and turn on GitHub Pages

## Add your portfolio

Head to `_data` and fill out either `projects.yml`, `experience.yml` and `education.yml`.

## Add project posts

1. Make a new `.md` file inside of `projects`.
2. Add the header to your markdown file (see below) and change the title to the name of your blog post.
3. Write your project page! Can be a README from GitHub or your Devpost page.
4. Add the `page-name` field to your `projects.yml` (see below).

Top of post markdown file post.
```
---
title: Sprint 1 Project
layout: page
---
```

`projects.yml` with the `page-name` field.

```yaml
- title: Machine Learning Project
  event: MLH Fellowship Explorer Sprint 3 - Batch 1
  date: Fall 2020
  page-name: sprint1
```

## Development

If you want to test it locally or add some new features, run the below commands. Make sure to have Ruby and Bundler installed.

```
bundle install
bundle exec jekyll serve
```
