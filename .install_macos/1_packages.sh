#!/usr/bin/env bash

# File based on mathiasbynens and kentcdodds .macos files!
# mathiasbynens — https://github.com/mathiasbynens/dotfiles/blob/master/.macos
# kentcdodds — https://github.com/kentcdodds/dotfiles/blob/master/.macos

# Run without downloading:
# curl -s https://raw.githubusercontent.com/teziovsky/dotfiles/main/.install_macos/1_packages.sh | bash
# Close any open System Preferences panes, to prevent them from overriding
# settings we’re about to change
osascript -e 'tell application "System Preferences" to quit'

# Ask for the administrator password upfront
sudo -v

# Keep-alive: update existing `sudo` time stamp until `.1_packages` has finished
while true; do
  sudo -n true
  sleep 60
  kill -0 "$$" || exit
done 2>/dev/null &

###############################################################################
# Tezivosky's Customizations                                                  #
###############################################################################

echo -e "\n\n"
echo "##################################################"
echo -e "\nHello $(whoami)! Let's set up your packages! 🔥\n"
echo "##################################################"

echo -e "\n"
echo "Generating SSH Keys..."
echo "------------------------------------------------"

SSH_GITHUB_FILE=~/.ssh/id_github
if ! [ -f "$SSH_GITHUB_FILE" ]; then
  ssh-keygen -t ed25519 -b 4096 -C "teziovsky@gmail.com" -f "$SSH_GITHUB_FILE"
  eval "$(ssh-agent -s)"
  ssh-add --apple-use-keychain "$SSH_GITHUB_FILE"
  echo "SSH Key - generated 🔥"
else
  echo "SSH Key - already exists! 👌"
fi

echo -e "\n"
echo "Adding SSH Key to ssh-agent..."
echo "------------------------------------------------"

SSH_CONFIG_FILE=~/.ssh/config
SSH_GITHUB_HOST="Host github.com\n  AddKeysToAgent yes\n  UseKeychain yes\n  IdentityFile $SSH_GITHUB_FILE"

if ! [ -f "$SSH_CONFIG_FILE" ]; then
  touch "$SSH_CONFIG_FILE"
  echo "SSH config file - created 🔥"

  echo -e "$SSH_GITHUB_HOST" >>"$SSH_CONFIG_FILE"
  echo "Github Host SSH Config - added 🔥"
else
  echo "SSH config file - already exists! 👌"

  if ! grep -q "Host github.com" $SSH_CONFIG_FILE; then
    echo -e "\n$SSH_GITHUB_HOST" >>"$SSH_CONFIG_FILE"
    echo "Github Host SSH Config - added 🔥"
  else
    echo "Github Host SSH Config - already exists! 👌"
  fi
fi

echo -e "\n"
echo "Installing homebrew..."
echo "------------------------------------------------"

if ! command -v brew &>/dev/null; then
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  echo "Homebrew - installed 🔥"
else
  echo "Homebrew - already exists! 👌"
fi

echo -e "\n"
echo "Installing Github CLI..."
echo "------------------------------------------------"

if ! command -v gh &>/dev/null; then
  brew install gh
  echo "Github CLI - installed 🔥"
else
  echo "Github CLI - already exists! 👌"
fi

echo -e "\n"
echo "Loggin in Github CLI..."
echo "------------------------------------------------"

if ! gh auth status | grep -i "Logged in to github.com" &>/dev/null; then
  gh auth login
  echo "Github CLI - installed 🔥"
else
  echo "Github CLI - already exists! 👌"
fi

echo -e "\n"
echo "Installing oh-my-zsh..."
echo "------------------------------------------------"

if ! [ -d ~/.oh-my-zsh ]; then
  sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
  echo "oh-my-zsh - installed 🔥"
else
  echo "oh-my-zsh - already exists! 👌"
fi

echo -e "\n"
echo "Installing zsh-autosuggestions oh-my-zsh plugin..."
echo "------------------------------------------------"

ZSH_AUTOSUGGESTIONS_DIR=~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
if ! [ -d $ZSH_AUTOSUGGESTIONS_DIR ]; then
  git clone -q https://github.com/zsh-users/zsh-autosuggestions $ZSH_AUTOSUGGESTIONS_DIR
  echo "zsh-autosuggestions - installed 🔥"
else
  echo "zsh-autosuggestions - already exists! 👌"
fi

echo -e "\n"
echo "Installing zsh-syntax-highlighting oh-my-zsh plugin..."
echo "------------------------------------------------"

ZSH_SYNTAX_HIGHLIGHTING_DIR=~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
if ! [ -d $ZSH_SYNTAX_HIGHLIGHTING_DIR ]; then
  git clone -q https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_SYNTAX_HIGHLIGHTING_DIR
  echo "zsh-syntax-highlighting - installed 🔥"
else
  echo "zsh-syntax-highlighting - already exists! 👌"
fi

echo -e "\n"
echo "Cloning dotfiles..."
echo "------------------------------------------------"

if [ ! -d ~/.dotfiles ]; then
  git clone -q --bare git@github.com:teziovsky/dotfiles.git "$HOME"/.dotfiles
  /usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME config --local status.showUntrackedFiles no
  /usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME checkout -f
  /usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME pull -f
  source ~/.zshrc
  echo "Dotfiles - installed 🔥"
else
  echo "Dotfiles - already exists! 👌"
fi

echo -e "\n"
echo "Install Homebrew Brewfile..."
echo "------------------------------------------------"
brew bundle install --file="${HOME}/.config/brew/Brewfile"
echo "Homebrew taps - added 🔥"

echo -e "\n"
echo "Installing usefull keybindings for fzf..."
echo "------------------------------------------------"

SSH_GITHUB_FILE=~/.ssh/id_github
if ! [ -f ~/.fzf.bash ] || ! [ -f ~/.fzf.zsh ]; then
  $(brew --prefix)/opt/fzf/install
  echo "fzf keybindings - generated 🔥"
else
  echo "fzf keybindings - already exists! 👌"
fi

echo -e "\n"
echo "Installing Rust Language..."
echo "------------------------------------------------"

if ! command -v rustup &>/dev/null || ! command -v rustc &>/dev/null || ! command -v cargo &>/dev/null || ! command -v rustfmt &>/dev/null; then
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  echo "Rust - installed 🔥"
else
  echo "Rust - already exists! 👌"
fi

if ! ls /Applications | grep -i "keyboard maestro" &>/dev/null; then
  curl -s -o ~/Downloads/keyboardmaestro-1020.zip https://files.stairways.com/keyboardmaestro/keyboardmaestro-1020.zip
  unzip -q ~/Downloads/keyboardmaestro-1020.zip -d /Applications
  rm ~/Downloads/keyboardmaestro-1020.zip
  echo "Keyboard Maestro - installed 🔥"
else
  echo "Keyboard Maestro - already exists! 👌"
fi

echo -e "\n"
echo "Installing Apps from App Store..."
echo "------------------------------------------------"

# 937984704  Amphetamine
# 1193539993 Brother iPrint & Scan
# 425424353  The Unarchiver
# 497799835  Xcode
# 457622435  Yoink
# 409201541  Apple Pages
# 409203825  Apple Numbers
# 1289197285 Mindnode
appsAppStore=(937984704 1193539993 1352778147 425424353 497799835 457622435 409201541 409203825 1289197285)
for appAppStore in "${appsAppStore[@]}"; do
  if ! mas list | grep -w "^$appAppStore" &>/dev/null; then
    mas install $appAppStore
    echo "$appAppStore - installed 🔥"
  else
    echo "$appAppStore - already exists! 👌"
  fi
done

echo -e "\n"
echo "Checking node, npm and pnpm versions..."
echo "------------------------------------------------"

echo "node --version: $(node --version)"
echo "npm --version: $(npm --version)"
echo "pnpm --version: $(pnpm --version)"
echo "Node, NPM and Pnpm - checked 🔥"

echo -e "\n"
echo "Setting up pnpm global dir..."
echo "------------------------------------------------"

pnpm setup
echo "Pnpm global dir - installed 🔥"

echo -e "\n"
echo "Installing a few global npm packages..."
echo "------------------------------------------------"

npmGlobalPackages=(gitignore npm-check-updates vercel license)
for npmPackage in "${npmGlobalPackages[@]}"; do
  if ! pnpm list -g --depth=0 | grep -w "^$npmPackage" &>/dev/null; then
    pnpm add -g $npmPackage
    echo "$npmPackage - installed 🔥"
  else
    echo "$npmPackage - already exists! 👌"
  fi
done
