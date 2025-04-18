function toggle-theme
    if [ "$THEME" = "Rosé Pine" ]
        set -U THEME "Rosé Pine Dawn"
    else
        set -U THEME "Rosé Pine"
    end

    kitty +kitten themes --reload-in=all $THEME

end

# Optionally toggle via keybind

bind \e\[108\;9u toggle-theme # <super+l>
