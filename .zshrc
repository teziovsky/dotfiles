# ZSH THEMES
ZSH_THEME="robbyrussell"

# ZSH PLUGINS
plugins=(zsh-autosuggestions zsh-syntax-highlighting brew)

# ZSH SOURCE
source "$HOME/.oh-my-zsh/oh-my-zsh.sh"

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

# LOAD CONFIGS
for file in ~/.{aliases,exports,functions}; do
  [ -r "$file" ] && [ -f "$file" ] && source "$file"
done
unset file

# history setup
HISTFILE=$HOME/.zhistory
SAVEHIST=1000
HISTSIZE=999
setopt share_history
setopt hist_expire_dups_first
setopt hist_ignore_dups
setopt hist_verify

# completion using arrow keys (based on history)
bindkey '^[[A' history-search-backward
bindkey '^[[B' history-search-forward

# FNM CONFIG
eval "$(fnm env --use-on-cd)"

# STARSHIP
eval "$(starship init zsh)"
