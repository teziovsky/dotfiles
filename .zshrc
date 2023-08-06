# FNM CONFIG
eval "$(fnm env --use-on-cd)"

## THEMES
### See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"

## PLUGINS
plugins=(brew)

###-tns-completion-start-###
if [ -f $HOME/.tnsrc ]; then
    source $HOME/.tnsrc
fi
###-tns-completion-end-###

# bun completions
[ -s "/usr/local/Cellar/bun/0.5.9/share/zsh/site-functions/_bun" ] && source "/usr/local/Cellar/bun/0.5.9/share/zsh/site-functions/_bun"

# CONFIG
for file in ~/.{aliases,exports,functions}; do
        [ -r "$file" ] && [ -f "$file" ] && source "$file";
done;
unset file;

source $ZSH/oh-my-zsh.sh

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
