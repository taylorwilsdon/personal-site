import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ChatIcon from "@mui/icons-material/Chat";
import CodeIcon from "@mui/icons-material/Code";
import ConstructionIcon from '@mui/icons-material/Construction';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import HardwareIcon from '@mui/icons-material/Hardware';
import HomeIcon from "@mui/icons-material/Home";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import PolylineIcon from '@mui/icons-material/Polyline';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SaveIcon from "@mui/icons-material/Save";
import SecurityIcon from "@mui/icons-material/Security";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TerminalIcon from "@mui/icons-material/Terminal";


export const REPOS = [
  {
    name: "reddacted",
    displayName: "reddacted",
    owner: "taylorwilsdon",
    desc: "ai-powered reddit pii detection & sentiment analysis with redaction",
    Icon: SecurityIcon,
  },
      {
    name: "google_workspace_mcp",
    displayName: "Google Workspace MCP Server",
    owner: "taylorwilsdon",
    desc: "Connect MCP Clients, AI Assistants and more to Google Workspace",
    Icon: PolylineIcon,
  },
  {
    name: "reclaimed",
    displayName: "reclaimed",
    owner: "taylorwilsdon",
    desc: "high performance cli disk space analyzer - find large folders & files ",
    Icon: SaveIcon,
  },
    {
    name: "netshow",
    displayName: "netshow",
    owner: "taylorwilsdon",
    desc: "Lightweight, performant interactive network connection monitor app",
    Icon: CodeIcon,
  },
  {
    name: "netbird",
    displayName: "netbird",
    owner: "netbirdio",
    desc: "wireguard overlay networking made easy in fast golang",
    Icon: CodeIcon,
  },
  {
    name: "homebridge",
    displayName: "homebridge",
    owner: "homebridge",
    desc: "HomeKit support for everything you own",
    Icon: HomeIcon,
  },
    {
    name: "quantconnect-mcp",
    displayName: "quantconnect mcp server",
    owner: "taylorwilsdon",
    desc: "Agentic LLM Driven Trading Strategy Design, Research & Implementation",
    Icon: HomeIcon,
  },
  {
    name: "open-webui",
    displayName: "open-webui",
    owner: "open-webui",
    desc: "the gold standard for self hosted llm chat platforms",
    Icon: ChatIcon,
  },
  {
    name: "GAM",
    displayName: "GAM",
    owner: "GAM-team",
    desc: "cli for google workspace superadmins & friends",
    Icon: AdminPanelSettingsIcon,
  },
  {
    name: "aider",
    displayName: "aider",
    owner: "Aider-AI",
    desc: "pragmatic, interactive ai dev tool for us vim types",
    Icon: SmartToyIcon,
  },
  {
    name: "Roo-Code",
    displayName: "Roo",
    owner: "RooVetGit",
    desc: "the single best agentic dev tool on the market today (sorry aider)",
    Icon: DeveloperModeIcon,
  },
  {
    name: "textual",
    displayName: "textual",
    owner: "textualize",
    desc: "unbelievably good interactive python cli applications made easy",
    Icon: TerminalIcon,
  },
  {
    name: "open-webui-postgres-migration",
    displayName: "Open-WebUI SQLite to PostgreSQL Migration Tool",
    owner: "taylorwilsdon",
    desc: "robust, interactive tool for migrating Open WebUI databases from SQLite to PostgreSQL",
    Icon: ConstructionIcon,
    type: "tool"
  },
    {
    name: "open-webui-embeddable-widget",
    displayName: "Open-WebUI Embeddable Chat Widget",
    owner: "taylorwilsdon",
    desc: "Lightweight, simple embeddable widget for Open WebUI allowing you to easily implement AI chat anywhere",
    Icon: ConstructionIcon,
    type: "tool"
  },
    {
    name: "reorganizer",
    displayName: "reorganizer",
    owner: "taylorwilsdon",
    desc: "Performant, local LLM driven cross-platform file reorganization tool",
    Icon: ConstructionIcon,
    type: "tool"
  },
      {
    name: "openapi-servers",
    displayName: "OpenAPI Tool Servers",
    owner: "open-webui",
    desc: "Integrate interactive tool capabilities into your AI workflows",
    Icon: ConstructionIcon,
    type: "tool"
  },
  {
    name: "llm-context-limits",
    displayName: "LLM Max Context, Output Limits & Compatibility",
    owner: "taylorwilsdon",
    desc: "missing context limit & parameter support guide for local and hosted LLMs",
    Icon: PsychologyIcon,
    type: "tool"
  },
  {
    name: "open-webui-tools",
    displayName: "Jira Agent for Open-WebUI",
    owner: "taylorwilsdon",
    desc: "Extend the capabilities of Open-WebUI with direct Jira integration",
    Icon: MoveUpIcon,
    type: "tool"
  },
  {
    name: "ai-chrome-extension",
    displayName: "Chrome Inline AI Extension",
    owner: "taylorwilsdon",
    desc: "simple, lightweight manifest v3 extension - init chat anywhere to open-webui & chatgpt",
    Icon: PsychologyIcon,
    type: "tool"
  },
  {
    name: "homebrew-tap",
    displayName: "taylorwilsdon/homebrew-tap",
    owner: "taylorwilsdon",
    desc: "homebrew repository for mac installation of my oss tools",
    Icon: HardwareIcon,
    type: "tool"
  },
];

export const GITHUB_COLORS = {
  text: {
    primary: "#24292e",
    secondary: "#586069",
  },
  border: "#e1e4e8",
  background: {
    card: "#ffffff",
    chip: "#f6f8fa",
  },
  hover: "#0366d6",
};
