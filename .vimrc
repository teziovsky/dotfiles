# Make Vim more useful
set nocompatible
# Use the OS clipboard by default (on versions compiled with `+clipboard`)
set clipboard=unnamed
# Enhance command-line completion
set wildmenu
# Allow cursor keys in insert mode
set esckeys
# Allow backspace in insert mode
set backspace=indent,eol,start
# Optimize for fast terminal connections
set ttyfast
# Add the g flag to search/replace by default
set gdefault

# Enable line numbers
set number
# Enable syntax highlighting
syntax on
# Highlight current line
set cursorline
# Make tabs as wide as two spaces
set tabstop=2
set nolist
# Highlight searches
set hlsearch
# Ignore case of searches
set ignorecase
# Highlight dynamically as pattern is typed
set incsearch
# Always show status line
set laststatus=2
# Enable mouse in all modes
set mouse=a
# Disable error bells
set noerrorbells
# Don’t reset cursor to start of line when moving around.
set nostartofline
# Show the cursor position
set ruler
# Don’t show the intro message when starting Vim
set shortmess=atI
# Show the current mode
set showmode
# Show the filename in the window titlebar
set title
# Show the (partial) command as it’s being typed
set showcmd
# Start scrolling three lines before the horizontal window border
set scrolloff=3
