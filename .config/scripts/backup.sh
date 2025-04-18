#!/bin/bash

PHOTOS_DIR=$HOME/Pictures/Photos/
DOCUMENTS_DIR=$HOME/Documents/
NAS_PHOTOS_DIR="franksnas:/volume1/homes/PinkFloyd/Photos/Photo\ Library/"
NAS_DOCUMENTS_DIR="franksnas:/volume1/homes/PinkFloyd/Documents/"
LOCAL_DEST="/Volumes/Crucial SSD/Photos/"

# Function to ask for confirmation
confirm() {
  read -p "$1 (y/n): " choice
  case "$choice" in
  y | Y) return 0 ;;
  *) return 1 ;;
  esac
}

echo "Backing up photos and videos"
# Ask if the user wants to sync to the NAS
# if confirm "Do you want to sync to the NAS?"; then
#   rsync -vzhPr --exclude '.DS_Store' "$PHOTOS_DIR" "$NAS_PHOTOS_DIR"
# else
#   echo "Skipping NAS sync."
# fi
rsync -vzhPr --exclude '.DS_Store' "$PHOTOS_DIR" "$NAS_PHOTOS_DIR"

# Check if the local SSD exists before asking to sync
# if [ -d "$LOCAL_DEST" ]; then
#   if confirm "Crucial SSD found. Do you want to sync to it?"; then
#     rsync -vzhPr --exclude '.DS_Store' "$PHOTOS_DIR" "$LOCAL_DEST"
#   else
#     echo "Skipping local SSD sync."
#   fi
# else
#   echo "Crucial SSD not found. Skipping local sync."
# fi

if [ -d "$LOCAL_DEST" ]; then
  rsync -vzhPr --exclude '.DS_Store' "$PHOTOS_DIR" "$LOCAL_DEST"
fi

echo "Backing up documents"
rsync -vzhPr --exclude '.DS_Store' --exclude 'ISO\ Files/' "$DOCUMENTS_DIR" "$NAS_DOCUMENTS_DIR"
