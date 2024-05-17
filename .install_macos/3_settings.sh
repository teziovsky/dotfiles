#!/usr/bin/env bash

# File based on mathiasbynens and kentcdodds .macos files!
# mathiasbynens — https://github.com/mathiasbynens/dotfiles/blob/master/.macos
# kentcdodds — https://github.com/kentcdodds/dotfiles/blob/master/.macos

# Run without downloading:
# curl -s https://raw.githubusercontent.com/teziovsky/dotfiles/main/.install_macos/.3_settings | bash
# Close any open System Preferences panes, to prevent them from overriding
# settings we’re about to change
osascript -e 'tell application "System Preferences" to quit'

# Ask for the administrator password upfront
sudo -v

# Keep-alive: update existing `sudo` time stamp until `.3_settings` has finished
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
echo -e "\nHello $(whoami)! Let's set up your macos settings! 🔥\n"
echo "##################################################"

###############################################################################
# Activity Monitor                                                            #
###############################################################################

echo -e "\n"
echo "Setting up Activity Monitor settings..."
echo "------------------------------------------------"

# Show the main window when launching Activity Monitor
if ! defaults read com.apple.ActivityMonitor OpenMainWindow | grep -i "1" &>/dev/null; then
  defaults write com.apple.ActivityMonitor OpenMainWindow -bool true
  echo "Show the main window when launching Activity Monitor - changed 🔥"
else
  echo "Show the main window when launching Activity Monitor - already set! 👌"
fi

# Show all processes in Activity Monitor
if ! defaults read com.apple.ActivityMonitor ShowCategory | grep -i "100" &>/dev/null; then
  defaults write com.apple.ActivityMonitor ShowCategory -int 100
  echo "Show all processes in Activity Monitor - changed 🔥"
else
  echo "Show all processes in Activity Monitor - already set! 👌"
fi

# Sort Activity Monitor results by CPU usage
if ! defaults read com.apple.ActivityMonitor SortColumn | grep -i "CPUUsage" &>/dev/null || ! defaults read com.apple.ActivityMonitor SortDirection | grep -i "0" &>/dev/null; then
  defaults write com.apple.ActivityMonitor SortColumn -string "CPUUsage"
  defaults write com.apple.ActivityMonitor SortDirection -int 0
  echo "Sort Activity Monitor results by CPU usage - changed 🔥"
else
  echo "Sort Activity Monitor results by CPU usage - already set! 👌"
fi

###############################################################################
# Address Book, Dashboard, iCal, TextEdit, and Disk Utility                   #
###############################################################################

echo -e "\n"
echo "Setting up Address Book, Dashboard, iCal, TextEdit, and Disk Utility settings..."
echo "------------------------------------------------"

# Use plain text mode for new TextEdit documents
if ! defaults read com.apple.TextEdit RichText | grep -i "0" &>/dev/null; then
  defaults write com.apple.TextEdit RichText -int 0
  echo "Use plain text mode for new TextEdit documents - changed 🔥"
else
  echo "Use plain text mode for new TextEdit documents - already set! 👌"
fi

# Open and save files as UTF-8 in TextEdit
if ! defaults read com.apple.TextEdit PlainTextEncoding | grep -i "4" &>/dev/null || ! defaults read com.apple.TextEdit PlainTextEncodingForWrite | grep -i "4" &>/dev/null; then
  defaults write com.apple.TextEdit PlainTextEncoding -int 4
  defaults write com.apple.TextEdit PlainTextEncodingForWrite -int 4
  echo "Open and save files as UTF-8 in TextEdit - changed 🔥"
else
  echo "Open and save files as UTF-8 in TextEdit - already set! 👌"
fi

###############################################################################
# Calendar                                                                    #
###############################################################################

echo -e "\n"
echo "Setting up Calendar settings..."
echo "------------------------------------------------"

# Open events in window type
if ! defaults read com.apple.iCal OpenEventsInWindowType | grep -i "1" &>/dev/null; then
  defaults write com.apple.iCal OpenEventsInWindowType -bool true
  echo "Open events in window type - changed 🔥"
else
  echo "Open events in window type - already set! 👌"
fi

# Enable shared calendar notifications
if ! defaults read com.apple.iCal SharedCalendarNotificationsDisabled | grep -i "0" &>/dev/null; then
  defaults write com.apple.iCal SharedCalendarNotificationsDisabled -bool false
  echo "Enable shared calendar notifications - changed 🔥"
else
  echo "Enable shared calendar notifications - already set! 👌"
fi

# Hide declined events
if ! defaults read com.apple.iCal ShowDeclinedEvents | grep -i "0" &>/dev/null; then
  defaults write com.apple.iCal ShowDeclinedEvents -bool false
  echo "Hide declined events - changed 🔥"
else
  echo "Hide declined events - already set! 👌"
fi

# Show week numbers
if ! defaults read com.apple.iCal "Show Week Numbers" | grep -i "1" &>/dev/null; then
  defaults write com.apple.iCal "Show Week Numbers" -bool true
  echo "Show week numbers - changed 🔥"
else
  echo "Show week numbers - already set! 👌"
fi

# Display birthdays calendar
if ! defaults read com.apple.iCal "display birthdays calendar" | grep -i "1" &>/dev/null; then
  defaults write com.apple.iCal "display birthdays calendar" -bool true
  echo "Display birthdays calendar - changed 🔥"
else
  echo "Display birthdays calendar - already set! 👌"
fi

###############################################################################
# Control Center                                                              #
###############################################################################

echo -e "\n"
echo "Setting up Control Center settings..."
echo "------------------------------------------------"

# Show battery icon
if ! defaults read com.apple.controlcenter "NSStatusItem Visible Battery" | grep -i "1" &>/dev/null; then
  defaults write com.apple.controlcenter "NSStatusItem Visible Battery" -bool true
  echo "Show battery icon - changed 🔥"
else
  echo "Show battery icon - already set! 👌"
fi

# Show BentoBox icon
if ! defaults read com.apple.controlcenter "NSStatusItem Visible BentoBox" | grep -i "1" &>/dev/null; then
  defaults write com.apple.controlcenter "NSStatusItem Visible BentoBox" -bool true
  echo "Show BentoBox icon - changed 🔥"
else
  echo "Show BentoBox icon - already set! 👌"
fi

# Show Bluetooth icon
if ! defaults read com.apple.controlcenter "NSStatusItem Visible Bluetooth" | grep -i "1" &>/dev/null; then
  defaults write com.apple.controlcenter "NSStatusItem Visible Bluetooth" -bool true
  echo "Show Bluetooth icon - changed 🔥"
else
  echo "Show Bluetooth icon - already set! 👌"
fi

# Show Clock icon
if ! defaults read com.apple.controlcenter "NSStatusItem Visible Clock" | grep -i "1" &>/dev/null; then
  defaults write com.apple.controlcenter "NSStatusItem Visible Clock" -bool true
  echo "Show Clock icon - changed 🔥"
else
  echo "Show Clock icon - already set! 👌"
fi

# Show Sound icon
if ! defaults read com.apple.controlcenter "NSStatusItem Visible Sound" | grep -i "1" &>/dev/null; then
  defaults write com.apple.controlcenter "NSStatusItem Visible Sound" -bool true
  echo "Show Sound icon - changed 🔥"
else
  echo "Show Sound icon - already set! 👌"
fi

# Show WiFi icon
if ! defaults read com.apple.controlcenter "NSStatusItem Visible WiFi" | grep -i "1" &>/dev/null; then
  defaults write com.apple.controlcenter "NSStatusItem Visible WiFi" -bool true
  echo "Show WiFi icon - changed 🔥"
else
  echo "Show WiFi icon - already set! 👌"
fi

###############################################################################
# Dock                                                                    #
###############################################################################

echo -e "\n"
echo "Setting up Dock settings..."
echo "------------------------------------------------"

# Automatically hide and show the Dock
if ! defaults read com.apple.dock autohide | grep -i "1" &>/dev/null; then
  defaults write com.apple.dock autohide -bool true
  echo "Automatically hide and show the Dock - changed 🔥"
else
  echo "Automatically hide and show the Dock - already set! 👌"
fi

# Remove the auto-hiding Dock delay
if ! defaults read com.apple.dock autohide-delay | grep -i "0" &>/dev/null; then
  defaults write com.apple.dock autohide-delay -float 0
  echo "Remove the auto-hiding Dock delay - changed 🔥"
else
  echo "Remove the auto-hiding Dock delay - already set! 👌"
fi

# Remove the animation when hiding/showing the Dock
if ! defaults read com.apple.dock autohide-time-modifier | grep -i "0" &>/dev/null; then
  defaults write com.apple.dock autohide-time-modifier -float 0
  echo "Remove the animation when hiding/showing the Dock - changed 🔥"
else
  echo "Remove the animation when hiding/showing the Dock - already set! 👌"
fi

# Enable spring loading for all Dock items
if ! defaults read com.apple.dock enable-spring-load-actions-on-all-items | grep -i "1" &>/dev/null; then
  defaults write com.apple.dock enable-spring-load-actions-on-all-items -bool true
  echo "Enable spring loading for all Dock items - changed 🔥"
else
  echo "Enable spring loading for all Dock items - already set! 👌"
fi

# Speed up Mission Control animations
if ! defaults read com.apple.dock expose-animation-duration | grep -i "0.1" &>/dev/null; then
  defaults write com.apple.dock expose-animation-duration -float 0.1
  echo "Speed up Mission Control animations - changed 🔥"
else
  echo "Speed up Mission Control animations - already set! 👌"
fi

# Dont animate opening applications from the Dock
if ! defaults read com.apple.dock launchanim | grep -i "0" &>/dev/null; then
  defaults write com.apple.dock launchanim -bool false
  echo "Dont animate opening applications from the Dock - changed 🔥"
else
  echo "Dont animate opening applications from the Dock - already set! 👌"
fi

# Change minimize/maximize window effect
if ! defaults read com.apple.dock mineffect | grep -i "genie" &>/dev/null; then
  defaults write com.apple.dock mineffect -string "genie"
  echo "Change minimize/maximize window effect - changed 🔥"
else
  echo "Change minimize/maximize window effect - already set! 👌"
fi

# Minimize windows into their application’s icon
if ! defaults read com.apple.dock minimize-to-application | grep -i "1" &>/dev/null; then
  defaults write com.apple.dock minimize-to-application -bool true
  echo "Minimize windows into their application icon - changed 🔥"
else
  echo "Minimize windows into their application icon - already set! 👌"
fi

# Enable highlight hover effect for the grid view of a stack (Dock)
if ! defaults read com.apple.dock mouse-over-hilite-stack | grep -i "1" &>/dev/null; then
  defaults write com.apple.dock mouse-over-hilite-stack -bool true
  echo "Enable highlight hover effect for the grid view of a stack (Dock) - changed 🔥"
else
  echo "Enable highlight hover effect for the grid view of a stack (Dock) - already set! 👌"
fi

# Don’t automatically rearrange Spaces based on most recent use
if ! defaults read com.apple.dock mru-spaces | grep -i "0" &>/dev/null; then
  defaults write com.apple.dock mru-spaces -bool false
  echo "Dont automatically rearrange Spaces based on most recent use - changed 🔥"
else
  echo "Dont automatically rearrange Spaces based on most recent use - already set! 👌"
fi

# Wipe all recent app icons from the Dock
if defaults read com.apple.dock recent-apps &>/dev/null; then
  defaults write com.apple.dock recent-apps -array
  echo "Wipe all recent app icons from the Dock - changed 🔥"
else
  echo "Wipe all recent app icons from the Dock - already set! 👌"
fi

# Show indicator lights for open applications in the Dock
if ! defaults read com.apple.dock show-process-indicators | grep -i "1" &>/dev/null; then
  defaults write com.apple.dock show-process-indicators -bool true
  echo "Show indicator lights for open applications in the Dock - changed 🔥"
else
  echo "Show indicator lights for open applications in the Dock - already set! 👌"
fi

# Hide recents
if ! defaults read com.apple.dock show-recents | grep -i "0" &>/dev/null; then
  defaults write com.apple.dock show-recents -bool false
  echo "Hide recents - changed 🔥"
else
  echo "Hide recents - already set! 👌"
fi

# Set the icon size of Dock items to 36 pixels
if ! defaults read com.apple.dock tilesize | grep -i "36" &>/dev/null; then
  defaults write com.apple.dock tilesize -int 36
  echo "Set the icon size of Dock items to 16 pixels - changed 🔥"
else
  echo "Set the icon size of Dock items to 16 pixels - already set! 👌"
fi

# Make Dock icons of hidden applications translucent
if ! defaults read com.apple.dock showhidden | grep -i "1" &>/dev/null; then
  defaults write com.apple.dock showhidden -bool true
  echo "Make Dock icons of hidden applications translucent - changed 🔥"
else
  echo "Make Dock icons of hidden applications translucent - already set! 👌"
fi

# Show only open applications in the Dock
if ! defaults read com.apple.dock static-only | grep -i "0" &>/dev/null; then
  defaults write com.apple.dock static-only -bool false
  echo "Show only open applications in the Dock - changed 🔥"
else
  echo "Show only open applications in the Dock - already set! 👌"
fi

# Hot corners
# Possible values:
#  1: Nothing
#  2: Mission Control
#  3: Show application windows
#  4: Desktop
#  5: Start screen saver
#  6: Disable screen saver
#  7: Dashboard
# 10: Put display to sleep
# 11: Launchpad
# 12: Notification Center
# 14: Quick Note

# Top left screen corner → Nothing
if ! defaults read com.apple.dock wvous-tl-corner | grep -w "1" &>/dev/null; then
  defaults write com.apple.dock wvous-tl-corner -int 1
  defaults write com.apple.dock wvous-tl-modifier -int 0
  echo "Top left screen corner → Nothing - changed 🔥"
else
  echo "Top left screen corner → Nothing - already set! 👌"
fi

# Top right screen corner → Nothing
if ! defaults read com.apple.dock wvous-tr-corner | grep -w "1" &>/dev/null; then
  defaults write com.apple.dock wvous-tr-corner -int 1
  defaults write com.apple.dock wvous-tr-modifier -int 0
  echo "Top right screen corner → Nothing - changed 🔥"
else
  echo "Top right screen corner → Nothing - already set! 👌"
fi

# Bottom left screen corner → Nothing
if ! defaults read com.apple.dock wvous-bl-corner | grep -w "1" &>/dev/null; then
  defaults write com.apple.dock wvous-bl-corner -int 1
  defaults write com.apple.dock wvous-bl-modifier -int 0
  echo "Bottom left screen corner → Nothing - changed 🔥"
else
  echo "Bottom left screen corner → Nothing - already set! 👌"
fi

# Bottom right screen corner → Quick Note
if ! defaults read com.apple.dock wvous-br-corner | grep -w "14" &>/dev/null; then
  defaults write com.apple.dock wvous-br-corner -int 14
  defaults write com.apple.dock wvous-br-modifier -int 0
  echo "Bottom right screen corner → Quick Note - changed 🔥"
else
  echo "Bottom right screen corner → Quick Note - already set! 👌"
fi

# Add iOS Simulator to Launchpad
if ! ls /Applications | grep -i "simulator.app" &>/dev/null; then
  sudo ln -sf "/Applications/Xcode.app/Contents/Developer/Applications/Simulator.app" "/Applications/Simulator.app"
  echo "Add iOS Simulator to Launchpad - changed 🔥"
else
  echo "Add iOS Simulator to Launchpad - already set! 👌"
fi

# Add Watch Simulator to Launchpad
if ! ls /Applications | grep -i "simulator (watch).app" &>/dev/null; then
  sudo ln -sf "/Applications/Xcode.app/Contents/Developer/Applications/Simulator (Watch).app" "/Applications/Simulator (Watch).app"
  echo "Add Watch Simulator to Launchpad - changed 🔥"
else
  echo "Add Watch Simulator to Launchpad - already set! 👌"
fi

###############################################################################
# Energy saving                                                               #
###############################################################################

echo -e "\n"
echo "Setting up Energy saving settings..."
echo "------------------------------------------------"

# Enable lid wakeup
sudo pmset -a lidwake 1
echo "Enable lid wakeup - changed 🔥"

# Restart automatically on power loss
# sudo pmset -a autorestart 1
# echo "Restart automatically on power loss - changed 🔥"

# Sleep the display after 10 minutes
sudo pmset -a displaysleep 10
echo "Sleep the display after 10 minutes - changed 🔥"

# Disable machine sleep while charging
sudo pmset -c sleep 0
echo "Disable machine sleep while charging - changed 🔥"

# Set machine sleep to 5 minutes on battery
sudo pmset -b sleep 5
echo "Set machine sleep to 5 minutes on battery - changed 🔥"

# Set standby delay to 24 hours (default is 1 hour)
sudo pmset -a standbydelay 86400
echo "Set standby delay to 24 hours - changed 🔥"

# Never go into computer sleep mode
# sudo systemsetup -setcomputersleep Off > /dev/null
# echo "Never go into computer sleep mode - changed 🔥"

# Hibernation mode
# 0: Disable hibernation (speeds up entering sleep mode)
# 3: Copy RAM to disk so the system state can still be restored in case of a power failure.
sudo pmset -a hibernatemode 0
echo "Hibernation mode Copy RAM to disk - changed 🔥"

###############################################################################
# Finder                                                                      #
###############################################################################

echo -e "\n"
echo "Setting up Finder settings..."
echo "------------------------------------------------"

# Disable window animations and Get Info animations
if ! defaults read com.apple.finder DisableAllAnimations | grep -i "1" &>/dev/null; then
  defaults write com.apple.finder DisableAllAnimations -bool true
  echo "Disable window animations and Get Info animations - changed 🔥"
else
  echo "Disable window animations and Get Info animations - already set! 👌"
fi

# Set Downloads as the default location for new Finder windows
# For other paths, use `PfLo` and `file:///full/path/here/`
if ! defaults read com.apple.finder NewWindowTarget | grep -i "PfDe" &>/dev/null || ! defaults read com.apple.finder NewWindowTargetPath | grep -i "file://${HOME}/Downloads/" &>/dev/null; then
  defaults write com.apple.finder NewWindowTarget -string "PfDe"
  defaults write com.apple.finder NewWindowTargetPath -string "file://${HOME}/Downloads/"
  echo "Set Downloads as the default location for new Finder windows - changed 🔥"
else
  echo "Set Downloads as the default location for new Finder windows - already set! 👌"
fi

# Show icons for external hard drives on the desktop
if ! defaults read com.apple.finder ShowExternalHardDrivesOnDesktop | grep -i "1" &>/dev/null; then
  defaults write com.apple.finder ShowExternalHardDrivesOnDesktop -bool true
  echo "Show icons for external hard drives on the desktop - changed 🔥"
else
  echo "Show icons for external hard drives on the desktop - already set! 👌"
fi

# Hide icons for hard drives on the desktop
if ! defaults read com.apple.finder ShowHardDrivesOnDesktop | grep -i "0" &>/dev/null; then
  defaults write com.apple.finder ShowHardDrivesOnDesktop -bool false
  echo "Hide icons for hard drives on the desktop - changed 🔥"
else
  echo "Hide icons for hard drives on the desktop - already set! 👌"
fi

# Hide icons for servers on the desktop
if ! defaults read com.apple.finder ShowMountedServersOnDesktop | grep -i "0" &>/dev/null; then
  defaults write com.apple.finder ShowMountedServersOnDesktop -bool false
  echo "Hide icons for servers on the desktop - changed 🔥"
else
  echo "Hide icons for servers on the desktop - already set! 👌"
fi

# Show icons for removable media on the desktop
if ! defaults read com.apple.finder ShowRemovableMediaOnDesktop | grep -i "1" &>/dev/null; then
  defaults write com.apple.finder ShowRemovableMediaOnDesktop -bool true
  echo "Show icons for removable media on the desktop - changed 🔥"
else
  echo "Show icons for removable media on the desktop - already set! 👌"
fi

# Show sidebar
if ! defaults read com.apple.finder ShowSidebar | grep -i "1" &>/dev/null; then
  defaults write com.apple.finder ShowSidebar -bool true
  echo "Show sidebar - changed 🔥"
else
  echo "Show sidebar - already set! 👌"
fi

# Hide recent tags
if ! defaults read com.apple.finder ShowRecentTags | grep -i "0" &>/dev/null; then
  defaults write com.apple.finder ShowRecentTags -bool false
  echo "Hide recent tags - changed 🔥"
else
  echo "Hide recent tags - already set! 👌"
fi

# Show status bar
if ! defaults read com.apple.finder ShowStatusBar | grep -i "1" &>/dev/null; then
  defaults write com.apple.finder ShowStatusBar -bool true
  echo "Show status bar - changed 🔥"
else
  echo "Show status bar - already set! 👌"
fi

# Show path bar
if ! defaults read com.apple.finder ShowPathbar | grep -i "1" &>/dev/null; then
  defaults write com.apple.finder ShowPathbar -bool true
  echo "Show path bar - changed 🔥"
else
  echo "Show path bar - already set! 👌"
fi

# Display full POSIX path as Finder window title
if ! defaults read com.apple.finder _FXShowPosixPathInTitle | grep -i "1" &>/dev/null; then
  defaults write com.apple.finder _FXShowPosixPathInTitle -bool true
  echo "Display full POSIX path as Finder window title - changed 🔥"
else
  echo "Display full POSIX path as Finder window title - already set! 👌"
fi

# Keep folders on top when sorting by name
if ! defaults read com.apple.finder _FXSortFoldersFirst | grep -i "1" &>/dev/null; then
  defaults write com.apple.finder _FXSortFoldersFirst -bool true
  echo "Keep folders on top when sorting by name - changed 🔥"
else
  echo "Keep folders on top when sorting by name - already set! 👌"
fi

# When performing a search, search the current folder by default
if ! defaults read com.apple.finder FXDefaultSearchScope | grep -i "SCcf" &>/dev/null; then
  defaults write com.apple.finder FXDefaultSearchScope -string "SCcf"
  echo "When performing a search, search the current folder by default - changed 🔥"
else
  echo "When performing a search, search the current folder by default - already set! 👌"
fi

# Disable the warning when changing a file extension
if ! defaults read com.apple.finder FXEnableExtensionChangeWarning | grep -i "0" &>/dev/null; then
  defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false
  echo "Disable the warning when changing a file extension - changed 🔥"
else
  echo "Disable the warning when changing a file extension - already set! 👌"
fi

# Automatically open a new Finder window when a volume is mounted
if ! defaults read com.apple.finder OpenWindowForNewRemovableDisk | grep -i "1" &>/dev/null || ! defaults read com.apple.frameworks.diskimages auto-open-ro-root | grep -i "1" &>/dev/null || ! defaults read com.apple.frameworks.diskimages auto-open-rw-root | grep -i "1" &>/dev/null; then
  defaults write com.apple.finder OpenWindowForNewRemovableDisk -bool true
  defaults write com.apple.frameworks.diskimages auto-open-ro-root -bool true
  defaults write com.apple.frameworks.diskimages auto-open-rw-root -bool true
  echo "Automatically open a new Finder window when a volume is mounted - changed 🔥"
else
  echo "Automatically open a new Finder window when a volume is mounted - already set! 👌"
fi

# Use preferred group by kind
if ! defaults read com.apple.finder FXPreferredGroupBy | grep -i "Kind" &>/dev/null; then
  defaults write com.apple.finder FXPreferredGroupBy -string "Kind"
  echo "Use preferred group by kind - changed 🔥"
else
  echo "Use preferred group by kind - already set! 👌"
fi

# Use column view in all Finder windows by default
# Four-letter codes for the other view modes: `icnv`, `clmv`, `Flwv`, `Nlsv`
if ! defaults read com.apple.finder FXPreferredViewStyle | grep -i "clmv" &>/dev/null; then
  defaults write com.apple.finder FXPreferredViewStyle -string "clmv"
  echo "Use column view in all Finder windows by default - changed 🔥"
else
  echo "Use column view in all Finder windows by default - already set! 👌"
fi

# Disable the warning before emptying the Trash
if ! defaults read com.apple.finder WarnOnEmptyTrash | grep -i "1" &>/dev/null; then
  defaults write com.apple.finder WarnOnEmptyTrash -bool true
  echo "Disable the warning before emptying the Trash - changed 🔥"
else
  echo "Disable the warning before emptying the Trash - already set! 👌"
fi

# Avoid creating .DS_Store files on network or USB volumes
if ! defaults read com.apple.desktopservices DSDontWriteNetworkStores | grep -i "1" &>/dev/null || ! defaults read com.apple.desktopservices DSDontWriteUSBStores | grep -i "1" &>/dev/null; then
  defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
  defaults write com.apple.desktopservices DSDontWriteUSBStores -bool true
  echo "Avoid creating .DS_Store files on network or USB volumes - changed 🔥"
else
  echo "Avoid creating .DS_Store files on network or USB volumes - already set! 👌"
fi

# Disable disk image verification
if ! defaults read com.apple.frameworks.diskimages skip-verify | grep -i "1" &>/dev/null || ! defaults read com.apple.frameworks.diskimages skip-verify-locked | grep -i "1" &>/dev/null || ! defaults read com.apple.frameworks.diskimages skip-verify-remote | grep -i "1" &>/dev/null; then
  defaults write com.apple.frameworks.diskimages skip-verify -bool true
  defaults write com.apple.frameworks.diskimages skip-verify-locked -bool true
  defaults write com.apple.frameworks.diskimages skip-verify-remote -bool true
  echo "Disable disk image verification - changed 🔥"
else
  echo "Disable disk image verification - already set! 👌"
fi

# Expand the following File Info panes:
# “General”, “Open with”, and “Sharing & Permissions”
if ! defaults read com.apple.finder FXInfoPanesExpanded | grep -i "General" &>/dev/null || ! defaults read com.apple.finder FXInfoPanesExpanded | grep -i "OpenWith" &>/dev/null || ! defaults read com.apple.finder FXInfoPanesExpanded | grep -i "Privileges" &>/dev/null; then
  defaults write com.apple.finder FXInfoPanesExpanded -dict \
    General -bool true \
    OpenWith -bool true \
    Privileges -bool true
  echo "Expand the following File Info panes - changed 🔥"
else
  echo "Expand the following File Info panes - already set! 👌"
fi

# Disable the “Are you sure you want to open this application?” dialog
if ! defaults read com.apple.LaunchServices LSQuarantine | grep -i "0" &>/dev/null; then
  defaults write com.apple.LaunchServices LSQuarantine -bool false
  echo "Disable the “Are you sure you want to open this application?” dialog - changed 🔥"
else
  echo "Disable the “Are you sure you want to open this application?” dialog - already set! 👌"
fi

# Show the ~/Library folder
chflags nohidden ~/Library

# Enable snap-to-grid for icons on the desktop and in other icon views
/usr/libexec/PlistBuddy -c "Set :DesktopViewSettings:IconViewSettings:arrangeBy grid" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :FK_StandardViewSettings:IconViewSettings:arrangeBy grid" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :StandardViewSettings:IconViewSettings:arrangeBy grid" ~/Library/Preferences/com.apple.finder.plist

# Increase grid spacing for icons on the desktop and in other icon views
/usr/libexec/PlistBuddy -c "Set :DesktopViewSettings:IconViewSettings:gridSpacing 56" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :FK_StandardViewSettings:IconViewSettings:gridSpacing 56" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :StandardViewSettings:IconViewSettings:gridSpacing 56" ~/Library/Preferences/com.apple.finder.plist

# Increase the size of icons on the desktop and in other icon views
/usr/libexec/PlistBuddy -c "Set :DesktopViewSettings:IconViewSettings:iconSize 56" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :FK_StandardViewSettings:IconViewSettings:iconSize 56" ~/Library/Preferences/com.apple.finder.plist
/usr/libexec/PlistBuddy -c "Set :StandardViewSettings:IconViewSettings:iconSize 56" ~/Library/Preferences/com.apple.finder.plist

# Show the /Volumes folder
sudo chflags nohidden /Volumes

# Remove duplicates in the “Open With” menu (also see `lscleanup` alias)
/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user

###############################################################################
# Global                                                                      #
###############################################################################

echo -e "\n"
echo "Setting up Global settings..."
echo "------------------------------------------------"

# Enable swipe navigate with scrolls
if ! defaults read NSGlobalDomain AppleEnableSwipeNavigateWithScrolls | grep -i "1" &>/dev/null; then
  defaults write NSGlobalDomain AppleEnableSwipeNavigateWithScrolls -bool true
  echo "Swipe navigate with scrolls - changed 🔥"
else
  echo "Swipe navigate with scrolls - already set! 👌"
fi

# Enable subpixel font rendering on non-Apple LCDs
# Reference: https://github.com/kevinSuttle/macOS-Defaults/issues/17#issuecomment-266633501
if ! defaults read NSGlobalDomain AppleFontSmoothing | grep -i "1" &>/dev/null; then
  defaults write NSGlobalDomain AppleFontSmoothing -int 1
  echo "Subpixel font rendering - changed 🔥"
else
  echo "Subpixel font rendering - already set! 👌"
fi

# Enable dark interface style
if ! defaults read NSGlobalDomain AppleInterfaceStyle | grep -i "Dark" &>/dev/null; then
  defaults write NSGlobalDomain AppleInterfaceStyle -string "Dark"
  echo "Dark interface style - changed 🔥"
else
  echo "Dark interface style - already set! 👌"
fi

# Enable full keyboard access for all controls
# (e.g. enable Tab in modal dialogs)
if ! defaults read NSGlobalDomain AppleKeyboardUIMode | grep -i "2" &>/dev/null; then
  defaults write NSGlobalDomain AppleKeyboardUIMode -int 2
  echo "Full keyboard access for all controls - changed 🔥"
else
  echo "Full keyboard access for all controls - already set! 👌"
fi

# Disable press-and-hold for keys in favor of key repeat
if ! defaults read NSGlobalDomain ApplePressAndHoldEnabled | grep -i "0" &>/dev/null; then
  defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false
  echo "Disable press-and-hold for keys - changed 🔥"
else
  echo "Disable press-and-hold for keys - already set! 👌"
fi

# Disable miniaturize on double click
if ! defaults read NSGlobalDomain AppleMiniaturizeOnDoubleClick | grep -i "0" &>/dev/null; then
  defaults write NSGlobalDomain AppleMiniaturizeOnDoubleClick -bool false
  echo "Disable miniaturize on double click - changed 🔥"
else
  echo "Disable miniaturize on double click - already set! 👌"
fi

# Show all filename extensions in finder
if ! defaults read NSGlobalDomain AppleShowAllExtensions | grep -i "1" &>/dev/null; then
  defaults write NSGlobalDomain AppleShowAllExtensions -bool true
  echo "Show all filename extensions in finder - changed 🔥"
else
  echo "Show all filename extensions in finder - already set! 👌"
fi

# Always show scrollbars
# Possible values: `WhenScrolling`, `Automatic` and `Always`
if ! defaults read NSGlobalDomain AppleShowScrollBars | grep -i "Always" &>/dev/null; then
  defaults write NSGlobalDomain AppleShowScrollBars -string "Always"
  echo "Always show scrollbars - changed 🔥"
else
  echo "Always show scrollbars - already set! 👌"
fi

# Set sidebar icon size to medium
if ! defaults read NSGlobalDomain NSTableViewDefaultSizeMode | grep -i "1" &>/dev/null; then
  defaults write NSGlobalDomain NSTableViewDefaultSizeMode -int 1
  echo "Medium sidebar icons size - changed 🔥"
else
  echo "Medium sidebar icons size - already set! 👌"
fi

# Set a blazingly fast keyboard repeat rate
if ! defaults read NSGlobalDomain KeyRepeat | grep -i "1" &>/dev/null || ! defaults read NSGlobalDomain InitialKeyRepeat | grep -i "10" &>/dev/null; then
  defaults write NSGlobalDomain KeyRepeat -int 1
  defaults write NSGlobalDomain InitialKeyRepeat -int 10
  echo "Blazingly fast keyboard repeat rate - changed 🔥"
else
  echo "Blazingly fast keyboard repeat rate - already set! 👌"
fi

# Disable automatic capitalization as it’s annoying when typing code
if ! defaults read NSGlobalDomain NSAutomaticCapitalizationEnabled | grep -i "0" &>/dev/null; then
  defaults write NSGlobalDomain NSAutomaticCapitalizationEnabled -bool false
  echo "Disable automatic capitalization - changed 🔥"
else
  echo "Disable automatic capitalization - already set! 👌"
fi

# Disable smart dashes as they’re annoying when typing code
if ! defaults read NSGlobalDomain NSAutomaticDashSubstitutionEnabled | grep -i "0" &>/dev/null; then
  defaults write NSGlobalDomain NSAutomaticDashSubstitutionEnabled -bool false
  echo "Disable smart dashes - changed 🔥"
else
  echo "Disable smart dashes - already set! 👌"
fi

# Disable automatic period substitution as it’s annoying when typing code
if ! defaults read NSGlobalDomain NSAutomaticPeriodSubstitutionEnabled | grep -i "0" &>/dev/null; then
  defaults write NSGlobalDomain NSAutomaticPeriodSubstitutionEnabled -bool false
  echo "Disable automatic period substitution - changed 🔥"
else
  echo "Disable automatic period substitution - already set! 👌"
fi

# Disable smart quotes as they’re annoying when typing code
if ! defaults read NSGlobalDomain NSAutomaticQuoteSubstitutionEnabled | grep -i "0" &>/dev/null; then
  defaults write NSGlobalDomain NSAutomaticQuoteSubstitutionEnabled -bool false
  echo "Disable smart quotes - changed 🔥"
else
  echo "Disable smart quotes - already set! 👌"
fi

# Disable auto-correct
if ! defaults read NSGlobalDomain NSAutomaticSpellingCorrectionEnabled | grep -i "0" &>/dev/null; then
  defaults write NSGlobalDomain NSAutomaticSpellingCorrectionEnabled -bool false
  echo "Disable auto-correct - changed 🔥"
else
  echo "Disable auto-correct - already set! 👌"
fi

# Save to disk (not to iCloud) by default
if ! defaults read NSGlobalDomain NSDocumentSaveNewDocumentsToCloud | grep -i "0" &>/dev/null; then
  defaults write NSGlobalDomain NSDocumentSaveNewDocumentsToCloud -bool false
  echo "Save to disk (not to iCloud) by default - changed 🔥"
else
  echo "Save to disk (not to iCloud) by default - already set! 👌"
fi

if ! ls -laH ~/ | grep -i "^l" | grep -i icloud &>/dev/null; then
  ln -s "/Users/$USER/Library/Mobile Documents/com~apple~CloudDocs" ~/iCloud
  echo "icloud drive - symlinked 🔥"
else
  echo "icloud drive - already exists 👌"
fi

# Expand save panel by default
if ! defaults read NSGlobalDomain NSNavPanelExpandedStateForSaveMode | grep -i "1" &>/dev/null || ! defaults read NSGlobalDomain NSNavPanelExpandedStateForSaveMode2 | grep -i "1" &>/dev/null; then
  defaults write NSGlobalDomain NSNavPanelExpandedStateForSaveMode -bool true
  defaults write NSGlobalDomain NSNavPanelExpandedStateForSaveMode2 -bool true
  echo "Expand save panel by default - changed 🔥"
else
  echo "Expand save panel by default - already set! 👌"
fi

# Disable the over-the-top focus ring animation
if ! defaults read NSGlobalDomain NSUseAnimatedFocusRing | grep -i "0" &>/dev/null; then
  defaults write NSGlobalDomain NSUseAnimatedFocusRing -bool false
  echo "Disable the over-the-top focus ring animation - changed 🔥"
else
  echo "Disable the over-the-top focus ring animation - already set! 👌"
fi

# Increase window resize speed for Cocoa applications
if ! defaults read NSGlobalDomain NSWindowResizeTime | grep -i "0.001" &>/dev/null; then
  defaults write NSGlobalDomain NSWindowResizeTime -float 0.001
  echo "Increase window resize speed - changed 🔥"
else
  echo "Increase window resize speed - already set! 👌"
fi

# Expand print panel by default
if ! defaults read NSGlobalDomain PMPrintingExpandedStateForPrint | grep -i "1" &>/dev/null || ! defaults read NSGlobalDomain PMPrintingExpandedStateForPrint2 | grep -i "1" &>/dev/null; then
  defaults write NSGlobalDomain PMPrintingExpandedStateForPrint -bool true
  defaults write NSGlobalDomain PMPrintingExpandedStateForPrint2 -bool true
  echo "Expand print panel by default - changed 🔥"
else
  echo "Expand print panel by default - already set! 👌"
fi

# Add a context menu item for showing the Web Inspector in web views
if ! defaults read NSGlobalDomain WebKitDeveloperExtras | grep -i "1" &>/dev/null; then
  defaults write NSGlobalDomain WebKitDeveloperExtras -bool true
  echo "Add a context menu item for showing the Web Inspector in web views - changed 🔥"
else
  echo "Add a context menu item for showing the Web Inspector in web views - already set! 👌"
fi

# Disable mouse acceleration
if ! defaults read NSGlobalDomain com.apple.mouse.scaling | grep -i "\-1" &>/dev/null; then
  defaults write NSGlobalDomain com.apple.mouse.scaling -string "-1"
  echo "Disable mouse acceleration - changed 🔥"
else
  echo "Disable mouse acceleration - already set! 👌"
fi

# Enable spring loading for directories
if ! defaults read NSGlobalDomain com.apple.springing.enabled | grep -i "1" &>/dev/null; then
  defaults write NSGlobalDomain com.apple.springing.enabled -bool true
  echo "Enable spring loading for directories - changed 🔥"
else
  echo "Enable spring loading for directories - already set! 👌"
fi

# Reduce the spring loading delay for directories
if ! defaults read NSGlobalDomain com.apple.springing.delay | grep -i "0.2" &>/dev/null; then
  defaults write NSGlobalDomain com.apple.springing.delay -float 0.2
  echo "Reduce the spring loading delay for directories - changed 🔥"
else
  echo "Reduce the spring loading delay for directories - already set! 👌"
fi

# Disable “natural” (Lion-style) scrolling
if ! defaults read NSGlobalDomain com.apple.swipescrolldirection | grep -i "1" &>/dev/null; then
  defaults write NSGlobalDomain com.apple.swipescrolldirection -bool true
  echo "Disable “natural” (Lion-style) scrolling - changed 🔥"
else
  echo "Disable “natural” (Lion-style) scrolling - already set! 👌"
fi

# Set Help Viewer windows to non-floating mode
if ! defaults read com.apple.helpviewer DevMode | grep -i "1" &>/dev/null; then
  defaults write com.apple.helpviewer DevMode -bool true
  echo "Set Help Viewer windows to non-floating mode - changed 🔥"
else
  echo "Set Help Viewer windows to non-floating mode - already set! 👌"
fi

# Reveal IP address, hostname, OS version, etc. when clicking the clock in the login window
if ! defaults read /Library/Preferences/com.apple.loginwindow AdminHostInfo | grep -i "HostName" &>/dev/null; then
  sudo defaults write /Library/Preferences/com.apple.loginwindow AdminHostInfo HostName
  echo "Reveal IP address, hostname, OS version, etc. when clicking the clock in the login window - changed 🔥"
else
  echo "Reveal IP address, hostname, OS version, etc. when clicking the clock in the login window - already set! 👌"
fi

###############################################################################
# Messages                                                                    #
###############################################################################

echo -e "\n"
echo "Setting up Messages settings..."
echo "------------------------------------------------"

# Disable automatic emoji substitution (i.e. use plain text smileys)
if ! defaults read com.apple.messageshelper.MessageController SOInputLineSettings | grep -i "automaticEmojiSubstitutionEnablediMessage" &>/dev/null; then
  defaults write com.apple.messageshelper.MessageController SOInputLineSettings -dict-add "automaticEmojiSubstitutionEnablediMessage" -bool false
  echo "Disable automatic emoji substitution - changed 🔥"
else
  echo "Disable automatic emoji substitution - already set! 👌"
fi

# Disable smart quotes as it’s annoying for messages that contain code
if ! defaults read com.apple.messageshelper.MessageController SOInputLineSettings | grep -i "automaticQuoteSubstitutionEnabled" &>/dev/null; then
  defaults write com.apple.messageshelper.MessageController SOInputLineSettings -dict-add "automaticQuoteSubstitutionEnabled" -bool false
  echo "Disable smart quotes - changed 🔥"
else
  echo "Disable smart quotes - already set! 👌"
fi

# Disable continuous spell checking
if ! defaults read com.apple.messageshelper.MessageController SOInputLineSettings | grep -i "continuousSpellCheckingEnabled" &>/dev/null; then
  defaults write com.apple.messageshelper.MessageController SOInputLineSettings -dict-add "continuousSpellCheckingEnabled" -bool false
  echo "Disable continuous spell checking - changed 🔥"
else
  echo "Disable continuous spell checking - already set! 👌"
fi

###############################################################################
# Music                                                                       #
###############################################################################

echo -e "\n"
echo "Setting up Music settings..."
echo "------------------------------------------------"

# Enable automatically download artwork
if ! defaults read com.apple.Music automaticallyDownloadArtwork | grep -i "1" &>/dev/null; then
  defaults write com.apple.Music automaticallyDownloadArtwork -bool true
  echo "Enable automatically download artwork - changed 🔥"
else
  echo "Enable automatically download artwork - already set! 👌"
fi

# Enable crossfade
if ! defaults read com.apple.Music crossfadeEnabled | grep -i "1" &>/dev/null; then
  defaults write com.apple.Music crossfadeEnabled -bool true
  echo "Enable crossfade - changed 🔥"
else
  echo "Enable crossfade - already set! 👌"
fi

# Hide apple music
if ! defaults read com.apple.Music showAppleMusic | grep -i "0" &>/dev/null; then
  defaults write com.apple.Music showAppleMusic -bool false
  echo "Hide apple music - changed 🔥"
else
  echo "Hide apple music - already set! 👌"
fi

###############################################################################
# Photos                                                                      #
###############################################################################

echo -e "\n"
echo "Setting up Photos settings..."
echo "------------------------------------------------"

# Prevent Photos from opening automatically when devices are plugged in
if ! defaults read com.apple.ImageCapture disableHotPlug | grep -i "1" &>/dev/null; then
  defaults write com.apple.ImageCapture disableHotPlug -bool true
  echo "Prevent Photos from opening automatically when devices are plugged in - changed 🔥"
else
  echo "Prevent Photos from opening automatically when devices are plugged in - already set! 👌"
fi

###############################################################################
# Print                                                                       #
###############################################################################

echo -e "\n"
echo "Setting up Print settings..."
echo "------------------------------------------------"

# Automatically quit printer app once the print jobs complete
if ! defaults read com.apple.print.PrintingPrefs "Quit When Finished" | grep -i "1" &>/dev/null; then
  defaults write com.apple.print.PrintingPrefs "Quit When Finished" -bool true
  echo "Quit when finishing - changed 🔥"
else
  echo "Quit when finishing - already set! 👌"
fi

###############################################################################
# Screen                                                                      #
###############################################################################

echo -e "\n"
echo "Setting up Screen settings..."
echo "------------------------------------------------"

# Require password immediately after sleep or screen saver begins
if ! defaults read com.apple.screensaver askForPassword | grep -i "1" &>/dev/null || ! defaults read com.apple.screensaver askForPasswordDelay | grep -i "0" &>/dev/null; then
  defaults write com.apple.screensaver askForPassword -int 1
  defaults write com.apple.screensaver askForPasswordDelay -int 0
  echo "Require password immediately after sleep or screen saver begins - changed 🔥"
else
  echo "Require password immediately after sleep or screen saver begins - already set! 👌"
fi

# Enable HiDPI display modes (requires restart)
if ! defaults read /Library/Preferences/com.apple.windowserver DisplayResolutionEnabled | grep -i "1" &>/dev/null; then
  sudo defaults write /Library/Preferences/com.apple.windowserver DisplayResolutionEnabled -bool true
  echo "Enable HiDPI display modes - changed 🔥"
else
  echo "Enable HiDPI display modes - already set! 👌"
fi

###############################################################################
# Screen Capture                                                              #
###############################################################################

echo -e "\n"
echo "Setting up Screen Capture settings..."
echo "------------------------------------------------"

# Set screenshot format to PNG
if ! defaults read com.apple.screencapture type | grep -i "png" &>/dev/null; then
  defaults write com.apple.screencapture type -string "png"
  echo "Set screenshot format to PNG - changed 🔥"
else
  echo "Set screenshot format to PNG - already set! 👌"
fi

# Set screenshot location to ~/Desktop
if ! defaults read com.apple.screencapture location | grep -i "${HOME}/Desktop" &>/dev/null; then
  defaults write com.apple.screencapture location -string "${HOME}/Desktop"
  echo "Set screenshot location to ~/Desktop - changed 🔥"
else
  echo "Set screenshot location to ~/Desktop - already set! 👌"
fi

###############################################################################
# Siri                                                                        #
###############################################################################

echo -e "\n"
echo "Setting up Siri settings..."
echo "------------------------------------------------"

# Hide menu icon
if ! defaults read com.apple.Siri StatusMenuVisible | grep -i "0" &>/dev/null; then
  defaults write com.apple.Siri StatusMenuVisible -bool false
  echo "Hide menu icon - changed 🔥"
else
  echo "Hide menu icon - already set! 👌"
fi

###############################################################################
# Software Update                                                             #
###############################################################################

echo -e "\n"
echo "Setting up Software Update settings..."
echo "------------------------------------------------"

# Enable automatic check
if ! defaults read com.apple.SoftwareUpdate AutomaticCheckEnabled | grep -i "1" &>/dev/null; then
  defaults write com.apple.SoftwareUpdate AutomaticCheckEnabled -bool true
  echo "Enable automatic check - changed 🔥"
else
  echo "Enable automatic check - already set! 👌"
fi

# Check for software updates daily, not just once per week
if ! defaults read com.apple.SoftwareUpdate ScheduleFrequency | grep -i "1" &>/dev/null; then
  defaults write com.apple.SoftwareUpdate ScheduleFrequency -int 1
  echo "Check for software updates daily - changed 🔥"
else
  echo "Check for software updates daily - already set! 👌"
fi

# Enable automatic download
if ! defaults read com.apple.SoftwareUpdate AutomaticDownload | grep -i "1" &>/dev/null; then
  defaults write com.apple.SoftwareUpdate AutomaticDownload -bool true
  echo "Enable automatic download - changed 🔥"
else
  echo "Enable automatic download - already set! 👌"
fi

# Install System data files & security updates
if ! defaults read com.apple.SoftwareUpdate CriticalUpdateInstall | grep -i "1" &>/dev/null; then
  defaults write com.apple.SoftwareUpdate CriticalUpdateInstall -int 1
  echo "Install System data files & security updates - changed 🔥"
else
  echo "Install System data files & security updates - already set! 👌"
fi

# Automatically download apps purchased on other Macs
if ! defaults read com.apple.SoftwareUpdate ConfigDataInstall | grep -i "1" &>/dev/null; then
  defaults write com.apple.SoftwareUpdate ConfigDataInstall -int 1
  echo "Automatically download apps purchased on other Macs - changed 🔥"
else
  echo "Automatically download apps purchased on other Macs - already set! 👌"
fi

# Turn on app auto-update
if ! defaults read com.apple.commerce AutoUpdate | grep -i "1" &>/dev/null; then
  defaults write com.apple.commerce AutoUpdate -bool true
  echo "Turn on app auto-update - changed 🔥"
else
  echo "Turn on app auto-update - already set! 👌"
fi

# Disallow the App Store to reboot machine on macOS updates
if ! defaults read com.apple.commerce AutoUpdateRestartRequired | grep -i "0" &>/dev/null; then
  defaults write com.apple.commerce AutoUpdateRestartRequired -bool false
  echo "Disallow the App Store to reboot machine on macOS updates - changed 🔥"
else
  echo "Disallow the App Store to reboot machine on macOS updates - already set! 👌"
fi

###############################################################################
# Spotlight                                                                   #
###############################################################################

echo -e "\n"
echo "Setting up Spotlight settings..."
echo "------------------------------------------------"

# Change indexing order and disable some search result
if defaults read com.apple.spotlight orderedItems | grep -i "enabled = 0" &>/dev/null; then
  defaults write com.apple.spotlight orderedItems -array \
    '{"enabled" = 1;"name" = "APPLICATIONS";}' \
    '{"enabled" = 1;"name" = "BOOKMARKS";}' \
    '{"enabled" = 1;"name" = "MENU_EXPRESSION";}' \
    '{"enabled" = 1;"name" = "CONTACT";}' \
    '{"enabled" = 1;"name" = "MENU_CONVERSION";}' \
    '{"enabled" = 1;"name" = "MENU_DEFINITION";}' \
    '{"enabled" = 1;"name" = "SOURCE";}' \
    '{"enabled" = 1;"name" = "DOCUMENTS";}' \
    '{"enabled" = 1;"name" = "EVENT_TODO";}' \
    '{"enabled" = 1;"name" = "DIRECTORIES";}' \
    '{"enabled" = 1;"name" = "FONTS";}' \
    '{"enabled" = 1;"name" = "IMAGES";}' \
    '{"enabled" = 1;"name" = "MESSAGES";}' \
    '{"enabled" = 1;"name" = "MOVIES";}' \
    '{"enabled" = 1;"name" = "MUSIC";}' \
    '{"enabled" = 1;"name" = "MENU_OTHER";}' \
    '{"enabled" = 1;"name" = "PDF";}' \
    '{"enabled" = 1;"name" = "PRESENTATIONS";}' \
    '{"enabled" = 1;"name" = "MENU_SPOTLIGHT_SUGGESTIONS";}' \
    '{"enabled" = 1;"name" = "SPREADSHEETS";}' \
    '{"enabled" = 1;"name" = "SYSTEM_PREFS";}' \
    '{"enabled" = 1;"name" = "TIPS";}'
  echo "Change indexing order and disable some search result - changed 🔥"
else
  echo "Change indexing order and disable some search result - already set! 👌"
fi

# Make sure indexing is enabled for the main volume
sudo mdutil -i on / >/dev/null

# Rebuild the index from scratch
sudo mdutil -E / >/dev/null

###############################################################################
# Terminal                                                                    #
###############################################################################

echo -e "\n"
echo "Setting up Terminal settings..."
echo "------------------------------------------------"

# Enable Secure Keyboard Entry
if ! defaults read com.apple.terminal SecureKeyboardEntry | grep -i "1" &>/dev/null; then
  defaults write com.apple.terminal SecureKeyboardEntry -bool true
  echo "Enable Secure Keyboard Entry - changed 🔥"
else
  echo "Enable Secure Keyboard Entry - already set! 👌"
fi

# Only use UTF-8 in Terminal.app
if ! defaults read com.apple.terminal StringEncodings | grep -i "4" &>/dev/null; then
  defaults write com.apple.terminal StringEncodings -array 4
  echo "Only use UTF-8 in Terminal.app - changed 🔥"
else
  echo "Only use UTF-8 in Terminal.app - already set! 👌"
fi

# Hide Line Marks
if ! defaults read com.apple.Terminal ShowLineMarks | grep -i "0" &>/dev/null; then
  defaults write com.apple.Terminal ShowLineMarks -int 0
  echo "Hide Line Marks - changed 🔥"
else
  echo "Hide Line Marks - already set! 👌"
fi

###############################################################################
# Text Input                                                                  #
###############################################################################

echo -e "\n"
echo "Setting up Text Input settings..."
echo "------------------------------------------------"

# Hide icon in menu
if ! defaults read com.apple.TextInputMenu visible | grep -i "0" &>/dev/null; then
  defaults write com.apple.TextInputMenu visible -bool false
  echo "Hide icon in menu - changed 🔥"
else
  echo "Hide icon in menu - already set! 👌"
fi

###############################################################################
# Time Machine                                                              #
###############################################################################

echo -e "\n"
echo "Setting up Time Machine settings..."
echo "------------------------------------------------"

# Do not offer new disks for backup
if ! defaults read com.apple.TimeMachine DoNotOfferNewDisksForBackup | grep -i "1" &>/dev/null; then
  defaults write com.apple.TimeMachine DoNotOfferNewDisksForBackup -bool true
  echo "Do not offer new disks for backup - changed 🔥"
else
  echo "Do not offer new disks for backup - already set! 👌"
fi

###############################################################################
# Trackpad, mouse, keyboard and Bluetooth accessories                         #
###############################################################################

echo -e "\n"
echo "Setting up Trackpad, mouse, keyboard and Bluetooth accessories settings..."
echo "------------------------------------------------"

# Enable tap to click for this user and for the login screen on trackpad
if ! defaults read com.apple.driver.AppleBluetoothMultitouch.trackpad Clicking | grep -i "1" &>/dev/null || ! defaults read NSGlobalDomain com.apple.mouse.tapBehavior | grep -i "1" &>/dev/null || ! defaults read NSGlobalDomain com.apple.mouse.tapBehavior | grep -i "1" &>/dev/null; then
  defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad Clicking -bool true
  defaults -currentHost write NSGlobalDomain com.apple.mouse.tapBehavior -int 1
  defaults write NSGlobalDomain com.apple.mouse.tapBehavior -int 1
  echo "Trackpad: enable tap to click for this user and for the login screen - changed 🔥"
else
  echo "Trackpad: enable tap to click for this user and for the login screen - already set! 👌"
fi

# Enable three finger drag on trackpad
if ! defaults read http://com.apple.driver.AppleBluetoothMultitouch.trackpad TrackpadThreeFingerDrag | grep -i "1" &>/dev/null || ! defaults read http://com.apple.AppleMultitouchTrackpad TrackpadThreeFingerDrag | grep -i "1" &>/dev/null; then
  defaults write http://com.apple.driver.AppleBluetoothMultitouch.trackpad TrackpadThreeFingerDrag -int 1
  defaults write http://com.apple.AppleMultitouchTrackpad TrackpadThreeFingerDrag -int 1
  echo "Trackpad: enable three finger drag - changed 🔥"
else
  echo "Trackpad: enable three finger drag - already set! 👌"
fi

# Map bottom right corner to right-click on trackpad
if
  ! defaults read com.apple.driver.AppleBluetoothMultitouch.trackpad TrackpadCornerSecondaryClick | grep -i "2" &>/dev/null || ! defaults read com.apple.driver.AppleBluetoothMultitouch.trackpad TrackpadRightClick | grep -i "1" &>/dev/null
then
  defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad TrackpadCornerSecondaryClick -int 2
  defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad TrackpadRightClick -bool true
  echo "Trackpad: map bottom right corner to right-click - changed 🔥"
else
  echo "Trackpad: map bottom right corner to right-click - already set! 👌"
fi

# Increase sound quality for Bluetooth headphones/headsets
if ! defaults read com.apple.BluetoothAudioAgent "Apple Bitpool Min (editable)" | grep -i "40" &>/dev/null; then
  defaults write com.apple.BluetoothAudioAgent "Apple Bitpool Min (editable)" -int 40
  echo "Increase sound quality for Bluetooth headphones/headsets - changed 🔥"
else
  echo "Increase sound quality for Bluetooth headphones/headsets - already set! 👌"
fi

###############################################################################
# QuickTime Player                                                            #
###############################################################################

echo -e "\n"
echo "Setting up QuickTime Player settings..."
echo "------------------------------------------------"

# Enable autoplay
if ! defaults read com.apple.QuickTimePlayerX MGPlayMovieOnOpen | grep -i "1" &>/dev/null; then
  defaults write com.apple.QuickTimePlayerX MGPlayMovieOnOpen -bool true
  echo "Enable autoplay - changed 🔥"
else
  echo "Enable autoplay - already set! 👌"
fi

###############################################################################
# Amphetamine                                                                 #
###############################################################################

if ls /Applications | grep -i amphetamine &>/dev/null; then
  echo -e "\n"
  echo "Setting up Amphetamine settings..."
  echo "------------------------------------------------"

  # Disallow sleep when lid is closed
  if ! defaults read com.if.Amphetamine "Allow Closed-Display Sleep" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Allow Closed-Display Sleep" -int 0
    echo "Disallow sleep when lid is closed - changed 🔥"
  else
    echo "Disallow sleep when lid is closed - already set! 👌"
  fi

  # Disallow display to go sleep
  if ! defaults read com.if.Amphetamine "Allow Display Sleep" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Allow Display Sleep" -int 0
    echo "Disallow display to go sleep - changed 🔥"
  else
    echo "Disallow display to go sleep - already set! 👌"
  fi

  # Disallow display sleep when screen is locked
  if ! defaults read com.if.Amphetamine "Allow Display Sleep When Screen Is Locked" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Allow Display Sleep When Screen Is Locked" -int 0
    echo "Disallow display sleep when screen is locked - changed 🔥"
  else
    echo "Disallow display sleep when screen is locked - already set! 👌"
  fi

  # Disallow screen saver
  if ! defaults read com.if.Amphetamine "Allow Screen Saver" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Allow Screen Saver" -int 0
    echo "Disallow screen saver - changed 🔥"
  else
    echo "Disallow screen saver - already set! 👌"
  fi

  # Stop asking to end for low battery
  if ! defaults read com.if.Amphetamine "Always Ask to End For Low Battery" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Always Ask to End For Low Battery" -int 0
    echo "Stop asking to end for low battery - changed 🔥"
  else
    echo "Stop asking to end for low battery - already set! 👌"
  fi

  # Auto remove notifications
  if ! defaults read com.if.Amphetamine "Auto Remove Notifications" | grep -i "1" &>/dev/null; then
    defaults write com.if.Amphetamine "Auto Remove Notifications" -int 1
    echo "Auto remove notifications - changed 🔥"
  else
    echo "Auto remove notifications - already set! 👌"
  fi

  # Set default duration to infinite
  if ! defaults read com.if.Amphetamine "Default Duration" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Default Duration" -int 0
    echo "Set default duration to infinite - changed 🔥"
  else
    echo "Set default duration to infinite - already set! 👌"
  fi

  # Set default hotkey action to right click
  if ! defaults read com.if.Amphetamine DefaultHotkeyAction | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine DefaultHotkeyAction -int 0
    echo "Set default hotkey action to right click - changed 🔥"
  else
    echo "Set default hotkey action to right click - already set! 👌"
  fi

  # Disable drive alive
  if ! defaults read com.if.Amphetamine "Enable Drive Alive" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Enable Drive Alive" -int 0
    echo "Disable drive alive - changed 🔥"
  else
    echo "Disable drive alive - already set! 👌"
  fi

  # Disable Mouse Movement
  if ! defaults read com.if.Amphetamine "Enable Mouse Movement" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Enable Mouse Movement" -int 0
    echo "Disable Mouse Movement - changed 🔥"
  else
    echo "Disable Mouse Movement - already set! 👌"
  fi

  # Enable Notification Sound
  if ! defaults read com.if.Amphetamine "Enable Notification Sound" | grep -i "1" &>/dev/null; then
    defaults write com.if.Amphetamine "Enable Notification Sound" -int 1
    echo "Enable Notification Sound - changed 🔥"
  else
    echo "Enable Notification Sound - already set! 👌"
  fi

  # Enable session auto end notifications
  if ! defaults read com.if.Amphetamine "Enable Session Auto End Notifications" | grep -i "1" &>/dev/null; then
    defaults write com.if.Amphetamine "Enable Session Auto End Notifications" -int 1
    echo "Enable session auto end notification - changed 🔥"
  else
    echo "Enable session auto end notification - already set! 👌"
  fi

  # Enable session auto start notifications
  if ! defaults read com.if.Amphetamine "Enable Session Auto Start Notifications" | grep -i "1" &>/dev/null; then
    defaults write com.if.Amphetamine "Enable Session Auto Start Notifications" -int 1
    echo "Enable session auto start notification - changed 🔥"
  else
    echo "Enable session auto start notification - already set! 👌"
  fi

  # Disable session notifications
  if ! defaults read com.if.Amphetamine "Enable Session Notifications" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Enable Session Notifications" -int 0
    echo "Disable session notifications - changed 🔥"
  else
    echo "Disable session notifications - already set! 👌"
  fi

  # Disable statistics
  if ! defaults read com.if.Amphetamine "Enable Statistics" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Enable Statistics" -int 0
    echo "Disable statistics - changed 🔥"
  else
    echo "Disable statistics - already set! 👌"
  fi

  # Disable triggers
  if ! defaults read com.if.Amphetamine "Enable Triggers" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Enable Triggers" -int 0
    echo "Disable triggers - changed 🔥"
  else
    echo "Disable triggers - already set! 👌"
  fi

  # End session on low battery
  if ! defaults read com.if.Amphetamine "End Session On Low Battery" | grep -i "1" &>/dev/null; then
    defaults write com.if.Amphetamine "End Session On Low Battery" -int 1
    echo "End session on low battery - changed 🔥"
  else
    echo "End session on low battery - already set! 👌"
  fi

  # Set low battery percent to 10
  if ! defaults read com.if.Amphetamine "Low Battery Percent" | grep -i "10" &>/dev/null; then
    defaults write com.if.Amphetamine "Low Battery Percent" -int 10
    echo "Set low battery percent to 10 - changed 🔥"
  else
    echo "Set low battery percent to 10 - already set! 👌"
  fi

  # Dont end session on forced sleep
  if ! defaults read com.if.Amphetamine "End Sessions On Forced Sleep" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "End Sessions On Forced Sleep" -int 0
    echo "Dont end session on forced sleep - changed 🔥"
  else
    echo "Dont end session on forced sleep - already set! 👌"
  fi

  # Dont end session when FUS
  if ! defaults read com.if.Amphetamine "End Sessions when FUS" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "End Sessions when FUS" -int 0
    echo "Dont end session when FUS - changed 🔥"
  else
    echo "Dont end session when FUS - already set! 👌"
  fi

  # Hide dock icon
  if ! defaults read com.if.Amphetamine "Hide Dock Icon" | grep -i "1" &>/dev/null; then
    defaults write com.if.Amphetamine "Hide Dock Icon" -int 1
    echo "Hide dock icon - changed 🔥"
  else
    echo "Hide dock icon - already set! 👌"
  fi

  # Icon Style to cup of coffee
  if ! defaults read com.if.Amphetamine "Icon Style" | grep -i "5" &>/dev/null; then
    defaults write com.if.Amphetamine "Icon Style" -int 5
    echo "Icon Style to cup of coffee - changed 🔥"
  else
    echo "Icon Style to cup of coffee - already set! 👌"
  fi

  # Lock screen after inactivity
  if ! defaults read com.if.Amphetamine "Lock Screen After Inactivity" | grep -i "1" &>/dev/null; then
    defaults write com.if.Amphetamine "Lock Screen After Inactivity" -int 1
    echo "Lock screen after inactivity - changed 🔥"
  else
    echo "Lock screen after inactivity - already set! 👌"
  fi

  # Lock Screen Inactivity Delay to 300
  if ! defaults read com.if.Amphetamine "Lock Screen Inactivity Delay" | grep -i "300" &>/dev/null; then
    defaults write com.if.Amphetamine "Lock Screen Inactivity Delay" -int 300
    echo "Lock Screen Inactivity Delay to 300 - changed 🔥"
  else
    echo "Lock Screen Inactivity Delay to 300 - already set! 👌"
  fi

  # Ignore battery on AC
  if ! defaults read com.if.Amphetamine "Ignore Battery on AC" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Ignore Battery on AC" -int 0
    echo "Ignore battery on AC - changed 🔥"
  else
    echo "Ignore battery on AC - already set! 👌"
  fi

  # Disable Lock Screen for CDM
  if ! defaults read com.if.Amphetamine "Lock Screen For CDM" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Lock Screen For CDM" -int 0
    echo "Lock Screen for CDM - changed 🔥"
  else
    echo "Lock Screen for CDM - already set! 👌"
  fi

  # Set lower icon opacity to 0
  if ! defaults read com.if.Amphetamine "Lower Icon Opacity" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Lower Icon Opacity" -int 0
    echo "Set lower icon opacity to 0 - changed 🔥"
  else
    echo "Set lower icon opacity to 0 - already set! 👌"
  fi

  # Set screen saver delay to 5
  if ! defaults read com.if.Amphetamine "Screen Saver Delay" | grep -i "5" &>/dev/null; then
    defaults write com.if.Amphetamine "Screen Saver Delay" -int 5
    echo "Set screen saver delay to 5 - changed 🔥"
  else
    echo "Set screen saver delay to 5 - already set! 👌"
  fi

  # Session Notification Interval to 60
  if ! defaults read com.if.Amphetamine "Session Notification Interval" | grep -i "60" &>/dev/null; then
    defaults write com.if.Amphetamine "Session Notification Interval" -int 60
    echo "Session Notification Interval to 60 - changed 🔥"
  else
    echo "Session Notification Interval to 60 - already set! 👌"
  fi

  # Show Session Details In Menu
  if ! defaults read com.if.Amphetamine "Show Session Details In Menu" | grep -i "1" &>/dev/null; then
    defaults write com.if.Amphetamine "Show Session Details In Menu" -int 1
    echo "Show Session Details In Menu - changed 🔥"
  else
    echo "Show Session Details In Menu - already set! 👌"
  fi

  # Show Session Time In Status Bar
  if ! defaults read com.if.Amphetamine "Show Session Time In Status Bar" | grep -i "1" &>/dev/null; then
    defaults write com.if.Amphetamine "Show Session Time In Status Bar" -int 1
    echo "Show Session Time In Status Bar - changed 🔥"
  else
    echo "Show Session Time In Status Bar - already set! 👌"
  fi

  # Not show welcome window
  if ! defaults read com.if.Amphetamine "Show Welcome Window" | grep -i "0" &>/dev/null; then
    defaults write com.if.Amphetamine "Show Welcome Window" -int 0
    echo "Not show welcome window - changed 🔥"
  else
    echo "Not show welcome window - already set! 👌"
  fi

  # Start session at launch
  if ! defaults read com.if.Amphetamine "Start Session At Launch" | grep -i "1" &>/dev/null; then
    defaults write com.if.Amphetamine "Start Session At Launch" -int 1
    echo "Start session at launch - changed 🔥"
  else
    echo "Start session at launch - already set! 👌"
  fi

  # Start session on wake
  if ! defaults read com.if.Amphetamine "Start Session On Wake" | grep -i "1" &>/dev/null; then
    defaults write com.if.Amphetamine "Start Session On Wake" -int 1
    echo "Start session on wake - changed 🔥"
  else
    echo "Start session on wake - already set! 👌"
  fi

  # Status bar session time format to 1
  if ! defaults read com.if.Amphetamine "Status Bar Session Time Format" | grep -i "1" &>/dev/null; then
    defaults write com.if.Amphetamine "Status Bar Session Time Format" -int 1
    echo "Status bar session time format to 1 - changed 🔥"
  else
    echo "Status bar session time format to 1 - already set! 👌"
  fi

  # Use 24 Hour Clock
  if ! defaults read com.if.Amphetamine "Use 24 Hour Clock" | grep -i "1" &>/dev/null; then
    defaults write com.if.Amphetamine "Use 24 Hour Clock" -int 1
    echo "Use 24 Hour Clock - changed 🔥"
  else
    echo "Use 24 Hour Clock - already set! 👌"
  fi
fi

###############################################################################
# Arc Browser                                                                 #
###############################################################################

if ls /Applications | grep -i arc &>/dev/null; then
  echo -e "\n"
  echo "Setting up Arc Browser settings..."
  echo "------------------------------------------------"

  # Skip unboxing video
  if ! defaults read company.thebrowser.Browser shouldSkipUnboxingVideo | grep -i "1" &>/dev/null; then
    defaults write company.thebrowser.Browser shouldSkipUnboxingVideo -bool true
    echo "Skip unboxing video - changed 🔥"
  else
    echo "Skip unboxing video - already set! 👌"
  fi

  # Enable user interface sounds
  if ! defaults read company.thebrowser.Browser playUserInterfaceSoundsDisabled | grep -i "0" &>/dev/null; then
    defaults write company.thebrowser.Browser playUserInterfaceSoundsDisabled -bool false
    echo "Enable user interface sounds - changed 🔥"
  else
    echo "Enable user interface sounds - already set! 👌"
  fi

  # Disable warn before quitting
  if ! defaults read company.thebrowser.Browser shouldWarnBeforeQuitting | grep -i "0" &>/dev/null; then
    defaults write company.thebrowser.Browser shouldWarnBeforeQuitting -bool false
    echo "Disable warn before quitting - changed 🔥"
  else
    echo "Disable warn before quitting - already set! 👌"
  fi

  # Enable top bar url
  if ! defaults read company.thebrowser.Browser topBarURLEnabled | grep -i "0" &>/dev/null; then
    defaults write company.thebrowser.Browser topBarURLEnabled -bool false
    echo "Enable top bar url - changed 🔥"
  else
    echo "Enable top bar url - already set! 👌"
  fi
fi

###############################################################################
# Bruno                                                                       #
###############################################################################

if ls /Applications | grep -i bruno &>/dev/null; then
  echo -e "\n"
  echo "Setting up Bruno settings..."
  echo "------------------------------------------------"

  # Last Root Directory to bruno-api-docs
  if ! defaults read com.usebruno.app NSNavLastRootDirectory | grep -i "~/Developer/bruno-api-docs" &>/dev/null; then
    defaults write com.usebruno.app NSNavLastRootDirectory -string "~/Developer/bruno-api-docs"
    echo "Last Root Directory to bruno-api-docs - changed 🔥"
  else
    echo "Last Root Directory to bruno-api-docs - already set! 👌"
  fi
fi

###############################################################################
# Clean My Mac                                                                #
###############################################################################

if ls /Applications | grep -i "cleanmymac" &>/dev/null; then
  echo -e "\n"
  echo "Setting up Clean My Mac settings..."
  echo "------------------------------------------------"

  # Set isFirstScanClean to 0
  if ! defaults read com.macpaw.CleanMyMac4 isFirstScanClean | grep -i "0" &>/dev/null; then
    defaults write com.macpaw.CleanMyMac4 isFirstScanClean -bool false
    echo "Set isFirstScanClean to 0 - changed 🔥"
  else
    echo "Set isFirstScanClean to 0 - already set! 👌"
  fi

  # Set UpdaterIntroScreenSeen to 1
  if ! defaults read com.macpaw.CleanMyMac4 UpdaterIntroScreenSeen | grep -i "1" &>/dev/null; then
    defaults write com.macpaw.CleanMyMac4 UpdaterIntroScreenSeen -bool true
    echo "Set UpdaterIntroScreenSeen to 1 - changed 🔥"
  else
    echo "Set UpdaterIntroScreenSeen to 1 - already set! 👌"
  fi

  # Set UninstallerIntroScreenSeen to 1
  if ! defaults read com.macpaw.CleanMyMac4 UninstallerIntroScreenSeen | grep -i "1" &>/dev/null; then
    defaults write com.macpaw.CleanMyMac4 UninstallerIntroScreenSeen -bool true
    echo "Set UninstallerIntroScreenSeen to 1 - changed 🔥"
  else
    echo "Set UninstallerIntroScreenSeen to 1 - already set! 👌"
  fi

  # Set TermsOfServiceUpdateShown to 1
  if ! defaults read com.macpaw.CleanMyMac4 TermsOfServiceUpdateShown | grep -i "1" &>/dev/null; then
    defaults write com.macpaw.CleanMyMac4 TermsOfServiceUpdateShown -bool true
    echo "Set TermsOfServiceUpdateShown to 1 - changed 🔥"
  else
    echo "Set TermsOfServiceUpdateShown to 1 - already set! 👌"
  fi

  # Set ShowReleaseNotes to 0
  if ! defaults read com.macpaw.CleanMyMac4 ShowReleaseNotes | grep -i "0" &>/dev/null; then
    defaults write com.macpaw.CleanMyMac4 ShowReleaseNotes -bool false
    echo "Set ShowReleaseNotes to 0 - changed 🔥"
  else
    echo "Set ShowReleaseNotes to 0 - already set! 👌"
  fi

  # Set SeenIntroVideo to 1
  if ! defaults read com.macpaw.CleanMyMac4 SeenIntroVideo | grep -i "1" &>/dev/null; then
    defaults write com.macpaw.CleanMyMac4 SeenIntroVideo -bool true
    echo "Set SeenIntroVideo to 1 - changed 🔥"
  else
    echo "Set SeenIntroVideo to 1 - already set! 👌"
  fi

  # Set MaintenanceIntroScreenSeen to 1
  if ! defaults read com.macpaw.CleanMyMac4 MaintenanceIntroScreenSeen | grep -i "1" &>/dev/null; then
    defaults write com.macpaw.CleanMyMac4 MaintenanceIntroScreenSeen -bool true
    echo "Set MaintenanceIntroScreenSeen to 1 - changed 🔥"
  else
    echo "Set MaintenanceIntroScreenSeen to 1 - already set! 👌"
  fi
fi

###############################################################################
# Google Chrome                                                               #
###############################################################################

if ls /Applications | grep -i "google chrome" &>/dev/null; then
  echo -e "\n"
  echo "Setting up Google Chrome settings..."
  echo "------------------------------------------------"

  # Enable mouse swipe nawigate with scrolls
  if ! defaults read com.google.Chrome AppleEnableMouseSwipeNavigateWithScrolls | grep -i "1" &>/dev/null || ! defaults read com.google.Chrome.canary AppleEnableMouseSwipeNavigateWithScrolls | grep -i "1" &>/dev/null; then
    defaults write com.google.Chrome AppleEnableMouseSwipeNavigateWithScrolls -bool true
    defaults write com.google.Chrome.canary AppleEnableMouseSwipeNavigateWithScrolls -bool true
    echo "Enable mouse swipe nawigate with scrolls - changed 🔥"
  else
    echo "Enable mouse swipe nawigate with scrolls - already set! 👌"
  fi

  # Enable swipe nawigate with scrolls
  if ! defaults read com.google.Chrome AppleEnableSwipeNavigateWithScrolls | grep -i "1" &>/dev/null || ! defaults read com.google.Chrome.canary AppleEnableSwipeNavigateWithScrolls | grep -i "1" &>/dev/null; then
    defaults write com.google.Chrome AppleEnableSwipeNavigateWithScrolls -bool true
    defaults write com.google.Chrome.canary AppleEnableSwipeNavigateWithScrolls -bool true
    echo "Enable mouse swipe nawigate with scrolls - changed 🔥"
  else
    echo "Enable mouse swipe nawigate with scrolls - already set! 👌"
  fi

  # Disable print preview
  if ! defaults read com.google.Chrome DisablePrintPreview | grep -i "1" &>/dev/null || ! defaults read com.google.Chrome.canary DisablePrintPreview | grep -i "1" &>/dev/null; then
    defaults write com.google.Chrome DisablePrintPreview -bool true
    defaults write com.google.Chrome.canary DisablePrintPreview -bool true
    echo "Disable print preview - changed 🔥"
  else
    echo "Disable print preview - already set! 👌"
  fi

  # Expand print dialog by default
  if ! defaults read com.google.Chrome PMPrintingExpandedStateForPrint2 | grep -i "1" &>/dev/null || ! defaults read com.google.Chrome.canary PMPrintingExpandedStateForPrint2 | grep -i "1" &>/dev/null; then
    defaults write com.google.Chrome PMPrintingExpandedStateForPrint2 -bool true
    defaults write com.google.Chrome.canary PMPrintingExpandedStateForPrint2 -bool true
    echo "Expand print dialog by default - changed 🔥"
  else
    echo "Expand print dialog by default - already set! 👌"
  fi
fi

###############################################################################
# Hazel                                                                       #
###############################################################################

if ls /Applications | grep -i hazel &>/dev/null; then
  echo -e "\n"
  echo "Setting up Hazel settings..."
  echo "------------------------------------------------"

  # Trash maintain max size to 1
  if ! defaults read com.noodlesoft.Hazel TrashMaintainMaxSize | grep -i "1" &>/dev/null; then
    defaults write com.noodlesoft.Hazel TrashMaintainMaxSize -bool true
    echo "Trash maintain max size to 1 - changed 🔥"
  else
    echo "Trash maintain max size to 1 - already set! 👌"
  fi

  # Trash maximum file age to 1 week
  if ! defaults read com.noodlesoft.Hazel TrashMaximumFileAge | grep -i "1 w" &>/dev/null; then
    defaults write com.noodlesoft.Hazel TrashMaximumFileAge -string "1 w"
    echo "Trash maximum file age to 1 week - changed 🔥"
  else
    echo "Trash maximum file age to 1 week - already set! 👌"
  fi

  # Trash maximum file size to 1 GB
  if ! defaults read com.noodlesoft.Hazel TrashMaximumSize | grep -i "1 GB" &>/dev/null; then
    defaults write com.noodlesoft.Hazel TrashMaximumSize -string "1 GB"
    echo "Trash maximum file size to 1 GB - changed 🔥"
  else
    echo "Trash maximum file size to 1 GB - already set! 👌"
  fi

  # Trash purge old files
  if ! defaults read com.noodlesoft.Hazel TrashPurgeOldFiles | grep -i "1" &>/dev/null; then
    defaults write com.noodlesoft.Hazel TrashPurgeOldFiles -bool true
    echo "Trash purge old files - changed 🔥"
  else
    echo "Trash purge old files - already set! 👌"
  fi

  # Trash uninstall apps
  if ! defaults read com.noodlesoft.Hazel TrashUninstallApps | grep -i "1" &>/dev/null; then
    defaults write com.noodlesoft.Hazel TrashUninstallApps -bool true
    echo "Trash uninstall apps - changed 🔥"
  else
    echo "Trash uninstall apps - already set! 👌"
  fi
fi

###############################################################################
# Keyboard Maestro                                                            #
###############################################################################

if ls /Applications | grep -i "keyboard maestro" &>/dev/null; then
  echo -e "\n"
  echo "Setting up Keyboard Maestro settings..."
  echo "------------------------------------------------"

  # Hide status item
  if ! defaults read com.stairways.keyboardmaestro.engine AlwayShowStatusItem | grep -i "0" &>/dev/null; then
    defaults write com.stairways.keyboardmaestro.engine AlwayShowStatusItem -bool false
    echo "Hide Status item - changed 🔥"
  else
    echo "Hide Status item - already set! 👌"
  fi

  # Hide applications palette
  if ! defaults read com.stairways.keyboardmaestro.engine ShowApplicationsPalette | grep -i "0" &>/dev/null; then
    defaults write com.stairways.keyboardmaestro.engine ShowApplicationsPalette -bool false
    echo "Hide applications palette - changed 🔥"
  else
    echo "Hide applications palette - already set! 👌"
  fi

  # Hide welcome window
  if ! defaults read com.stairways.keyboardmaestro.editor DisplayWelcomeWindow | grep -i "0" &>/dev/null; then
    defaults write com.stairways.keyboardmaestro.editor DisplayWelcomeWindow -bool false
    echo "Hide welcome window - changed 🔥"
  else
    echo "Hide welcome window - already set! 👌"
  fi

  # Set conflict macro palette style to dark mode
  if ! defaults read com.stairways.keyboardmaestro.engine ConflictMacroPaletteStyle | grep -i 'Theme = "Dark Mode"' &>/dev/null; then
    defaults write com.stairways.keyboardmaestro.engine ConflictMacroPaletteStyle -dict \
      Columns -int 2 \
      Opacity -int 100 \
      Theme -string "Dark Mode" \
      UseDefaultInstead -bool false \
      UseTitle -bool false \
      UseTrigger -bool true
    echo "Set conflict macro palette style to dark mode - changed 🔥"
  else
    echo "Set conflict macro palette style to dark mode - already set! 👌"
  fi

  # Set default macro palette style to dark mode
  if ! defaults read com.stairways.keyboardmaestro.engine DefaultMacroPaletteStyle | grep -i 'Theme = "Dark Mode"' &>/dev/null; then
    defaults write com.stairways.keyboardmaestro.engine DefaultMacroPaletteStyle -dict \
      Columns -int 2 \
      Opacity -int 100 \
      Theme -string "Dark Mode" \
      UseDefaultInstead -bool false \
      UseTitle -bool false \
      UseTrigger -bool true
    echo "Set default macro palette style to dark mode - changed 🔥"
  else
    echo "Set default macro palette style to dark mode - already set! 👌"
  fi

  # Set Global macro palette style to dark mode
  if ! defaults read com.stairways.keyboardmaestro.engine GlobalMacroPaletteStyle | grep -i 'Theme = "Dark Mode"' &>/dev/null; then
    defaults write com.stairways.keyboardmaestro.engine GlobalMacroPaletteStyle -dict \
      Columns -int 2 \
      Opacity -int 100 \
      Theme -string "Dark Mode" \
      UseDefaultInstead -bool false \
      UseTitle -bool false \
      UseTrigger -bool true
    echo "Set Global macro palette style to dark mode - changed 🔥"
  else
    echo "Set Global macro palette style to dark mode - already set! 👌"
  fi
fi

###############################################################################
# Text Sniper                                                                 #
###############################################################################

if ls /Applications | grep -i textsniper &>/dev/null; then
  echo -e "\n"
  echo "Setting up Text Sniper settings..."
  echo "------------------------------------------------"

  # Capture Text shortcut to ⇧ + ⌘ + 2
  if ! defaults read com.valerijs.boguckis.TextSniper KeyboardShortcuts_keyboardShortcut | grep -i '{"carbonModifiers":768,"carbonKeyCode":19}' &>/dev/null; then
    defaults write com.valerijs.boguckis.TextSniper KeyboardShortcuts_keyboardShortcut -string '{"carbonModifiers":768,"carbonKeyCode":19}'
    echo "Capture Text shortcut - changed to ⇧ + ⌘ + 2 🔥"
  else
    echo "Capture Text shortcut - already set! 👌"
  fi

  # Additive Clipboard shortcut to ⌘ + H
  if ! defaults read com.valerijs.boguckis.TextSniper KeyboardShortcuts_keepHistoryShortcut | grep -i '{"carbonModifiers":256,"carbonKeyCode":4}' &>/dev/null; then
    defaults write com.valerijs.boguckis.TextSniper KeyboardShortcuts_keepHistoryShortcut -string '{"carbonModifiers":256,"carbonKeyCode":4}'
    echo "Additive Clipboard shortcut - changed to ⌘ + H 🔥"
  else
    echo "Additive Clipboard shortcut - already set! 👌"
  fi

  # Keep Line Breaks shortcut to ⌘ + L
  if ! defaults read com.valerijs.boguckis.TextSniper KeyboardShortcuts_keepLineBrakesShortcut | grep -i '{"carbonModifiers":256,"carbonKeyCode":37}' &>/dev/null; then
    defaults write com.valerijs.boguckis.TextSniper KeyboardShortcuts_keepLineBrakesShortcut -string '{"carbonModifiers":256,"carbonKeyCode":37}'
    echo "Keep Line Breaks shortcut - changed to ⌘ + L 🔥"
  else
    echo "Keep Line Breaks shortcut - already set! 👌"
  fi

  # Text To Speech shortcut to ⌘ + s
  if ! defaults read com.valerijs.boguckis.TextSniper KeyboardShortcuts_textToSpeechShortcut | grep -i '{"carbonModifiers":256,"carbonKeyCode":1}' &>/dev/null; then
    defaults write com.valerijs.boguckis.TextSniper KeyboardShortcuts_textToSpeechShortcut -string '{"carbonModifiers":256,"carbonKeyCode":1}'
    echo "Text To Speech shortcut - changed to ⌘ + S 🔥"
  else
    echo "Text To Speech shortcut - already set! 👌"
  fi
fi

###############################################################################
# Warp                                                                        #
###############################################################################

if ls /Applications | grep -i warp &>/dev/null; then
  echo -e "\n"
  echo "Setting up Warp settings..."
  echo "------------------------------------------------"

  # Disable crash reporting
  if ! defaults read dev.warp.Warp-Stable CrashReportingEnabled | grep -i "false" &>/dev/null; then
    defaults write dev.warp.Warp-Stable CrashReportingEnabled -string "false"
    echo "Disable crash reporting - changed 🔥"
  else
    echo "Disable crash reporting - already set! 👌"
  fi

  # Disable telemetry
  if ! defaults read dev.warp.Warp-Stable TelemetryEnabled | grep -i "false" &>/dev/null; then
    defaults write dev.warp.Warp-Stable TelemetryEnabled -string "false"
    echo "Disable telemetry - changed 🔥"
  else
    echo "Disable telemetry - already set! 👌"
  fi

  # Set font size to 12
  if ! defaults read dev.warp.Warp-Stable FontSize | grep -i "12" &>/dev/null; then
    defaults write dev.warp.Warp-Stable FontSize -string "12.0"
    echo "Set font size to 12 - changed 🔥"
  else
    echo "Set font size to 12 - already set! 👌"
  fi

  # Set line height ratio to 1.2
  if ! defaults read dev.warp.Warp-Stable LineHeightRatio | grep -i "1.2" &>/dev/null; then
    defaults write dev.warp.Warp-Stable LineHeightRatio -string "1.2"
    echo "Set line height ratio to 1.2 - changed 🔥"
  else
    echo "Set line height ratio to 1.2 - already set! 👌"
  fi
fi

###############################################################################
# Yoink                                                                       #
###############################################################################

if ls /Applications | grep -i yoink &>/dev/null; then
  echo -e "\n"
  echo "Setting up Yoink settings..."
  echo "------------------------------------------------"

  # Fn to ignore
  if ! defaults read at.EternalStorms.Yoink fnToIgnore | grep -i "1" &>/dev/null; then
    defaults write at.EternalStorms.Yoink fnToIgnore -bool true
    echo "Fn to ignore - changed 🔥"
  else
    echo "Fn to ignore - already set! 👌"
  fi

  # Load favicons
  if ! defaults read at.EternalStorms.Yoink loadFavicons | grep -i "1" &>/dev/null; then
    defaults write at.EternalStorms.Yoink loadFavicons -bool true
    echo "Load favicons - changed 🔥"
  else
    echo "Load favicons - already set! 👌"
  fi

  # Move to cursor location on drag init
  if ! defaults read at.EternalStorms.Yoink moveToCursorLocationOnDragInit | grep -i "1" &>/dev/null; then
    defaults write at.EternalStorms.Yoink moveToCursorLocationOnDragInit -bool true
    echo "Move to cursor location on drag init - changed 🔥"
  else
    echo "Move to cursor location on drag init - already set! 👌"
  fi

  # Show menu bar icon
  if ! defaults read at.EternalStorms.Yoink showMenuBarIcon | grep -i "0" &>/dev/null; then
    defaults write at.EternalStorms.Yoink showMenuBarIcon -bool false
    echo "Show menu bar icon - changed 🔥"
  else
    echo "Show menu bar icon - already set! 👌"
  fi

  # Show only if mouse at edge
  if ! defaults read at.EternalStorms.Yoink showOnlyIfMouseAtEdge | grep -i "0" &>/dev/null; then
    defaults write at.EternalStorms.Yoink showOnlyIfMouseAtEdge -bool false
    echo "Show only if mouse at edge - changed 🔥"
  else
    echo "Show only if mouse at edge - already set! 👌"
  fi

  # Use haptic feedback
  if ! defaults read at.EternalStorms.Yoink useHapticFeedback | grep -i "1" &>/dev/null; then
    defaults write at.EternalStorms.Yoink useHapticFeedback -bool true
    echo "Use haptic feedback - changed 🔥"
  else
    echo "Use haptic feedback - already set! 👌"
  fi

  # Set window corner to right center
  if ! defaults read at.EternalStorms.Yoink windowCorner | grep -i "5" &>/dev/null; then
    defaults write at.EternalStorms.Yoink windowCorner -int 5
    echo "Set window corner to right - changed 🔥"
  else
    echo "Set window corner to right - already set! 👌"
  fi
fi

###############################################################################
# Kill affected applications                                                  #
###############################################################################

for app in "Activity Monitor" \
  "Address Book" \
  "Calendar" \
  "iCal" \
  "cfprefsd" \
  "Contacts" \
  "Dock" \
  "Finder" \
  "Mail" \
  "Messages" \
  "Music" \
  "Photos" \
  "Safari" \
  "SystemUIServer" \
  "Terminal" \
  "Amphetamine" \
  "Arc" \
  "CleanMyMac X" \
  "Google Chrome" \
  "Bruno" \
  "Hazel" \
  "Keyboard Maestro" \
  "TextSniper" \
  "Warp" \
  "Yoink"; do
  killall "${app}" &>/dev/null
done

echo -e "\n"
echo "System Modifications - Done 🔥 Note that some of these changes require a logout/restart to take effect."
