return {
  -- add catppuccin
  { "ellisonleao/gruvbox.nvim" },
  { "rose-pine/neovim" },
  { "catppuccin/nvim" },
  { "folke/tokyonight.nvim" },
  { "thedenisnikulin/vim-cyberpunk" },

  -- Configure LazyVim to load gruvbox
  {
    "LazyVim/LazyVim",
    opts = {
      colorscheme = "rose-pine-moon",
    },
  },
}
