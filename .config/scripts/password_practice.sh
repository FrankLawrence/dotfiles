#!/bin/bash

PASSWORD_FILE="$HOME/.password_practice"

# Check if argon2 is installed
if ! command -v argon2 &>/dev/null; then
  echo "Argon2 is not installed. Please install it to use this script."
  exit 1
fi

# Function to add a new password
add_password() {
  echo "Enter a description for the password:"
  read -r description
  echo "Enter the password:"
  read -rs password
  echo

  # Generate a random salt
  salt=$(openssl rand -hex 16)

  # Hash the password using Argon2
  hash=$(echo -n "$password" | argon2 "$salt" -id -t 2 -m 19 -p 1 -l 32 -e)

  echo "$description:$salt:$hash" >>"$PASSWORD_FILE"
  echo "Password added successfully."
}

# Function to practice passwords
practice_passwords() {
  if [ ! -f "$PASSWORD_FILE" ]; then
    echo "No passwords stored yet."
    return
  fi

  while true; do
    echo "Stored password descriptions:"
    awk -F: '{print NR ") " $1}' "$PASSWORD_FILE"
    echo "Enter the number of the password you want to practice (or 'q' to quit):"
    read -r choice

    if [ "$choice" = "q" ]; then
      break
    fi

    if ! [[ "$choice" =~ ^[0-9]+$ ]] || [ "$choice" -lt 1 ] || [ "$choice" -gt $(wc -l <"$PASSWORD_FILE") ]; then
      echo "Invalid choice. Please try again."
      continue
    fi

    line=$(sed -n "${choice}p" "$PASSWORD_FILE")
    description=$(echo "$line" | cut -d: -f1)
    salt=$(echo "$line" | cut -d: -f2)
    stored_hash=$(echo "$line" | cut -d: -f3)

    while true; do
      echo "Enter the password for: $description"
      read -rs password
      echo

      # Hash the entered password using the stored salt
      entered_hash=$(echo -n "$password" | argon2 "$salt" -id -t 2 -m 19 -p 1 -l 32 -e)

      if [ "$entered_hash" = "$stored_hash" ]; then
        echo "Correct password!"
        break
      else
        echo "Incorrect password. Try again? (y/n)"
        read -r retry
        if [ "$retry" != "y" ]; then
          break
        fi
      fi
    done
  done
}

# Main menu
while true; do
  echo "Password Practice Tool"
  echo "1. Add a new password"
  echo "2. Practice passwords"
  echo "3. Quit"
  read -r choice

  case $choice in
  1) add_password ;;
  2) practice_passwords ;;
  3) exit 0 ;;
  *) echo "Invalid choice. Please try again." ;;
  esac

  echo
done
