function largest_files
    du -h -x -s -- * | sort -r -h | head -20
end
