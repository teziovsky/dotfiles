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

if [ ! -d "$HOME/Developer/advent-of-code" ]; then
  git clone -q git@github.com:teziovsky/advent-of-code.git "$HOME/Developer/advent-of-code"
  echo "advent-of-code repo - cloned 🔥"
else
  echo "advent-of-code repo - already exists 👌"
fi

echo -e "\n"
echo "Cloning wsb repos..."
echo "------------------------------------------------"

wsbRepos=(
  "cup-tournament"
)
for wsbRepo in "${wsbRepos[@]}"; do
  if [ ! -d "$HOME/Developer/wsb/$wsbRepo" ]; then
    git clone -q git@github.com:teziovsky/$wsbRepo.git "$HOME/Developer/wsb/$wsbRepo"
    echo "$wsbRepo repo - cloned 🔥"
  else
    echo "$wsbRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning apps repos..."
echo "------------------------------------------------"

appsRepos=()
for appsRepo in "${appsRepos[@]}"; do
  if [ ! -d "$HOME/Developer/apps/$appsRepo" ]; then
    git clone -q git@github.com:teziovsky/$appsRepo.git "$HOME/Developer/apps/$appsRepo"
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
  if [ ! -d "$HOME/Developer/cli/$cliRepo" ]; then
    git clone -q git@github.com:teziovsky/$cliRepo.git "$HOME/Developer/cli/$cliRepo"
    echo "$cliRepo repo - cloned 🔥"
  else
    echo "$cliRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning contributions repos..."
echo "------------------------------------------------"

contributionsRepos=(
  "vuelidate-vuelidate"
  "awesome-uses"
  "snippet-explorer"
)
for contributionsRepo in "${contributionsRepos[@]}"; do
  if [ ! -d "$HOME/Developer/contributions/$contributionsRepo" ]; then
    git clone -q git@github.com:teziovsky/$contributionsRepo.git "$HOME/Developer/contributions/$contributionsRepo"
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
  "raycast-raydocs"
  "raycast-scripts"
  "raycast-teziovsky-airtable"
  "raycast-teziovsky-linear"
)
for raycastContributionsRepo in "${raycastContributionsRepos[@]}"; do
  if [ ! -d "$HOME/Developer/contributions/raycast/$raycastContributionsRepo" ]; then
    git clone -q git@github.com:teziovsky/$raycastContributionsRepo.git "$HOME/Developer/contributions/raycast/$raycastContributionsRepo"
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
  if [ ! -d "$HOME/Developer/contributions/zed/$zedContributionsRepo" ]; then
    git clone -q git@github.com:teziovsky/$zedContributionsRepo.git "$HOME/Developer/contributions/zed/$zedContributionsRepo"
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
  if [ ! -d "$HOME/Developer/contributions/zed/themes/$zedContributionsThemeRepo" ]; then
    git clone -q git@github.com:teziovsky/$zedContributionsThemeRepo.git "$HOME/Developer/contributions/zed/themes/$zedContributionsThemeRepo"
    echo "$zedContributionsThemeRepo repo - cloned 🔥"
  else
    echo "$zedContributionsThemeRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning recruitments - makadu repos..."
echo "------------------------------------------------"

recruitmentsMakaduRepos=(
  "makadu-miedzy-lasem-a-cisza"
)
for recruitmentsMakaduRepo in "${recruitmentsMakaduRepos[@]}"; do
  if [ ! -d "$HOME/Developer/recruitments/makadu/$recruitmentsMakaduRepo" ]; then
    git clone -q git@github.com:teziovsky/$recruitmentsMakaduRepo.git "$HOME/Developer/recruitments/makadu/$recruitmentsMakaduRepo"
    echo "$recruitmentsMakaduRepo repo - cloned 🔥"
  else
    echo "$recruitmentsMakaduRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning recruitments - idcom repos..."
echo "------------------------------------------------"

recruitmentsIdcomRepos=(
  "idcom-vue-test"
  "idcom-tiles"
)
for recruitmentsIdcomRepo in "${recruitmentsIdcomRepos[@]}"; do
  if [ ! -d "$HOME/Developer/recruitments/idcom/$recruitmentsIdcomRepo" ]; then
    git clone -q git@github.com:teziovsky/$recruitmentsIdcomRepo.git "$HOME/Developer/recruitments/idcom/$recruitmentsIdcomRepo"
    echo "$recruitmentsIdcomRepo repo - cloned 🔥"
  else
    echo "$recruitmentsIdcomRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning sites repos..."
echo "------------------------------------------------"

sitesRepos=(
  "ajwedding"
  "car-service-book-api"
  "car-service-book-v1"
  "foodbase"
  "idcom-svg-walkthrough"
  "images-gallery"
  "jakubsoboczynski"
  "jakubsoboczynski-next-v1"
  "lenovo-product-card"
  "movie-search-engine"
  "qr-code-component"
  "rock-paper-scissors"
  "vehicle-service-book"
)
for sitesRepo in "${sitesRepos[@]}"; do
  if [ ! -d "$HOME/Developer/sites/$sitesRepo" ]; then
    git clone -q git@github.com:teziovsky/$sitesRepo.git "$HOME/Developer/sites/$sitesRepo"
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
  if [ ! -d "$HOME/Developer/sites/petnal/$petnalSitesRepo" ]; then
    git clone -q git@github.com:teziovsky/$petnalSitesRepo.git "$HOME/Developer/sites/petnal/$petnalSitesRepo"
    echo "$petnalSitesRepo repo - cloned 🔥"
  else
    echo "$petnalSitesRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning linux macos repos..."
echo "------------------------------------------------"

linuxMacosRepos=(
  "vps-setup-scripts"
)
for linuxMacosRepo in "${linuxMacosRepos[@]}"; do
  if [ ! -d "$HOME/Developer/linux_macos/$linuxMacosRepo" ]; then
    git clone -q git@github.com:teziovsky/$linuxMacosRepo.git "$HOME/Developer/linux_macos/$linuxMacosRepo"
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
  if [ ! -d "$HOME/Developer/scripts/$scriptsRepo" ]; then
  git clone -q git@github.com:teziovsky/$scriptsRepo.git "$HOME/Developer/scripts/$scriptsRepo"
  echo "$scriptsRepo repo - cloned 🔥"
  else
    echo "$scriptsRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Cloning courses repos..."
echo "------------------------------------------------"

coursesRepos=(
  "js-na-frontach-zadania"
  "js-na-frontach-w05e02-continous-deployment"
)
for coursesRepo in "${coursesRepos[@]}"; do
  if [ ! -d "$HOME/Developer/courses/$coursesRepo" ]; then
    git clone -q git@github.com:teziovsky/$coursesRepo.git "$HOME/Developer/courses/$coursesRepo"
    echo "$coursesRepo repo - cloned 🔥"
  else
    echo "$coursesRepo repo - already exists 👌"
  fi
done

echo -e "\n"
echo "Creating symlinks for vscode settings..."
echo "------------------------------------------------"

if ! ls -laH ~/Library/Application\ Support/Code/User | grep -i "^l" | grep -i keybindings.json &>/dev/null; then
  ln -s ~/.vscode/keybindings.json ~/Library/Application\ Support/Code/User/keybindings.json
  echo "keybindings.json file - symlinked 🔥"
else
  echo "keybindings.json file - already exists 👌"
fi

if ! ls -laH ~/Library/Application\ Support/Code/User | grep -i "^l" | grep -i settings.json &>/dev/null; then
  ln -s ~/.vscode/settings.json ~/Library/Application\ Support/Code/User/settings.json
  echo "settings.json file - symlinked 🔥"
else
  echo "settings.json file - already exists 👌"
fi

if ! ls -laH ~/Library/Application\ Support/Code/User | grep -i "^l" | grep -i projects.json &>/dev/null; then
  ln -s ~/.vscode/projects.json ~/Library/Application\ Support/Code/User/projects.json
  echo "projects.json file - symlinked 🔥"
else
  echo "projects.json file - already exists 👌"
fi

if ! ls -laH ~/Library/Application\ Support/Code/User | grep -i "^l" | grep -i spellright.dict &>/dev/null; then
  ln -s ~/.vscode/spellright.dict ~/Library/Application\ Support/Code/User/spellright.dict
  echo "spellright.dict file - symlinked 🔥"
else
  echo "spellright.dict file - already exists 👌"
fi

echo

if ! ls -laH ~/Library/Application\ Support/Code/User | grep -i "^l" | grep -i snippets &>/dev/null; then
  ln -s ~/.vscode/snippets ~/Library/Application\ Support/Code/User
  echo "snippets dir - symlinked 🔥"
else
  echo "snippets dir - already exists 👌"
fi
