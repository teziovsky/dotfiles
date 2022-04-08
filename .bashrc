# Fig pre block. Keep at the top of this file.
export PATH="${PATH}:${HOME}/.local/bin"
eval "$(fig init bash pre)"

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
export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"

# Fig post block. Keep at the bottom of this file.
eval "$(fig init bash post)"

alias dotfiles='/usr/bin/git --git-dir=/Users/$HOME/.dotfiles/ --work-tree=/Users/$HOME'
