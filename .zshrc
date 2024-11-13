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

# MCFLY
eval "$(mcfly init zsh)"

# FNM CONFIG
eval "$(fnm env --use-on-cd)"

# STARSHIP
eval "$(starship init zsh)"

# ZOXIDE
eval "$(zoxide init zsh)"
