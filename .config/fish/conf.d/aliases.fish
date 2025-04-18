# spark aliases
alias clear='/usr/bin/clear; echo; echo; seq 1 (tput cols) | sort -R | spark | /usr/local/bin/lolcat; echo; echo'
# alias clear='/usr/bin/clear' 

# root privileges
alias doas="doas --"

# navigation
alias ..='z ..'
alias ...='z ../..'
alias ....='z ../../..'
alias .3='z ../../..'
alias .4='z ../../../..'
alias .5='z ../../../../..'

# Changing "ls" to "exa"
alias ls='eza -al --color=always --group-directories-first' # my preferred listing
alias la='eza -a --color=always --group-directories-first' # all files and dirs
alias ll='eza -l --color=always --group-directories-first' # long format
alias lt='eza -aT --color=always --group-directories-first' # tree listing
alias l.='eza -a | egrep "^\."'

# Colorize grep output (good for log files)
alias grep='grep --color=auto'

# confirm before overwriting something
alias cp="cp -i"
alias mv='mv -i'
alias rm='rm -i'

# adding flags
alias df='df -h' # human-readable sizes
# alias fzf="fzf --preview 'bat --color=always --style=header,grid --line-range :500 {}'"
alias fzf="fzf -m \
  --info=inline \
  --pointer='→' \
  --preview='ls {+}' \
  --preview-window=border-left \
  --margin=5%,2%,7%,2% \
  --layout=reverse \
  --border=rounded \
  --header='CTRL-c or ESC to quit' \
  --height=50% \
  --bind='ctrl-r:reload(fd -td -H)' \
  --bind='ctrl-x:execute(rm -ri {+})' \
  --bind='ctrl-x:+reload(fd -td -H)' \
  --bind='ctrl-v:change-preview(lt {+} --level=2)' \
  --bind='ctrl-s:toggle-preview' \
  --bind='ctrl-f:change-prompt(Files > )' \
  --bind='ctrl-f:+change-preview(bat --color=always --style=header,grid --line-range :500 {+})' \
  --bind='ctrl-f:+reload(fd -tf -H)' \
  --bind='ctrl-d:change-prompt(Dirs > )' \
  --bind='ctrl-d:+change-preview(ls {+})' \
  --bind='ctrl-d:+reload(fd -td -H)' \
  --bind='ctrl-p:change-preview-window(up,50%,border-bottom|right,50%,border-left)' \
"
# --bind='ctrl-h:change-prompt(Hist > )' \
# --bind='ctrl-h:+reload(history)' \
alias bat='bat --theme=base16'

## get top process eating memory
alias psmem='ps aux | sort -nr -k 4'
alias psmem10='ps aux | sort -nr -k 4 | head -10'

## get top process eating cpu ##
alias pscpu='ps aux | sort -nr -k 3'
alias pscpu10='ps aux | sort -nr -k 3 | head -10'

# git
alias addup='git add -u'
alias addall='git add -A'
alias branch='git branch'
alias checkout='git checkout'
alias clone='git clone'
alias commit='git commit -m'
alias fetch='git fetch'
alias pull='git pull origin'
alias push='git push origin'
alias tag='git tag'
alias newtag='git tag -a'

# gpg encryption
# verify signature for isos
alias gpg-check="gpg2 --keyserver-options auto-key-retrieve --verify"
# receive the key of a developer
alias gpg-retrieve="gpg2 --keyserver-options auto-key-retrieve --receive-keys"

# youtube-dl
alias yta-mp3="yt-dlp --extract-audio --audio-format mp3 "
alias ytv-best="yt-dlp -f bestvideo+bestaudio "

# bare git repo alias for dotfiles
alias config="/usr/bin/git --git-dir=$HOME/.config/.git --work-tree=$HOME/.config"

# termbin
alias tb="nc termbin.com 9999"

# Vim Exit
alias :q="exit"

# Vim
alias vim='NVIM_APPNAME="nvim-kickstart" nvim'
