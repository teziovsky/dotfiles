local wezterm = require("wezterm")
local act = wezterm.action
local config = wezterm.config_builder()

local G = {
  opacity = 1,
  colorscheme = "tokyonight_moon",
  background = "#06060A",
  padding = {
    bottom = 10,
    top = 10,
    left = 10,
    right = 10,
  },
  OLED = false,
  font = {
    family = "Monaspace Neon",
    weight = 400,
    size = 10.5
  },
}

-- NOTIFICATION WHEN THE CONFIGURATION IS RELOADED
local function toast(window, message)
  window:toast_notification('wezterm', message .. ' - ' .. os.date('%I:%M:%S %p'), nil, 1000)
end

-- FONTS
local font
font = wezterm.font_with_fallback({
  { family = G.font.family, weight = G.font.weight, italic = false },
})

config.font_rules = { { intensity = "Bold", font = font }, { intensity = "Normal", font = font } }
config.font_size = G.font.size

if G.OLED then
  G.background = "#000000"
end

-- THEME
local scheme = wezterm.color.get_builtin_schemes()[G.colorscheme]
scheme.background = G.background or scheme.background

for colorscheme, overrides in pairs({
  ["catppuccin-mocha"] = { background = "#11111b" },
  ["rose-pine"] = { background = "#12101A" },
  ["rose-pine-moon"] = { background = "#12101A" },
  ["tokyonight"] = { background = "#15161F" },
  ["tokyonight_moon"] = { background = "#000000" },
  ["Nightfly (Gogh)"] = { background = "#010F1A" },
}) do
  if G.colorscheme == colorscheme then
    for property, value in pairs(overrides) do
      scheme[property] = value
      scheme.background = G.background or value
    end
  end
end

config.color_scheme = "CustomTheme"
config.color_schemes = { ["CustomTheme"] = scheme }
config.inactive_pane_hsb = { saturation = 1, brightness = 1 }
config.command_palette_bg_color = scheme.background
config.command_palette_fg_color = scheme.foreground

-- WINDOW
config.enable_tab_bar = true
config.hide_tab_bar_if_only_one_tab = true
config.use_fancy_tab_bar = false
config.tab_bar_at_bottom = false
config.window_padding = G.padding
config.window_close_confirmation = "NeverPrompt"
config.macos_window_background_blur = 30
config.window_background_opacity = G.opacity
config.window_decorations = "RESIZE | MACOS_FORCE_DISABLE_SHADOW"
config.adjust_window_size_when_changing_font_size = false
config.initial_cols = 140
config.initial_rows = 40
config.enable_scroll_bar = false
config.command_palette_font_size = 16
config.front_end = "WebGpu"
config.bidi_enabled = true

-- CURSOR
config.cursor_blink_ease_in = "Linear"
config.cursor_blink_ease_out = "Linear"
config.hide_mouse_cursor_when_typing = true
config.animation_fps = 60

-- ENV
config.set_environment_variables = { PATH = "/opt/homebrew/bin:" .. os.getenv("PATH") }

-- KEYBINDINGS
config.keys = {
  {
    key = "w",
    mods = "CMD",
    action = act.CloseCurrentPane({ confirm = true }),
  },
  {
    key = "d",
    mods = "CMD",
    action = act.SplitHorizontal({ domain = "CurrentPaneDomain" }),
  },
  {
    key = "d",
    mods = "CMD|SHIFT",
    action = act.SplitVertical({ domain = "CurrentPaneDomain" }),
  },
  {
    key = "[",
    mods = "CMD",
    action = act.ActivatePaneDirection("Left"),
  },
  {
    key = "]",
    mods = "CMD",
    action = act.ActivatePaneDirection("Right"),
  },
  {
    key = "[",
    mods = "ALT",
    action = act.ActivatePaneDirection("Up"),
  },
  {
    key = "]",
    mods = "ALT",
    action = act.ActivatePaneDirection("Down"),
  },
  -- activate pane selection mode with numeric labels
  {
    key = "9",
    mods = "CTRL",
    action = act.PaneSelect({
      alphabet = "1234567890",
    }),
  },
  -- show the pane selection mode, but have it swap the active and selected panes
  {
    key = "0",
    mods = "CTRL",
    action = act.PaneSelect({
      mode = "SwapWithActive",
    }),
  },
  {
    key = "\r",
    mods = "CTRL",
    action = act.TogglePaneZoomState,
  },
}

-- HYPERLINKS
config.hyperlink_rules = {
  -- Matches: a URL in parens: (URL)
  {
    regex = '\\((\\w+://\\S+)\\)',
    format = '$1',
    highlight = 1,
  },
  -- Matches: a URL in brackets: [URL]
  {
    regex = '\\[(\\w+://\\S+)\\]',
    format = '$1',
    highlight = 1,
  },
  -- Matches: a URL in curly braces: {URL}
  {
    regex = '\\{(\\w+://\\S+)\\}',
    format = '$1',
    highlight = 1,
  },
  -- Matches: a URL in angle brackets: <URL>
  {
    regex = '<(\\w+://\\S+)>',
    format = '$1',
    highlight = 1,
  },
  -- Then handle URLs not wrapped in brackets
  {
    -- Before
    --regex = '\\b\\w+://\\S+[)/a-zA-Z0-9-]+',
    --format = '$0',
    -- After
    regex = '[^(]\\b(\\w+://\\S+[)/a-zA-Z0-9-]+)',
    format = '$1',
    highlight = 1,
  },
  -- implicit mailto link
  {
    regex = '\\b\\w+@[\\w-]+(\\.[\\w-]+)+\\b',
    format = 'mailto:$0',
  },
}
table.insert(config.hyperlink_rules, {
  regex = [[["]?([\w\d]{1}[-\w\d]+)(/){1}([-\w\d\.]+)["]?]],
  format = "https://github.com/$1/$3",
})

-- HYPERLINKS - MAKE IP ADDRESSES WITH PORT CLICKABLE E G 127 0 0 1 5053
table.insert(config.hyperlink_rules, {
  regex = [[\b(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}):(\d+)\b]],
  format = 'http://$1:$2',
})

-- HYPERLINKS - MATCH LOCAL FILE PATHS ENDING IN .html
table.insert(config.hyperlink_rules, {
  regex = [[\b(?:[a-zA-Z0-9_-]+(?:/[a-zA-Z0-9_-]+)*)+\.html\b]],
  format = 'file://$0',
})

wezterm.on('window-config-reloaded', function(window, pane)
  toast(window, 'Configuration reloaded!')
end)

return config
