#ANTIGEN
#source ~/antigen.zsh

# Load the oh-my-zsh's library.
#antigen use oh-my-zsh

# Bundles from the default repo (robbyrussell's oh-my-zsh).
#antigen bundle git
# antigen bundle heroku
#antigen bundle pip
# antigen bundle lein
#antigen bundle command-not-found

# Syntax highlighting bundle.
#antigen bundle zsh-users/zsh-syntax-highlighting

# Load the theme.
#antigen theme robbyrussell

# Tell Antigen that you're done.
#antigen apply
#Aliases

# NAVIGATION
alias ..="cd .."
alias ...="cd ../.."
alias .3="cd ../../.."
alias .4="cd ../../../.."

alias ls="exa -a"
alias la="exa -lah"
alias mv="mv -i"
alias rm="rm -i"

alias gotop="gotop -a -s -c solarized"

# COMMON DIRECTORIES
# alias dl="cd ~/Downloads"
# alias dt="cd ~/Desktop"
# alias dc="cd ~/Documents"
# alias p="cd ~/Documents/projects"
# # GIT
# alias g="git"
# alias gs="git status"
# alias gd="git diff"
# alias gb="git branch"
# alias gm="git checkout master"
# # SHOW/HIDE HIDDEN FILES
# alias showhidden="defaults write com.apple.finder AppleShowAllFiles -bool true && killall Finder
# alias hidehidden="defaults write com.apple.finder AppleShowAllFiles -bool false && killall Finder
# # SHOW/HIDE DESKTOP ICONS
alias hidedesktop="defaults write com.apple.finder CreateDesktop -bool false && killall Finder"
alias showdesktop="defaults write com.apple.finder CreateDesktop -bool true && killall Finder"

#EXPORTS

export TERM="xterm-256color"
export HISTCONTROL=ignoreboth
export PATH=/usr/local/texlive/2021/bin/universal-darwin:$PATH

#Autosuggestion

#antigen bundle zsh-users/zsh-autosuggestions

#PS1

PROMPT='%1~ %F{#cd6f0f}>%f '

### Setting Starship prompt ###

eval "$(starship init zsh)"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

