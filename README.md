# Hey it's dotfiles! ππΌ

> All my dotfiles with configurations.

## Get started π

Clone the project

```bash
  git clone --bare https://github.com/teziovsky/dotfiles.git $HOME/.dotfiles
```

Define the alias in the current shell scope

```bash
  alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
```

Checkout the actual content from the git repository to your `$HOME`

```bash
  dotfiles checkout
```

> Note that if you already have some of the files you'll get an error message. You can either (1) delete them or (2) back them up somewhere else. It's up to you.

Awesome! Youβre done. π π₯³

## Author ππΌβ

#### [@teziovsky](https://www.github.com/teziovsky)

## Contact βοΈ

If you have any suggestions, please [email me here](mailto:jakub.soboczynski@icloud.com)! π₯
