function letters
    cat $argv | awk -vFS='' '{for(i=1;i<=NF;i++){ if($i~/[a-zA-Z]/) { w[tolower($i)]++} } }END{for(i in w) print i,w[i]}' | sort | cut -c 3- | spark | /usr/local/bin/lolcat
    printf '%s\n' abcdefghijklmnopqrstuvwxyz ' ' | /usr/local/bin/lolcat
end
