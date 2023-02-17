# Fig pre block. Keep at the top of this file.
[[ -f "$HOME/.fig/shell/zshrc.pre.zsh" ]] && builtin source "$HOME/.fig/shell/zshrc.pre.zsh"

# FNM CONFIG
eval "$(fnm env --use-on-cd)"

# CONFIG
for file in ~/.{aliases,exports,functions}; do
        [ -r "$file" ] && [ -f "$file" ] && source "$file";
done;
unset file;

## THEMES
### See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"

## PLUGINS
plugins=(zsh-syntax-highlighting zsh-autosuggestions brew)

source $ZSH/oh-my-zsh.sh

###-tns-completion-start-###
if [ -f $HOME/.tnsrc ]; then
    source $HOME/.tnsrc
fi
###-tns-completion-end-###

eval "$(starship init zsh)"

# Fig post block. Keep at the bottom of this file.
[[ -f "$HOME/.fig/shell/zshrc.post.zsh" ]] && builtin source "$HOME/.fig/shell/zshrc.post.zsh"
