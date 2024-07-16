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
echo "##################################################"
echo -e "\nHello $(whoami)! Let's set up your developer directory! 🔥\n"
echo "##################################################"

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
echo "Cloning apps repos..."
echo "------------------------------------------------"

appsRepos=()
for appsRepo in "${appsRepos[@]}"; do
  if [ ! -d "$HOME/Developer/personal/apps/$appsRepo" ]; then
    git clone -q git@github.com:teziovsky/$appsRepo.git "$HOME/Developer/personal/apps/$appsRepo"
    echo "$appsRepo repo - cloned 🔥"
  else
    echo "$appsRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning cli repos..."
echo "------------------------------------------------"

cliRepos=(
  "md-generate"
)
for cliRepo in "${cliRepos[@]}"; do
  if [ ! -d "$HOME/Developer/personal/cli/$cliRepo" ]; then
    git clone -q git@github.com:teziovsky/$cliRepo.git "$HOME/Developer/personal/cli/$cliRepo"
    echo "$cliRepo repo - cloned 🔥"
  else
    echo "$cliRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning contributions repos..."
echo "------------------------------------------------"

contributionsRepos=(
  "snippet-explorer"
)
for contributionsRepo in "${contributionsRepos[@]}"; do
  if [ ! -d "$HOME/Developer/personal/contributions/$contributionsRepo" ]; then
    git clone -q git@github.com:teziovsky/$contributionsRepo.git "$HOME/Developer/personal/contributions/$contributionsRepo"
    echo "$contributionsRepo repo - cloned 🔥"
  else
    echo "$contributionsRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning raycast contributions repos..."
echo "------------------------------------------------"

raycastContributionsRepos=(
  "raycast-css-calculations"
  "raycast-height"
  "raycast-infakt"
  "raycast-meta-music"
  "raycast-multi-translate"
  "raycast-price-scrapper"
  "raycast-raydocs"
  "raycast-scripts"
  "raycast-teziovsky-airtable"
  "raycast-teziovsky-linear"
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
echo "Cloning zed contributions repos..."
echo "------------------------------------------------"

zedContributionsRepos=(
  "zed-editor"
  "zed-extensions"
)
for zedContributionsRepo in "${zedContributionsRepos[@]}"; do
  if [ ! -d "$HOME/Developer/personal/contributions/zed/$zedContributionsRepo" ]; then
    git clone -q git@github.com:teziovsky/$zedContributionsRepo.git "$HOME/Developer/personal/contributions/zed/$zedContributionsRepo"
    echo "$zedContributionsRepo repo - cloned 🔥"
  else
    echo "$zedContributionsRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning zed contributions themes repos..."
echo "------------------------------------------------"

zedContributionsThemesRepos=(
  "zed-one-hunter-theme"
)
for zedContributionsThemeRepo in "${zedContributionsThemesRepos[@]}"; do
  if [ ! -d "$HOME/Developer/personal/contributions/zed/themes/$zedContributionsThemeRepo" ]; then
    git clone -q git@github.com:teziovsky/$zedContributionsThemeRepo.git "$HOME/Developer/personal/contributions/zed/themes/$zedContributionsThemeRepo"
    echo "$zedContributionsThemeRepo repo - cloned 🔥"
  else
    echo "$zedContributionsThemeRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning courses repos..."
echo "------------------------------------------------"

coursesRepos=()
for coursesRepo in "${coursesRepos[@]}"; do
  if [ ! -d "$HOME/Developer/personal/courses/$coursesRepo" ]; then
    git clone -q git@github.com:teziovsky/$coursesRepo.git "$HOME/Developer/personal/courses/$coursesRepo"
    echo "$coursesRepo repo - cloned 🔥"
  else
    echo "$coursesRepo repo - already exists 👌"
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
echo "Cloning scripts repos..."
echo "------------------------------------------------"

scriptsRepos=(
  "price-scrapper"
)
for scriptsRepo in "${scriptsRepos[@]}"; do
  if [ ! -d "$HOME/Developer/personal/scripts/$scriptsRepo" ]; then
    git clone -q git@github.com:teziovsky/$scriptsRepo.git "$HOME/Developer/personal/scripts/$scriptsRepo"
    echo "$scriptsRepo repo - cloned 🔥"
  else
    echo "$scriptsRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning sites repos..."
echo "------------------------------------------------"

sitesRepos=(
  "ajwedding"
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

echo -e "\n"
echo "Cloning sites - petnal repos..."
echo "------------------------------------------------"

petnalSitesRepos=(
  "petnal-native"
  "petnal-web"
)
for petnalSitesRepo in "${petnalSitesRepos[@]}"; do
  if [ ! -d "$HOME/Developer/personal/sites/petnal/$petnalSitesRepo" ]; then
    git clone -q git@github.com:teziovsky/$petnalSitesRepo.git "$HOME/Developer/personal/sites/petnal/$petnalSitesRepo"
    echo "$petnalSitesRepo repo - cloned 🔥"
  else
    echo "$petnalSitesRepo repo - already exists 👌"
  fi
done

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
