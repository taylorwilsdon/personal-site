import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ChatIcon from "@mui/icons-material/Chat";
import CodeIcon from "@mui/icons-material/Code";
import ConstructionIcon from '@mui/icons-material/Construction';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import HardwareIcon from '@mui/icons-material/Hardware';
import HomeIcon from "@mui/icons-material/Home";
import LayersIcon from '@mui/icons-material/Layers';
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
    desc: "Connect MCP Clients, AI Assistants and more to Google Workspace services through the Model Context Protocol",
    Icon: PolylineIcon,
  },
  {
    name: "reclaimed",
    displayName: "reclaimed",
    owner: "taylorwilsdon",
    desc: "high performance cli disk analysis - find large folders & files ",
    Icon: SaveIcon,
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
    Icon: LayersIcon,
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
