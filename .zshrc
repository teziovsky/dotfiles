# ZSH THEMES
ZSH_THEME="robbyrussell"

# ZSH SOURCE
source "$HOME/.oh-my-zsh/oh-my-zsh.sh"

# ZSH PLUGINS
plugins=(brew zsh-autosuggestions zsh-syntax-highlighting)

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

# FNM CONFIG
eval "$(fnm env --use-on-cd)"

# LOAD CONFIGS
for file in ~/.{aliases,exports,functions}; do
  [ -r "$file" ] && [ -f "$file" ] && source "$file"
done
unset file
