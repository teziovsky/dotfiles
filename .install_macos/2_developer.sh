#!/usr/bin/env bash

# File based on mathiasbynens and kentcdodds .macos files!
# mathiasbynens — https://github.com/mathiasbynens/dotfiles/blob/master/.macos
# kentcdodds — https://github.com/kentcdodds/dotfiles/blob/master/.macos

# Run without downloading:
# curl -s https://raw.githubusercontent.com/teziovsky/dotfiles/main/.install_macos/.2_developer | bash
# Close any open System Preferences panes, to prevent them from overriding
# settings we’re about to change
osascript -e 'tell application "System Preferences" to quit'

# Ask for the administrator password upfront
sudo -v

# Keep-alive: update existing `sudo` time stamp until `.2_developer` has finished
while true; do
  sudo -n true
  sleep 60
  kill -0 "$$" || exit
done 2>/dev/null &

###############################################################################
# Tezivosky's Customizations                                                  #
###############################################################################

echo -e "\n\n"
echo "######################################################"
echo -e "\nHello $(whoami)! Let's set up your developer directory! 🔥\n"
echo "######################################################"

echo -e "\n"
echo "Creating developer path..."
echo "------------------------------------------------"

if [ ! -d "$HOME/Developer" ]; then
  mkdir "$HOME/Developer"
  echo "Developer path at $HOME/Developer - created 🔥"
else
  echo "Developer path at $HOME/Developer - already exists 👌"
fi

echo -e "\n"
echo "Cloning advent-of-code repo..."
echo "------------------------------------------------"

if [ ! -d "$HOME/Developer/personal/advent-of-code" ]; then
  git clone -q git@github.com:teziovsky/advent-of-code.git "$HOME/Developer/personal/advent-of-code"
  echo "advent-of-code repo - cloned 🔥"
else
  echo "advent-of-code repo - already exists 👌"
fi

echo -e "\n"
echo "Cloning raycast contributions repos..."
echo "------------------------------------------------"

raycastContributionsRepos=(
  "raycast-multi-translate"
  "raycast-scripts"
)
for raycastContributionsRepo in "${raycastContributionsRepos[@]}"; do
  if [ ! -d "$HOME/Developer/personal/contributions/raycast/$raycastContributionsRepo" ]; then
    git clone -q git@github.com:teziovsky/$raycastContributionsRepo.git "$HOME/Developer/personal/contributions/raycast/$raycastContributionsRepo"
    echo "$raycastContributionsRepo repo - cloned 🔥"
  else
    echo "$raycastContributionsRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning linux macos repos..."
echo "------------------------------------------------"

linuxMacosRepos=(
  "vps-setup-scripts"
)
for linuxMacosRepo in "${linuxMacosRepos[@]}"; do
  if [ ! -d "$HOME/Developer/personal/linux_macos/$linuxMacosRepo" ]; then
    git clone -q git@github.com:teziovsky/$linuxMacosRepo.git "$HOME/Developer/personal/linux_macos/$linuxMacosRepo"
    echo "$linuxMacosRepo repo - cloned 🔥"
  else
    echo "$linuxMacosRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning sites repos..."
echo "------------------------------------------------"

sitesRepos=(
  "foodbase"
  "idcom-svg-walkthrough"
  "jakubsoboczynski"
  "svg-polygon-builder"
  "vehicle-service-book"
)
for sitesRepo in "${sitesRepos[@]}"; do
  if [ ! -d "$HOME/Developer/personal/sites/$sitesRepo" ]; then
    git clone -q git@github.com:teziovsky/$sitesRepo.git "$HOME/Developer/personal/sites/$sitesRepo"
    echo "$sitesRepo repo - cloned 🔥"
  else
    echo "$sitesRepo repo - already exists 👌"
  fi
done

if [ -d "/Applications/Visual Studio Code.app" ]; then
  echo -e "\n"
  echo "Creating symlinks for vscode settings..."
  echo "------------------------------------------------"

  vscodeFiles=(
    "keybindings.json"
    "settings.json"
    "projects.json"
    "spellright.dict"
    "snippets"
  )

  for fileName in "${vscodeFiles[@]}"; do
    if ! ls -laH ~/Library/Application\ Support/Code/User | grep -i "^l" | grep -i "$fileName" &>/dev/null; then
      rm -rf ~/Library/Application\ Support/Code/User/$fileName
      ln -s ~/.vscode/$fileName ~/Library/Application\ Support/Code/User/$fileName
      echo "Code $fileName - symlinked 🔥"
    else
      rm -rf ~/Library/Application\ Support/Code/User/$fileName
      ln -s ~/.vscode/$fileName ~/Library/Application\ Support/Code/User/$fileName
      echo "Code $fileName - updated 👌"
    fi
  done
fi

if [ -d "/Applications/Cursor.app" ]; then
  echo -e "\n"
  echo "Creating symlinks for cursor settings..."
  echo "------------------------------------------------"

  cursorFiles=(
    "keybindings.json"
    "settings.json"
    "projects.json"
    "spellright.dict"
    "snippets"
  )

  for fileName in "${cursorFiles[@]}"; do
  if ! ls -laH ~/Library/Application\ Support/Cursor/User | grep -i "^l" | grep -i "$fileName" &>/dev/null; then
    rm -rf ~/Library/Application\ Support/Cursor/User/$fileName
    ln -s ~/.vscode/$fileName ~/Library/Application\ Support/Cursor/User/$fileName
    echo "Cursor $fileName - symlinked 🔥"
  else
    rm -rf ~/Library/Application\ Support/Cursor/User/$fileName
    ln -s ~/.vscode/$fileName ~/Library/Application\ Support/Cursor/User/$fileName
    echo "Cursor $fileName - updated 👌"
  fi
  done
fi
