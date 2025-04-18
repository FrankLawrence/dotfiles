function pwpr
    set -l PASSWORD_FILE "$HOME/.password_practice"

    # Check if argon2 is installed
    if not command -sq argon2
        echo "Argon2 is not installed. Please install it to use this function."
        return 1
    end

    # Ensure the password file exists
    if not test -f $PASSWORD_FILE
        touch $PASSWORD_FILE
        if test $status -ne 0
            echo "Error: Unable to create password file at $PASSWORD_FILE"
            return 1
        end
        chmod 600 $PASSWORD_FILE # Set restrictive permissions
    end

    function add_password
        set -l PASSWORD_FILE "$HOME/.password_practice"
        read -P "Enter a description for the password: " description
        read -s -P "Enter the password: " password
        echo

        # Generate a random salt
        set -l salt (openssl rand -hex 16)

        # Hash the password using Argon2
        set -l hash (echo -n $password | argon2 $salt -id -t 8 -m 19 -p 1 -l 32 -e)

        # Use echo and redirect to append to file
        echo "$description:$salt:$hash" | command tee -a $PASSWORD_FILE >/dev/null

        if test $status -eq 0
            echo "Password added successfully to $PASSWORD_FILE"
        else
            echo "Error: Failed to write to $PASSWORD_FILE"
            echo "Please check file permissions and try again."
        end
    end

    function practice_passwords
        set -l PASSWORD_FILE "$HOME/.password_practice"
        # Color codes
        set -l COLOR_GREEN "\033[0;32m" # Green
        set -l COLOR_RED "\033[0;31m" # Red
        set -l COLOR_RESET "\033[0m" # Reset to default

        if not test -f $PASSWORD_FILE
            echo "No passwords stored yet. File $PASSWORD_FILE does not exist."
            return
        end

        if not test -s $PASSWORD_FILE
            echo "File $PASSWORD_FILE exists but is empty."
            return
        end

        while true
            echo
            echo "Stored password descriptions:"
            set -l descriptions (awk -F: '{print NR ") " $1}' $PASSWORD_FILE)

            if test (count $descriptions) -eq 0
                echo "No passwords found in $PASSWORD_FILE"
                return
            end

            printf "%s\n" $descriptions

            read -P "Enter the number of the password you want to practice (or 'q' to quit): " choice

            if test "$choice" = q
                break
            end

            set -l total_passwords (count $descriptions)

            if not string match -qr '^[0-9]+$' $choice; or test $choice -lt 1; or test $choice -gt $total_passwords
                echo "Invalid choice. Please try again."
                continue
            end

            set -l line (sed -n "$choice"p $PASSWORD_FILE)
            set -l parts (string split : $line)
            set -l description $parts[1]
            set -l salt $parts[2]
            set -l stored_hash $parts[3]

            while true
                read -s -P "Enter the password for: $description " password

                # Hash the entered password using the stored salt
                set -l entered_hash (echo -n $password | argon2 $salt -id -t 8 -m 19 -p 1 -l 32 -e)

                if test "$entered_hash" = "$stored_hash"
                    echo -e "$COLOR_GREEN \nCorrect password!$COLOR_RESET"
                    break
                else
                    echo -e "$COLOR_RED \nIncorrect password.$COLOR_RESET"
                    read -P "Try again? (y/n) " retry
                    if test "$retry" != y
                        break
                    end
                end
            end
        end
    end

    while true
        echo "Password Practice Tool"
        echo "1. Add a new password"
        echo "2. Practice passwords"
        echo "3. Quit"
        read -P "Enter your choice: " choice

        switch $choice
            case 1
                add_password
            case 2
                practice_passwords
            case 3
                return 0
            case '*'
                echo "Invalid choice. Please try again."
        end

        echo
    end
end
