# Fig pre block. Keep at the top of this file.
[[ -f "$HOME/.fig/shell/bashrc.pre.bash" ]] && builtin source "$HOME/.fig/shell/bashrc.pre.bash"
# System-wide .bashrc file for interactive bash(1) shells.
if [ -z "$PS1" ]; then
    return
fi

PS1='\h:\W \u\$ '
# Make bash check its window size after a process completes
shopt -s checkwinsize

[ -r "/etc/bashrc_$TERM_PROGRAM" ] && . "/etc/bashrc_$TERM_PROGRAM"
type -p -a mc >/dev/null &&
alias mc=". /opt/local/share/mc/bin/mc-wrapper.sh"


###-tns-completion-start-###
if [ -f /Users/kuba/.tnsrc ]; then
    source /Users/kuba/.tnsrc
fi
###-tns-completion-end-###

alias dotfiles='/usr/bin/git --git-dir=/Users/$HOME/.dotfiles/ --work-tree=/Users/$HOME'

. "$HOME/.cargo/env"

# Fig post block. Keep at the bottom of this file.
[[ -f "$HOME/.fig/shell/bashrc.post.bash" ]] && builtin source "$HOME/.fig/shell/bashrc.post.bash"
