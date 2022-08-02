# CONFIG
for file in ~/.{aliases,exports,functions}; do
        [ -r "$file" ] && [ -f "$file" ] && source "$file";
done;
unset file;

## THEMES
### See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="gozilla"

## PLUGINS
plugins=(zsh-syntax-highlighting zsh-autosuggestions brew)

source $ZSH/oh-my-zsh.sh

###-tns-completion-start-###
if [ -f $HOME/.tnsrc ]; then
    source $HOME/.tnsrc
fi
###-tns-completion-end-###

# Load Angular CLI autocompletion.
source <(ng completion script)

eval "$(starship init zsh)"
