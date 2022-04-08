# Fig pre block. Keep at the top of this file.
export PATH="${PATH}:${HOME}/.local/bin"
eval "$(fig init zsh pre)"

# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
    source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# ZSH
## Path to your oh-my-zsh installation.
export ZSH="/Users/kuba/.oh-my-zsh"

## THEMES
### See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="powerlevel10k/powerlevel10k"

## PLUGINS
plugins=(zsh-syntax-highlighting zsh-autosuggestions brew)

source $ZSH/oh-my-zsh.sh

## To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

###-tns-completion-start-###
if [ -f /Users/kuba/.tnsrc ]; then
    source /Users/kuba/.tnsrc
fi
###-tns-completion-end-###

# PATHS
export PATH="/usr/local/opt/ruby@2.7/bin:$PATH"
export PATH="/usr/local/sbin:$PATH"
export PATH="/usr/local/opt/ruby@2.7/bin:$PATH"

# ALIASES
## UNALIAS
unalias 1
unalias 2
unalias 3
unalias 4
unalias 5
unalias 6
unalias 7
unalias 8
unalias 9
unalias afind

## GIT
alias gp="git push"
alias gl="git pull"
alias gs="git status"
alias ga="git add ."
alias gc="git commit -m"
alias gac="git add . && git commit -m"
alias gsa='find ~/Develop -name '.git' | while read repo ; do repo=${repo//\.git/}; git -C "$repo" status -s | grep -q -v "^\$" && echo -e "\n\033[1m${repo}\033[m" && git -C "$repo" status -s || true; done'
alias gla='find ~/Develop -name '.git' | while read repo ; do repo=${repo//\.git/}; echo -e "\n\033[1m${repo}\033[m" && git -C "$repo" pull || true; done'
alias gpa='find ~/Develop -name '.git' | while read repo ; do repo=${repo//\.git/}; git -C "$repo" status -b | grep "git push" && echo -e "\n\033[1m${repo}\033[m" && git -C "$repo" push || true; done'

## GENERAL
alias c="clear"
alias e="exit"
alias ws="webstorm ."
alias cat="bat"

## VOLTA
export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"

# Fig post block. Keep at the bottom of this file.
eval "$(fig init zsh post)"
