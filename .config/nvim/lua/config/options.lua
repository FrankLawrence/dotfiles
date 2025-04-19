-- Options are automatically loaded before lazy.nvim startup
-- Default options that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/options.lua
-- Add any additional options here

-- Function to toggle background transparency
local function toggle_transparency()
  if vim.g.transparency_enabled then
    -- Disable transparency
    vim.g.transparency_enabled = false
    -- Restore the original background colors
    vim.cmd("hi Normal guibg=" .. vim.g.original_bg)
    vim.cmd("hi NormalFloat guibg=" .. vim.g.original_float_bg)
    vim.cmd("hi CursorLine guibg=" .. vim.g.original_cursorline_bg)
  else
    -- Enable transparency
    vim.g.transparency_enabled = true
    -- Store the original background colors
    vim.g.original_bg = vim.fn.synIDattr(vim.fn.hlID("Normal"), "bg#")
    vim.g.original_float_bg = vim.fn.synIDattr(vim.fn.hlID("NormalFloat"), "bg#")
    vim.g.original_cursorline_bg = vim.fn.synIDattr(vim.fn.hlID("CursorLine"), "bg#")
    -- Set transparent background
    vim.cmd("hi Normal guibg=NONE")
    vim.cmd("hi NormalFloat guibg=NONE")
    -- Set cursor line to be slightly visible
    vim.cmd("hi CursorLine guibg=#191724")
  end
end

-- Create a Vim command to toggle transparency
vim.api.nvim_create_user_command("ToggleTransparency", toggle_transparency, {})

-- Optional: Map the toggle function to a key combination (e.g., <F7>)
vim.api.nvim_set_keymap("n", "<F7>", ":ToggleTransparency<CR>", { noremap = true, silent = true })
