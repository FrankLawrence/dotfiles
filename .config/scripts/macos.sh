#!/usr/bin/env bash

echo 'Are the Xcode command line tools installed?'
echo 'If not exit using CMD+C, and install with:'
echo 'xcode-select -install'

read answer

echo ' '
echo 'What is your username on this system?'
read uname

sudo -v #Give sudo privileges ahead of time, so that we hopefully only have to enter a password once
cd ~    #Moving to home directory at the beginning of the process

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" #Installing homebrew

#<----------------Installing MacOS Apps, via Homebrew, Caks, & The App Store-------------------->
brew=(
  bat
  btop
  docker
  fish
  fzf
  gdb
  gh
  git
  glow
  gnupg
  grep
  imagemagick
  lazydocker
  lazygit
  lazysql
  mysql-client
  nb
  neofetch
  neovim
  nethack
  nmap
  openssh
  ripgrep
  skhd
  starship
  stow
  tailscale
  tldr
  tmux
  vim
  w3m
  yazi
  yt-dlp
  zoxide
)
cask=(
  affinity-photo@1
  alacritty
  alt-tab
  # amethyst
  anytype
  # appcleaner
  # arc
  # background-music
  balenaetcher
  # betterdiscord-installer
  brave-browser
  # burp-suite
  clop
  cryptomator
  # dbeaver-community
  # discord
  docker
  # easydict
  # element
  # firefox
  # freetube
  ghidra
  # gimp
  # git-credential-manager
  # git-credential-manager-core
  gpg-suite
  hex-fiend
  hiddenbar
  iina
  imageoptim
  inkscape
  keepassxc
  kitty
  libreoffice
  librewolf
  # logseq
  # loop
  lulu  # Manage which applications can access internet
  macs-fan-control
  # makemkv
  microsoft-outlook
  # monero-wallet
  # notenook
  # notion
  obsidian
  # onyx
  oversight  # Detects microphoen and camera usage
  pearcleaner
  qbittorent
  qlmarkdown
  # quickrecorder
  raycast
  rectangle
  # selfcontrol
  shottr
  signal
  # skim
  spotify
  spotube
  # suspicious-package
  syntax-highlight
  # tailscale
  thunderbird
  # tor-browser
  # vscodium
  wireshark
  wireguard
  yubico-authenticator
  yubico-yubikey-manager
  zed
  zen-browser
) #GUI apps that install with cask
# mas=(
# )            #Mac App Store apps I install
# npm=(
# )

brew update
brew upgrade

brew install ${brew[@]}      #Homebrew App Installer
brew cask install ${cask[@]} #Casks Installer
# mas install ${mas[@]}        #Mac App Store Installer
# npm install ${npm[@]}        #Install npm apps

cd ~
git clone https://github.com/franklawrence/dotfiles dotfiles
stow dotfiles


#Installing Vim-plug
curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

echo 'Run ":PlugInstall" to install Vim Plugins, and then exit' >>~/vimPlug
vim ~/vimPlug #Opening Vim
rm ~/vimPlug  #Removing vimPlug

#<----------------Changing MacOS Specific Preferences-------------------->
defaults write com.knollsoft.Rectangle gapSize -float 10
defaults write com.knollsoft.Rectangle almostMaximizeHeight -float .98
defaults write com.knollsoft.Rectangle almostMaximizeWidth -float .98

defaults write com.apple.finder _FXShowPosixPathInTitle -bool YES                   #Show a path bar in the finder that shows the exact location
defaults write com.apple.finder ShowPathbar -bool true                              #Adds the path bar to the bottom of the finder
defaults write com.apple.finder FXEnableRemoveFromICloudDriveWarning -bool false    #Stop the automatic save to iCloud thing
defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false          #Remove the Warning Before Changing a File Extension in OSX
defaults write com.apple.finder FXPreferredViewStyle -string "Nlsv"                 #Changes Default Finder View to List
defaults write com.apple.finder WarnOnEmptyTrash -bool false                        #Removes Warning Before Emptying Trash
defaults write com.apple.finder DisableAllAnimations -bool true                     #Disable Finder Animations
defaults write com.apple.finder NewWindowTargetPath -string "file:///Users/$uname/" #Changes default finder location to ~
defaults write com.apple.finder ShowExternalHardDrivesOnDesktop -bool false         #Removes External Drives on Desktop
defaults write com.apple.finder ShowHardDrivesOnDesktop -bool false                 #Removes Internal Drives on Desktop
defaults write com.apple.finder ShowMountedServersOnDesktop -bool false             #Removes Mounted Servers on Desktop
defaults write com.apple.finder ShowRemovableMediaOnDesktop -bool false             #Removes Removable Media on Desktop
defaults write com.apple.finder _FXSortFoldersFirst -bool true                      #Moves Folders to top When Sorting Alphabetically in Finder
defaults write com.apple.finder FXDefaultSearchScope -string "SCcf"                 #Changes Default Finder Search to Current Folder Only
defaults write com.apple.finder FXICloudDriveDesktop -bool NO                       #Doesn't Sync Desktop to iCloud
defaults write com.apple.finder SidebarShowingiCloudDesktop -bool NO                #Removes iCloud Desktop from Finder Sidebar
defaults write com.apple.finder ShowStatusBar -bool YES                             #Shows Status Bar in Finder
defaults write com.apple.finder SidebariCloudDriveSectionDisclosedState -bool NO    #Makes Sure iCloud Drive is Showing in Finder Sidebar
defaults write com.apple.finder FXArrangeGroupViewBy -string "Name"                 #Arranges Finder by Name By Default

defaults write com.apple.dock autohide-time-modifier -int 0       #Sets Dock Autohide Time to O Seconds
defaults write com.apple.dock autohide -bool true                 #Turns Dock Autohide ON
defaults write com.apple.dock magnification -bool NO              #Turns of Dock Magnification
defaults write com.apple.dock orientation -string left            #Moving the Dock to the left Side of the Screen
defaults write com.apple.dock minimize-to-application -bool YES   #Minimizing Applications to Their Respective Application Icon
defaults write com.apple.dock showhidden -string YES              #Shows Hidden Applications in Dock
defaults write com.apple.dock expose-animation-duration -string 0 #Setting Expose Animation to 0 Seconds
defaults write com.apple.dock tilesize -int 36                    #Setting Icon Size to 36 Pixels
defaults write com.apple.dock mineffect -string "genie"           #Changes Minimize to Dock Animation to "Genie" (Seems to be the fastest by my eye)
defaults write com.apple.dock launchanim -bool false              #Setting Launch Animation to False

defaults write com.apple.NSGlobalDomain NSDocumentSaveNewDocumentsToCloud -bool FALSE                #Remove Save to iCloud Functionality
defaults write com.apple.NSGlobalDomain AppleHighlightColor -string "1.000000 0.733333 0.721569 Red" #Setting Highlight Color to Red
defaults write com.apple.NSGlobalDomain AppleShowAllExtensions -bool YES                             #Shows All File Extensions Always
defaults write com.apple.NSGlobalDomain NSAutomaticPeriodSubstitutionEnabled -bool NO                #Disables Double Space Bar- to Period
defaults write com.apple.NSGlobalDomain AppleMiniaturizeOnDoubleClick -bool NO                       #Disables Miniaturize on Double Click
defaults write com.apple.NSGlobalDomain AppleActionOnDoubleClick -string "Minimize"                  #Setting Double Click Action to Minimize
defaults write com.apple.NSGlobalDomain AppleAccentColor -int 0                                      #Setting Apple Accent Color to Red
defaults write com.apple.NSGlobalDomain NSUseAnimatedFocusRing -bool NO                              #Disabling Animated Focus Ring (The Blue Halo Around Input Fields & Stuff)
defaults write com.apple.NSGlobalDomain AppleShowScrollBars -string "WhenScrolling"                  #Showing Scroll Bars Only When Scrolling
defaults write com.apple.NSGlobalDomain NSTableViewDefaultSizeMode -int 1                            #Sets Default Finder View Size to 1
defaults write com.apple.NSGlobalDomain NSAutomaticCapitalizationEnabled -bool NO                    #Disabling Automatic Capitalization
defaults write com.apple.NSGlobalDomain NSNavPanelExpandedStateForSaveMode -bool true                #Automatically Expanding Printer Dialog Box & NSNav Panel
defaults write com.apple.NSGlobalDomain NSNavPanelExpandedStateForSaveMode2 -bool true
defaults write com.apple.NSGlobalDomain PMPrintingExpandedStateForPrint -bool true
defaults write com.apple.NSGlobalDomain PMPrintingExpandedStateForPrint2 -bool true
defaults write com.apple.NSGlobalDomain NSAutomaticDashSubstitutionEnabled -bool false #Disabling Automatic Dash & Quote Substitution, Spell Correct
defaults write com.apple.NSGlobalDomain NSAutomaticSpellingCorrectionEnabled -bool false
defaults write com.apple.NSGlobalDomain NSAutomaticQuoteSubstitutionEnabled -bool false
defaults write com.apple.NSGlobalDomain NSWindowResizeTime -float 0.001         #Sets Windows Resize Time to the Minimize Possible
defaults write com.apple.NSGlobalDomain com.apple.springing.enabled -bool false #Disabling App Springing Animation
defaults write com.apple.NSGlobalDomain com.apple.springing.delay -float 0

defaults write com.apple.appstore WebKitDeveloperExtras -bool true #Enabling Developer Stuff in App Store
defaults write com.apple.appstore ShowDebugMenu -bool true
defaults write com.apple.SoftwareUpdate AutomaticCheckEnabled -bool true #Fixing Automatic Software Updates
defaults write com.apple.SoftwareUpdate ScheduleFrequency -int 1
defaults write com.apple.SoftwareUpdate AutomaticDownload -int 1
defaults write com.apple.SoftwareUpdate CriticalUpdateInstall -int 1
defaults write com.apple.SoftwareUpdate ConfigDataInstall -int 1
defaults write com.apple.commerce AutoUpdate -bool true
defaults write com.apple.commerce AutoUpdateRestartRequired -bool true
defaults write com.apple.PowerChime ChimeOnAllHardware -bool true
open /System/Library/CoreServices/PowerChime.app                      #Enabling powerchime
defaults write com.apple.Preview NSQuitAlwaysKeepsWindows -bool FALSE #Delete Preview Window History On Close
defaults write com.apple.mail DisableReplyAnimations -bool true       #Disables Mail Reply & Send Animation
defaults write com.apple.mail DisableSendAnimations -bool true
defaults write com.apple.screencapture disable-shadow -bool TRUE             #Disable Screen Capture Shadow
defaults write com.apple.screencapture type JPG                              #Change Screenshot File Format to JPG
defaults write com.apple.print.PrintingPrefs "Quit When Finished" -bool true #Closes Print Dialog Box After Printing is Complete
sudo nvram SystemAudioVolume=" "                                             #Removes Startup Sound
defaults write com.apple.TextEdit RichText -int 0                            #Sets Texedit to Automatically Open in Plain Text
defaults write com.apple.TextEdit PlainTextEncoding -int 4
defaults write com.apple.TextEdit PlainTextEncodingForWrite -int 4
defaults write com.apple.QuickTimePlayerX MGPlayMovieOnOpen -bool true #Automatically Play Movies When Opened in QuickTime

killall dock
killall Finder
killall SystemUIServer
killall Mail
killall TextEdit
killall QuickTimePlayerX
killall Photos

echo 'Installation Complete'
